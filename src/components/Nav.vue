<template>
    <div class="router-link-container">
        <router-link to="/labels" active-class="selected" v-on:click.native.once="labelChange">
            <svg class="icon" aria-hidden="true" :class="{labelSelected:!labelIsActive}">
                <use xlink:href="#icon-selected-label"></use>
            </svg>
            <svg class="icon" aria-hidden="true" :class="{labelSelected:labelIsActive}">
                <use xlink:href="#icon-label"></use>
            </svg>
            <span>标签</span>
        </router-link>

        <router-link to="/money" active-class="selected">
            <div class="tuber">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-jiahao"></use>
                </svg>
            </div>
            <span class="tuber-name">记账</span>
        </router-link>

        <router-link to="/statistic" active-class="selected" v-on:click.native.once="statisticChange">
            <svg class="icon" aria-hidden="true" :class="{statisticSelected:!statisticIsActive}">
                <use xlink:href="#icon-selected-statistic"></use>
            </svg>
            <svg class="icon" aria-hidden="true" :class="{statisticSelected:statisticIsActive}">
                <use xlink:href="#icon-statistic"></use>
            </svg>
            <span>数据</span>
        </router-link>
    </div>
</template>

<script lang="js">
    export default {
        name: "Nav",
        data() {
            return {
                labelIsActive: false,
                statisticIsActive: false
            }
        },
        methods: {
            labelChange: function () {
                this.labelIsActive = !this.labelIsActive;
            },
            statisticChange: function () {
                this.statisticIsActive = !this.statisticIsActive;
            }
        }
    }

</script>

<style scoped lang="scss">
    .labelSelected {
        display: none;
    }

    .statisticSelected {
        display: none;
    }

    .tuber {
        position: absolute;
        border-radius: 50%;
        bottom: 20px;
        background: #fdda48;
        padding: 14px;
        margin: 0 auto;
        box-shadow: 0px 0px 1px 1px #bbbbb4;
    }

    .tuber-name {
        bottom: 0;
        position: absolute;
    }

    .router-link-container {

        position: relative;
        min-height: 40px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        box-shadow: 0px 2px 2px 3px #bbbbb4;

        > .selected {
            .tuber {
                > svg {
                    color: #fdda48;
                    animation-duration: .2s;
                    animation-name: icon;
                }
            }

            > svg {
                color: #fdda48;
                animation-duration: .2s;
                animation-name: icon;
            }
        }
    }

    @keyframes icon {
        from {
            transform: scale(0.5);
        }

        to {
            transform: scale(1);
        }
    }

</style>