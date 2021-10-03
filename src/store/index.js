import Vue from "vue";
import Vuex from "vuex";
import common from "./modules/common";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    errors: [],
    progress: 0,
  },
  getters: {
    loading: (state) => state.loading,
    errors: (state) => state.errors,
    progress: (state) => state.progress,
  },
  mutations: {
    loading(state, payload) {
      state.loading = payload;
    },
    store_save_errors(state, payload) {
      if (payload == null) {
        state.errors = [];
        return;
      }
      state.errors.push(payload);
    },
    progress(state, payload) {
      state.progress = payload;
    },
  },
  actions: {
    LOADING({ commit }, payload) {
      commit("loading", payload);
    },
    SET_PROGRESS({ commit }, payload) {
      commit("progress", payload);
    },
    STORE_SAVE_ERRORS({ commit }, payload) {
      commit("store_save_errors", payload);
    },
  },
  modules: {
    common,
  },
});

