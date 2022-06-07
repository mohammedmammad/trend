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
            :to="`/${$i18n.locale}/support`"
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
              <div>
                <span>العميل :</span>
                <span class="mr-1">محمد حماد سند حماد</span>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-between background-white mt-2 p-2">
            <div class="orange-color px-2">
              <span>طلبات الاعلان قيد التنفيذ</span>
            </div>
            <router-link
              :to="`/${$i18n.locale}/details`"
              class="main-color border-right-action px-2"
            >
              <span class="ml-2"><u>تفاصيل طلب الاعلان</u></span>
              <font-awesome-icon icon="fa-solid fa-share-from-square" />
            </router-link>
          </div>
        </div>
        <div class="history">
          <div class="gray-btn background-white"><u>سجل الردود</u></div>
          <div class="details-card border-bottom">
            <div class="msg-attachment p-2">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center my-3">
                  <div class="img-user">
                    <img
                      src="https://vid.alarabiya.net/images/2016/05/11/e49eb47a-620e-4537-8d8a-5617fb37edc4/e49eb47a-620e-4537-8d8a-5617fb37edc4_16x9_1200x676.jpg?width=1138"
                      alt="user"
                    />
                  </div>
                  <h6 class="mb-0 mr-2">محمد حماد سند حماد</h6>
                </div>
                <div>
                  <small class="gray-color">اخر تعليق منذ 29 ساعة</small>
                </div>
              </div>
              <p class="main-color px-3 text-14">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
              </p>
            </div>
          </div>
          <div class="details-card border-bottom">
            <div class="msg-attachment p-2">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center my-3">
                  <div class="img-user">
                    <img
                      src="https://vid.alarabiya.net/images/2016/05/11/e49eb47a-620e-4537-8d8a-5617fb37edc4/e49eb47a-620e-4537-8d8a-5617fb37edc4_16x9_1200x676.jpg?width=1138"
                      alt="user"
                    />
                  </div>
                  <h6 class="mb-0 mr-2 gray-color">محمد حماد سند حماد</h6>
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
          </div>
          <div class="details-card border-bottom">
            <div class="msg-attachment p-2">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center my-3">
                  <div class="img-user">
                    <img
                      src="https://vid.alarabiya.net/images/2016/05/11/e49eb47a-620e-4537-8d8a-5617fb37edc4/e49eb47a-620e-4537-8d8a-5617fb37edc4_16x9_1200x676.jpg?width=1138"
                      alt="user"
                    />
                  </div>
                  <h6 class="mb-0 mr-2 gray-color">محمد حماد سند حماد</h6>
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
          </div>
          <div class="details-card border-bottom">
            <div class="msg-attachment p-2">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center my-3">
                  <div class="img-user">
                    <img
                      src="https://vid.alarabiya.net/images/2016/05/11/e49eb47a-620e-4537-8d8a-5617fb37edc4/e49eb47a-620e-4537-8d8a-5617fb37edc4_16x9_1200x676.jpg?width=1138"
                      alt="user"
                    />
                  </div>
                  <h6 class="mb-0 mr-2 gray-color">محمد حماد سند حماد</h6>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "history",
  components: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  mounted() {},
};
</script>
