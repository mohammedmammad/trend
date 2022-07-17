export default {
  methods: {
    handleRequest(action, service, reqPayload, loading = true) {
      return new Promise((resolve, reject) => {
        if (loading) {
          this.$store.dispatch("LOADING", true);
        }
        this.$store.dispatch("STORE_SAVE_ERRORS", null);
        this.$store
          .dispatch(action, {
            service: service,
            reqPayload: reqPayload,
          })
          .then((res) => {
            if (res.status != 200) {
              this.handleErrors(res);
            }
            resolve(res);
          })
          .catch((error) => {
            this.handleErrors(error.message);
            reject(false);
          })
          .finally(() => {
            this.$store.dispatch("LOADING", false);
          });
      });
    },
    handleErrors(res) {
      this.$store.dispatch("STORE_SAVE_ERRORS", {
        styled: "filled",
        type: "error",
        title: "حدث خطأ",
        message: res.message,
      });
      setTimeout(() => {
        this.$store.dispatch("STORE_SAVE_ERRORS", null);
      }, 5000);
    },
  },
};
