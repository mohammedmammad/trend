import { required } from "vuelidate/lib/validators";
const createValidation = {
  form: {
    type_id: {
      required,
    },
    ads_request_id: {
      required,
    },
    to_user_id: {
      required,
    },
    recovery: {
      required,
    },
    details: {
      required,
    },
  },
};
export { createValidation };
