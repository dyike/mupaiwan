<template>
    <div class="w">
        <div class="top">
        </div>
        <section class="w mt30 clearfix">
            <m-shelf title="套餐介绍">
                <div slot="content" class="">
                </div>
            </m-shelf>
        </section>
        <section class="w mt30 clearfix">
            <m-shelf title="联系客服">
                <div slot="content" class="">
                </div>
            </m-shelf>
        </section>
    </div>
</template>

<script>
    import MHeader from '/components/common/header'
    import MFooter from '/components/common/footer'
    import MShelf from '/components/shelf'

    export default {
        data() {
            return {}
        },

        components: {
            MHeader,
            MFooter,
            MShelf
        }
    }
</script>


<style lang="scss" scoped>
    .top {
        height: 620px;
        background-image: url(//static.smartisanos.cn/service/assets/images/top.5dc20d0b797aa46fec1a159a016751c7.jpg);
        background-color: #131313;
        position: relative;
        top: -90px;
        margin-bottom: -90px;
    }
    .mt30 {
        margin-top: 30px;
    }
</style>
