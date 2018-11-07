<template>
    <div>
        <m-header>
            <div slot="nav"></div>
        </m-header>
        <router-view style="margin-top: 40px;"></router-view>
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
