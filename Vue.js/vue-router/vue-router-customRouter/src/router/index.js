import Vue from 'vue'
import Router from 'vue-router'

import Twice from '@/components/twice/Twice'
import NaHun from '@/components/twice/NaHun'
import DaHun from '@/components/twice/DaHun'
import twiceMemberInfo from '@/components/twice/twiceMemberInfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'na-hun',
      component: NaHun
    },
    {
      path: '/twice',
      name: 'twice',
      component: Twice,
      children: [
        {
          path: 'na-hun',
          name: 'twice-member-na-hun',
          component: NaHun
        },
        {
          path: 'da-hun',
          name: 'twice-member-da-hun',
          component: DaHun
        },
        {
          path: 'member/:memberName',
          name: 'twiceMemberInfo',
          component: twiceMemberInfo
        }
      ]
    }
  ]
})
