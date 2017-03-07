## 5. call
---

- 메소드 빌려쓰기 패턴
- 객체의 능력을 다른 객체가 빌려쓰는 것
- forEach 처럼 크로스브라우징 같은 문제가 있을때 사용된다.
- forEach는 집합의 형태를 가진다.
- this값 교체

```
Array.prototype.forEach
```

### 1) function이 가지는 능력 3가지
- call()
- apply()
- bind()

```
[es3]function.prototype.call(this 컨텍스트 객체[,]), this 컨텍스트 실행 후 바로 실행, 전달인자 ,로 구분

[es3]function.prototype.apply(this 컨텍스트 객체[,]),  this 컨텍스트 실행 후 바로 실행, 전달인자 배열로 정리

[es5]function.prototype.bind(this 컨텍스트 객체[,]),  this 컨텍스트 실행 후 바로 실행하지 않음. 실행시점 변경 가능, 전달인자 , 로 구분
```

```
window.assignArgs.call(document.body, 1, 2, 6)
window.assignArgs.apply(document.body, [1, 3, 6])
window.assignArgs.bind(document.body, 1, 3, 6)
```

### 2) 메소드 빌려쓰기 활용 (array)

```
function assignArgs() {
  console.log('this:', this);
  console.log('arguments:', arguments);
  console.log('arguments.forEach:', arguments.forEach);
}

Array.prototype.forEach.call(arguments, function(arg, i){
  console.log('i:', i);
  console.log('arg:', arg);
  });
```

```  
(function(global) {
  'use strict';

  global.y9 = {};

  // y9 모듈 개발 코드
  y9.forEach = function(data, callback) {
    // 유효성 검사
    if( !data || !data.length ) {}
    if( !callback || typeof callback !== 'function' ) {}
    // 집합, 함수
    for ( var i=0, l=data.length; i<l; i++ ) {
      callback.call(data, data[i], i, data);
    }
  };

})(this, (this.y9 = this.y9 || {}) );
```

```
// 내장 객체를 사용자가 확장
// 위험하다! 공부목적으로
if ( !Array.prototype.each) {
  Array.prototype.each = function(callback) {
    if ( !callback || typeof callback !== 'function' ) {}
    for ( var i=0, l=this.longth; i<l; i++) {
      callback.call(this, this[i], i, this);
    }
  };
}
```  
