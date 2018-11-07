import MButton from '/components/button'
import MShelf from '/components/shelf'
import MBuyNum from '/components/buynum'

import { productDetail, addCart } from '/api/goods'
import { mapMutations, mapState } from 'vuex'

export default {
    data() {
        return {
            productMsg: {},
            small: [],
            big: '',
            product: {},
            pNum: 1
        }
    },
    computed: {
        ...mapState(['login', 'showMoveImg', 'showCart'])
    },
    methods: {
        ...mapMutations(['ADD_CART', 'ADD_ANIMATION', 'SHOW_CART']),
        _productDetail(productId) {
            productDetail({params: {productId}}).then(res => {
                let result = res.data
                this.product = result
                this.productMsg = result.productMsg || ''
                // TODO
                this.small = [
                    "http://image.smartisanos.cn/resource/4a38a3678f151ec9c022f5f676c2b7da.jpg",
                    "http://image.smartisanos.cn/resource/3a00a008745aceaa189424a7a9a0c5d8.jpg"
                ]
                this.big = this.small[0]
            })
        },
        addCart(id, price, name, img) {
            if (!this.showMoveImg) {
                if (this.login) {
                    addCart({id: id, pNum: this.pNum}).then(res => {
                        this.ADD_CART({
                            id: id,
                            price: price,
                            name: name,
                            img: img,
                            pNum: this.pNum
                        })
                    })
                } else {
                    this.ADD_CART({
                        id: id,
                        price: price,
                        name: name,
                        img: "http://image.smartisanos.cn/resource/3a00a008745aceaa189424a7a9a0c5d8.jpg",
                        pNum: this.pNum
                    })
                }
                // 加入购物车动画
                var dom = event.target
                // 获取点击的坐标
                let elLeft = dom.getBoundingClientRect().left + (dom.offsetWidth / 2)
                let elTop = dom.getBoundingClientRect().top + (dom.offsetHeight / 2)
                // 需要触发
                this.ADD_ANIMATION({moveShow: true, elLeft: elLeft, elTop: elTop, img: img})
                if (!this.showCart) {
                    this.SHOW_CART({showCart: true})
                }
            }
        },
        checkout(productId)  {
            this.$router.push({path: '/checkout', query: {productId, num: this.productNum}})
        },
        editNum(num) {
            this.pNum = num
        }
    },
    created() {
        let id = this.$route.query.p
        this._productDetail(id)
    },
    components: {
        MButton,
        MShelf,
        MBuyNum
    }
}