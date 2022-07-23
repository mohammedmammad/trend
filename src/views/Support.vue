<template>
  <div id="support">
    <header>
      <div class="container">
        <div class="w-100 d-flex justify-content-between">
          <div class="input-group filter-box">
            <div class="input-group-prepend">
              <span class="input-group-text custome-action-right">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
            <div class="input-group-append">
              <span class="input-group-text custome-action-left">
                <font-awesome-icon icon="fa-solid fa-filter" />
              </span>
            </div>
          </div>
          <button class="back-btn" @click="$router.go(-1)">
            <font-awesome-icon icon="fa-solid fa-angle-left" />
          </button>
        </div>
      </div>
    </header>
    <div class="custome-nav background-white">
      <div class="container">
        <div class="d-flex justify-content-between">
          <span class="nav-link active d-flex align-items-center">
            <font-awesome-icon icon="fa-solid fa-headset" />
            <span class="d-block mr-2">طلب دعم</span>
          </span>
        </div>
      </div>
    </div>
    <div class="orders">
      <div class="container">
        <div class="order-card shadow mb-3 bg-white rounded">
          <div
            class="
              d-flex
              flex-wrap
              justify-content-between
              align-items-center
              p-2
            "
          >
            <div class="gray-color">
              <span>رقم الطلب</span>
              <span class="mr-2">{{ details.details.id }}</span>
            </div>
            <div class="gray-color">
              <span>{{ details.details.created_at }}</span>
            </div>
            <div class="gray-btn background-white">
              <span>قيد المداولة</span>
            </div>
          </div>
          <div class="d-flex align-items-center mb-2 px-2 pb-2">
            <div class="img-user">
              <img :src="details.details.other_user.image" alt="user" />
            </div>
            <div class="card-data">
              <div>
                <span>العميل :</span>
                <span class="mr-1">{{
                  details.details.other_user.username
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="details-card active shadow mb-3 rounded p-2">
          <div class="msg-attachment">
            <div class="tabs d-flex justify-content-between">
              <div class="new-tab" @click="showpop(true)">
                رسالة خاصة للمنصة
              </div>
              <div class="new-tab active">سجل العمليات</div>
            </div>
            <template v-if="details.history.length > 0">
              <div v-for="record in details.history" :key="record.id">
                <template v-if="record.status">
                  <div class="support-card p-2 mt-3">
                    <div
                      class="
                        d-flex
                        justify-content-between
                        align-items-center
                        mb-2
                      "
                    >
                      <div class="d-flex align-items-center">
                        <div class="img-user">
                          <img :src="record.from_user.image" alt="user" />
                        </div>
                        <h6 class="mb-0 mr-2 main-color">
                          {{ record.from_user.username }}
                        </h6>
                      </div>
                      <div>
                        <small class="gray-color">{{
                          record.created_at
                        }}</small>
                      </div>
                    </div>
                    <p class="gray-color px-3 text-14">
                      {{ record.details }}
                    </p>
                    <div class="d-flex justify-content-end">
                      <span
                        class="main-button main-button-accept"
                        v-if="record.status == 1"
                      >
                        مقبول
                      </span>
                      <span class="main-button main-button-refuse" v-else>
                        مرفوض
                      </span>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <div class="with-accept-refuse">
                    <div class="support-card p-2 mt-3">
                      <div
                        class="
                          d-flex
                          justify-content-between
                          align-items-center
                          mb-2
                        "
                      >
                        <div class="d-flex align-items-center">
                          <div class="img-user">
                            <img :src="record.from_user.image" alt="user" />
                          </div>
                          <h6 class="mb-0 mr-2 main-color">
                            {{ record.from_user.username }}
                          </h6>
                        </div>
                        <div>
                          <small class="gray-color">{{
                            record.created_at
                          }}</small>
                        </div>
                      </div>
                      <p class="gray-color px-3 text-14">
                        {{ record.details }}
                      </p>
                    </div>
                    <div class="col-12 d-flex justify-content-around my-2">
                      <button
                        type="button"
                        class="main-button main-button-green"
                        @click="action(record.id, true)"
                      >
                        قبول
                      </button>
                      <button
                        type="button"
                        class="main-button"
                        @click="action(record.id, false)"
                      >
                        رفض
                      </button>
                    </div>
                  </div>
                </template>
              </div>
              <div class="support-card p-2 mt-3" v-if="loading">
                <div class="loading"></div>
              </div>
            </template>
            <div class="order-card shadow my-3 bg-white rounded w-100" v-else>
              <div
                class="
                  w-100
                  d-flex
                  flex-wrap
                  justify-content-center
                  align-items-center
                  p-2
                  main-color
                "
              >
                لا توجد سجل عمليات ليتم عرضها
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pop-up" v-if="show">
      <div class="mo-pop pt-2">
        <div class="rate-card p-2">
          <ul class="w-100 m-0 p-0">
            <li class="d-flex justify-content-between align-items-center">
              <div class="text d-flex align-items-center">
                مرحبا عزيزى .......... تفضل منصة بى ترند دائما توصل الطرفين بشكل
                ودى الى حلول مرضية للطرفين
              </div>
            </li>
            <li class="d-flex justify-content-between align-items-center">
              <div class="text d-flex align-items-center">
                ارسل الينا ماتود تطلعنا اليه فى سياق هذا التنازع
              </div>
            </li>
          </ul>
          <div class="w-100">
            <textarea
              class="form-control custome-input custome-input-bg-white"
              v-model="form.reason"
              placeholder="يمكنك اضافة تعليق موجه للطرف الاخر"
            ></textarea>
          </div>
          <div class="d-flex justify-content-between my-3">
            <button class="special-btn special-btn-rad" @click="send">
              <font-awesome-icon icon="fa-solid fa-paper-plane" />
              <span class="mr-2">ارسال</span>
            </button>
            <button class="main-button" @click="showpop(false)">رجوع</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from "@/mixins";
export default {
  name: "Support",
  mixins: [mixins],
  components: {},
  data() {
    return {
      details: null,
      show: false,
      loading: false,
      form: {
        reason: null,
      },
    };
  },
  watch: {},
  computed: {},
  methods: {
    showpop(status) {
      this.show = status;
    },
    fethData() {
      this.handleRequest("COMMON", "SUPPORT", this.request_id).then((res) => {
        if ((res.status == 200) & (res.data != null)) {
          this.loading = false;
          this.details = res.data;
        }
      });
    },
    send() {
      let formData = new FormData();
      formData.append("reason", this.form.reason);
      let form = {
        id: this.request_id,
        data: formData,
      };
      this.handleRequest("COMMON", "SEND_SUPPORT", form).then((res) => {
        if (res.status == 200) {
          this.loading = true;
          this.fethData();
          this.show = false;
          this.$store.dispatch("STORE_SAVE_ERRORS", {
            styled: "filled",
            type: "success",
            title: "عملية ناجحة",
            message: res.message,
          });
          setTimeout(() => {
            this.$store.dispatch("STORE_SAVE_ERRORS", null);
          }, 5000);
        }
      });
    },
    action(id, status) {
      let data = {
        req_id: this.request_id,
        id: id,
        accept: status,
      };
      this.handleRequest("COMMON", "ACTION_SUPPORT", data).then((res) => {
        if (res.status == 200) {
          this.loading = true;
          this.fethData();
          this.$store.dispatch("STORE_SAVE_ERRORS", {
            styled: "filled",
            type: "success",
            title: "عملية ناجحة",
            message: res.message,
          });
          setTimeout(() => {
            this.$store.dispatch("STORE_SAVE_ERRORS", null);
          }, 5000);
        }
      });
    },
  },
  mounted() {
    this.request_id = this.$route.params.id;
    this.fethData();
  },
};
</script>
