import http from './client'

// 商品列表
export const getProducts = (params) => {
    return http.fetchGet('/v1/api/product', params)
}

// 获取购物车列表
export const getCartList = (params) => {
    // return http.fetchPost('/users/cartList', params)
}

// 加入购物车
export const addCart = (params) => {
    // return http.fetchPost('/goods/addCart', params)
}

// 删除整条购物车
export const cartDel = (params) => {
    // return http.fetchPost('/users/cartDel', params)
}

// 删除购物车
export const delCart = (params) => {
    // return http.fetchPost('/goods/delCart', params)
}

// 删除购物车勾选商品
export const delCartChecked = (params) => {
    // return http.fetchPost('/member/delCartChecked', params)
}

// 编辑购物车
export const cartEdit = (params) => {
    return http.fetchPost('/users/cartEdit', params)
}

// 全选
export const editCheckAll = (params) => {
    // return http.fetchPost('/member/editCheckAll', params)
}

// 商品详情
export const productDetail = (params) => {
    return http.fetchGet("/v1/api/product/" + params.params.productId)
}