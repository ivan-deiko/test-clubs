import Vue from 'vue'
import Vuex from 'vuex'

import activity from './modules/activity'
import clubs from './modules/clubs'
import cities from './modules/cities'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    activity,
    clubs,
    cities,
  }
})
