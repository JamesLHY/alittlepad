<template>
    <div class="container">
        <div class="content">
           <slot/>
        </div>
       <Nav/>
    </div>

</template>

<script lang="ts">
    import Nav from "@/components/Nav.vue";
    export default {
        name: "DefaultLayout",
        components: {Nav}
    }
</script>

<style scoped lang="scss">
    .container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .content {
        flex-grow: 1;
        overflow: auto;

    }
</style>