<template>
    <div>
        <h2>User Page</h2>
        <button type="button" @click="gotoHomeComponent">go to Home</button>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>        
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
