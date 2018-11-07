import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import VueLazyload from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import VueCookie from 'vue-cookie'
// import { userInfo } from './api'

Vue.use(VueCookie)
Vue.use(VueLazyload, {
    logding: '/static/images/load.gif'
})
Vue.use(infiniteScroll)

Vue.config.productionTip = false

// 不需要登陆的页面
// const whiteList = ['/home', '/goods', '/login', 'item']

// router.beforeEach(function (to, from, next) {
//     userInfo().then(res => {
//         if (res.status === '1') {   // 没登录
//             if (whiteList.indexOf(to.path) !== -1) {  // 白名单不需要登录
//                 next()
//             } else {
//                 next('/login')
//             }
//         } else {
//             store.commit('RECORD_USERINFO', {info: res.result})
//             if (to.path === '/login') {
//                 next({path: '/'})
//             }
//             next()
//         }
//     })
// })

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
