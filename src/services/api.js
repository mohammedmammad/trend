import axios from "axios";
import store from "../store";
import i18n from "../i18n";
export default () => {
  const token =
    localStorage.getItem("access_token") ||
    "3772|4gHp5iEbUTYl1me4ABkb28m22izSNlvis9P0rKSA";
  let Api = axios.create({
    baseURL: "https://advertiser.cefour.com/api/v1/",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      "Accept-Language": `${i18n.locale}`,
    },
  });

  Api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        store
          .dispatch("REGISTRATION", {
            service: "LOGOUT",
            payload: null,
          })
          .then(() => {
            location.reload(true);
          });
      } else if (error.response.status === 403) {
        //router.push({ name: 'defaulterror', params: { errorCode: error.response.status } })
      }
      return Promise.reject(error.response);
    }
  );

  return Api;
};
