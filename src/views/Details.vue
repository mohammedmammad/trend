<template>
  <div id="app">
    <Header></Header>
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
    <div class="custome-nav background-white">
      <div class="container">
        <div class="d-flex justify-content-between">
          <router-link
            :to="`/`"
            class="nav-link"
            :class="{
              active: Object.keys(details).length != 0 && details.from_me,
              'font-weight-bold':
                Object.keys(details).length != 0 && !details.from_me,
            }"
          >
            طلبات مقدمة
          </router-link>
          <router-link
            :to="`/recieve`"
            class="nav-link"
            :class="{
              active: Object.keys(details).length != 0 && !details.from_me,
              'font-weight-bold':
                Object.keys(details).length != 0 && details.from_me,
            }"
          >
            طلبات مستقبلة
          </router-link>
        </div>
      </div>
    </div>
    <div class="orders">
      <div class="container">
        <div @click="$router.go(-1)">
          <Card :request="details" :showCard="true"></Card>
        </div>
        <div class="details-card active shadow mb-3 rounded">
          <h6
            class="title text-center text-20 main-color m-0 py-2"
            @click="show('data')"
          >
            البيانات
          </h6>
          <template v-if="showes.data">
            <div class="d-flex flex-wrap p-2 justify-content-between">
              <div>
                <div class="gray-color text-card">مدفوع</div>
                <div class="mt-2 value-card">
                  {{ details.release_details.total }}
                </div>
              </div>
              <div>
                <div class="gray-color text-card">مستلم/افرج</div>
                <div class="mt-2 value-card">
                  {{ details.release_details.released }}
                </div>
              </div>
              <div>
                <div class="gray-color text-card">مستلم/تحويل</div>
                <div class="mt-2 value-card">
                  {{ details.release_details.transfered }}
                </div>
              </div>
              <div>
                <div class="gray-color text-card">معلق</div>
                <div class="mt-2 value-card orange-color">
                  {{ details.release_details.remaining }}
                </div>
              </div>
            </div>
            <div class="row p-2">
              <div class="col-12 mb-2">
                <div class="content-input">
                  <span class="label-require">
                    <img src="../assets/icons/star.svg" alt="*" />
                  </span>
                  <input
                    type="text"
                    readonly
                    class="form-control custome-input gray-border"
                    placeholder="ادخل عنوان الطلب"
                    :value="details.type.name"
                  />
                </div>
              </div>
              <div class="col-4 mb-2">
                <div class="content-input">
                  <span class="label-require">
                    <img src="../assets/icons/star.svg" alt="*" />
                  </span>
                  <input
                    type="text"
                    readonly
                    required
                    class="form-control custome-input gray-border text-center"
                    placeholder="ادخل قيمة الطلب"
                    :value="details.ads_request.id"
                  />
                </div>
              </div>
              <div class="col-8 mb-2">
                <div class="content-input">
                  <span class="label-require">
                    <img src="../assets/icons/star.svg" alt="*" />
                  </span>
                  <input
                    type="text"
                    readonly
                    class="form-control custome-input gray-border"
                    placeholder="ادخل الاسم "
                    :value="details.other_user.username"
                  />
                </div>
              </div>
              <div class="col-12 mb-2">
                <div class="content-input">
                  <span class="label-require">
                    <img src="../assets/icons/star.svg" alt="*" />
                  </span>
                  <textarea
                    class="form-control custome-input gray-border"
                    readonly
                    placeholder="ادخل تفاصيل الطلب"
                    v-model="details.details"
                  ></textarea>
                </div>
              </div>
              <div class="col-12 my-2 main-color" v-if="details.from_me">
                <h6>أدخل مبلغ طلب الاسترداد</h6>
              </div>
              <div class="col-12 my-2 gray-color" v-else>
                <h6>
                  وافق على الطلب أو أدخل قيمة أقل من
                  <span class="text-dark">{{
                    details.release_details.remaining + 1
                  }}</span>
                </h6>
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
                  <span class="value-card">{{
                    details.release_details.remaining
                  }}</span>
                </div>
                <div>
                  <div class="content-input">
                    <span class="label-require">
                      <img src="../assets/icons/star.svg" alt="*" />
                    </span>
                    <input
                      type="text"
                      class="form-control special-input"
                      placeholder="القيمة"
                      :readonly="details.status == 'finished'"
                      v-model="recovery"
                    />
                  </div>
                </div>
              </div>
              <template v-if="details.status != 'finished'">
                <div class="col-12 my-2 orange-color">
                  <h6 v-if="details.from_me">
                    لا يمكنك الزيادة مستقبلا على قيمة طلب الاسترداد هذا
                  </h6>
                  <h6 v-else>
                    لا يمكنك الزيادة مستقبلا على أى قيمة تقبلها الان
                  </h6>
                </div>
                <div
                  class="col-12 d-flex justify-content-around mt-3"
                  v-if="details.from_me"
                >
                  <button type="button" class="cancel-button" @click="resend">
                    ارسال الطلب
                  </button>
                  <button type="button" class="main-button" @click="resetsend">
                    الغاء
                  </button>
                </div>
                <div class="col-12 d-flex justify-content-around mt-3" v-else>
                  <button type="button" class="cancel-button" @click="accept">
                    قبول الطلب
                  </button>
                  <button type="button" class="main-button" @click="resend">
                    ارسال عرض اخر
                  </button>
                </div>
              </template>
            </div>
          </template>
          <CardShape></CardShape>
        </div>
        <div class="details-card active shadow mb-3 rounded">
          <h6
            class="title text-center text-20 main-color m-0 py-2"
            @click="show('msg')"
          >
            الرسائل والمرفقات
          </h6>
          <div class="msg-attachment p-2" v-if="showes.msg">
            <div class="tabs d-flex justify-content-between">
              <div
                class="new-tab"
                :class="{ active: !attach }"
                @click="showMsgOrAttach('msg')"
              >
                الرسائل
              </div>
              <div
                class="new-tab"
                :class="{ active: attach }"
                @click="showMsgOrAttach('attach')"
              >
                المرفقات
              </div>
            </div>
            <div v-if="!attach">
              <div v-if="replies.length > 0" class="mt-3">
                <div class="mb-3" v-for="rep in replies" :key="rep.id">
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
                      <small class="gray-color">{{ rep.created_at }}</small>
                    </div>
                  </div>
                  <p class="main-color px-3 text-14">
                    {{ rep.details }}
                  </p>
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
                  لا توجد رسائل لعرضها
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <button class="special-btn" @click="showreplay = true">
                  <font-awesome-icon icon="fa-solid fa-plus" />
                  <span class="mr-2">أضف رد</span>
                </button>
                <router-link
                  :to="`/history/${this.request_id}`"
                  class="cancel-button blue-color"
                  tag="button"
                >
                  <u>عرض سجل الردود</u>
                </router-link>
              </div>
              <template v-if="showreplay">
                <div class="w-100 my-2">
                  <textarea
                    class="form-control custome-input"
                    placeholder="يمكنك اضافة تعليق موجه للطرف الاخر"
                    v-model="messages.reply"
                    rows="3"
                  ></textarea>
                </div>
                <div class="d-flex justify-content-between">
                  <button class="special-btn" @click="addReply">
                    <img src="../assets/icons/send.svg" alt="Send" />
                    <span class="mr-2">ارسال</span>
                  </button>
                </div>
              </template>
            </div>
            <div class="row mt-3" v-else>
              <template v-if="attachments.length > 0">
                <div class="col-12">
                  <div class="row" v-for="file in attachments" :key="file.id">
                    <div class="col-9 mb-2">
                      <input
                        readonly
                        type="text"
                        class="
                          form-control
                          custome-input custome-input-bg-white
                        "
                        placeholder="أدخل اسم/وصف/رابط ... المرافق"
                        :value="file.file_name"
                      />
                    </div>
                    <div class="col-3 mb-2">
                      <div class="content-upload-image">
                        <img :src="file.path" />
                      </div>
                    </div>
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="col-12">
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
                      لا توجد مرفقات لعرضها
                    </div>
                  </div>
                </div>
              </template>
              <div class="col-9 mb-2">
                <input
                  readonly
                  type="text"
                  class="form-control custome-input"
                  placeholder="اضافة اسم/وصف/رابط ... المرافق"
                />
              </div>
              <div class="col-3 mb-2">
                <label for="attachment" class="d-block">
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
                </label>
                <input
                  @change="uploadFile($event)"
                  multiple
                  ref="file"
                  type="file"
                  id="attachment"
                  name="attachment"
                  class="d-none"
                />
              </div>
              <div class="col-12" v-if="url.length > 0">
                <div class="row" v-for="(file, index) in url" :key="file.index">
                  <div class="col-9 mb-2">
                    <input
                      readonly
                      type="text"
                      class="form-control custome-input custome-input-bg-white"
                      placeholder="أدخل اسم/وصف/رابط ... المرافق"
                      :value="file.name"
                    />
                  </div>
                  <div class="col-3 mb-2">
                    <div class="content-upload-image">
                      <span
                        class="cancel-upload"
                        @click="deleteFile(index, file.index)"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="red"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-x-circle"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="15" y1="9" x2="9" y2="15" />
                          <line x1="9" y1="9" x2="15" y2="15" />
                        </svg>
                      </span>
                      <img :src="file.url" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-12 d-flex justify-content-center my-3"
                v-if="url.length > 0"
              >
                <button type="button" class="main-button" @click="createAttach">
                  اضافة مرفق
                </button>
              </div>
            </div>
          </div>
          <CardShape></CardShape>
        </div>
        <div class="details-card shadow mb-3 rounded active">
          <h6
            class="title text-center text-20 main-color m-0 py-2"
            @click="show('rate')"
          >
            التقييم
          </h6>
          <div class="rate-card p-2" v-if="showes.rate">
            <ul class="w-100 m-0 p-0">
              <li class="d-flex justify-content-between align-items-center">
                <div class="text d-flex align-items-center">تقييمك للمعلن</div>
                <div class="w-50">
                  <rate :length="5" v-model="rate.rate" rtl="true" />
                </div>
              </li>
              <li class="d-flex justify-content-between align-items-center">
                <div class="text d-flex align-items-center">
                  تقييم المعلن لك
                </div>
                <div class="w-50">
                  <rate
                    :length="5"
                    v-model="rateStatus.your_rate"
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
                      value="1"
                      v-model="rate.advise"
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
                      value="0"
                      v-model="rate.advise"
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
                    value="1"
                    v-model="rate.editable"
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
                class="
                  form-control
                  custome-input custome-input-bg-white
                  gray-border
                  solid-border
                "
                placeholder="يمكنك اضافة تعليق موجه للطرف الاخر"
                v-model="rate.comment"
              ></textarea>
            </div>
            <div class="d-flex justify-content-between my-3">
              <button class="special-btn" @click="addRate()">
                <img src="../assets/icons/send.svg" alt="Send" />
                <span class="mr-2">ارسال</span>
              </button>
            </div>
          </div>
          <CardShape></CardShape>
        </div>
        <div class="shadow mb-3 rounded active" v-if="details.from_me">
          <h6
            class="title text-center text-20 text-white m-0 py-2 bg-warning"
            @click="show('cancel')"
          >
            الغاء الطلب
          </h6>
          <div class="rate-card p-2" v-if="showes.cancel">
            <ul class="w-100 m-0 p-0 list-unstyled">
              <li class="d-flex justify-content-between align-items-center">
                <div class="d-flex">
                  مرحباً عزيزي ..... اختيارك الغاء طلب التنازع سيؤدي إلى اقفال
                  طلب التنازع رقم 0000 بشكل نهائي والخاص بطلب الإعلان رقم 000
                  ولا يحق لك فتح طلب تنازع مرة أخرى خاص بطلب الإعلان هذا
                </div>
              </li>
              <li class="custome-radio mt-3">
                <div class="d-flex align-items-center mb-2">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="gridRadios"
                      id="gridRadios1"
                      v-model="check"
                    />
                    <label class="form-check-label" for="gridRadios1">
                      نعم لقد قررت الغاء طلب التنازع هذا برغبه منى
                    </label>
                  </div>
                </div>
                <div
                  v-if="check"
                  class="
                    d-flex
                    flex-wrap
                    align-items-center
                    justify-content-around
                    px-3
                  "
                >
                  <div class="form-check mb-1 w-50">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios2"
                      value="لقد تم الحل وديا"
                      v-model="reason"
                    />
                    <label class="form-check-label" for="gridRadios2">
                      لقد تم الحل وديا
                    </label>
                  </div>
                  <div class="form-check mb-1 w-50">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios3"
                      value="لقد تنازلت عن طلبى"
                      v-model="reason"
                    />
                    <label class="form-check-label" for="gridRadios3">
                      لقد تنازلت عن طلبى
                    </label>
                  </div>
                  <div class="form-check mb-1 w-50">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios4"
                      value="لقد نفذ طلبى"
                      v-model="reason"
                    />
                    <label class="form-check-label" for="gridRadios4">
                      لقد نفذ طلبى
                    </label>
                  </div>
                  <div class="form-check mb-1 w-50">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios5"
                      value="اخرى"
                      v-model="reason"
                    />
                    <label class="form-check-label" for="gridRadios5">
                      اخرى
                    </label>
                  </div>
                </div>
              </li>
            </ul>
            <div class="d-flex justify-content-end my-3">
              <button
                class="cancel-button"
                :disabled="!reason"
                @click="finishRequest(reason)"
              >
                حفظ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from "@/mixins";
import Card from "@/components/Card";
import CardShape from "@/components/Card-Shape";
import Header from "@/layout/Header";
export default {
  name: "Details",
  mixins: [mixins],
  components: { Card, Header, CardShape },
  data() {
    return {
      prvPage: null,
      reason: null,
      url: [],
      deleteFiles: [],
      request_id: null,
      recovery: null,
      details: {},
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
      attachments: [],
      replies: [],
      messages: {
        reply: null,
      },
      showreplay: false,
      rateStatus: {
        your_rate: 0,
        can_rate: false,
      },
      rate: {
        comment: null,
        rate: null,
        advise: 1,
        editable: 0,
      },
    };
  },
  methods: {
    show(section) {
      if (this.showes[section]) {
        this.showes = {
          data: false,
          msg: false,
          rate: false,
          cancel: false,
        };
      } else {
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
        if (section == "msg") {
          if (this.attach) {
            this.showMsgOrAttach("attach");
          } else {
            this.showMsgOrAttach("msg");
          }
        } else if (section == "rate") {
          this.getRate();
        }
      }
    },
    finishRequest(reason) {
      let obj = {
        reason,
        id: this.request_id,
      };
      this.handleRequest("COMMON", "FINISH", obj).then((res) => {
        if (res.status == 200) {
          this.showes = {
            data: false,
            msg: false,
            rate: false,
            cancel: false,
          };
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
    getRate() {
      this.handleRequest("COMMON", "GET_RATE", this.request_id).then((res) => {
        if (res.status == 200) {
          this.rateStatus = res.data;
        }
      });
    },
    addRate() {
      if (this.rateStatus.can_rate) {
        let formData = new FormData();
        formData.append("comment", this.rate.comment);
        formData.append("rate", this.rate.rate);
        formData.append("advise", this.rate.advise);
        formData.append("editable", this.rate.editable);
        let form = {
          id: this.request_id,
          data: formData,
        };
        this.handleRequest("COMMON", "ADD_RATE", form).then((res) => {
          if (res.status == 200) {
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
      } else {
        this.$store.dispatch("STORE_SAVE_ERRORS", {
          styled: "filled",
          type: "error",
          title: "حدث خطأ",
          message: "أنت لا يمكنك اضافة تقييم",
        });
        setTimeout(() => {
          this.$store.dispatch("STORE_SAVE_ERRORS", null);
        }, 5000);
      }
    },
    showMsgOrAttach(section) {
      if (section == "msg") {
        this.attach = false;
        this.handleRequest("COMMON", "GET_MESSAGES", this.request_id).then(
          (res) => {
            if (res.status == 200) {
              this.replies = res.data;
            }
          }
        );
      } else {
        this.attach = true;
        this.handleRequest("COMMON", "GET_ATTACHMENTS", this.request_id).then(
          (res) => {
            if (res.status == 200) {
              this.attachments = res.data.data;
            }
          }
        );
      }
    },
    resend() {
      let formDataResend = new FormData();
      formDataResend.append("recovery", this.recovery);
      let formdata = {
        id: this.request_id,
        data: formDataResend,
      };
      this.handleRequest("COMMON", "RESEND", formdata).then((res) => {
        if (res.status == 200) {
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
    accept() {
      let formdata = {
        id: this.request_id,
      };
      this.handleRequest("COMMON", "ACCEPT", formdata).then((res) => {
        if (res.status == 200) {
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
    resetsend() {
      this.recovery = this.details.recovery;
    },
    getRequest() {
      this.handleRequest("COMMON", "REQUEST_DETAILS", this.request_id).then(
        (res) => {
          if ((res.status == 200) & (res.data != null)) {
            this.details = res.data.details;
            this.recovery = this.details.recovery;
            if (this.prvPage == "Create") {
              this.$store.dispatch("STORE_SAVE_ERRORS", {
                styled: "filled",
                type: "success",
                title: "عملية ناجحة",
                message: "تم انشاء طلب التنازع بنجاح",
              });
              setTimeout(() => {
                this.$store.dispatch("STORE_SAVE_ERRORS", null);
              }, 5000);
            }
          }
        }
      );
    },
    uploadFile(e) {
      for (let i = 0; i < e.target.files.length; i++) {
        let doc = e.target.files[i];
        let obj = {
          index: i,
          url: URL.createObjectURL(doc),
          name: e.target.files[i].name,
        };
        this.url.push(obj);
      }
    },
    deleteFile(index, fileIndex) {
      this.deleteFiles.push(fileIndex);
      this.url.splice(index, 1);
    },
    createAttach() {
      let formData = new FormData();
      for (var i = 0; i < this.$refs.file.files.length; i++) {
        if (!this.deleteFiles.includes(i)) {
          let file = this.$refs.file.files[i];
          formData.append("attachment-" + i, file);
        }
      }
      let form = {
        id: this.request_id,
        data: formData,
      };
      this.handleRequest("COMMON", "CREATE_ATTACH", form).then((res) => {
        if (res.status == 200) {
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
    addReply() {
      let formData = new FormData();
      formData.append("reply", this.messages.reply);
      let form = {
        id: this.request_id,
        data: formData,
      };
      this.handleRequest("COMMON", "ADD_REPLY", form).then((res) => {
        if (res.status == 200) {
          this.replies.unshift(res.data);
          this.messages.reply = "";
          this.showreplay = false;
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
  watch: {},
  computed: {},
  beforeRouteEnter: (to, from, next) => {
    next((vm) => {
      vm.prvPage = from.name;
    });
  },
  mounted() {
    this.request_id = this.$route.params.id;
    this.getRequest();
  },
};
</script>
