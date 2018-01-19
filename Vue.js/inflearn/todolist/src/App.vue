<template>
  <div id="app">
    <nav-header></nav-header>
    <login-form></login-form>
    <local-cmp></local-cmp>
    <global-cmp></global-cmp>
  </div>
</template>

<script>
import LoginForm from './components/LoginForm.vue';
import LocalCmp from './components/LocalCmp.vue';

export default {
  components: {
    'login-form': LoginForm,
    'local-cmp' : LocalCmp
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
