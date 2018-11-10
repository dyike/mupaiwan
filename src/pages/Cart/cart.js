import  MHeader from '/components/common/header'
import  MFooter from '/components/common/footer'
import  MButton from '/components/button'
import MBuynum from '/components/buynum'
import { getCartList, cartEdit, editCheckAll, cartDel, delCartChecked } from '/api/goods'
import { mapMutations, mapState } from 'vuex'
import { getStore } from '/utils/storage'

export default {
    data() {
        return {
            userId: 0,
            submit: true
        }
    },
    components: {
        MHeader,
        MFooter,
        MButton,
        MBuynum
    },
    mounted () {
        this.userId = getStore('userId')
        this.INIT_BUYCART()
    },
    computed: {
        ...mapState(
            ['cartList']
        ),
        // 是否全选
        checkAllFlag() {
            return this.checkedCount === this.cartList.length
        },
        // 勾选的数量
        checkedCount () {
            var i = 0
            this.cartList && this.cartList.forEach((item) => {
                if (item.checked === '1') i++
            })
            return Number(i)
        },
        // 计算总数量
        totalNum () {
            var totalNum = 0
            this.cartList && this.cartList.forEach(item => {
                totalNum += (item.productNum)
            })
            return Number(totalNum)
        },
        // 选中的总价格
        checkPrice () {
            var totalPrice = 0
            this.cartList && this.cartList.forEach(item => {
              if (item.checked === '1') {
                totalPrice += (item.productNum * item.salePrice)
              }
            })
            return totalPrice
        },
        // 选中的商品数量
        checkNum () {
            var checkNum = 0
            this.cartList && this.cartList.forEach(item => {
                if (item.checked === '1') {
                    checkNum += (item.productNum)
                }
            })
            return checkNum
        }
    },

    methods: {
        ...mapMutations([
            'INIT_BUYCART', 'EDIT_CART'
        ]),
        goodsDetails(id) {
            window.open(window.location.origin + '#/goodsDetails?productId=' + id)
        },

        // 全选
        editCheckAll () {
            let checkAll = !this.checkAllFlag
            editCheckAll({userId: this.userId, checked: checkAll}).then(res => {
                this.EDIT_CART({checked: checkAll})
            })
        },
        // 修改购物车
        _cartEdit (userId, productId, productNum, checked) {
            cartEdit({
                userId,
                productId,
                productNum,
                checked
            }).then(res => {
                if (res.success === true) {
                    this.EDIT_CART({
                        productId,
                        checked,
                        productNum
                    })
                }
            })
        },
        // 修改购物车
        editCart (type, item) {
            if (type && item) {
                let checked = item.checked
                let productId = item.productId
                let productNum = item.productNum
                // 勾选
                if (type === 'check') {
                    let newChecked = checked === '1' ? '0' : '1'
                    this._cartEdit(this.userId, productId, productNum, newChecked)
                }
            } else {
                console.log('缺少所需参数')
            }
        },
        EditNum (productNum, productId, checked) { // 数量
            this._cartEdit(this.userId, productId, productNum, checked)
        },

        // 删除整条购物车
        cartdel (productId) {
            cartDel({userId: this.userId, productId}).then(res => {
                this.EDIT_CART({productId})
            })
        },
        checkout () {
            this.checkoutNow = '结算中...'
            this.submit = false
            this.$router.push({path: 'checkout'})
        },

        delChecked() {
            getCartList({userId: getStore('userId')}).then(res => {
                if (res.success === true) {
                    res.result.forEach(item => {
                        if (item.checked === '1') {
                            let productId = item.productId
                            this.EDIT_CART({productId})
                        }
                    })
                }
            })
            delCartChecked({userId: this.userId}).then(res => {
                if (res.success !== true) {
                    this.message('删除失败')
                }
            })
        }
    }
}