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
  CREATE(formData) {
    return Api().post("dispute_requests", formData);
  },
  REQUEST_DETAILS(id) {
    return Api().get(`dispute_requests/${id}`);
  },
  RESEND(formData) {
    return Api().post(`dispute_requests/${formData.id}/resend`, formData.data);
  },
  GET_ATTACHMENTS(id) {
    return Api().get(`dispute_requests/${id}/attachments`);
  },
  GET_MESSAGES(id) {
    return Api().get(`dispute_requests/${id}/replies`);
  },
  GET_RATE(id) {
    return Api().get(`dispute_requests/${id}/rate`);
  },
  FINISH(id) {
    return Api().get(`dispute_requests/${id}/finish`);
  },
  CREATE_ATTACH(form) {
    return Api().post(`dispute_requests/${form.id}/attachments`, form.data);
  },
  ADD_REPLY(form) {
    return Api().post(`dispute_requests/${form.id}/reply`, form.data);
  },
  ADD_RATE(form) {
    return Api().post(`dispute_requests/${form.id}/rate`, form.data);
  },
  SUPPORT(id) {
    return Api().get(`dispute_requests/${id}/support`);
  },
  ACTION_SUPPORT(data) {
    if (data.accept) {
      return Api().get(
        `dispute_requests/${data.req_id}/support_accept/${data.id}`
      );
    } else {
      return Api().get(
        `dispute_requests/${data.req_id}/support_reject/${data.id}`
      );
    }
  },
  SEND_SUPPORT(form) {
    return Api().post(`dispute_requests/${form.id}/support`, form.data);
  },
};
