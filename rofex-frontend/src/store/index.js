import Vue from "vue";
import Vuex from "vuex";
import Api from "@/services/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {},
  },
  mutations: {
    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
    },
    LOGOUT_USER(state) {
      state.currentUser = {};
    },
  },
  actions: {
    logoutUser({ commit }) {
      commmit("LOGOUT_USER");
    },
    loginUser({ commit }, user) {
      commit("SET_CURRENT_USER", user);
    },
  },
  modules: {},
});
