<template>
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
</template>

<script lang="js">
    export default {
        name: "MoneyContent"
    }
</script>

<style scoped lang="scss">
    .content {

        > ul {
            justify-content: space-around;
            align-items: center;

            > li {
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