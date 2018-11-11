<template>
    <div class="home">
        <div class="banner">
<!--             <div class="bg" ref="bg"
                @mouseover="bgOver($refs.bg)"
                @mousemove="bgMove($refs.bg, $event)"
                @mouseout="bgOut($refs.bg)">
                <span class="img a"></span>
                <span class="text b">以傲慢与偏执<br/>回敬傲慢与偏见</span>
            </div> -->
            <slide class="bg" :slides="slides" :inv="inv" :name="transitionName1" :target="target"></slide>
        </div>

        <section class="w mt30 clearfix">
            <m-shelf title="热门商品">
                <div slot="content" class="hot">
                    <mall-goods :msg="item" v-for="(item,i) in hot" :key="i"></mall-goods>
                </div>
            </m-shelf>
        </section>

        <section class="w mt30 clearfix">
            <m-shelf title="测试">
                <div slot="content" class="floors">
                    <div class="imgbanner">
                        <!-- <img v-lazy="floors[i].image.image" :alt="item.title"> -->
                        <img src="/static/images/logo.png">
                    </div>
                    <mall-goods :msg="tab" v-for="(tab,i) in floors" :key="i"></mall-goods>
                </div>
            </m-shelf>
        </section>
    </div>
</template>

<script src="./home.js"></script>

<style lang="scss" rel="stylesheet/scss" src="./home.scss" scoped></style>