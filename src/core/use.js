import Vue from 'vue'
import VueStorage from 'vue-ls'
import config from '@/config/defaultSettings'

import 'ant-design-vue/dist/antd.less'

// ext library
import VueClipboard from 'vue-clipboard2'

Vue.use(VueStorage, config.storageOptions)
Vue.use(VueClipboard)
