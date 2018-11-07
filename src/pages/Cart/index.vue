<template>
    <div class="shoppng-cart">
        <m-header>
            <div slot="nav"></div>
        </m-header>

        <div class="store-content page-cart">
            <div class="gray-box">
                <div class="title"><h2>购物清单</h2></div>
                <div >
                    <div class="ui-cart">
                        <div>
                            <!-- 标题 -->
                            <div class="cart-table-title">
                                <span class="name">商品信息</span>
                                <span class="operation">操作</span>
                                <span class="subtotal">小计</span>
                                <span class="num">数量</span>
                                <span class="price1">单价</span>
                            </div>
                            <div class="cart-table">
                                <div class="cart-group divide pr">
                                    <div class="cart-top-items">
                                        <div class="cart-items clearfix">
                                            <!--勾选-->
                                            <div class="items-choose">
                                                <span class="blue-checkbox-new "></span>
                                            </div>
                                            <!--图片-->
                                            <div class="items-thumb fl">
                                                <img>
                                                <a href="javascript:;" title="xxxxxxx" target="_blank"></a>
                                            </div>
                                            <!--信息-->
                                            <div class="name hide-row fl">
                                                <div class="name-table">
                                                    <a href="javascript:;" title="item.productName" target="_blank"></a>
                                                    <ul class="attribute">
                                                        <li>白色</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <!--删除按钮-->
                                            <div class="operation">
                                                <a class="items-delete-btn" @click="cartdel(item.productId)"></a>
                                            </div>
                                            <!--商品数量-->
                                            <div>
                                                <!--总价格-->
                                                <div class="subtotal" style="font-size: 14px">¥ 12</div>
                                                <!--数量-->
                                                <m-buynum
                                                         style="height: 140px;
                                                           display: flex;
                                                           align-items: center;
                                                           justify-content: center;"
                                                         :limit="5"
                                                         @edit-num="EditNum"
                                                >
                                                </m-buynum>
                                                <!--价格-->
                                                <div class="price1">¥ 123</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cart-bottom-bg fix-bottom">
                        <div class="fix-bottom-inner">
                            <div class="cart-bar-operation">
                                <div>
                                    <div class="choose-all">
                                        <span :class="{'checkbox-on':checkAllFlag}" class="blue-checkbox-new" @click="editCheckAll"></span>全选
                                    </div>
                                    <div class="delete-choose-goods">删除选中的商品</div>
                                </div>
                            </div>
                            <div class="shipping">
                                <div class="shipping-box">
                                    <div class="shipping-total shipping-num">
                                        <h4 class="highlight">已选择 <i v-text="checkNum"></i> 件商品</h4>
                                        <h5>共计 <i v-text="totalNum"></i> 件商品</h5>
                                    </div>
                                    <div class="shipping-total shipping-price">
                                        <h4 class="highlight">应付总额：<span>￥</span><i v-text="checkPrice"></i></h4>
                                        <h5 class="shipping-tips ng-scope">应付总额不含运费</h5>
                                    </div>
                                </div>

                                <m-button :classStyle="checkNum > 0 ? 'main-btn':'disabled-btn'"
                                    class="big-main-btn"
                                    style="margin: 0;width: 130px;height: 50px;line-height: 50px;font-size: 16px"
                                    text="现在结算" @btnClick="checkout">
                                </m-button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 没有商品 -->
<!--                 <div style="padding: 50px">
                    <div class="cart-e"></div>
                    <p style="text-align: center;padding: 20px;color: #8d8d8d">您的购物车中还没有商品</p>
                    <div style="text-align: center">
                        <router-link to="/goods">
                            <m-button text="现在选购" style="width: 150px;height: 40px;line-height: 38px;color: #8d8d8d"></m-button>
                        </router-link>
                    </div>
                </div> -->
            </div>
        </div>
        <m-footer></m-footer>
    </div>
</template>

<script src="./cart.js"></script>

<style lang="scss" src="./cart.scss", scoped></style>