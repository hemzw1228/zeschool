import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = () => new Vuex.Store({

  state: {
    nav: {},
    childrenNav:[]
  },
  mutations: {
    passNav (state,nav) {
      state.nav = nav
      
    },
    passChildrenNav(state,childrenNav)
    {
      state.childrenNav = childrenNav
    }
  }
})

export default store