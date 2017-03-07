## 3. Module 패턴 : 클로저 활용
---


### 1) 캡슐화 및 필요한것을 내보내는 형식

```
var moduleMaker = function() {
  //모듈 정의
  var checkType = function (data) {
    return object.prototype.toString.call(data).slice(8,-1).toLowerCase();
    };
    var module = {
      'checkType' : checkType
  };
  //정의된 모듈 내보내기
  return module;
};

var module = checkType
```

### 2) IIFE
- 자가실행함수, 즉시실행함수 : 누군가 나의 이름을 부러주지 않아도 나는 실행되네

```
(function(){console.log('excute')}()); (더글라스 크락포드 선호 방식)
(function(){console.log('excute')})();
+function(){console.log('excute')}(); (선호하지 않음)
!function(){console.log('excute')}(); (선호하지 않음)

```
- moduleMaker() 실행 x

- IIFE 패턴을 사용하여 모듈을 정의/내보내기

```
 var dom = (function(global) {
   'use strict';

   // 지역내 변수를 통해 요소를 빠르게 찾을 수 있도록 한다.
   var document = global.document,
       toString = Object.prototype.toString;

   // [Private] 외부에서 접근할 수 없는 코드
   var query, queryAll, checkType, isString;
   checkType = function(data) {
     return toString.call(data).slice(8,-1).toLowerCase();
   };
   isString = function(data) {
     return checkType(data) === 'string';
   };
   queryAll = function(selector) {
     if ( !isString(selector) ) { return console.error('CSS 선택자 문자로 전달 요망'); }
     return document.querySelectorAll(selector);
   };
   query = function(selector) {
     return queryAll(selector)[0];
   }

   // [Public] 명시적으로 노출하고 싶은 것들만 공개
   return {
     'q': query,
     'qa': queryAll
   };

 }(window));

```

- 암묵적 전역 개념
- 암묵적으로 생성된 전역변수는 삭제가 가능하다.
- hasOwnProperty : 객체의 자기자신만 탐색한다.
