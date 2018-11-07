<template>
    <div class="w">
        <m-shelf title="支付成功" style="text-align: center">
            <div slot="content" class="content">
                <p>恭喜你支付成功，总共花费 <span class="price"><em style="font-size: 18px">¥</em>{{price}}</span> 元</p>
                <div style="margin-top: 20px;">
                    <router-link to="/user">
                        <m-button text="查看订单"
                            style="width: 150px;height: 50px;line-height: 48px;font-size: 20px"
                            classStyle="main-btn">
                        </m-button>
                    </router-link>
                    <router-link to="/home">
                        <m-button text="继续选购"
                            style="width: 150px;height: 50px;line-height: 48px;font-size: 20px"
                            classStyle="main-btn">
                        </m-button>
                    </router-link>
                </div>
            </div>
        </m-shelf>
    </div>
</template>


<script>
    import MShelf from '/components/shelf'
    import MButton from '/components/button'
    export default {
        data() {
            return {
                price: 10
            }
        },
        components: {
            MShelf,
            MButton
        },
        created() {
            this.price = this.$route.query.price
        }
    }
</script>


<style lang="scss" scoped>
    .content {
        padding: 150px 0;
        font-size: 30px;
    }

    span.price {
        color: #d44d44;
        font-weight: 700;
        line-height: 20px;
        text-align: right;
    }
</style>
