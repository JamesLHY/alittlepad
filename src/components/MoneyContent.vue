<template>
    <div class="content">
        <ul>
            <li v-for="tag in tags" :key="tag" @click="select(tag)" :class="{selected:selectedTag.indexOf(tag)>=0}">
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#icon-${tag.icon}`"></use>
                </svg>
                <span>{{tag.name}}</span>
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

        select(tag: string) {
            //如果有selected这个 class
            if (this.selectedTag.indexOf(tag) >= 0) {
                //就slice掉
                this.selectedTag.splice(this.selectedTag.indexOf(tag), 1)
            } else {
                //否则push进去
                this.selectedTag.push(tag)
            }

        }
    }
</script>

<style scoped lang="scss">
    .content {

        > ul {
            justify-content: space-around;
            align-items: center;

            > li {
                display: flex;
                flex-direction: column;
                margin: 20px 0;

                &.selected {
                    background: #FFDE4E;
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