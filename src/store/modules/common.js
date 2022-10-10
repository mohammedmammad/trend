import commonServices from "../../services/common";

const ticket = {
  state: {
    // token: localStorage.getItem("access_token") || null,
    token:
      localStorage.getItem("access_token") ||
      "12485|R3mT0AWgJBpmyF7ADU351fJIhuRTEair1e3pDpT3",
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
              case "GET_USERS":
              case "GET_ORDERS":
              case "CREATE":
              case "REQUEST_DETAILS":
              case "RESEND":
              case "ACCEPT":
              case "CREATE_ATTACH":
              case "GET_MESSAGES":
              case "ADD_REPLY":
              case "GET_RATE":
              case "ADD_RATE":
              case "FINISH":
              case "SUPPORT":
              case "SEND_SUPPORT":
              case "ACTION_SUPPORT":
                resolve(res.data);
                break;
              case "GET_ATTACHMENTS":
                resolve(res);
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
