<template>
    <default-layout>
        <MoneyTabs/>
        <MoneyContent :tags="tags"/>
        <MoneyNote/>
        <MoneyNumberPad/>
    </default-layout>
</template>

<script lang="js">
    import MoneyTabs from "@/components/MoneyTabs";
    import MoneyContent from "@/components/MoneyContent";
    import MoneyNumberPad from "@/components/MoneyNumberPad";
    import MoneyNote from "@/components/MoneyNote";

    export default {
        name: "Money",
        components: {MoneyNote, MoneyNumberPad, MoneyContent, MoneyTabs},
        data() {
            return {
                tags: [
                    {icon: 'study', name: '学习'},
                    {icon: 'gift', name: '礼物'},
                    {icon: 'daily', name: '日用'},
                    {icon: 'pet', name: '宠物'}
                ]
            }

        }
    }
</script>
<style scoped lang="scss">

</style>