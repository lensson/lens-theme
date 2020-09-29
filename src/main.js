import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'

import App from '@/App.vue'

import router from '@/router'

import store from '@/store'
import bootstrap from '@/core/bootstrap'
import '@/core/lazy_use'
import '@/permission' // permission control
import '@/utils/filter' // global filter
import './components/global.less'

import 'mavon-editor/dist/css/index.css'
new Vue({
  router,
  store,
  created: bootstrap,
  render: h => h(App)
}).$mount('#app')
