import Vue from 'vue'
import Router from 'vue-router'
const Index = resolve => require(['/pages/index'], resolve)
const Home = resolve => require(['/pages/Home'], resolve)
const Login = resolve => require(['/pages/Login'], resolve)
const Goods = resolve => require(['/pages/Goods'], resolve)
const GoodItem = resolve => require(['/pages/GoodItem'], resolve)
const Cart = resolve => require(['/pages/Cart'], resolve)
const user = resolve => require(['/pages/User'], resolve)
const orderList = resolve => require(['/pages/User/orderList'], resolve)
const information = resolve => require(['/pages/User/information'], resolve)
const address = resolve => require(['/pages/User/address'], resolve)
const coupon = resolve => require(['/pages/User/coupon'], resolve)
const support = resolve => require(['/pages/User/support'], resolve)

const order = resolve => require(['/pages/Order/order'], resolve)
const paysuccess = resolve => require(['/pages/Order/paysuccess'], resolve)
const payment = resolve => require(['/pages/Order/payment'], resolve)

const about = resolve => require(['/pages/About'], resolve)
const service = resolve => require(['/pages/Service'], resolve)

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
            redirect: '/home',
            children: [
                {path: 'home', component: Home},
                {path: 'goods', component: Goods},
                {path: 'item', component: GoodItem},
                {path: '/about', component: about},
                {path: '/service', component: service}
            ]
        },
        {path: '/login', name: 'login', component: Login},
        {path: '/cart', name: 'cart', component: Cart},

        {
            path: '/user',
            name: 'user',
            component: user,
            redirect: '/user/orderList',
            children: [
                {path: 'orderList', name: '订单列表', component: orderList},
                {path: 'information', name: '我的资料', component: information},
                {path: 'address', name: '收货地址', component: address},
                {path: 'coupon', name: '我的优惠', component: coupon},
                {path: 'support', name: '售后服务', component: support}
            ]
        },
        {
            path: '/order',
            name: 'order',
            component: order,
            children: [
                {path: 'paysuccess', name: 'paysuccess', component: paysuccess},
                {path: 'payment', name: 'payment', component: payment}
            ]
        }
    ]
})
