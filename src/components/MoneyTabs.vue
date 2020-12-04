<template>
    <div class="topNav">
        <span class="moneyMode" :class="value === '-' && 'selected'" @click="selectType('-')">支出</span>
        <span class="moneyMode" :class="value === '+' && 'selected'" @click="selectType('+')">收入</span>
        <span class="cancel">取消</span>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class MoneyTabs extends Vue {
        @Prop({default: '-'}) readonly value!: string

        selectType(type: string) {
            if (type !== '-' && type !== '+') {
                throw new Error('type is unknown')
            }
            this.$emit('update:value', type)
        }

    }

</script>

<style scoped lang="scss">
    .topNav {
        position: relative;
        padding: 20px 0;
        background: #FFDE4E;
        display: flex;
        justify-content: center;
        align-items: center;

        > .moneyMode {
            padding: 0 20px;
            font-weight: bold;
            font-size: 20px;

            &.selected {

                &::after {
                    content: '';
                    clear: both;
                    display: block;

                    bottom: -20px;
                    left: 0;
                    width: 100%;
                    height: 4px;
                    background: #333333;
                }
            }
        }

        > .cancel {
            position: absolute;
            right: 10px;
        }
    }

</style>