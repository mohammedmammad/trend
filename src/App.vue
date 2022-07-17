<template>
  <div id="app">
    <div class="loader" v-if="loading">
      <div class="loading"></div>
    </div>
    <main :key="$route.path">
      <transition name="fade">
        <router-view></router-view>
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
  </div>
</template>

<script>
import Alert from "@/components/Alert";
export default {
  name: "App",
  components: {
    Alert,
  },
  data() {
    return {};
  },
  watch: {},
  computed: {
    errors: function () {
      return this.$store.getters.errors;
    },
    loading: function () {
      return this.$store.getters.loading;
    },
  },
  mounted() {},
};
</script>
<style>
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.floating-alert {
  width: 300px;
  position: fixed;
  right: 1em;
  bottom: 2em;
  z-index: 99999;
}
</style>