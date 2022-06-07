import { required } from "vuelidate/lib/validators";

const registerValidation = {
  form: {
    phone: {
      required,
    },
    password: {
      required,
    },
  },
};
export { registerValidation };
