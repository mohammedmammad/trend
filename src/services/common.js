import Api from "./api";

export default {
  GET_REQUESTES() {
    return Api().get("dispute_requests");
  },
  GET_RECIEVED_REQUESTES() {
    return Api().get("received_dispute_requests");
  },
  GET_FORMS() {
    return Api().get("dispute_requests_form");
  },
};
