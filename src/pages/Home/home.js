import  MShelf from '/components/shelf'
import mallGoods from '/components/mallGoods'
import {productHome} from '/api/index.js'
import slide from '/components/slide/slide.vue'

export default {
    components: {
        MShelf,
        mallGoods,
        slide
    },
    data() {
        return {
            banner: {},
            bgOpts: {
                px: 0,
                py: 0,
                w: 0,
                h: 0
            },
            floors: [],
            hot: [],

            slides: [
                {
                    src: 'http://i3.mifile.cn/a4/xmad_14913974588712_tsRvc.jpg',
                    href: ''
                },
                {
                    src: 'http://i3.mifile.cn/a4/xmad_14915894814419_zNYsr.jpg',
                    href: ''
                },
                {
                    src: 'http://i3.mifile.cn/a4/xmad_14913784864515_mkpqH.jpg',
                    href: ''
                },
                {
                    src: 'http://i3.mifile.cn/a4/xmad_14908694250786_fObqa.jpg',
                    href: ''
                },
                {
                    src: 'http://i3.mifile.cn/a4/xmad_14913755624659_gRtNH.jpg',
                    href: ''
                }
            ],
            inv: 3000,
            transitionName1: 'move',
            target: '_blank'
        }
    },

    methods: {
        bgOver(e) {
            this.bgOpts.pw = e.offsetLeft
            this.bgOpts.py = e.offsetTop
            this.bgOpts.w = e.offsetWidth
            this.bgOpts.h = e.offsetHeight
        },
        bgMove(dom, ev) {
            let bgOpts = this.bgOpts
            let X, Y
            let mouseX = ev.pageX - bgOpts.px
            let mouseY = ev.pageY - bgOpts.py
            if (mouseX > bgOpts.w / 2) {
                X = mouseX - (bgOpts.w / 2)
            } else {
                X = mouseX - (bgOpts.w / 2)
            }
            if (mouseY > bgOpts.h / 2) {
                Y = bgOpts.h / 2 - mouseY
            } else {
                Y = bgOpts.h / 2 - mouseY
            }
            dom.style['-webkit-transform'] = `rotateY(${X / 80}deg) rotateX(${Y / 80}deg)`
            dom.style.transform = `rotateY(${X / 80}deg) rotateX(${Y / 80}deg)`
        },
        bgOut(dom) {
            dom.style['-webkit-transform'] = 'rotateY(0deg) rotateX(0deg)'
            dom.style.transform = 'rotateY(0deg) rotateX(0deg)'
        }
    },
    mounted () {
        productHome().then(res => {
            let data = res.data
            this.floors = data.home_floor
            this.hot = data.home_hot
            console.log(this.floors)
        })
    }
}