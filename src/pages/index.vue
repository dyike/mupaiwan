<template>
    <div>
        <m-header></m-header>
        <router-view class="main"></router-view>
        <m-footer></m-footer>
    </div>
</template>

<script>
    import MHeader from '/components/common/header'
    import MFooter from '/components/common/footer'

    export default {
        components: {
            MHeader,
            MFooter
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../assets/style/mixin";
    .main {
        min-height: calc(100vh - 234px);
        background: #ededed;
        overflow: hidden;
        width: 100%;
    }
</style>
