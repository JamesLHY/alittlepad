<template>
    <div class="router-link-container">
        <router-link to="/money">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-Moneybag"></use>
            </svg>
            <span>记账</span>
        </router-link>
        <router-link to="/labels">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-label"></use>
            </svg>
            <span>标签</span>
        </router-link>
        <router-link to="/statistic">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-DataHistogram-1"></use>
            </svg>
            <span>数据</span>
        </router-link>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Nav"
    }
</script>

<style scoped lang="scss">
    .icon {
        width: 2em;
        height: 2em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    .router-link-container {
        min-height: 40px;
        border: 1px solid red;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color:#333;
    }
</style>