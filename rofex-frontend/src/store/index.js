import Vue from "vue";
import Vuex from "vuex";
import Api from "@/services/api";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    token: localStorage.getItem("access_token") || null,
    currentUser: {},
  },
  mutations: {
    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
    },
    LOGOUT_USER(state) {
      state.currentUser = {};
    },
    retriveToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        let fd = new FormData();
        fd.append('username', credentials.username);
        fd.append('password', credentials.password);
        Api()
          .post("/token", fd)
          .then((response) => {
            const token = response.data.access_token;

            localStorage.setItem("access_token", token);
            context.commit("retrieveToken", token);
            resolve(response);
            // console.log(response);
            // context.commit('addTodo', response.data)
          })
          .catch((error) => {
            console.log(error.response);
            reject(error);
          });
      });
    },
    register(context, data) {
      return new Promise((resolve, reject) => {
        
        let dat={
          'email':data.email,
          'name':data.name,
          'lastname':data.lastname,
          'hashed_password':data.password,
        }
        Api()
        .post('/users/', dat)
          .then(response => {
            resolve(response)
          })
          .catch(error => {            
            console.log(error.response);
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
    createTrades(context, data) {
      return new Promise((resolve, reject) => {
        
        let dat={
          "symbol": data.Symbol,
          "size": data.Size,
          "price": data.Price,
          "datetime": data.Datetime
          //iduser
        }
        Api()
        .post('/create-trade/', dat)
          .then(response => {
            resolve(response)
          })
          .catch(error => {            
            console.log(error.response);
            reject(error)
          })
      })
    },

  },
  modules: {},
});
