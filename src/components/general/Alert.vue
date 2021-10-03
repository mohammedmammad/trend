<template v-if="open">
  <div :class="['alert' , classAlerts , 'alert-dismissible' , 'fade' , 'show']" role="alert">
    <div class="alert-wrapper">
      <div class="alert-body">
        <i class="alert-icon">
          <span :class="icons"></span>
        </i>
        <div class="alert-content">
          <h4>{{this.titleAlert}}</h4>
          <p>{{this.messageAlert}}</p>
        </div>
      </div>
      <div class="alert-action">
        <button type="button" class="close pt-0" data-dismiss="alert" aria-label="Close" @click="close">
          <span class="icon-close"></span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Alert",
  components: {},
  props: {
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
        open:true ,
      titleAlert: this.title,
      messageAlert: this.message,
      classAlerts: {
        "alert-info": this.type == "information",
        "alert-success": this.type == "success",
        "alert-danger": this.type == "error",
        "alert-warning": this.type == "warning",
      },
    };
  },
  mounted() {},
  computed: {
      icons(){
          return `icon-alert-${this.type}`
      }
  },
  methods: {
    close: function() {
      this.open = false;
    }
  },
};
</script>