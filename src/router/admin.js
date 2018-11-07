import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const ViewPage = resolve => require(['/adminPages'], resolve)
const Home = resolve => require(['/adminPages/Home'], resolve)

const OrderList = resolve => require(['/adminPages/OrderList'], resolve)


export default new Router({
    routes: [
        {
            path: 'order-list',
            name: 'OrderList',
            component: OrderList,
            meta: {
                title: '订单列表'
            }
        }
    ]
})