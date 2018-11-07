<template>
    <div class="w store-content">
        <div class="gray-box">
            <div class="gallery-wrapper">
                <div class="gallery">
                    <div class="thumbnail">
                        <ul>
                            <li v-for="item in small" :class="{on:big===item}" @click="big=item">
                                <img v-lazy="item" :alt="product.name">
                            </li>
                        </ul>
                    </div>
                    <div class="thumb">
                        <div class="big">
                            <img :src="big" :alt="product.name">
                        </div>
                    </div>
                </div>
            </div>
            <!-- 右边 -->
            <div class="banner">
                <div class="sku-custom-title">
                    <h4>{{product.name}}</h4>
                    <h6>
                        <span>{{product.sub_name}}</span>
                        <span class="price">
                        <em>¥</em><i>{{product.price}}</i></span>
                    </h6>
                </div>
                <div class="num">
                    <span class="params-name">数量</span>
                    <m-buy-num @edit-num="editNum" :limit="Number(10)"></m-buy-num>
                </div>
                <div class="buy">
                    <m-button text="加入购物车"
                        classStyle="main-btn"
                        @btnClick="addCart(product.id,product.price,product.name,product.productImageBig)"
                        style="width: 145px;height: 50px;line-height: 48px"></m-button>
                    <m-button text="现在购买"
                        @btnClick="checkout(product.productId)"
                        style="width: 145px;height: 50px;line-height: 48px"></m-button>
                </div>
            </div>
        </div>

        <div class="item-info">
            <m-shelf title="产品信息">
                <div slot="content">
                    <div class="img-item" v-if="productMsg">
                        <img src="/static/images/logo.png">
                    </div>
                    <div class="no-info" v-else>
                        该产品暂无内容
                    </div>

                </div>
            </m-shelf>
        </div>
    </div>
</template>


<script src="./item.js"></script>

<style lang="scss" src="./item.scss" scoped></style>