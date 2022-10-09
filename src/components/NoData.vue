<template>
  <div class="order-card shadow mb-3 bg-white rounded">
    <div
      class="
        d-flex
        flex-wrap
        justify-content-center
        align-items-center
        p-2
        main-color
      "
    >
      {{ message }}
    </div>
  </div>
</template>
    <script>
export default {
  name: "Header",
  mounted() {},
  props: {
    message: {
      required: true,
      type: String,
    },
  },
  computed: {},
  methods: {},
};
</script>
    
    