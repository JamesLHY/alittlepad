<template>
    <default-layout>
       <MoneyTabs/>
        <div class="content">
            <ul>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-selected-statistic"></use>
                    </svg>
                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-selected-statistic"></use>
                    </svg>
                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-selected-statistic"></use>
                    </svg>
                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-selected-statistic"></use>
                    </svg>
                </li>
            </ul>

        </div>
    </default-layout>
</template>

<script lang="js">
    import MoneyTabs from "@/components/MoneyTabs";
    export default {
        name: "Money",
        components: {MoneyTabs},
    }
</script>
<style scoped lang="scss">





    .content {
        > ul {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;

            > li {
                list-style: none;
                padding: 20px 0;
            }
        }
    }

    .icon {
        clip-path: circle(40%);
        width: 4.6em;
        height: 4.6em;


    }
</style>