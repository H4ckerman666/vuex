import { createStore } from "vuex";
import getRandomInt from "@/helpers/getRandomInt";

export default createStore({
  state: {
    count: 1,
    lastMutation: "none",
    isLoading: false,
  },
  mutations: {
    increment(state) {
      state.count++;
      state.lastMutation = "increment";
    },
    incrementBy(state, value) {
      state.count += value;
      state.lastMutation = "incrementBy" + value;
    },
    setLoading(state) {
      state.isLoading = !state.isLoading;
    },
  },
  actions: {
    async incrementRandomInt({ commit }) {
      commit("setLoading");
      const random = await getRandomInt();
      commit("incrementBy", random);
      commit("setLoading");
    },
  },
});
