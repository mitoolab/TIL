# 헬퍼함수 변경 -  makeEl

---

### 1) 기존코드

  - 요소노드를 생성(콘텐츠[HTML 유형 가능] 포함)하거나, 특정 부모노드에 자식노드로 삽입하는 헬퍼 함수  

```  
function makeEl(el_name, html_str, context, method) {
  // 초기 값 설정
  method  = method || 'append';
  // 전달인자로 요소 노드와 HTML Code 생성
  var el = createElement(el_name);
  el.innerHTML = html_str;
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

### 2) if 함수로 변경
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

### 3) 3항식으로 변경
- 변수 = 조건 ? 참인 경우 값 : 거짓인 경우 값;
- ? : , &&, ||  
```
el.innerHTML = (!html_str || isString(html_str)) ? '' : html_str;
```

---

### 4) switch ~ case 구문 사용
- 타겟을 추가하고 타겟은 요소노드, 존재해야되고, 부모를 가져야 한다.
- switch, case, break, default

```
function makeEl(el_name, html_str, target, method) {
  var el = createElement(el_name);
    el.innerHTML = (!html_str || isString(html_str)) ? '' : html_str;

  if ( target ) {
    // switch ~ case 구문 사용
    switch( method ) {
      default:
      case 'append' :
        target.insertAdjacentElement('beforeend', el);
      break;
      case 'prepend' :
        target.insertAdjacentElement('afterbegin', el);
      break;
      case 'before' :
        target.insertAdjacentElement('beforebegin', el);
      break;
      case 'after' :
        target.insertAdjacentElement('afterend', el);
      break;
    }
  }
```
