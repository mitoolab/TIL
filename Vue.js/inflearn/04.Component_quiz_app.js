//Global Component
Vue.component('todo-item', {
  template: '<p>This is a child component</p>'
});

// 실습 #1 - 'todo-footer' 컴포넌트 전역 등록
// <p>This is another child global component</p>를 template으로 갖는 컴포넌트를 등록해보세요.

// 실습 #1
Vue.component('todo-footer-global', {
  template: '<p>This is another child global component</p>'
});


var cmpl = {
  template: '<p>This is another child local component</p>'
};

var app = new Vue({
  el: '#app',
  data: {
    message: 'This is a parent component'
  },
  components: {
    'todo-footer-local': cmpl
  }
});
// 실습 #2 - 'todo-footer' 컴포넌트 지역 등록
// <p>This is another child local component</p>를 template으로 갖는 컴포넌트를 등록해보세요.

// 실습 #2
// var cmpl = {
//   template: '<p>This is another child local component</p>'
// };

// new Vue ({
//   el: '#app',
//   components: {
//     'todo-footer-local': cmpl
//   }
// })