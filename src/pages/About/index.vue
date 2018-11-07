<template>
    <div class="w">

    </div>
</template>

<script>
    import MHeader from '/components/common/header'
    import MFooter from '/components/common/footer'
    import AboutContent from './aboutContent.vue'


    export default {
        data() {
            return {}
        },

        components: {
            AboutContent,
            MHeader,
            MFooter
        }
    }
</script>


<style lang="scss" scoped>
    @import "../../assets/style/mixin";

    .w {
        padding-top: 20px;
    }
    .content {
        display: flex;
        width: 1320px;
        max-width: 1920px;
        min-height: 600px;
        padding: 0 0 25px;
        margin: 0 auto;
    }

</style>
