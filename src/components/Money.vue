<template>
    <default-layout>
        {{record}}
        <MoneyTabs :value.sync="record.tab" />
        <MoneyContent :tags.sync="tags" @update:value="updateContent"/>
        <MoneyNumberPad @update:value="updateNumberPad(arguments)"/>
    </default-layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import MoneyTabs from "@/components/MoneyTabs.vue";
    import MoneyContent from "@/components/MoneyContent.vue";
    import MoneyNumberPad from "@/components/MoneyNumberPad.vue";
    import {Component} from "vue-property-decorator";

    type Record = {
        content: object;
        tab: string;
        numberPad: object;
    }
    @Component({
        components: {MoneyNumberPad, MoneyContent, MoneyTabs},
    })
    export default class Money extends Vue {

        tags = [
            {icon: 'study', name: '学习', id: '1'},
            {icon: 'gift', name: '礼物', id: '2'},
            {icon: 'daily', name: '日用', id: '3'},
            {icon: 'pet', name: '宠物', id: '4'},
            {icon: 'sports', name: '运动', id: '5'},
            {icon: 'fix', name: '维修', id: '6'},
        ];
        record: Record = {content: {}, tab: '+', numberPad: []};

        updateContent(value: object) {
            this.record.content = value
        }

        updateNumberPad(value: object) {
            console.log(value);
            this.record.numberPad = value

        }
    }
</script>
<style scoped lang="scss">

</style>