import Vue from "vue";
import Vuex from "vuex";
import Api from "@/services/api";

Vue.use(Vuex);

export const store= new Vuex.Store({
  state: {
    token:localStorage.getItem('access_token')|| null,
    currentUser: {},
  },
  mutations: {
    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
    },
    LOGOUT_USER(state) {
      state.currentUser = {};
    },
    retriveToken(state,token){
      state.token=token
    }
  },
  actions: {
    retrieveToken(context, credentials) {

      return new Promise((resolve, reject) => {
        Api()
        .post('/token', {
          username: credentials.username,
          password: credentials.password,
        })
          .then(response => {
            const token = response.data.access_token

            localStorage.setItem('access_token', token)
            context.commit('retrieveToken', token)
            resolve(response)
            // console.log(response);
            // context.commit('addTodo', response.data)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
        })
    },
    //logoutUser({ commit }) {
      //commmit("LOGOUT_USER");
    //},
    //loginUser({ commit }, user) {
      //commit("SET_CURRENT_USER", user);
    //},
  },
  modules: {},
});
