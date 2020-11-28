<template>
    <div class="numberPad">
        {{output}}
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-date"></use>
            </svg>
            今天
        </button>
        <button @click="input">4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-delete"></use>
            </svg>
        </button>
        <button>完成</button>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from "vue-property-decorator";
    @Component
    export default class MoneyNumberPad extends Vue{
        output='';
        input(event: MouseEvent){
            const button = (event.target as HTMLButtonElement)
            this.output += button.textContent
        }
    }
</script>

<style scoped lang="scss">
    .icon{
        width: 1.5em;
        height: 1.5em;
    }
    .numberPad {
        > button {
            font-size: 20px;
            width: 25%;
            height: 64px;
            float: left;
            border: none;
            background: #EEF4F6;
            border-top: 1px solid #E8EcED;
            border-right: 1px solid #E8EcED;

            &:nth-child(1), &:nth-child(5), &:nth-child(9), &:nth-child(13) {
                border-left: 1px solid #E8EcED;
            }

            &:nth-child(13), &:nth-child(14), &:nth-child(15), &:nth-child(16) {
                border-bottom: 1px solid #E8EcED;
            }
        }
    }
</style>