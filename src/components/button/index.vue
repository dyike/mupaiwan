<template>
    <input :type="inputType"
        readonly
        :class="classStyle"
        @click="btnClick($event)"
        :disabled="classStyle==='disabled-btn'"
        :value="text">
</template>

<script src="./button.js"></script>

<style lang="scss", rel="stylesheet/scss" src="./button.scss" scoped></style>
