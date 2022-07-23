<template>
  <div id="history">
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
          <a class="nav-link active">طلبات التنازع</a>
        </div>
      </div>
    </div>
    <div class="custome-nav background-white">
      <div class="container">
        <div class="d-flex justify-content-between">
          <a class="nav-link active">طلبات التنازع</a>
          <router-link
            :to="`/support/${this.request_id}`"
            class="nav-link nav-link-with-border d-flex align-items-center"
          >
            <font-awesome-icon icon="fa-solid fa-headset" />
            <span class="d-block mr-2">اطلب دعم</span>
          </router-link>
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
              <span class="mr-2">{{ details.id }}</span>
            </div>
            <div class="gray-color">
              <span>{{ details.created_at }}</span>
            </div>
            <div class="gray-btn background-white">
              <span>{{ details.status_txt }}</span>
            </div>
          </div>
          <div class="d-flex align-items-center mb-2 px-2">
            <div class="img-user">
              <img :src="details.other_user.image" alt="user" />
            </div>
            <div class="card-data">
              <div class="mb-2">
                <span>اسم المعلن :</span>
                <span class="mr-1">{{ details.other_user.username }}</span>
              </div>
              <div class="main-color">
                <span>نوع التنازع</span>
                <span class="mr-1">/</span>
                <span class="mr-1">{{ details.type.name }}</span>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-around px-2">
            <div>
              <span class="gray-color">قيمة الطلب :</span>
              <span class="sub-main-color mr-1">{{
                details.release_details.total
              }}</span>
            </div>
            <div>
              <span class="gray-color">قيمة طلب الاسترداد :</span>
              <span class="orange-color mr-1">{{
                details.release_details.released
              }}</span>
            </div>
          </div>
          <div class="d-flex justify-content-between background-white mt-2 p-2">
            <div class="orange-color px-2">
              <span>{{ details.ads_request.status_txt }}</span>
            </div>
            <div class="main-color border-right-action px-2">
              <span class="ml-2"><u>تفاصيل طلب الاعلان</u></span>
              <font-awesome-icon icon="fa-solid fa-share-from-square" />
            </div>
          </div>
        </div>
        <div class="history">
          <div class="gray-btn background-white"><u>سجل الردود</u></div>
          <div class="details-card" v-if="loading">
            <div class="msg-attachment p-2">
              <div class="loading"></div>
            </div>
          </div>
          <template v-else>
            <div v-if="replies.length > 0">
              <div
                class="details-card border-bottom"
                v-for="rep in replies"
                :key="rep.id"
              >
                <div class="msg-attachment p-2">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center my-3">
                      <div class="img-user">
                        <img :src="rep.from_user.image" alt="user" />
                      </div>
                      <h6 class="mb-0 mr-2">{{ rep.from_user.username }}</h6>
                    </div>
                    <div>
                      <small class="gray-color">اخر تعليق منذ 29 ساعة</small>
                    </div>
                  </div>
                  <p class="main-color px-3 text-14">
                    {{ rep.details }}
                  </p>
                </div>
              </div>
            </div>
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
                لا توجد ردود لعرضها
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from "@/mixins";
export default {
  name: "history",
  mixins: [mixins],
  components: {},
  data() {
    return {
      loading: false,
      details: null,
      replies: null,
      request_id: null,
    };
  },
  watch: {},
  computed: {},
  methods: {
    fethData() {
      this.handleRequest("COMMON", "REQUEST_DETAILS", this.request_id).then(
        (res) => {
          if ((res.status == 200) & (res.data != null)) {
            this.details = res.data.details;
            this.loading = true;
            this.handleRequest("COMMON", "GET_MESSAGES", this.request_id).then(
              (res) => {
                if (res.status == 200) {
                  this.loading = false;
                  this.replies = res.data;
                }
              }
            );
          }
        }
      );
    },
  },
  mounted() {
    this.request_id = this.$route.params.id;
    this.fethData();
  },
};
</script>
