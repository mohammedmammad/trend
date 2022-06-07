<template>
  <div id="app">
    <main :key="$route.path">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  watch: {},
  computed: {},
  mounted() {},
};
</script>