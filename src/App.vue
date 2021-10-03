<template>
    <div id="app">
        <div class="ovelaybody"></div>
        <!-- Start Loading-Page -->
        <div class="loader"  v-if="loading">
            <div class="loading"></div>
        </div>
        <!-- End Loading-Page -->
        <Header />
        <main>
            <transition name="fade">
                <router-view :key="$route.path"/>
            </transition>

            <div class="floating-alert" v-if="errors.length > 0">
                <div v-for="(error, idx) in errors" :key="idx">
                    <Alert
                        :styled="error.filled"
                        :type="error.type"
                        :title="error.title"
                        :message="error.message"
                    />
                </div>
            </div>
        </main>

        <Footer />
    </div>
</template>

<script>
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import Alert from '@/components/general/Alert';
export default {
    name: 'App',
    components: {
        Header,
        Footer,
        Alert
    },
    data() {
        return {};
    },
    computed: {
        errors: function () {
            return this.$store.getters.errors;
        },
        loading: function () {
            return this.$store.getters.loading;
        }
    },
};
</script>


<style>
.fade-enter-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>