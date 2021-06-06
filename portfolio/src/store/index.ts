import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
interface State {
  firstPage: boolean;
}

const state: State = {
  firstPage: true,
};
const getters = {};
const mutations = {

};
const actions = {

};
const store = {
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
} as any;
export default store;
