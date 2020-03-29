import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { USERNAME } from "@/mutation-types.js";

Vue.use(Vuex);

const state = {
  username: undefined
};

const mutations = {
  [USERNAME](state, username) {
    state.username = username;
  }
};

const actions = {
  async SetUsername({ commit }, userId) {
    let username = await axios
      .get("https://jsonplaceholder.typicode.com/users", {
        params: {
          id: userId
        }
      })
      .then(res => res.data[0].username);
    console.log(userId, username);
    commit(USERNAME, username);
  }
};

const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
