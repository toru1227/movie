import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    auth: "",
    user: "",
    master_user: "",
  },
  mutations: {
    auth(state, payload) {
      state.auth = payload;
    },
    user(state, payload) {
      state.user = payload;
    },
    logout(state, payload) {
      state.auth = payload;
    },
    master_user(state, payload) {
      state.master_user = payload;
    },
    master_logout(state,payload) {
      state.master_user = payload;
    }
  },
  actions: {
    async login({ commit }, { email, password }) {
      const responseLogin = await axios.post(
        "https://intense-falls-67346.herokuapp.com/api/login",
        {
          email: email,
          password: password,
        });
      const responseUser = await axios.get(
        "https://intense-falls-67346.herokuapp.com/api/user",
        {
          params: {
            email: email,
          },
        }
      );
      commit("auth", responseLogin.data.auth);
      commit("user",responseUser.data.data[0]);
      console.log(responseLogin.data.auth)
    },
    logout({ commit }) {
      axios
        .post("https://intense-falls-67346.herokuapp.com/api/logout", {
          auth: this.state.auth,
        })
        .then((response) => {
        console.log(response);
        commit("logout", response.data.auth);
        commit("user","");
        router.push("/logout");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async masterLogin({ commit },{email,password}) {
      const responseLogin = await axios.post(
        "https://intense-falls-67346.herokuapp.com/api/master_login",
        {
          email: email,
          password: password,
        });
      console.log(responseLogin.data.auth);
      commit("master_user",responseLogin.data.auth);
      // if (this.state.master_login == true) {
      //   router.push("/master_main");
      // }
    },

      masterLogout({ commit }) {
      axios.post("https://intense-falls-67346.herokuapp.com/api/logout",
        {
          auth: this.state.master_user,
        }).then((response) => {
          commit("master_logout",response.data.auth)

        }).catch((error) => {
          console.log(error);
        });
    }
  },
});
