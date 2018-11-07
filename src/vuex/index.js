import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import action from './action'

Vue.use(Vuex)

const state = {
    login: false,
    userInfo: null, // 用户信息
    showMoveImg: false, // 显示飞入图片
    elLeft: 0,
    elTop: 0,
    moveImgUrl: null,
    cartList: [],
    cartPositionT: 0,  // 购物车位置
    cartPositionL: 0,
    receiveInCart: false, // 是否进入购物车
    showCart: false  // 是否显示购物车
}

export default new Vuex.Store({
    state,
    action,
    mutations
})