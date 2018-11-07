import MButton from '/components/button'
import MFooter from '/components/common/footer'

export default {
    data() {
        return {
            loginPage: true
        }
    },
    components: {
        MButton,
        MFooter
    },
    methods: {
        login() {
            console.log("Login")
        },
        regist() {
            console.log("regist")
        }
    }
}