import {
    INIT_BUYCART,
    ADD_CART,
    GET_USERINFO,
    RECORD_USERINFO,
    ADD_ANIMATION,
    SHOW_CART,
    REDUCE_CART,
    EDIT_CART
} from './mutation-types'
import { setStore, getStore } from '/utils/storage'

export default {
    // 网页初始化从本地缓存获取购物车数据
    [INIT_BUYCART](state) {
        let initCart = getStore('buyCart')
        if (initCart) {
            state.cartList = JSON.parse(initCart)
        }
    },
    // 加入购物车
    [ADD_CART](state, {id, price, name, img, pNum = 1}) {
        let cart = state.cartList  // 购物车
        let falg = true
        let goods = {
            id,
            price,
            name,
            img
        }
        if (cart.length) {
            cart.forEach(item => {
                if (item.id === id) {
                    if (item.pNum >= 0) {
                        falg = false
                        item.pNum += pNum
                    }
                }
            })
        }
        if (!cart.length || falg) {
            goods.pNum = pNum
            goods.checked = '1'
            cart.push(goods)
        }
        state.cartList = cart
        setStore('buyCart', cart)
    },
    // 是否显示购物车
    [SHOW_CART](state, {showCart}) {
        state.showCart = showCart
    },
    // 加入购物车动画
    [ADD_ANIMATION](state, {moveShow, elLeft, elTop, img, cartPositionT, cartPositionL, receiveInCart}) {
        state.showMoveImg = moveShow
        if (elLeft) {
            state.elLeft = elLeft
            state.elTop = elTop
        }
        state.moveImgUrl = img
        state.receiveInCart = receiveInCart
        if (cartPositionT) {
            state.cartPositionT = cartPositionT
            state.cartPositionL = cartPositionL
        }
    },
    // 移除商品
    [REDUCE_CART](state, {id}) {
        let cart = state.cartList
        cart.forEach((item, i) => {
            if (item.id === id) {
                if (item.pNum > 1) {
                    item.pNum--
                } else {
                    cart.splice(i, 1)
                }
            }
        })
        state.cartList = cart
        setStore('buyCart', state.cartList)
    },

    // 修改购物车
    [EDIT_CART](state, {id, pNum, checked}) {
        let cart = state.cartList
        if (pNum) {
            cart.forEach((item, i) => {
                if (item.id === id) {
                    item.pNum = pNum
                    item.checked = checked
                }
            })
        } else if (pId) {
            cart.forEach((item, i) => {
                if (item.id === id) {
                    cart.splice(i, 1)
                }
            })
        } else {
            cart.forEach((item, i) => {
                item.checked = checked ? '1' : '0'
            })
        }

        state.cartList = cart
        setStore('buyCart', state.cartList)
    },

    // 记录用户信息
    [RECORD_USERINFO](state, info) {
        state.userInfo = info
        state.login = true
        setStore('userInfo', info)
    },

    // 获取用户信息
    [GET_USERINFO](state, info) {
        if (state.userInfo && (state.userInfo.username !== info.username)) {
            return
        }
        if (!state.login) {
            return
        }
        if (!info.message) {
            state.userInfo = {...info}
        } else {
            state.userInfo = null
        }
    }

}