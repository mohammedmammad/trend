<template>
  <div id="create">
    <Header></Header>
    <div class="orders p-0">
      <div
        class="details-card active shadow mb-3 rounded h-100"
        style="min-height: calc(100vh - 80px)"
      >
        <div class="min-title w-100">انشاء طلب تنازع جديد</div>
        <div class="container">
          <h6 class="title main-color m-0 p-2">بيانات الطلب</h6>
          <div class="d-flex flex-wrap py-2 justify-content-between">
            <div>
              <div class="gray-color text-card">مدفوع</div>
              <div class="mt-2 value-card">
                {{
                  release_details.total != null
                    ? release_details.total
                    : "-----"
                }}
              </div>
            </div>
            <div>
              <div class="gray-color text-card">مستلم/افرج</div>
              <div class="mt-2 value-card">
                {{
                  release_details.released != null
                    ? release_details.released
                    : "-----"
                }}
              </div>
            </div>
            <div>
              <div class="gray-color text-card">مستلم/تحويل</div>
              <div class="mt-2 value-card">
                {{
                  release_details.transfered != null
                    ? release_details.transfered
                    : "-----"
                }}
              </div>
            </div>
            <div>
              <div class="gray-color text-card">معلق</div>
              <div class="mt-2 value-card orange-color">
                {{
                  release_details.remaining != null
                    ? release_details.remaining
                    : "-----"
                }}
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-12 mb-2">
              <div
                class="form-group mb-1"
                :class="{ 'is-invalid': $v.form.type_id.$error }"
              >
                <div class="content-input">
                  <span class="label-require dropdown">
                    <img src="../assets/icons/star.svg" alt="*" />
                  </span>
                  <select
                    class="form-control custome-form-control gray-border"
                    v-model.trim="$v.form.type_id.$model"
                  >
                    <option value="" select>نوع التنازع</option>
                    <option
                      v-for="typ in forms.types"
                      :key="typ.id"
                      :value="typ.id"
                    >
                      {{ typ.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div
                class="invalid-feedback"
                v-if="!$v.form.type_id.required & $v.form.type_id.$error"
              >
                هذا الحقل مطلوب
              </div>
            </div>
            <div class="col-4 mb-2">
              <div
                class="form-group mb-1"
                :class="{ 'is-invalid': $v.form.ads_request_id.$error }"
              >
                <div class="content-input">
                  <span class="label-require dropdown">
                    <img src="../assets/icons/star.svg" alt="*" />
                  </span>
                  <select
                    class="form-control custome-form-control gray-border"
                    @change="getData(form.ads_request_id)"
                    v-model.trim="$v.form.ads_request_id.$model"
                  >
                    <option value="" select>رقم الطلب</option>
                    <option
                      v-for="typ in forms.ads_requests"
                      :key="typ.id"
                      :value="typ.id"
                    >
                      {{ typ.id }}
                    </option>
                  </select>
                </div>
              </div>
              <div
                class="invalid-feedback"
                v-if="
                  !$v.form.ads_request_id.required &
                  $v.form.ads_request_id.$error
                "
              >
                هذا الحقل مطلوب
              </div>
            </div>
            <div class="col-8 mb-2">
              <div
                class="form-group mb-1"
                :class="{ 'is-invalid': $v.form.to_user_id.$error }"
              >
                <div class="content-input">
                  <span class="label-require dropdown">
                    <img src="../assets/icons/star.svg" alt="*" />
                  </span>
                  <select
                    class="form-control custome-form-control gray-border"
                    v-model.trim="$v.form.to_user_id.$model"
                    :disabled="disableName"
                    @change="getOrders(form.to_user_id)"
                  >
                    <option value="" select>اسم طرف التنازع</option>
                    <option
                      v-for="typ in forms.to_users"
                      :key="typ.id"
                      :value="typ.id"
                    >
                      {{ typ.username }}
                    </option>
                  </select>
                </div>
              </div>
              <div
                class="invalid-feedback"
                v-if="!$v.form.to_user_id.required & $v.form.to_user_id.$error"
              >
                هذا الحقل مطلوب
              </div>
            </div>
            <div class="col-12 mb-2">
              <div :class="{ 'is-invalid': $v.form.details.$error }">
                <div class="content-input">
                  <span class="label-require dropdown">
                    <img src="../assets/icons/star.svg" alt="*" />
                  </span>
                  <textarea
                    class="
                      form-control
                      custome-input custome-input-bg-white
                      mb-2
                    "
                    placeholder="وصف سبب التنازع"
                    rows="4"
                    v-model.trim="$v.form.details.$model"
                  ></textarea>
                </div>
              </div>
              <div
                class="invalid-feedback"
                v-if="!$v.form.details.required & $v.form.details.$error"
              >
                هذا الحقل مطلوب
              </div>
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
                <span class="value-card">
                  {{
                    release_details.remaining != null
                      ? release_details.remaining
                      : "0000"
                  }}</span
                >
              </div>
              <div :class="{ 'is-invalid': $v.form.recovery.$error }">
                <div class="content-input">
                  <span class="label-require dropdown">
                    <img src="../assets/icons/star.svg" alt="*" />
                  </span>
                  <input
                    type="text"
                    class="form-control special-input"
                    placeholder="......."
                    v-model.trim="$v.form.recovery.$model"
                  />
                </div>
              </div>
            </div>
            <div class="col-12 my-2 orange-color">
              <h6>لا يمكنك الزيادة مستقبلا على قيمة الطلب</h6>
            </div>
            <div class="col-12 my-2 main-color">
              <h6>مرفقات الطلب</h6>
            </div>
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
            <div class="col-12 d-flex justify-content-around mt-3">
              <button type="button" class="cancel-button" @click="create">
                حفظ
              </button>
              <button type="button" class="main-button" @click="reset">
                الغاء
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
import { createValidation } from "@/constants/validation.js";
import { validationMixin } from "vuelidate";
import Header from "@/layout/Header";
export default {
  name: "Create",
  mixins: [validationMixin, mixins],
  validations: createValidation,
  components: { Header },
  data() {
    return {
      forms: {},
      url: [],
      deleteFiles: [],
      release_details: {
        released: null,
        remaining: null,
        total: null,
        transfered: null,
      },
      form: {
        type_id: "",
        ads_request_id: "",
        to_user_id: "",
        recovery: "",
        details: null,
        attachments: [],
      },
      disableName: false,
    };
  },
  watch: {},
  computed: {},
  methods: {
    getData(id) {
      this.forms.ads_requests.map((req) => {
        if (req.id == this.form.ads_request_id) {
          this.release_details = req.release_details;
        }
      });
      this.handleRequest("COMMON", "GET_USERS", id).then((res) => {
        if (res.status == 200) {
          this.forms.to_users = res.data.to_users;
          if (res.data.to_users.length == 1) {
            this.form.to_user_id = res.data.to_users[0].id;
            this.disableName = true;
          } else {
            this.form.to_user_id = "";
            this.disableName = false;
          }
        }
      });
    },
    getOrders(id) {
      this.handleRequest("COMMON", "GET_ORDERS", id).then((res) => {
        if (res.status == 200) {
          this.forms = res.data;
        }
      });
    },
    create() {
      let formData = new FormData();
      for (var i = 0; i < this.$refs.file.files.length; i++) {
        if (!this.deleteFiles.includes(i)) {
          let file = this.$refs.file.files[i];
          formData.append("attachment-" + i, file);
        }
      }
      formData.append("type_id", this.form.type_id);
      formData.append("ads_request_id", this.form.ads_request_id);
      formData.append("to_user_id", this.form.to_user_id);
      formData.append("details", this.form.details);
      formData.append("recovery", this.form.recovery);
      this.$v.$touch();
      if (this.$v.$invalid) return false;
      this.handleRequest("COMMON", "CREATE", formData).then((res) => {
        if (res.status == 200) {
          this.$router.push({ name: "Details", params: { id: res.data.id } });
        }
      });
    },
    reset() {
      this.form = {
        type_id: "",
        ads_request_id: "",
        to_user_id: "",
        recovery: "",
        details: null,
        attachments: [],
      };
      this.$v.$reset();
    },
    getRequestes() {
      this.handleRequest("COMMON", "GET_FORMS").then((res) => {
        if ((res.status == 200) & (res.data != null)) {
          this.forms = res.data;
        }
      });
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
  },
  mounted() {
    this.getRequestes();
  },
};
</script>
