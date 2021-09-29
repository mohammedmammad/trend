<template>
    <div id="app">
        <Header />
        <main>
            <transition name="fade">
                <router-view :key="$route.path"/>
            </transition>
        </main>

        <Footer />
    </div>
</template>

<script>
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';

export default {
    name: 'App',
    components: {
        Header,
        Footer,
    },
    data() {
        return {};
    }
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