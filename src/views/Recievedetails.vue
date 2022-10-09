<template>
  <div id="app">
    <div class="custome-nav background-white">
      <div class="container">
        <div class="d-flex justify-content-between">
          <a class="nav-link active">طلبات التنازع</a>
          <router-link
            :to="`/support`"
            class="nav-link nav-link-with-border d-flex align-items-center"
          >
            <font-awesome-icon icon="fa-solid fa-headset" />
            <span class="d-block mr-2">اطلب دعم</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="custome-nav background-white">
      <div class="container">
        <div class="d-flex justify-content-between">
          <router-link :to="`/`" class="nav-link"> طلبات مقدمة </router-link>
          <router-link :to="`/recieve`" class="nav-link active">
            طلبات مستقبلة
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
              :to="`/details`"
              class="main-color border-right-action px-2"
            >
              <span class="ml-2"><u>تفاصيل طلب الاعلان</u></span>
              <font-awesome-icon icon="fa-solid fa-share-from-square" />
            </router-link>
          </div>
        </div>
        <div class="details-card active shadow mb-3 rounded">
          <h6
            class="title text-center main-color m-0 py-2"
            @click="show('data')"
          >
            البيانات
          </h6>
          <template v-if="showes.data">
            <div class="d-flex flex-wrap p-2 justify-content-between">
              <div>
                <div class="gray-color text-card">مدفوع</div>
                <div class="mt-2 value-card">1500</div>
              </div>
              <div>
                <div class="gray-color text-card">مستلم/افرج</div>
                <div class="mt-2 value-card">1500</div>
              </div>
              <div>
                <div class="gray-color text-card">مستلم/تحويل</div>
                <div class="mt-2 value-card">1500</div>
              </div>
              <div>
                <div class="gray-color text-card">معلق</div>
                <div class="mt-2 value-card orange-color">1500</div>
              </div>
            </div>
            <div class="row p-2">
              <div class="col-12 mb-2">
                <input
                  type="text"
                  readonly
                  class="form-control custome-input"
                  placeholder="ادخل عنوان الطلب"
                  value="تنفيذ الاعلان فى وقت غير متفق عليه"
                />
              </div>
              <div class="col-4 mb-2">
                <input
                  type="text"
                  readonly
                  class="form-control custome-input"
                  placeholder="ادخل قيمة الطلب"
                  value="456543"
                />
              </div>
              <div class="col-8 mb-2">
                <input
                  type="text"
                  readonly
                  class="form-control custome-input"
                  placeholder="ادخل الاسم "
                  value="محمد حماد"
                />
              </div>
              <div class="col-12 mb-2">
                <textarea
                  class="form-control custome-input"
                  readonly
                  placeholder="ادخل تفاصيل الطلب"
                >
                  لقد اتفقت مع المعلن على تنفيذ الاعلان فى وقت محدد  
                  لقد اتفقت مع المعلن على تنفيذ الاعلان فى وقت محدد 
                </textarea>
              </div>
              <div class="col-12 my-2 main-color">
                <h6>أدخل مبلغ طلب الاسترداد</h6>
              </div>
              <div
                class="
                  col-12
                  d-flex
                  flex-wrap
                  justify-content-between
                  align-items-center
                  mb-2
                "
              >
                <div>
                  <span class="gray-color text-card pr-0 pl-1">من</span>
                  <span class="value-card">0000</span>
                </div>
                <div>
                  <span class="gray-color text-card pr-0 pl-1">الى</span>
                  <span class="value-card">15000</span>
                </div>
                <div>
                  <input
                    type="text"
                    class="form-control special-input"
                    placeholder="القيمة"
                    value="456543"
                  />
                </div>
              </div>
              <div class="col-12 my-2 orange-color">
                <h6>لا يمكنك الزيادة مستقبلا على قيمة الطلب</h6>
              </div>
              <div class="col-12 d-flex justify-content-around mt-3">
                <button type="button" class="main-button">ارسال الطلب</button>
                <button type="button" class="cancel-button">الغاء</button>
              </div>
            </div>
          </template>
          <div class="card-shape">
            <div class="border-top"></div>
            <div class="border-bottom"></div>
          </div>
        </div>
        <div class="details-card active shadow mb-3 rounded">
          <h6
            class="title text-center main-color m-0 py-2"
            @click="show('msg')"
          >
            الرسائل والمرفقات
          </h6>
          <div class="msg-attachment p-2" v-if="showes.msg">
            <div class="tabs d-flex justify-content-between">
              <div
                class="new-tab"
                :class="{ active: !attach }"
                @click="attach = false"
              >
                الرسائل
              </div>
              <div
                class="new-tab"
                :class="{ active: attach }"
                @click="attach = true"
              >
                المرفقات
              </div>
            </div>
            <div v-if="!attach">
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
              <div class="d-flex justify-content-between">
                <button class="special-btn">
                  <font-awesome-icon icon="fa-solid fa-plus" />
                  <span class="mr-2">أضف رد</span>
                </button>
                <router-link
                  :to="`/history`"
                  class="cancel-button"
                  tag="button"
                >
                  <u>عرض سجل الردود</u>
                </router-link>
              </div>
              <div class="w-100 my-2">
                <textarea
                  class="form-control custome-input"
                  placeholder="يمكنك اضافة تعليق موجه للطرف الاخر"
                  rows="3"
                ></textarea>
              </div>
              <div class="d-flex justify-content-between">
                <button class="special-btn">
                  <font-awesome-icon icon="fa-solid fa-paper-plane" />
                  <span class="mr-2">ارسال</span>
                </button>
              </div>
            </div>
            <div class="row mt-3" v-else>
              <div class="col-12">
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
              </div>
              <div class="col-9 mb-2">
                <input
                  type="text"
                  class="form-control custome-input"
                  placeholder="اضافة اسم/وصف/رابط ... المرافق"
                />
              </div>
              <div class="col-3 mb-2">
                <div
                  class="
                    form-control
                    custome-input
                    d-flex
                    justify-content-around
                    align-items-center
                    px-1
                  "
                >
                  <font-awesome-icon icon="fa-solid fa-link" />
                  <font-awesome-icon icon="fa-solid fa-circle-plus" />
                </div>
              </div>
            </div>
          </div>
          <div class="card-shape">
            <div class="border-top"></div>
            <div class="border-bottom"></div>
          </div>
        </div>
        <div class="details-card shadow mb-3 rounded active">
          <h6
            class="title text-center main-color m-0 py-2"
            @click="show('rate')"
          >
            التقييم
          </h6>
          <div class="rate-card p-2" v-if="showes.rate">
            <ul class="w-100 m-0 p-0">
              <li class="d-flex justify-content-between align-items-center">
                <div class="text d-flex align-items-center">تقييمك للمعلن</div>
                <div class="w-50">
                  <rate :length="5" v-model="myRate" rtl="true" />
                </div>
              </li>
              <li class="d-flex justify-content-between align-items-center">
                <div class="text d-flex align-items-center">
                  تقييمك المعلن لك
                </div>
                <div class="w-50">
                  <rate
                    :length="5"
                    v-model="myRate1"
                    :readonly="true"
                    rtl="true"
                  />
                </div>
              </li>
              <li class="custome-radio">
                <div class="text d-flex align-items-center">
                  هل تنصح الاخرين بالتعامل مع هذا المعلن
                </div>
                <div class="d-flex align-items-center justify-content-around">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios1"
                      value="option1"
                      checked
                    />
                    <label class="form-check-label" for="gridRadios1">
                      نعم انصح الاخرين
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios2"
                      value="option2"
                    />
                    <label class="form-check-label" for="gridRadios2">
                      لا انصح احد
                    </label>
                  </div>
                </div>
              </li>
              <li class="custome-radio mt-2">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck1"
                  />
                  <label class="form-check-label" for="gridCheck1">
                    <u>تمكين المعلن من تغيير تقيمه لك</u>
                  </label>
                </div>
              </li>
              <li class="d-flex justify-content-between align-items-center">
                <div class="text d-flex align-items-center">
                  اضافة تعليق يخص الطرف الاخر (خاص بالمنصة)
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
              <button class="special-btn">
                <font-awesome-icon icon="fa-solid fa-paper-plane" />
                <span class="mr-2">ارسال</span>
              </button>
            </div>
          </div>
          <div class="card-shape">
            <div class="border-top"></div>
            <div class="border-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      showes: {
        data: false,
        msg: false,
        rate: false,
        cancel: false,
      },
      myRate: 0,
      myRate1: 4,
      check: false,
      attach: false,
    };
  },
  methods: {
    show(section) {
      let initActives = {
        data: false,
        msg: false,
        rate: false,
        cancel: false,
      };
      this.showes = {
        ...initActives,
        [section]: true,
      };
    },
  },
  watch: {},
  computed: {},
  mounted() {},
};
</script>
