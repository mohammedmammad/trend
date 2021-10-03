<template>
  <div class="home container">
    <h1 class="text-center">{{ $t('home') }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    // this.$store.dispatch('COMMON', { service: 'GET_USER_DETAILS' });
  },
  computed:{
    // getUserDetails(){
    //   return this.$store.getters.getUserDetails
    // }
  },
  methods:{
  },
}
</script>

