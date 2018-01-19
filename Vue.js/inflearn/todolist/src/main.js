import Vue from 'vue'
import App from './App.vue'

import NavHeader from './components/NavHeader.vue';
import GlobalCmp from './components/GlobalCmp.vue';

Vue.component('nav-header', NavHeader);
Vue.component('global-cmp', GlobalCmp);


new Vue({
  el: '#app',
  render: h => h(App)
})
