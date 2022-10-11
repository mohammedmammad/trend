import Api from "./api";

export default {
  GET_REQUESTES(keyword) {
    if (keyword) {
      return Api().get(`dispute_requests?keyword=${keyword}`);
    } else {
      return Api().get("dispute_requests");
    }
  },
  GET_RECIEVED_REQUESTES(keyword) {
    if (keyword) {
      return Api().get(`received_dispute_requests?keyword=${keyword}`);
    } else {
      return Api().get("received_dispute_requests");
    }
  },
  GET_FORMS() {
    return Api().get("dispute_requests_form");
  },
  GET_USERS(id) {
    return Api().get(`dispute_requests_form?ads_request_id=${id}`);
  },
  GET_ORDERS(id) {
    return Api().get(`dispute_requests_form?to_user_id=${id}`);
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
  ACCEPT(formData) {
    return Api().get(`dispute_requests/${formData.id}/accept`);
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
  FINISH(formData) {
    return Api().get(
      `dispute_requests/${formData.id}/finish?reason=${formData.reason}`
    );
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
