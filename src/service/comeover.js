import { Request as F7Request } from "framework7";

function dispatchRequest(config) {
    return adapter(config).then(
        function onAdapterResolution(response) {
            return response;
        },
        function onAdapterRejection(reason) {
            return Promise.reject(reason);
        }
    );
}

function adapter(config) {
    return new Promise(function(resolve, reject) {
        F7Request({
            url: `${config.baseUrl}${config.url}`,
            method: config.method,
            headers: config.headers,
            data: config.data,
            success(data, status, xhr) {
                resolve({
                    data: JSON.parse(data),
                    status: status,
                    config: config,
                    xhr: xhr
                });
            },
            error(xhr, status) {
                let error = new Error(
                    `Request failed with status code ${status}`
                );
                error.xhr = xhr;
                reject(error);
            }
        });
    });
}

export default class Comeover {
    interceptors = {};
    requestHandlers = [];
    responseHandlers = [];
    config = {};
    constructor(config = ({ baseUrl = "" } = {})) {
        const self = this;

        this.config = { ...config };

        this.interceptors = {
            request: {
                use(fulfilled, rejected) {
                    self.requestHandlers.push({
                        fulfilled,
                        rejected
                    });
                }
            },
            response: {
                use(fulfilled, rejected) {
                    self.responseHandlers.push({
                        fulfilled,
                        rejected
                    });
                }
            }
        };
        this.request = this.request.bind(this);
    }
    request(config) {
        let inconfig = { ...this.config, ...config };
        let chain = [dispatchRequest, undefined];
        let promise = Promise.resolve(inconfig);

        this.requestHandlers.forEach(interceptor => {
            chain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        this.responseHandlers.forEach(interceptor => {
            chain.push(interceptor.fulfilled, interceptor.rejected);
        });
        while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
        }
        return promise;
    }
}
