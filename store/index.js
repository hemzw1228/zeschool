import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = () =>
  new Vuex.Store({
    state: {
      navs: [],
      nav: {},
      childrenNav: [],
      fnav: [],
    },
    mutations: {
      storeNavs(state, navs) {
        state.navs = navs
      },
      passNav(state, nav) {
        state.nav = nav
      },
      passChildrenNav(state, childrenNav) {
        state.childrenNav = childrenNav
      },
      passFnav(state, fnav) {
        state.fnav = fnav
      }
    }
  })

export default store
