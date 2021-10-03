import commonServices from '../../services/common';

const transposition = {
    state: {
        UserDetails: {},
    },
    getters: {
        getUserDetails: state => state.UserDetails,
    },
    mutations: {
        getUserDetails(state, payload) {
            state.UserDetails = payload;
        }
    },
    actions: {
        COMMON({ rootState, commit }, payload) {
            return new Promise((resolve, reject) => {
                commonServices[payload.service](payload.reqPayload)
                    .then(res => {
                        switch (payload.service) {
                            case 'GET_USER_DETAILS':
                                commit('getUserDetails', res.data);
                                break;
                            case 'GET_POST':
                                resolve(res.data);
                                break;
                        }
                        resolve('success');
                    })
                    .catch(error => {
                        reject(error.data.error);
                    })
                    .finally(() => {
                        rootState.loading = false;
                        rootState.processing = false;
                    });
            });
        }
    }
};
export default transposition;
