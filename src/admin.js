import Vue from 'vue'
import Admin from './Admin.vue'    // 加上.vue，要不然not found.
import router from './router/admin'
import ElementUI from 'element-ui'

//导入样式
// A modern alternative to CSS resets
import 'normalize.css'
import 'font-awesome/scss/font-awesome.scss'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI, {
    size: 'medium'
})

Vue.config.productionTip = false

new Vue({
  el: '#admin',
  router,
  render: h => h(Admin)
})
