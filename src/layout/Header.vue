<template>
  <header>
    <div class="container">
      <div class="w-100 d-flex justify-content-between">
        <div class="input-group filter-box">
          <template v-if="searchable">
            <div class="input-group-prepend">
              <span class="input-group-text custome-action-right">
                <!-- <font-awesome-icon icon="fa-solid fa-magnifying-glass" /> -->
                <img src="../assets/icons/search.svg" alt="Search" />
              </span>
            </div>
            <input
              type="text"
              v-model="keyword"
              class="form-control"
              placeholder="ابحث برقم الطلب أو طرف العلاقة أو قيمة"
            />
            <div class="input-group-append" @click="search">
              <span class="input-group-text custome-action-left">
                <img src="../assets/icons/filter.svg" alt="Filter" />
              </span>
            </div>
          </template>
        </div>
        <button class="back-btn" @click="$router.go(-1)">
          <font-awesome-icon icon="fa-solid fa-angle-left" />
        </button>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  props: {
    searchable: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      keyword: "",
    };
  },
  mounted() {},
  computed: {},
  methods: {
    search() {
      this.$emit("search", this.keyword);
    },
  },
};
</script>

