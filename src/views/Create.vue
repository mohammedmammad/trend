<template>
  <div id="create">
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
          <div class="row py-2">
            <div class="col-12 mb-2">
              <div class="form-group mb-1">
                <select class="form-control custome-form-control">
                  <option value="" select>نوع التنازع</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div class="col-4 mb-2">
              <div class="form-group mb-1">
                <select class="form-control custome-form-control">
                  <option value="" select>رقم الطلب</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div class="col-8 mb-2">
              <div class="form-group mb-1">
                <select class="form-control custome-form-control">
                  <option value="" select>اسم طرف التنازع</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div class="col-12 mb-2">
              <textarea
                class="form-control custome-input custome-input-bg-white"
                placeholder="وصف سبب التنازع"
              ></textarea>
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
            <div class="col-12 my-2 main-color">
              <h6>مرفقات الطلب</h6>
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
            <div class="col-12 d-flex justify-content-around mt-3">
              <button type="button" class="main-button">حفظ</button>
              <button type="button" class="cancel-button">الغاء</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Create",
  components: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  mounted() {},
};
</script>
