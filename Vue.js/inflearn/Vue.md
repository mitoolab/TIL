# 01. Vue.js 강의

## Vue 시작하기

1. Vue의 특징?
- MVVM 패턴의 ViewModel 레이어에 해당하는 View 단 라이브러리
```
- View - DomListeners - Model
- Model - Data Bindings - View
```
- 데이터바이딩, 화면 단위를 컴포넌트 형태로 제공하며, 관련 API를 지원
- Angular의 2 way data bindings 제공 : 데이터와 화면의 데이터가 동일하다
- Component 간 통신의 기본 골격은 React의 1 way Data Flow와 유사(부모 -> 자식)
- Virtual DOM 을 이용한 렌더링 방식 (React와 거의 유사)
- 다른 프레임워크와 비교했을 때 훨씬 가볍고 빠르다
- 러닝커브가 낮고, 쉽게 접근 가능

---

2. MVVM 패턴
- Backend 로직과 Client의 마크업 & 데이터 표현단을 분리하기 위한 구조로 전통적인 MVC 패턴의 방식에서 기인하였다.
간단하게 생각해서 화면 앞단 동작 관련 로직과 뒷단의 DB 데이터 처리 및 서버 로직을 분리하고, 뒷단에서 넘어온 데이터를 Model 에 담아 View로 넘어주는 중간 지점이라고 보면되겠다.
```
View - (dataBinding) - ViewModel - Moel
```

---

## Instance

3. Vue Instance
- Vue.js를 이용하여 UI 화면을 개발하기 위해서는 아래 절차를 따른다.
```js
var vm = new Vue({
  //...
})
```
- Vue의 기반개념 및 Component와 밀접한 관계가 있다.
- 옵션
```js
var vm = new Vue({
  template: ..,
  el: ..,
  methods: {

  },
  created: {

  }
})
```
- `template` : 화면에 나타나는 한개의 요소들 (div, p, button, 데이터 연결)
- `el` : 화면의 시작점 (id, class 등)
- `methods` : 클릭, 기타 http요청 등 선언
- `created` : 라이브사이클 훅
- 재사용 : 기타 옵션값들을 추가로 포함하거나, 미리 정의해놓고 편하게 사용하기 위해서 사용
```js
var MyComponent = Vue.extend({
  template: '<p>Hello {{ message }}</p>',
  data: {
    message: 'Vue'
  }
})

var MyComponentInstance = new MyComponent()
```
- custom element로 작성 또는 Component import 하는 것이 좋다 (공식문서 추천사항)

---

4. Vue Instance 라이프사이클
- Vue 객체가 생성될 때 아래의 초기화 작업을 수행한다.
  - 데이터 관촬 : 화면에서 데이터가 변화하였을때 감지
  - 템플릿 컴파일 : 뷰가 가지고 있는 데이터를 html에 넘겨줘서 뷰의 내용까지 반영하여 문서화 될 수 있도록 변경해주는 것
  - DOM에 객체 연결 : Dom의 변화에 Vue가 자연스럽게 화면 갱신
  - 데이터 변경시 DOM업데이트

```js
var vm = new Vue({
  data: {
    a: 1
  },
  created: function () {
    console.log(`a is: ` + this.a)
  }
})
```
- 초기화 메서드로 커스텀 로직을 수행하기 때문에 Vue에서는 따로 컨트롤러를 가지고 있지 않다.

---

## Components

5. Vue Components
- 화면에 비춰지는 뷰의 단위를 쪼개어 재활용이 가능한 형태로 관리하는 것이 컴포넌트

---

6. 전역, 지역 컴포넌트 등록
- 컴포넌트를 뷰 인스턴스에 등록해서 사용할 때 다음과 같이 global 하게 등록할 수 있다.
```js
Vue.component('my-component', {
  //..
})
```

- local
```js
var cmp = {
  data: function () {
    return {
      //..
    };
  }
    template: '<hr>',
    metholds: {}
  }

  // 아래 Vue 인스턴스에서만 활용할 수 있는 로컬(지역) 컴포넌트 등록
  new Vue({
    components: {
      'my-cmp': cmp
    }
  })
```

- 글로벌과 로컬의 차이점
  - 글로벌 : 인스턴스에 재활용이 가능하다.
  - 로컬 : 해당 인스턴스에만 적용 된다.
```js
// Global Component
 Vue.component('my-component', {
   template: '<div>A Global component!</div>'
 })
 // Local Component
 // 안에 들어갈 내용 먼저 선언
 var cmp = {
   template: '<div>A Local component!</div>'
 
 // 등록
 new Vue({
   el: '#app',
   components: {
     // 태그명 : 컴포넌트의 내용
     'my-local-components': cmp
   }
 }
 new Vue({
   el: '#app2',
   components: {
     // 태그명 : 컴포넌트의 내용
     'my-local-components': cmp
   }
 })
```

---

## Vue 컴포넌트 통신

7. 상-하위 컴포넌트 간 데이터 전달 방법 (Parent - Child 컴포넌트 통신)
- 부모 -> 자식 : props down
- 자식 -> 부모 : events up

---

8. Props
- 모든 컴포넌트는 각 컴포넌트 자체의 스코프를 갖는다.
  - ex) 하위 컴포넌트가 상위 컴포넌트의 값을 바로 참조할 수 없는 형식
- 상위에서 하위로 값을 전달하려면 props속성을 사용한다.

```js
Vue.component('child-component', {
  props: ['passedData'],
  template: '<p>{{ passedData }}</p>'
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue! from Parent Component',
  }
});

<div id="app">
  <child-component v-bind:passed-data="message"></child-component>
</div>
```

---

9. Non Parent - Child 컴포넌트 간 통신 (같은 레벨)
- 동일한 상위 컴포넌트를 가진 2개의 하위 컴포넌트 간의 통신
- 컴포넌트 간의 직접적인 통신은 불가능하도록 되어 있는게 Vue의 기본 구조
  - Child -> Parent -> 다시 2개의 Children
---

10. Event Bus
- Non Parent - Child 컴포넌트 간의 통신을 위해 Event Bus를 활용할 수 있다.
- Event Bus 를 위해 새로운 Vue 를 생성하여 아래와 같이 Vue Root Instance 가 위치한 파일에 등록
```js
export const eventBus = new Vue();
new Vue({
  //...
})
```

- 이벤트 발생
  - 이벤트를 발생시킬 컴포넌트에 eventBus import 후 $emit 으로 이벤트 발생
```js
import { eventBus } from '.../.../main';
// $emit(event, data)
eventBus.$emit('refresh', 10);
```

- 이벤트 수신
  - 해당 이벤트를 받을 컴포넌트에도 동일하게 import 후 콜백으로 이벤트 수신
```js
import { eventBus } from '../../main';
created() {
  eventBus.$on('refresh', function (data) {
    console.log(data);
  })
}
```

---

## 라우터

11. Vue Routers
- Vue를 이용한 SPA를 제작할 때 유용한 라우팅 라이브러리
  - SPA : 해당화면에 대한 정보를 미리 가지고 있다가 페이지 넘어갈때 사용하는 것
- Vue 라우터는 기본적으로 RootUrl'/#/'{Router name}의 구조로 되어 있다.
`example.com/#/user`
- 여기서 # 태그 값을 제외하고 기본 URL 방식으로 요청 때마다 index.html을 받아 라우팅을 하려면
```js
const router = new VueRouter({
  router,
  // history 모드를 추가해주면 된다.
  mode: 'history'
})
```

---

12. Nested Routers
- 라우터로 화면 이동시 Nested Routers를 이용하여 여러개의 컴포넌트를 동시에 렌더링 할 수 있다.
- 렌더링 되는 컴포넌트의 구조는 큰 상위의 컴포넌트가 하위의 컴포넌트를 포함하영 Parent - Child 형태와 같다.
```js
<div id="app">
  <router-view></router-view>
</div>
<div>
  <p>Main Component rendered</p>
  <app-header></app-header>
</div>
```

---

13. Template Root Element 주의사항
- Vue의 Template 에는 최상위 태그가 1개만 있어야 렌더가 가능하다.
- 에러 예시
```js
  var Foo = {
    template: `
      <div>foo</div>
      <router-view></router-view>
    `
  };
```

- 수정
```js
  var Foo = {
    template: `
      <div>foo
        <router-view></router-view>
      </div>
    `
  };
```

---

14. Named Views
- 라우터로 특정 URL 로 이동시, 해당 URL 에 해당하는 여러개의 View(컴포넌트)를 동시에 렌더링 한다.
- 각 컴포넌트에 해당하는 name 속성과 router-view 지정 필요
```js
<div id="app">
  <router-view name="nestedHeader"></router-view>
  <router-view></router-view>
</div>

{
  path: '/home',
  component: {
    nestedHeader: AppHeader,
    default: Body
  }
}
```

- Nested View VS Named Views?
  - 특정 URL 에서 1개의 컴포넌트에 여러개의 하위 컴포넌트를 갖는 것은 Nested Routes
  - 특정 URL 에서 여러개의 컴포넌트를 쪼개진 뷰 단위로 렌더링 하는 것을 Named View

  ---

## Vue Resource와 Axios 소개
- Vue Resource : Vue http 통신을 위한 라이브러리 
`npm install vue-resource --save`
```js
this.$http.get(url).then(successCallback, failCallback);
```

---

## Vue Templates

15. Vue Templates
- Vue 로 그리는 화면의 요소들, 함수, 데이터 속성을 모두 Templates 안에 포함된다.
  - Vue 는 DOM 의 요소와 Vue 인스턴스를 매핑할 수 있는 HTML Template 을 사용
  - Vue 는 Template 으로 렌더링 할 때 Virtual DOM을 사용하여
  - DOM 조작을 최소화 하고 렌더링을 꼭 다시 해야만 하는 요소를 계산하여 성능 부하를 최소화
  - 원하면 render function을 직접 구현하여 사용할 수 있음

---

16. Attributes
- Attributes : HTML Attributes 를 Vue 의 변수와 연결할 때는 v-bind 를 이용
`<div v-bind:id="dynamicId"></div>`

---

17. JS Expressions : `{{}}` 안에 다음과 같이 javascript 표현식도 가능
```js
<div>{{ number + 1 }}</div> (지향)
<div>{{ message.split('').reverse().join('') }}</div> (지양)
<div>{{ if (ok) { return message} }}</div> (지원안함)
```

---

18. Directives : `v-` 접두사를 붙인 attributes로, javascript 표현식으로 값을 나타내는게 일반적이다. `:` 을 붙여 인자를 받아 취급할 수 있다.
```js
<p v-if="seen">Now ypu see me</p>
// : 뒤에 선언한 href 인자를 받아 url 값이랑 매핑
<a v-bind:href="url"></a>
// click 이라는 이벤트를 받아 Vue에 넘겨준다.
<a v-on:click="doSomething">
```

---

19. Filter : 화면에 표시되는 텍스트의 형식을 편하게 바꿀 수 있도록 고안된 기능이며, `|` 을 이용하여 여러 개의 필터를 적용할 수 있다.
```js
// message 에 표시될 문자에 capitalize 필터를 적용하여 첫 글자를 대문자로 변경한다.
{{ message | capitalize }}
```
```js
new Vue){
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
```

---

## Data Binding

20. Data Binding 소개
- DOM 기반 HTML Template 에 Vue 데이터를 바인딩하는 방법은 아래와 같이 크게 3가지가 있다.
  - Interpolation(값 대입)
  - Binding Expressions (값 연결)
  - Directives (디렉티브 연결)

---

21. Interpolation - 값 대입
- Vue 의 가장 기본적인 데이터 바인딩 체계는 Mustache `{{}}` 를 따른다.
```js
<span>Message : {{ msg }}</span>
<span>This will never change: {{ * msg }}</span>
<div id="item-{{ id }}"></div>
```

---

22. Binding Expressions - 값 연결
- `{{}}` 를 이용하여 데이터 바인딩을 할 때 자바스크립트 표현식을 사용할 수 있다.
```js
<div>{{ number + 1 }}</div> (지향)
<div>{{ message.split('').reverse().join('') }}</div> (지양)
<div>{{ if (ok) { return message} }}</div> (지원안함)
```
- Vue 에 내장된 Filter를 `{{}}` 안에 사용할 수 있다. 여러개 필터 체인 가능
```js
{{ message | capitalize }}
{{ message | capitalize | upcapitalize }}
```

---

23. Directives - 디렉티브 연결
- Vue 에서 제공하는 특별한 Attributes 이며, -v의 prefix(접두사)를 갖는다.
- 자바스크립트 표현식, filter 모두 적용된다.
```js
// login 의 결과에 따라 p 가 존재 또는 미존재
<p v-if="login">Hello!</p>
// click = {{doSomething}} 와 같은 역활
<a v-on:click="doSomething>
```

---

24. Class Binding
- CSS 스타일링을 위해서 class를 아래 2가지 방법으로 추가가 가능하다.
  - class="{{ className }}"
  - v-bind:class
- 주의할 점은 위의 두 방법을 함께 사용하지 않고 한 가지만 적용해야 에러를 미연에 방지할 수 있다.
```js
<div class="static" v-bind:class="{ 'class-a': isA, 'class-b': isB' }"</div>
<script>
  data: {
    isA: true,
    isB: false
  }
</script>
```
```js
<div class="static class-a"></div>
```
```js
<div v-bind:class="[classA, classB]">
<script>
  date: {
    classA: 'class-a',
    classB: 'class-b'
  }
</script>
```

---

## Vue 싱글파일 컴포넌트 체계

25.Single File Components with JSX(ES6)
- 앱의 복잡도가 증가할 때, `.Vue`라는 파일 단위 안에 html, js, css를 관리할 수 있는 방법
- 복잡도가 커짐에 따라 야기될 수 있는 문제들
  - 모든 컴포넌트에 고유의 이름을 붙여야 함
  - js파일에서 template 안의 html의 문법 강조가 되지 않음
  - js파일상에서 css스타일링 작업이 거의 불가
  - ES5 를 이용하여 계속 앱을 작성할 경우 Babel 빌드가 지원되지 않음

---

## Vue Loader
- `.vue` 형태의 파일을 javascript 모튤 형태로 변환해주는 webpack loader
- Vue Loader 로 인해 얻게 되는 장점들은
  - ES6 지원
  - `<style>`과 `<template`에 대한 각각의 webpack loader 지원. ex) sass, jade
  - 각 `.vue`컴포넌트의 스코프로 좁힌 css 스타일링 지원 
  `<style lang="css" scoped>`
  - webpack 의 모듈 번들링에 대한 지원과 의존성 관리가 제공
  - 개발 시 hot reloading지원 (자동 새로고침)
