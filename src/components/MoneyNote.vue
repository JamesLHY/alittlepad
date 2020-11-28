<template>
    <div class="note">
            <span>
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-note"></use>
            </svg>
                备注:</span>
        <input type="text" placeholder="点击添加备注..">
        <span>0</span>
    </div>
</template>

<script lang="ts">
    export default {
        name: "MoneyNote"
    }
</script>

<style scoped lang="scss">
    .icon{
        width: 1em;
        height: 1em;
    }
    .note {
        background: #EEF4F6;
        font-size: 20px;
        padding: 12px 0;
        display: flex;
        justify-content: center;
        align-items: center;

        > span {
            flex-grow: 1;
        }

        > input {
            font-size: 20px;
            background: #EEF4F6;
            flex-grow: 2;
            border: none;

            &::placeholder {
                color: grey;
                font-size: 20px;
            }
        }
    }
</style>