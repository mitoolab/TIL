<template>
  <div>
    <a @click="click">
        <slot></slot>
    </a>
  </div>
</template>

<script>

import EventBus from '../../script/EventBus'

export default {
  name: 'Vueter',
  props: ['to'],
  methods: {
      click() {
          this.$router.push({
              path: this.to,
              force: false
          })
          EventBus.$emit('memberPageMove')
      }
  }
}
</script>
