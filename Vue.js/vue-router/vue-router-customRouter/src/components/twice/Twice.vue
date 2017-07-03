<!--
 * Created by sam on 2017. 7. 2..
-->
<template>
  <div>
    <img src="/static/twice/twice-logo.jpg">

    <ul>
      <li v-for="m in members">
        <router-link :to="{ path: '/twice/' + m }">{{ m }}</router-link>
      </li>
    </ul>

    <ul>
      <li v-for="m in members">
        <vueter :to="`/twice/member/${m}`">{{ m }}</vueter>
      </li>
    </ul>


    <router-view></router-view>
  </div>
</template>

<script>

import Vueter from '../util/Vueter'

  export default {
    name: 'Twice',
    components: { Vueter },
    data() {
      return {
        members: ['na-hun', 'da-hun']
      }
    }
  }
</script>
