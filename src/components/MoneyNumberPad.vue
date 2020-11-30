<template>
    <div class="numberPad">
        {{output}}
        <button @click="input">1</button>
        <button @click="input">2</button>
        <button @click="input">3</button>
        <button>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-date"></use>
            </svg>
        </button>
        <button @click="input">4</button>
        <button @click="input">5</button>
        <button @click="input">6</button>

        <button @click="remove">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-delete"></use>
            </svg>
        </button>
        <button @click="input">7</button>
        <button @click="input">8</button>

        <button @click="input">9</button>
        <button>完成</button>


    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from "vue-property-decorator";

    @Component
    export default class MoneyNumberPad extends Vue {
        output = '0';

        input(event: MouseEvent) {
            const button = (event.target as HTMLButtonElement);
            const input = button.textContent as string;
            if (this.output.length === 16) {
                return;
            }
            if (this.output === '0') {
                if ('0123456789'.indexOf(input) >= 0) {
                    this.output = input
                } else {
                    this.output += input
                }
                return
            }
            if (this.output.indexOf('.') >= 0 && input === '.') {
                return;
            }
            this.output += input

        }

        remove() {
            if (this.output.length === 1) {
                this.output = '0'
            } else {
                this.output = this.output.substring(0, this.output.length - 1)
            }

        }
    }
</script>

<style scoped lang="scss">
    .icon {
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