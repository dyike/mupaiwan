<template>
    <div class="card-item">
        <div style="">
            <div class="good-img">
                <router-link :to="'item?p='+msg.id">
                    <img src="/static/images/logo.png">
                </router-link>
            </div>
            <h6 class="good-title">{{msg.name}}</h6>
            <h3 class="sub-title ellipsis">{{msg.sub_name}}</h3>
            <div class="good-price pr">
                <div class="ds pa">
                    <router-link :to="'item?p='+msg.id">
                        <m-button text="查看详情" style="margin: 0 5px"></m-button>
                    </router-link>
                    <m-button text="加入购物车"
                        style="margin: 0 5px"
                        classStyle="main-btn"
                        @btnClick="addCart(msg.productId,msg.salePrice,msg.productName,msg.productImageBig)">
                    </m-button>
                </div>
                <p><span style="font-size: 16px">￥</span>{{msg.price}}</p>
            </div>
        </div>
    </div>
</template>