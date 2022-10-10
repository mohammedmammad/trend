<template>
  <div id="Home">
    <scroll-fixed-header :fixed.sync="fixed" :threshold="56">
      <Header :searchable="true"></Header>
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
            <router-link :to="`/recieve`" class="nav-link font-weight-bold">
              طلبات مستقبلة
            </router-link>
          </div>
        </div>
      </div>
    </scroll-fixed-header>
    <div class="orders" v-if="!loading">
      <div class="container">
        <template v-if="requestes.length > 0">
          <Card
            v-for="request in requestes"
            :key="request.id"
            :request="request"
          ></Card>
        </template>
        <NoData v-else message="لا توجد طلبات لعرضها"></NoData>
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
import Card from "@/components/Card";
import NoData from "@/components/NoData";
import Header from "@/layout/Header";
export default {
  name: "Home",
  mixins: [mixins],
  components: { Card, NoData, Header },
  data() {
    return {
      fixed: false,
      requestes: [],
    };
  },
  watch: {},
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
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
