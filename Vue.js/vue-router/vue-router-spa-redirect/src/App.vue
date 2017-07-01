<template>
  <div id="app" class="container">
    <h1><abbr title="Single Page Application">SPA</abbr></h1>
    <router-view name="gnb"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>

<style lang="sass">
.container
  width: 940px
  margin:
    left: auto
    right: auto

.router-link-active,
.current-page a
  textdecoration: none 
  font-weight: 900
  background: #303030
  color: #fff
</style>
