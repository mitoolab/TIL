<template>
    <div>
        <h2>User Page</h2>
        <button type="button" @click="gotoHomeComponent">go to Home</button>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
         methods: {
             gotoHomeComponent() {
                 this.$router.push({ name: 'home' });
            }
        }    
    }
</script>

<style lang="scss">

</style>
