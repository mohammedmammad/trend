<template>
  <div class="order-card shadow mb-3 bg-white rounded">
    <router-link :to="`/details/${request.id}`" tag="div">
      <div
        class="d-flex flex-wrap justify-content-between align-items-center p-2"
      >
        <div class="gray-color">
          <span>رقم الطلب</span>
          <span class="mr-2">{{ request.ads_request.id }}</span>
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
            <span v-if="!showCard">اسم المعلن :</span>
            <span v-else>المعلن :</span>
            <span class="mr-1">{{ request.other_user.username }}</span>
          </div>
          <div class="main-color" v-if="!showCard">
            <span>نوع التنازع</span>
            <span class="mr-1">/</span>
            <span class="mr-1">{{ request.type.name }}</span>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-around px-2" v-if="!showCard">
        <div>
          <span class="gray-color">قيمة الطلب :</span>
          <span class="main-color mr-1">{{
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
      <div class="d-flex justify-content-between background-white mt-2 p-2">
        <div class="orange-color px-2">
          <span>{{ request.ads_request.status_txt }}</span>
        </div>
        <div class="main-color border-right-action px-2">
          <span class="ml-2"><u>تفاصيل طلب الاعلان</u></span>
          <img src="../assets/icons/folder.svg" alt="Details" />
        </div>
      </div>
    </router-link>
  </div>
</template>
  <script>
export default {
  name: "Header",
  mounted() {},
  props: {
    request: {
      required: true,
      type: Object,
    },
    showCard: {
      required: false,
      default: false,
      type: Boolean,
    },
  },
  computed: {},
  methods: {},
};
</script>
  
  