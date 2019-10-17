import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tabArr:[],
  },
  getters:{
   
  },
  mutations: {
    pushTabArr(state,tabObj){
      // console.log(tabObj)
      state.tabArr.push(tabObj)
      // console.log(state.tabArr)
    }
  },
  actions: {}
});
