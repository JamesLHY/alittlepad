<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    body,ul{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: inherit;
        -webkit-tap-highlight-color:rgba(0,0,0,0)
    }
    .icon {
        width: 2em;
        height: 2em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    ul {
        display: flex;
        flex-direction: row;
        > li{
            list-style: none;
        }
    }
    button, input{
        outline: none;
    }
</style>
<script>

    export default {

    }
</script>