<template>
    <div class="item-cols-num clearfix">
        <div class="select">
            <span class="down"
                @click.stop.prevent="down()"
                :class="{'down-disabled':Num<=1}">-
            </span>
            <span class="num">
                <input type="text"
                   :class="{show:show}"
                   v-model="Num>=limit?limit:Num"
                   @blur="blur()"
                   maxlength="2">
                        <ul ref="ul">
                            <li v-for="i in numList">{{i}}</li>
                        </ul>
            </span>
            <span class="up" :class="{'up-disabled':Num>=limit}"
                @click.stop.prevent="up()">+
            </span>
        </div>
    </div>
</template>

<script src="./buynum.js"></script>
<style lang="scss", rel="stylesheet/scss" src="./buynum.scss" scoped></style>
