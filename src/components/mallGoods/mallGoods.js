import MButton from '/components/button'
import { mapMutations, mapState } from 'vuex'
import { addCart } from '/api/goods.js'

export default {
    components: {
        MButton
    },
    props: {
        msg: {type: [Object, Array]}
    },
    data() {
        return {}
    },
    methods: {
        ...mapMutations(['ADD_CART', 'ADD_ANIMATION', 'SHOW_CART']),
        getDetails(id) {
            this.$router.push({path: 'item/productId='+id})
        },
        addCart(id, price, name, img) {
            console.log('111111-----')
            if (!this.showMoveImg) { // 动画是否在运动
                if (this.login) {
                    addCart({id: id}).then(res => {
                        // 并不重新请求数据
                        this.ADD_CART({id: id, price: price, name: name, img: img})
                    })
                } else {
                    this.ADD_CART({id: id, price: price, name: name, img: img})
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
        }
    },
    computed: {
        ...mapState(['login', 'showMoveImg', 'showCart'])
    },
    mounted() {
    }
}