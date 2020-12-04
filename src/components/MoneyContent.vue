<template>
    <div class="tag-wrapper">
        <ul>
            <li v-for="tag in tags" :key="tag.id" @click="toggle(tag)" :class="{selected:selectedTag.indexOf(tag)>=0}">
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#icon-${tag.icon}`"></use>
                </svg>
                <span>{{tag.name}}</span>

            </li>
            <li >
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-setting"></use>
                </svg>
                <span>设置</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class MoneyContent extends Vue {

        @Prop() tags: string[] | undefined;
        selectedTag: string[] = [];


        toggle(tag: string) {
            //如果有selected这个 class
            if (this.selectedTag.indexOf(tag) >= 0) {
                //就slice掉
                this.selectedTag.splice(this.selectedTag.indexOf(tag), 1)
            } else {
                //否则push进去
                this.selectedTag.push(tag)
            }
            this.$emit('update:value', this.selectedTag)
        }

    }
</script>

<style scoped lang="scss">
    .tag-wrapper {


        > ul {
            flex-wrap: wrap;

            > li {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 25%;
                margin: 10px 0 5px 0;
                flex-direction: column;

                &.selected {
                    > svg {
                        background: #FFDE4E;
                        border-radius: 50%;
                    }

                }

                > svg {
                    background: #F7F7F7;
                    border-radius: 50%;
                }
            }


        }
    }

    .icon {

        width: 3em;
        height: 3em;
    }
</style>