<template>
  <div id="Home">
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
          <router-link :to="`/`" class="nav-link active">
            طلبات مقدمة
          </router-link>
          <router-link :to="`/recieve`" class="nav-link">
            طلبات مستقبلة
          </router-link>
        </div>
      </div>
    </div>
    <div class="orders">
      <div class="container">
        <template v-if="requestes.length > 0">
          <div
            class="order-card shadow mb-3 bg-white rounded"
            v-for="request in requestes"
            :key="request.id"
          >
            <router-link :to="`/details/${request.id}`" tag="div">
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
                  <span class="mr-2">{{ request.id }}</span>
                </div>
                <div class="gray-color">
                  <span>{{ request.created_at }}</span>
                </div>
                <div class="gray-btn background-white">
                  <span>{{ request.status_txt }}</span>
                </div>
              </div>
              <div class="d-flex align-items-center mb-2 px-2">
                <div class="img-user">
                  <img :src="request.other_user.image" alt="user" />
                </div>
                <div class="card-data">
                  <div class="mb-2">
                    <span>اسم المعلن :</span>
                    <span class="mr-1">{{ request.other_user.username }}</span>
                  </div>
                  <div class="main-color">
                    <span>نوع التنازع</span>
                    <span class="mr-1">/</span>
                    <span class="mr-1">{{ request.type.name }}</span>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-around px-2">
                <div>
                  <span class="gray-color">قيمة الطلب :</span>
                  <span class="sub-main-color mr-1">{{
                    request.release_details.total
                  }}</span>
                </div>
                <div>
                  <span class="gray-color">قيمة طلب الاسترداد :</span>
                  <span class="orange-color mr-1">{{
                    request.release_details.released
                  }}</span>
                </div>
              </div>
              <div
                class="d-flex justify-content-between background-white mt-2 p-2"
              >
                <div class="orange-color px-2">
                  <span>{{ request.ads_request.status_txt }}</span>
                </div>
                <div class="main-color border-right-action px-2">
                  <span class="ml-2"><u>تفاصيل طلب الاعلان</u></span>
                  <font-awesome-icon icon="fa-solid fa-share-from-square" />
                </div>
              </div>
            </router-link>
          </div>
        </template>
        <div class="order-card shadow mb-3 bg-white rounded" v-else>
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
            لا توجد طلبات لعرضها
          </div>
        </div>

        <!-- <div class="order-card shadow mb-3 bg-white rounded">
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
              <span class="mr-2">345654</span>
            </div>
            <div class="gray-color">
              <span>12/02/2022</span>
            </div>
            <div class="gray-btn background-white">
              <span>قيد المداولة</span>
            </div>
          </div>
          <div class="d-flex align-items-center mb-2 px-2">
            <div class="img-user">
              <img
                src="https://vid.alarabiya.net/images/2016/05/11/e49eb47a-620e-4537-8d8a-5617fb37edc4/e49eb47a-620e-4537-8d8a-5617fb37edc4_16x9_1200x676.jpg?width=1138"
                alt="user"
              />
            </div>
            <div class="card-data">
              <div class="mb-2">
                <span>اسم المعلن :</span>
                <span class="mr-1">محمد حماد سند حماد</span>
              </div>
              <div class="main-color">
                <span>نوع التنازع</span>
                <span class="mr-1">/</span>
                <span class="mr-1">عدم تنفيذ الاعلان بالوقت المحدد</span>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-around px-2">
            <div>
              <span class="gray-color">قيمة الطلب :</span>
              <span class="sub-main-color mr-1">1500</span>
            </div>
            <div>
              <span class="gray-color">قيمة طلب الاسترداد :</span>
              <span class="orange-color mr-1">1000</span>
            </div>
          </div>
          <div class="d-flex justify-content-between background-white mt-2 p-2">
            <div class="orange-color px-2">
              <span>طلبات الاعلان قيد التنفيذ</span>
            </div>
            <router-link
              :to="`/details`"
              class="main-color border-right-action px-2"
            >
              <span class="ml-2"><u>تفاصيل طلب الاعلان</u></span>
              <font-awesome-icon icon="fa-solid fa-share-from-square" />
            </router-link>
          </div>
        </div>
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
              <span class="mr-2">345654</span>
            </div>
            <div class="gray-color">
              <span>12/02/2022</span>
            </div>
            <div class="gray-btn background-white">
              <span>قيد المداولة</span>
            </div>
          </div>
          <div class="d-flex align-items-center mb-2 px-2">
            <div class="img-user">
              <img
                src="https://vid.alarabiya.net/images/2016/05/11/e49eb47a-620e-4537-8d8a-5617fb37edc4/e49eb47a-620e-4537-8d8a-5617fb37edc4_16x9_1200x676.jpg?width=1138"
                alt="user"
              />
            </div>
            <div class="card-data">
              <div class="mb-2">
                <span>اسم المعلن :</span>
                <span class="mr-1">محمد حماد سند حماد</span>
              </div>
              <div class="main-color">
                <span>نوع التنازع</span>
                <span class="mr-1">/</span>
                <span class="mr-1">عدم تنفيذ الاعلان بالوقت المحدد</span>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-around px-2">
            <div>
              <span class="gray-color">قيمة الطلب :</span>
              <span class="sub-main-color mr-1">1500</span>
            </div>
            <div>
              <span class="gray-color">قيمة طلب الاسترداد :</span>
              <span class="orange-color mr-1">1000</span>
            </div>
          </div>
          <div class="d-flex justify-content-between background-white mt-2 p-2">
            <div class="orange-color px-2">
              <span>طلبات الاعلان قيد التنفيذ</span>
            </div>
            <router-link
              :to="`/details`"
              class="main-color border-right-action px-2"
            >
              <span class="ml-2"><u>تفاصيل طلب الاعلان</u></span>
              <font-awesome-icon icon="fa-solid fa-share-from-square" />
            </router-link>
          </div>
        </div>
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
              <span class="mr-2">345654</span>
            </div>
            <div class="gray-color">
              <span>12/02/2022</span>
            </div>
            <div class="gray-btn background-white">
              <span>قيد المداولة</span>
            </div>
          </div>
          <div class="d-flex align-items-center mb-2 px-2">
            <div class="img-user">
              <img
                src="https://vid.alarabiya.net/images/2016/05/11/e49eb47a-620e-4537-8d8a-5617fb37edc4/e49eb47a-620e-4537-8d8a-5617fb37edc4_16x9_1200x676.jpg?width=1138"
                alt="user"
              />
            </div>
            <div class="card-data">
              <div class="mb-2">
                <span>اسم المعلن :</span>
                <span class="mr-1">محمد حماد سند حماد</span>
              </div>
              <div class="main-color">
                <span>نوع التنازع</span>
                <span class="mr-1">/</span>
                <span class="mr-1">عدم تنفيذ الاعلان بالوقت المحدد</span>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-around px-2">
            <div>
              <span class="gray-color">قيمة الطلب :</span>
              <span class="sub-main-color mr-1">1500</span>
            </div>
            <div>
              <span class="gray-color">قيمة طلب الاسترداد :</span>
              <span class="orange-color mr-1">1000</span>
            </div>
          </div>
          <div class="d-flex justify-content-between background-white mt-2 p-2">
            <div class="orange-color px-2">
              <span>طلبات الاعلان قيد التنفيذ</span>
            </div>
            <router-link
              :to="`/details`"
              class="main-color border-right-action px-2"
            >
              <span class="ml-2"><u>تفاصيل طلب الاعلان</u></span>
              <font-awesome-icon icon="fa-solid fa-share-from-square" />
            </router-link>
          </div>
        </div>
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
              <span class="mr-2">345654</span>
            </div>
            <div class="gray-color">
              <span>12/02/2022</span>
            </div>
            <div class="gray-btn background-white">
              <span>قيد المداولة</span>
            </div>
          </div>
          <div class="d-flex align-items-center mb-2 px-2">
            <div class="img-user">
              <img
                src="https://vid.alarabiya.net/images/2016/05/11/e49eb47a-620e-4537-8d8a-5617fb37edc4/e49eb47a-620e-4537-8d8a-5617fb37edc4_16x9_1200x676.jpg?width=1138"
                alt="user"
              />
            </div>
            <div class="card-data">
              <div class="mb-2">
                <span>اسم المعلن :</span>
                <span class="mr-1">محمد حماد سند حماد</span>
              </div>
              <div class="main-color">
                <span>نوع التنازع</span>
                <span class="mr-1">/</span>
                <span class="mr-1">عدم تنفيذ الاعلان بالوقت المحدد</span>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-around px-2">
            <div>
              <span class="gray-color">قيمة الطلب :</span>
              <span class="sub-main-color mr-1">1500</span>
            </div>
            <div>
              <span class="gray-color">قيمة طلب الاسترداد :</span>
              <span class="orange-color mr-1">1000</span>
            </div>
          </div>
          <div class="d-flex justify-content-between background-white mt-2 p-2">
            <div class="orange-color px-2">
              <span>طلبات الاعلان قيد التنفيذ</span>
            </div>
            <router-link
              :to="`/details`"
              class="main-color border-right-action px-2"
            >
              <span class="ml-2"><u>تفاصيل طلب الاعلان</u></span>
              <font-awesome-icon icon="fa-solid fa-share-from-square" />
            </router-link>
          </div>
        </div>
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
              <span class="mr-2">345654</span>
            </div>
            <div class="gray-color">
              <span>12/02/2022</span>
            </div>
            <div class="gray-btn background-white">
              <span>قيد المداولة</span>
            </div>
          </div>
          <div class="d-flex align-items-center mb-2 px-2">
            <div class="img-user">
              <img
                src="https://vid.alarabiya.net/images/2016/05/11/e49eb47a-620e-4537-8d8a-5617fb37edc4/e49eb47a-620e-4537-8d8a-5617fb37edc4_16x9_1200x676.jpg?width=1138"
                alt="user"
              />
            </div>
            <div class="card-data">
              <div class="mb-2">
                <span>اسم المعلن :</span>
                <span class="mr-1">محمد حماد سند حماد</span>
              </div>
              <div class="main-color">
                <span>نوع التنازع</span>
                <span class="mr-1">/</span>
                <span class="mr-1">عدم تنفيذ الاعلان بالوقت المحدد</span>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-around px-2">
            <div>
              <span class="gray-color">قيمة الطلب :</span>
              <span class="sub-main-color mr-1">1500</span>
            </div>
            <div>
              <span class="gray-color">قيمة طلب الاسترداد :</span>
              <span class="orange-color mr-1">1000</span>
            </div>
          </div>
          <div class="d-flex justify-content-between background-white mt-2 p-2">
            <div class="orange-color px-2">
              <span>طلبات الاعلان قيد التنفيذ</span>
            </div>
            <router-link
              :to="`/details`"
              class="main-color border-right-action px-2"
            >
              <span class="ml-2"><u>تفاصيل طلب الاعلان</u></span>
              <font-awesome-icon icon="fa-solid fa-share-from-square" />
            </router-link>
          </div>
        </div>
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
              <span class="mr-2">345654</span>
            </div>
            <div class="gray-color">
              <span>12/02/2022</span>
            </div>
            <div class="gray-btn background-white">
              <span>قيد المداولة</span>
            </div>
          </div>
          <div class="d-flex align-items-center mb-2 px-2">
            <div class="img-user">
              <img
                src="https://vid.alarabiya.net/images/2016/05/11/e49eb47a-620e-4537-8d8a-5617fb37edc4/e49eb47a-620e-4537-8d8a-5617fb37edc4_16x9_1200x676.jpg?width=1138"
                alt="user"
              />
            </div>
            <div class="card-data">
              <div class="mb-2">
                <span>اسم المعلن :</span>
                <span class="mr-1">محمد حماد سند حماد</span>
              </div>
              <div class="main-color">
                <span>نوع التنازع</span>
                <span class="mr-1">/</span>
                <span class="mr-1">عدم تنفيذ الاعلان بالوقت المحدد</span>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-around px-2">
            <div>
              <span class="gray-color">قيمة الطلب :</span>
              <span class="sub-main-color mr-1">1500</span>
            </div>
            <div>
              <span class="gray-color">قيمة طلب الاسترداد :</span>
              <span class="orange-color mr-1">1000</span>
            </div>
          </div>
          <div class="d-flex justify-content-between background-white mt-2 p-2">
            <div class="orange-color px-2">
              <span>طلبات الاعلان قيد التنفيذ</span>
            </div>
            <router-link
              :to="`/details`"
              class="main-color border-right-action px-2"
            >
              <span class="ml-2"><u>تفاصيل طلب الاعلان</u></span>
              <font-awesome-icon icon="fa-solid fa-share-from-square" />
            </router-link>
          </div>
        </div> -->
      </div>
    </div>
    <div class="add-button">
      <router-link :to="`/create`" tag="span">
        <font-awesome-icon icon="fa-solid fa-plus" />
      </router-link>
    </div>
  </div>
</template>

<script>
import mixins from "@/mixins";
export default {
  name: "Home",
  mixins: [mixins],
  components: {},
  data() {
    return {
      requestes: [],
    };
  },
  watch: {},
  computed: {},
  methods: {
    getRequestes() {
      this.handleRequest("COMMON", "GET_REQUESTES").then((res) => {
        if ((res.status == 200) & (res.data != null)) {
          this.requestes = res.data;
        }
      });
    },
  },
  mounted() {
    this.getRequestes();
  },
};
</script>
