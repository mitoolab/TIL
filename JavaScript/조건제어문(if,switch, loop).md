# 조건제어문 (if, switch, loop)
---
- 조건을 통해서 제어
- if, else, else if  

## 1. if문 : if(조건) { 실행문 }; (권장)
- if(조건) 실행문 ; (실행문이 1줄일 경우)
- if(조건) {} else {}
  - sass와의 차이점 : 형변환 문제로 인해 '===' 사용
- if(조건) {} else if(조건2) {} else {}
  - 조건이 많아지면 느려지는 단점이 있음 (권장하지 않음)
- 조건이 많이지면 switch 사용
  - switch(대상) { case 값: 실행; break; default; }

- 객체의 속성에 접근하는 2가지 방법
```
1. 객체.속성 (권장)
2. 객체['속성'] (순환)
```

### 1) if문 : 조건이 많아짐에 따라 연산처리과정이 늘어남
```
var state = {
  'visible': false,
  'hidden': true,
  'expanded': true,
  'collapsed': true
};
```
```
if ( state.visible === true ) {
if ( state.visible ) {
if ( state.visible !=== true ) {
if ( !state.visible ) {
```
```
 if ( state.visible ) {
  console.log('state.visible is True.');
} else {
  console.log( 'state.visible:', state.visible);
}
```
```
 if ( state.visible === true ) {
  console.log('state.visible is True.');
} else if( state.visible === null ) {
  console.log( 'state.visible:', state.visible);
} else if( isObject(state.visible)) {
  console.log( 'state.visible is Object Type.');
} else {
  console.log('!True, !Null, !Object');
}
```
```
 if ( state && state.visible ) {
  console.log('state.visible is True.');
} else if( state.visible === null || state.visible === undefined ) {
  console.log( 'state.visible:', state.visible);
} else if( isObject(state.visible)) {
  console.log( 'state.visible is Object Type.');
} else {
  console.log('!True, !Null, !Object');
}
```



## 2. Switch 구문
- case를 통해 빠른 연산처리 가능
- if문과의 차이
  - if는 참 또는 거짓, 조건이 많은 경우 순서대로 진행하기 때문에 느려질 수 있다.
  - Switch는 조건으로 바로가기 때문에 빠르다.
- default 위치는 자유

```
var members = [];

members.push('히어로');
members.push('히로');
members.push('히');
members.push('로');

switch (numbers[2]) {
  case '히어로':
    console.log('unmbers[2]는 "히어로"이다.'); break;
  case '히로':
    console.log('unmbers[2]는 "히어"이다.'); break;
  case '히':
    console.log('unmbers[2]는 "히"이다.'); break;
  case '로':
    console.log('unmbers[2]는 "로"이다.'); break;
  default :
    console.log('unmbers[0]는 이도 저도 아니다.');
}
```

- 경우가 여러가지 일경우 case (or) case : 그중에 하나라도 참이면 출력이 되어라

```
switch (numbers[2] <- 비교대상 ) {
  default :
  console.log('unmbers[0]는 이도 저도 아니다.'); break;
  case '히어로':
  case '히로':
  case '히':
  case '로':
    console.log('unmbers[0]는 "히어로|히로|히|로"이다.');
}
```


#### 2) if 함수로 변경
```
function makeEl(el_name, html_str, context, method) {
  method  = method || 'append';

  // 전달인자로 요소 노드와 HTML Code 생성
  var el = createElement(el_name);
  el.innerHTML = if ( !html_str || isString(html_str)) {
    el.innerHTML = '';
  } else {
    el.innerHTML = html_str;
  }

  // 만약 context 가 존재한다면?
  if ( context ) {
    if ( method === 'append' ) {
      context.insertAdjacentElement('beforeend', el);
    } else {
      context.insertAdjacentElement('afterbegin', el);
    }
  }
  // 생성된 요소노드 반환
  return el;
}
```

---  

## 3. loop 구문
- 순환(Loop) 처리 제어
- while() {} : ..하는 동안에
- for() {}
- for( in ) {}
- forEach()
- helper : Eack()

#### 1) if () {}  vs  while() {}
- **1-1 if : 한번실행**

```
 var condition = true;

 if ( condition ) {
   console.log('this is true.');
 }
```  

- **1-2 while : 조건이 "참" 일동안 계속반복해서 실행**

```
var arr = ['one',  'two', 'three'];

while ( arr.length ) {
  console.log('this is ' + arr.pop());
   조건(상태) 변경
}
```  

#### 2) 특정 item을 제외하여 출력 (two 제외)
```
var arr = ['one',  'two', 'three'];
while ( arr.length ) {
   console.log('this is ' + arr.pop());
   조건(상태) 변경
   조건을 확인할 변수 생성
  var item = arr.pop();
  if ( item !== 'two') {
    console.log('this is ' + item);
  }
}
```

#### 3) 순서 변경하기
```
var arr = ['one',  'two', 'three'];
while ( arr.length ) {
   console.log('this is ' + arr.pop());
   조건(상태) 변경
   조건을 확인할 변수 생성
  var item = arr.shift();
  if ( item !== 'two') {
    console.log('this is ' + item);
  }
}
```

#### 4) 선택한 node의 부모를 찾는 헬퍼함수

```
function parent(node above_depth) {
  // 초기 값 설정 : 사용자가 전달하지 않아도 기본 값을 1로 설정
  above_depth = above_depth || 1;
  while ( above_depth-- ) {
    // node의 부모노드를 찾는다.
    node = node.parentNode;
  }
  return node;
}
```
