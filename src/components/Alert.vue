<template v-if="open">
  <div
    :class="['alert', classAlerts, 'alert-dismissible', 'fade', 'show']"
    role="alert"
  >
    <div class="alert-wrapper">
      <div class="alert-body">
        <span class="alert-icon">
          <i :class="icons"></i>
          <font-awesome-icon :icon="icons" />
        </span>
        <div class="alert-content">
          <h4>{{ this.titleAlert }}</h4>
          <p>{{ this.messageAlert }}</p>
        </div>
      </div>
      <div class="alert-action">
        <button
          type="button"
          class="close pt-0"
          data-dismiss="alert"
          aria-label="Close"
          @click="close"
        >
          <i class="fa fa-times" aria-hidden="true"></i>
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
      open: true,
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
    icons() {
      if (this.type == "error") {
        return "fa-regular fa-circle-xmark";
      } else if (this.type == "information") {
        return "fa-regular fa-circle-question";
      } else if (this.type == "success") {
        return "fa-regular fa-circle-check";
      } else {
        return "fa-regular fa-circle-question";
      }
    },
  },
  methods: {
    close: function () {
      this.open = false;
    },
  },
};
</script>
<style scoped>
.alert {
  position: relative;
  line-height: 1;
  padding: 0.4rem 0.7rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08);
}

.alert .alert-wrapper {
  display: flex;
  justify-content: space-between;
}

.alert .alert-wrapper .alert-body {
  display: flex;
}

.alert .alert-wrapper .alert-body .alert-icon {
  margin: 1em 1em;
  display: flex;
}

.alert .alert-wrapper .alert-body .alert-icon svg {
  width: 30px;
  height: auto;
}

.alert h4 {
  margin: 0.4em 0 0.3em;
  font-weight: 400;
}

.alert p {
  font-weight: 300;
}

.alert .alert-action {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  align-items: stretch;
}

.alert .alert-action .close {
  box-shadow: 0 0;
  padding-left: 0;
  padding-right: 0;
  width: 35px;
  height: 35px;
  line-height: 0;
  padding: 0;
}

.alert .alert-action .close i {
  font-size: 15px;
}

.alert .alert-action .close:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.alert .alert-action .btn {
  height: 50%;
  margin: 5px 0;
}

.alert .alert-action .btn:hover {
  background: #f9fcfa;
}

.alert .alert-action .btn.btn-accept {
  color: #32ad71;
}

.alert-heading {
  color: inherit;
}

.alert-link {
  font-weight: 600;
}

.alert-dismissible {
  padding-left: 2.9rem;
}

.alert-dismissible .close {
  position: absolute;
  top: 0;
  left: 16px;
  padding: 0.6rem 0.7rem;
  color: inherit;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-top: 10px;
}

.alert-dismissible .close i {
  width: 13px;
  height: 13px;
}
.alert-info {
  color: #495057;
  background: #fff;
  border-right: 5px solid #1070af;
}

.alert-info hr {
  border-top-color: #0e6198;
}

.alert-info i svg {
  fill: #1070af;
}

.alert-info .alert-link {
  color: #0c5280;
}

.alert-info h4 {
  color: #1070af;
}

.alert-info .alert-body .alert-icon svg {
  color: #117abe !important;
}

.alert-info.alert-filled {
  background: #117abe;
  border-radius: 0;
  border: 0;
}

.alert-info.alert-filled p {
  margin: 0;
  color: #fff;
  line-height: 2.6;
  font-weight: 400;
}

.alert-info.alert-filled .close i {
  color: #fff;
}

.alert-info.alert-filled .alert-body .alert-icon {
  margin: 10px;
}

.alert-info.alert-filled .alert-body .alert-icon svg {
  font-size: 17px;
  color: #fff !important;
  line-height: 17px;
  vertical-align: middle;
}

.alert-info.alert-outline {
  border: 1px solid #117abe;
}

.alert-info.alert-outline p {
  margin: 0;
  color: #117abe;
  line-height: 2.6;
  font-weight: 400;
}

.alert-info.alert-outline .close i {
  color: #117abe;
}

.alert-info.alert-outline .alert-body .alert-icon {
  margin: 10px;
}

.alert-info.alert-outline .alert-body .alert-icon svg {
  color: #117abe !important;
  font-size: 17px;
  line-height: 17px;
  vertical-align: middle;
}

.alert-warning {
  color: #495057;
  background: #fff;
  border-right: 5px solid #ebb206;
}

.alert-warning hr {
  border-top-color: #d29f05;
}

.alert-warning i svg {
  fill: #ebb206;
}

.alert-warning .alert-link {
  color: #b98c05;
}

.alert-warning h4 {
  color: #ebb206;
}

.alert-warning .alert-body .alert-icon svg {
  color: #ffc107 !important;
}

.alert-warning.alert-filled {
  background: #ffc107;
  border-radius: 0;
  border: 0;
}

.alert-warning.alert-filled p {
  margin: 0;
  color: #fff;
  line-height: 2.6;
  font-weight: 400;
}

.alert-warning.alert-filled .close i {
  color: #fff;
}

.alert-warning.alert-filled .alert-body .alert-icon {
  margin: 10px;
}

.alert-warning.alert-filled .alert-body .alert-icon svg {
  font-size: 17px;
  color: #fff !important;
  line-height: 17px;
  vertical-align: middle;
}

.alert-warning.alert-outline {
  border: 1px solid #ffc107;
}

.alert-warning.alert-outline p {
  margin: 0;
  color: #ffc107;
  line-height: 2.6;
  font-weight: 400;
}

.alert-warning.alert-outline .close i {
  color: #ffc107;
}

.alert-warning.alert-outline .alert-body .alert-icon {
  margin: 10px;
}

.alert-warning.alert-outline .alert-body .alert-icon svg {
  color: #ffc107 !important;
  font-size: 17px;
  line-height: 17px;
  vertical-align: middle;
}

.alert-danger {
  color: #495057;
  background: #fff;
  border-right: 5px solid #e26654;
}

.alert-danger hr {
  border-top-color: #de523e;
}

.alert-danger i svg {
  fill: #e26654;
}

.alert-danger .alert-link {
  color: #db3f28;
}

.alert-danger h4 {
  color: #e26654;
}

.alert-danger .alert-body .alert-icon svg {
  color: #f66f5b !important;
}

.alert-danger.alert-filled {
  background: #f66f5b;
  border-radius: 0;
  border: 0;
}

.alert-danger.alert-filled p {
  margin: 0;
  color: #fff;
  line-height: 2.6;
  font-weight: 400;
}

.alert-danger.alert-filled .close i {
  color: #fff;
}

.alert-danger.alert-filled .alert-body .alert-icon {
  margin: 10px;
}

.alert-danger.alert-filled .alert-body .alert-icon svg {
  font-size: 17px;
  color: #fff !important;
  line-height: 17px;
  vertical-align: middle;
}

.alert-danger.alert-outline {
  border: 1px solid #f66f5b;
}

.alert-danger.alert-outline p {
  margin: 0;
  color: #f66f5b;
  line-height: 2.6;
  font-weight: 400;
}

.alert-danger.alert-outline .close i {
  color: #f66f5b;
}

.alert-danger.alert-outline .alert-body .alert-icon {
  margin: 10px;
}

.alert-danger.alert-outline .alert-body .alert-icon svg {
  color: #f66f5b !important;
  font-size: 17px;
  line-height: 17px;
  vertical-align: middle;
}

.alert-danger.alert-outline {
  background: #fef0ee;
}

.alert-info.alert-outline {
  background: #e6f1f9;
}

.alert-success.alert-outline {
  background: #eaf7f0;
}

.alert-warning.alert-outline {
  background: #fff7e8;
}

.alert-warning.alert-outline p {
  color: #f9b122;
}

.alert-question .alert-body {
  width: calc(100% - 120px);
}

.alert-question .alert-action {
  position: absolute;
  top: 0;
  left: 0;
  width: 114px;
  height: 100%;
}

.alert-question .alert-action .alert-content {
  padding-bottom: 5px;
}

.alert-question .alert-action .btn {
  margin: 0;
  border-radius: 0;
}

.alert-success {
  color: #495057;
  background: #fff;
  border-right: 5px solid #259a3f;
}

.alert-success hr {
  border-top-color: #208537;
}

.alert-success i svg {
  fill: #259a3f;
}

.alert-success .alert-link {
  color: #1b712e;
}

.alert-success h4 {
  color: #259a3f;
}

.alert-success .alert-body .alert-icon svg {
  color: #28a745 !important;
}

.alert-success.alert-filled {
  background: #28a745;
  border-radius: 0;
  border: 0;
}

.alert-success.alert-filled p {
  margin: 0;
  color: #fff;
  line-height: 2.6;
  font-weight: 400;
}

.alert-success.alert-filled .close i {
  color: #fff;
}

.alert-success.alert-filled .alert-body .alert-icon {
  margin: 10px;
}

.alert-success.alert-filled .alert-body .alert-icon svg {
  font-size: 17px;
  color: #fff !important;
  line-height: 17px;
  vertical-align: middle;
}

.alert-success.alert-outline {
  border: 1px solid #28a745;
}

.alert-success.alert-outline p {
  margin: 0;
  color: #28a745;
  line-height: 2.6;
  font-weight: 400;
}

.alert-success.alert-outline .close i {
  color: #28a745;
}

.alert-success.alert-outline .alert-body .alert-icon {
  margin: 10px;
}

.alert-success.alert-outline .alert-body .alert-icon svg {
  color: #28a745 !important;
  font-size: 17px;
  line-height: 17px;
  vertical-align: middle;
}
.alert-dismissable .close,
.alert-dismissible .close {
  position: absolute;
  top: -5px;
  right: 89%;
}
</style>