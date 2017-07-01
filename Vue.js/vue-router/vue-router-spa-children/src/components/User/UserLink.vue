<template>
    <button type="button" @click="gotoHomeComponent">
    <slot></slot>
    </button>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            gotoHomeComponent() {
                // 경로
                // this.$router.push('/');
                this.$router.push({path: '/'});
            }
        }
    }
</script>

<style lang="scss">

</style>
