import Vue from "vue";
import Vuex from "vuex";
import Api from "@/services/api";

Vue.use(Vuex);

function authHeaders(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}
export const store = new Vuex.Store({
  state: {
    token: localStorage.getItem("access_token") || null,
    currentUser: {},
  },
  getters: {
    isLoggedIn(state) {
      return state.token !== null;
    },
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
    },
    LOGOUT_USER(state) {
      state.currentUser = {};
    },
    RETURN_TOKEN(state, token) {
      state.token = token;
    },
    DESTROY_TOKEN(state) {
      state.token = null;
    },
  },
  actions: {
    //GET USER ONCE LOGGED IN
    async getMe({ commit, state }) {
      try {
        if (!state.token) {
          return {
            user: null,
            error: null,
          };
        }
        const { data } = await Api().get("/users/me", authHeaders(state.token));
        console.log(data);
        const user = data;
        if (user.id) {
          commit("SET_CURRENT_USER", user);
        } else {
          if (state.token) {
            commit("LOGOUT_USER");
          }
        }
        return data;
      } catch (error) {
        commit("LOGOUT_USER");
        return {
          error: "Error al buscar el usuario",
        };
      }
    },
    //REGISTER NEW USER
    register(context, data) {
      return new Promise((resolve, reject) => {
        let user_data = {
          email: data.email,
          name: data.name,
          lastname: data.lastname,
          hashed_password: data.password,
        };
        Api()
          .post("/users/", user_data)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            console.log(error.response);
            reject(error);
          });
      });
    },
    //TOKENS
    destroyToken(context) {
      if (context.getters.isLoggedIn) {
        localStorage.removeItem("access_token");
        context.commit("DESTROY_TOKEN");
      }
    },
    //LOGIN AND RETURN TOKEN
    returnToken(context, credentials) {
      return new Promise((resolve, reject) => {
        let fd = new FormData();
        fd.append("username", credentials.username);
        fd.append("password", credentials.password);
        Api()
          .post("/token", fd)
          .then((response) => {
            const token = response.data.access_token;
            console.log(response);

            localStorage.setItem("access_token", token);
            context.commit("RETURN_TOKEN", token);
            resolve(response);
          })
          .catch((error) => {
            console.log(error.response);
            reject(error);
          });
      });
    },
    //logoutUser({ commit }) {
    //commmit("LOGOUT_USER");
    //},
    //loginUser({ commit }, user) {
    //commit("SET_CURRENT_USER", user);
    //},
    createTrades(context, data) {
      return new Promise((resolve, reject) => {
        let dat = {
          symbol: data.Symbol,
          size: data.Size,
          price: data.Price,
          datetime: data.Datetime,
          //iduser
        };
        Api()
          .post("/create-trade/", dat)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            console.log(error.response);
            reject(error);
          });
      });
    },
  },
  modules: {},
});
