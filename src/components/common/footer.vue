<template>
    <div class="footer">
        <div class="tag">
            <a href="javascript:;">中文</a>
            <a href="javascript:;">English</a>
            <a href="javascript:;">常见问题</a>
        </div>
        <div class="copyrigth">
            <p>Copyright © 2017-2018  xxx.com 版权所有</p>
        </div>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss">
    .footer {
        padding: 50px 0 20px;
        background: #fff;
        margin-top: 20px;
    }
    .tag {
        display: flex;
        justify-content: center;
        a {
            height: 14px;
            padding: 0 10px;
            line-height: 14px;
        }
        a + a {
            border-left: 1px solid #666;
        }
    }
    .copyrigth {
        text-align: center;
        margin: 10px 0;
    }
</style>
