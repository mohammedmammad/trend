export default {
    methods: {
        handleRequest(action, service, reqPayload, loading = true) {
            return new Promise((resolve, reject) => {
                if (loading) {
                    this.$store.dispatch('LOADING', true);
                }
                this.$store.dispatch('STORE_SAVE_ERRORS', null);
                this.$store
                    .dispatch(action, {
                        service: service,
                        reqPayload: reqPayload
                    })
                    .then(res => {
                        if (res.status != 200) {
                            this.handleErrors(res.data.errors[Object.keys(res.data.errors)[0]])
                        }
                        resolve(res);
                    })
                    .catch(error => {
                        this.handleErrors(error.message);
                        reject(false);
                    })
                    .finally(() => {
                        this.$store.dispatch('LOADING', false);
                    });
            });
        },
        handleErrors(messages) {
            this.$store.dispatch('STORE_SAVE_ERRORS', {
                styled: 'filled',
                type: 'error',
                title: 'حدث خطأ',
                message: messages
            });
            setTimeout(() => {
                this.$store.dispatch('STORE_SAVE_ERRORS', null);
            }, 5000);
        },
    }
};
