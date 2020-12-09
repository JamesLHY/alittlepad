<template>
    <default-layout>
        {{recordList}}
        <MoneyTabs :value.sync="record.tab"/>
        <MoneyContent :data-source.sync="tags" @update:value="updateContent"/>
        <MoneyNumberPad @update:value="updateNumberPad(arguments)" @saveRecord="saveRecord"/>
    </default-layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import MoneyTabs from "@/components/MoneyTabs.vue";
    import MoneyContent from "@/components/MoneyContent.vue";
    import MoneyNumberPad from "@/components/MoneyNumberPad.vue";
    import {Component, Watch} from "vue-property-decorator";

    type Record = {
        content: object;
        tab: string;
        numberPad: object;
        createAt?: Date;
    }

    @Component({
        components: {MoneyNumberPad, MoneyContent, MoneyTabs},
    })
    export default class Money extends Vue {

        tags = [
            {icon: 'study', name: '学习'},
            {icon: 'gift', name: '礼物'},
            {icon: 'daily', name: '日用'},
            {icon: 'pet', name: '宠物'},
            {icon: 'sports', name: '运动'},
            {icon: 'fix', name: '维修'},
        ];
        record: Record = {content: {}, tab: '+', numberPad: []};
        recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]')

        updateContent(value: object) {
            this.record.content = value
        }

        updateNumberPad(value: object) {
            this.record.numberPad = value
        }

        saveRecord() {
            const record2: Record = JSON.parse(JSON.stringify(this.record));
            record2.createAt = new Date()
            this.recordList.push(record2)
        }

        @Watch('recordList')
        onRecordListChange() {
            window.localStorage.setItem('recordList', JSON.stringify(this.recordList))
        }
    }
</script>
<style scoped lang="scss">

</style>