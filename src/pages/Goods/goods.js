import MButton from '/components/button'
import MallGoods from '/components/mallGoods'
import {getProducts} from '/api/goods.js'

export default {
    data() {
        return {
            products: [],
            min: '',
            max: '',
            busy: true,
            timer: null,
            sortType: 1,
            windowHeight: null,
            WindowWidth: null,
            params: {
                page: 1,
                sort: '',
                pageSize: 50
            }
        }
    },

    methods: {
        _getProducts(flag) {
            let params = {
                params: {
                    page: this.params.page,
                    sort: this.params.sort,
                    priceGt: this.min,
                    priceLte: this.max,
                    pageSize: this.params.pageSize
                }
            }
            getProducts(params).then(res => {
                if (res.data.total_count) {
                    let data = res.data.items
                    if (flag) {
                        this.products = this.products.concat(data)
                    } else {
                        this.products = data
                    }
                } else {
                    clearTimeout(this.timer)
                    this.busy = true
                }
                // console.log(this.product)
            })
        },

        // 默认排序
        reset() {
            this.sortType = 1
            this.params.sort = ''
            this.params.page = 1
            this.busy = false
            this._getProducts()
        },
        // 价格排序
        sort(v) {
            v === 1 ? this.sortType = 2 : this.sortType = 3
            this.params.sort = v
            this.params.page = 1
            this.busy = false
            this._getProducts()
        },

        loadMore() {
            this.busy = true
            this.timer = setTimeout(() => {
                this.params.page++
                this._getProducts(true)
                this.busy = false
            }, 500)
        }

    },
    created() {
        this._getProducts()
    },
    mounted() {
        this.windowHeight = window.innerHeight
        this.windowWidth = window.innerWidthh
    },
    components: {
        MButton,
        MallGoods
    }
}