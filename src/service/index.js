import Comeover from "./comeover";
import Np from "../lib/myprogress";
// import store from "../store/index";

const baseUrl = process.env.NODE_ENV === "development" ? "" : /* 上线地址 */ "";

const requestAuth = new Comeover({ baseUrl });
const requestUnauth = new Comeover({ baseUrl });

requestUnauth.interceptors.request.use(
    config => {
        Np.start();
        return config;
    },
    error => {
        Np.done();
        return Promise.reject(error);
    }
);
requestUnauth.interceptors.response.use(
    response => {
        Np.done();
        return response;
    },
    error => {
        Np.done();
        return Promise.reject(error);
    }
);

export { requestAuth, requestUnauth };
