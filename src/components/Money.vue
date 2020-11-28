<template>
    <default-layout class="container" ref="container">
        <MoneyTabs class="moneyTabs" ref="moneyTabs"/>
        <MoneyContent class="moneyContent" ref="moneyContent"/>
        <MoneyNote class="moneyNote" ref="moneyNote"/>
        <MoneyNumberPad class="moneyNumberPad" ref="moneyNumberPad"/>
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

    }
</script>
<style scoped lang="scss">

</style>