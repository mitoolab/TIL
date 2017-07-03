<!--
 * Created by sam on 2017. 7. 2..
-->
<template>
  <div>
    <img :src="`/static/twice/${memberName}.jpg`">
  </div>
</template>

<script>

  import EventBus from '../../script/EventBus'

  export default {
    name: 'twiceMemberInfo',
    data() {
      return {
        memberName: ''
      }
    },
    created() {
      EventBus.$on('memberPageMove', this.memberPageMove)
      this.memeberPageMove()
      window.addEventListener('popstate', this.memberPageMove)
    },
    destoryed() {
      window.removeEventListener('popstate', this.memberPageMove)
    },
    methods: {
      memberPageMove() {
        console.log(this.$route.params.memberName)
        const memberName = this.$route.params.memberName

        if(this.memberName !== memberName) {
          this.memberName = memberName
          window.history.replaceState({memberName}, undefined, undefined)
        }
      }
    }
  }
</script>
