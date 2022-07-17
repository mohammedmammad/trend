import commonServices from "../../services/common";

const ticket = {
  state: {
    // token: localStorage.getItem("access_token") || null,
    token:
      localStorage.getItem("access_token") ||
      "3772|4gHp5iEbUTYl1me4ABkb28m22izSNlvis9P0rKSA",
  },
  getters: {
    loggedIn: (state) => state.token !== null,
  },
  mutations: {},
  actions: {
    COMMON({ rootState }, payload) {
      return new Promise((resolve, reject) => {
        commonServices[payload.service](payload.reqPayload)
          .then((res) => {
            switch (payload.service) {
              case "GET_REQUESTES":
              case "GET_RECIEVED_REQUESTES":
              case "GET_FORMS":
              case "CREATE":
                resolve(res.data);
                break;
            }
            resolve("success");
          })
          .catch((error) => {
            reject(error.data.error);
          })
          .finally(() => {
            rootState.loading = false;
            rootState.processing = false;
          });
      });
    },
  },
};
export default ticket;
