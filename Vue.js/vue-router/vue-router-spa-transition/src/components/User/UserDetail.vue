<template>
    <div>
        <h3>Selected User Detail Information</h3>
        <p>Selected User ID {{ $route.params.id }}</p>
        <router-link 
            :to= "{ 
                name: 'userEdit', 
                params: { id: $route.params.id }, 
                query: { locale: 'ko', amount: 100 } }" 
            type= "button"
            tag= "button">Edit</router-link>
    </div>
</template>


<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss">

</style>
