<template>
    <div class="gray-box">
        <div class="title">
            <h2>{{title}}</h2>
            <div>
                <slot name="right"></slot>
            </div>
        </div>
        <div>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script src="./shelf.js"></script>

<style lang="scss", rel="stylesheet/scss" src="./shelf.scss"></style>