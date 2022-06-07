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
          <a class="nav-link active d-flex align-items-center" href="#">
            <font-awesome-icon icon="fa-solid fa-headset" />
            <span class="d-block mr-2">طلب دعم</span>
          </a>
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
              <span class="mr-2">345654</span>
            </div>
            <div class="gray-color">
              <span>12/02/2022</span>
            </div>
            <div class="gray-btn background-white">
              <span>قيد المداولة</span>
            </div>
          </div>
          <div class="d-flex align-items-center mb-2 px-2 pb-2">
            <div class="img-user">
              <img
                src="https://vid.alarabiya.net/images/2016/05/11/e49eb47a-620e-4537-8d8a-5617fb37edc4/e49eb47a-620e-4537-8d8a-5617fb37edc4_16x9_1200x676.jpg?width=1138"
                alt="user"
              />
            </div>
            <div class="card-data">
              <div>
                <span>العميل :</span>
                <span class="mr-1">محمد حماد سند حماد</span>
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
            <div class="support-card p-2 mt-3">
              <div
                class="d-flex justify-content-between align-items-center mb-2"
              >
                <div class="d-flex align-items-center">
                  <div class="img-user">
                    <img
                      src="https://vid.alarabiya.net/images/2016/05/11/e49eb47a-620e-4537-8d8a-5617fb37edc4/e49eb47a-620e-4537-8d8a-5617fb37edc4_16x9_1200x676.jpg?width=1138"
                      alt="user"
                    />
                  </div>
                  <h6 class="mb-0 mr-2 main-color">محمد حماد سند حماد</h6>
                </div>
                <div>
                  <small class="gray-color">اخر تعليق منذ 29 ساعة</small>
                </div>
              </div>
              <p class="gray-color px-3 text-14">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
              </p>
            </div>
            <div class="col-12 d-flex justify-content-around my-2">
              <button type="button" class="main-button main-button-green">
                قبول
              </button>
              <button type="button" class="main-button">رفض</button>
            </div>
            <div class="support-card p-2 mt-3">
              <div
                class="d-flex justify-content-between align-items-center mb-2"
              >
                <div class="d-flex align-items-center">
                  <div class="img-user">
                    <img
                      src="https://vid.alarabiya.net/images/2016/05/11/e49eb47a-620e-4537-8d8a-5617fb37edc4/e49eb47a-620e-4537-8d8a-5617fb37edc4_16x9_1200x676.jpg?width=1138"
                      alt="user"
                    />
                  </div>
                  <h6 class="mb-0 mr-2 main-color">محمد حماد سند حماد</h6>
                </div>
                <div>
                  <small class="gray-color">اخر تعليق منذ 29 ساعة</small>
                </div>
              </div>
              <p class="gray-color px-3 text-14">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
              </p>
              <div class="d-flex justify-content-end">
                <button type="button" class="main-button main-button-accept">
                  مقبول
                </button>
              </div>
            </div>
            <div class="support-card p-2 mt-3">
              <div
                class="d-flex justify-content-between align-items-center mb-2"
              >
                <div class="d-flex align-items-center">
                  <div class="img-user">
                    <img
                      src="https://vid.alarabiya.net/images/2016/05/11/e49eb47a-620e-4537-8d8a-5617fb37edc4/e49eb47a-620e-4537-8d8a-5617fb37edc4_16x9_1200x676.jpg?width=1138"
                      alt="user"
                    />
                  </div>
                  <h6 class="mb-0 mr-2 main-color">محمد حماد سند حماد</h6>
                </div>
                <div>
                  <small class="gray-color">اخر تعليق منذ 29 ساعة</small>
                </div>
              </div>
              <p class="gray-color px-3 text-14">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
              </p>
              <div class="d-flex justify-content-end">
                <button type="button" class="main-button main-button-refuse">
                  مرفوض
                </button>
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
              placeholder="يمكنك اضافة تعليق موجه للطرف الاخر"
            ></textarea>
          </div>
          <div class="d-flex justify-content-between my-3">
            <button class="special-btn special-btn-rad" @click="showpop(false)">
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
export default {
  name: "Support",
  components: {},
  data() {
    return {
      show: false,
      myRate: 0,
      myRate1: 4,
    };
  },
  methods: {
    showpop(status) {
      this.show = status;
    },
  },
  watch: {},
  computed: {},
  mounted() {},
};
</script>
