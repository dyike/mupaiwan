<template>
    <div class="goods">
        <div class="nav">
            <div class="w">
                <a href="javascript:;" @click="reset()" :class="{active:sortType===1}">综合排序</a>
                <a href="javascript:;" @click="sort(1)" :class="{active:sortType===2}">价格从低到高</a>
                <a href="javascript:;" @click="sort(-1)" :class="{active:sortType===3}">价格从高到低</a>
                <div class="price-interval">
                    <input type="number" class="input" placeholder="价格" v-model="min">
                    <span style="margin: 0 5px"> - </span>
                    <input type="number" placeholder="价格" v-model="max">
                    <m-button text="确定" classStyle="main-btn" style="margin-left: 10px;" @btnClick="reset"></m-button>
                </div>
            </div>
        </div>

        <div class="goods-box w">
            <mall-goods v-for="(item, i) in products" :key="i" :msg="item"></mall-goods>
        </div>
        <div v-show="!busy" class="w" style="text-align: center;background: #fff" v-infinite-scroll="loadMore"
            infinite-scroll-disabled="busy" infinite-scroll-distance="100">
        正在加载中...
        </div>
    </div>
</template>

<script src="./goods.js"></script>

<style lang="scss" rel="stylesheet/scss" src="./goods.scss" scoped></style>
