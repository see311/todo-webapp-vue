var user = {
    state: {
        token: ""
    },
    mutations: {
        login(state, payload) {
            state.token = payload.token;
        }
    }
};
export default user;
