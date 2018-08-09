// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import Vuetify from 'vuetify'
import VueC3 from 'vue-c3'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.use(VueC3)

Vue.config.productionTip = false

// store.dispatch('getData')
async function init () {
  store.dispatch('getData')
}

/* eslint-disable no-new */

init().then((res) => {
  new Vue({
    el: '#app',
    router,
    store,
    mounted () {
      store.dispatch('getData')
    },
    components: {App},
    template: '<App/>'
  })
})
