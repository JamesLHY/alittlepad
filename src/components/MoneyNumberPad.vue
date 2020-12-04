<template>
    <div>
        <div class="note">
            <span>
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-note"></use>
            </svg>
                备注:
            <input type="text" placeholder="添加备注.." v-model="value">
            </span>
            <span>{{output}}</span>
        </div>
        <div class="numberPad">
            <button @click="input">7</button>
            <button @click="input">8</button>
            <button @click="input">9</button>
            <button >今天</button>

            <button @click="input">4</button>
            <button @click="input">5</button>
            <button @click="input">6</button>

            <button @click="input">1</button>
            <button @click="input">2</button>
            <button @click="input">3</button>
            <button @click="ok">完成</button>

            <button @click="input">.</button>
            <button @click="input">0</button>
            <button @click="remove">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-delete"></use>
                </svg>
            </button>


        </div>
    </div>

</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Watch} from "vue-property-decorator";

    @Component
    export default class MoneyNumberPad extends Vue {
        output = '0';
        value = '';

        input(event: MouseEvent) {
            const button = (event.target as HTMLButtonElement);
            const input = button.textContent as string;
            if (this.output.length === 8) {
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

        ok() {
            this.$emit('update:value', this.output, this.value)
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
            min-height: 64px;
            float: left;
            border: none;
            background: #EEF4F6;
            border-top: 1px solid #E8EcED;
            border-right: 1px solid #E8EcED;

            &:nth-child(1), &:nth-child(5), &:nth-child(9), &:nth-child(13) {
                border-left: 1px solid #E8EcED;
            }
            &:nth-child(4), &:nth-child(11){
                min-height: 64*2px;
                float: right;
            }
            &:nth-child(13), &:nth-child(14), &:nth-child(15), &:nth-child(16) {
                border-bottom: 1px solid #E8EcED;
            }
            &:nth-child(11){
                background: #FFDE4E;
            }
        }
    }

    .icon {
        width: 1em;
        height: 1em;
    }

    .note {
        background: #EEF4F6;
        font-size: 20px;
        padding: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        > span {
            > input {
                font-size: 20px;
                background: #EEF4F6;
                border: none;
                width: 150px;

                &::placeholder {
                    color: grey;
                    font-size: 16px;
                }
            }
        }


    }
</style>