# insertNode
---

- insertBefore(삽입할노드, 목표노드)
- 요소를 기준으로 삽입하기
- 표준 브라우저호환

## 1. insertBefore  
  - 이벤트 발생시 insert요소를 target요소의 바로 앞으로 이동
  - return : 선택사항으로 함수의 값을 return하여 var를 통해 담아두면 재사용이 가능하다.

```
function before(insert_node, target_node) {
  target_node.parentNode.insertBefore(insert_node, target_node);
  return insert_node;  
```   

## 2. insertAfter
  - 이벤트 발생시 insert요소를 target요소의 뒤로 이동
  - if함수를 사용하여 상태를 구분한 후 일정 상황에 대하여 after로 이벤트를 지정
  - 지정 target의 바로 뒤쪽으로 지정 요소를 이동시킨다.

```
after_btn.onclick = function() {
  if ( tester_target === null ) {
    window.alert('왼쪽에 위치한 tester 목록 아이템 중 하나를 선택하세요.');
    return;
  }
  after(tester_target, repo.children[0]);
};
```
---

## 3. 예시

**1.버튼 수집**  
  - 사전에 제작한 query 헬퍼를 이용하여 각각의 클래스를 선택
```
ar prepend_btn = query('.prepend-button');
var append_btn  = query('.append-button');
var before_btn  = query('.before-button');
var after_btn   = query('.after-button');
var remove_btn  = query('.remove-button');
```  

**2. 클래스 연결**  
  - 리스트 항목 중 새로운 항목이 추가되어도 각 항목의 last, first 항목을 선택하기 위함
```
var tester = query('.tester');
var tester_last_child = query('.tester > :last-child');  

var repo = query('.repository');
var repo_first_child = query('.repository > :first-child');
```

**3) 타켓 설정**  
  - 이동을 위한 target 설정
  - 클릭이벤트 부여
  - var oneClickActivation = function() { : 클릭 이벤트를 부여하는 함수를 시작한다.
  - tester_target = null : tester_target을 빈공간으로 만든다.
  - tester_target = this; : 빈공간에 들어올 함수를 this로 지정한다.
  - **this: 함수의 주인을 담는 곳.** (지정하지 않으면 기본값은 window)
  - this.setAttribute('class', 'activation') : 공간에 들어오는 함수에 activation이라는 함수를 추가하여 실행한다.(css 설정 등)
  - tester.children[0].onclick = null; : tester의 첫번째 요소에게 클릭를 해제한다.
  - tester.children[1].onclick = null; : tester의 두번째 요소에게 클릭를 해제한다.
    - 하나를 선택후 그 후부터 카운트 되며 결론적으로 1개만 선택이 가능하다.
    - children요소가 많으면 그 수 만큼 만들어야 한다. (for 등 함수 사용을 권장함)
  - tester.children[0].onclick = oneClickActivation; : tester에게 첫번째 클릭하는 요소는 상단의 this에 담기게 되고, activation이란 class가 새로 생기며, 사전에 지정한 activation의 기능이 실행된다. 같은 요소 안에서는 첫번재 클릭된 요소를 제외하고는 클릭을 해제한다.
  - 결론적으로 한 요소안에서 첫번째 클릭에 대한 이벤트가 발생하고 다른 요소를 추가지정할 수 없도록 고정시킨다.

```
var tester_target = null ;

var oneClickActivation = function() {
  tester_target = this;
  this.setAttribute('class', 'activation');
  tester.children[0].onclick = null;
  tester.children[1].onclick = null;
};

tester.children[0].onclick = oneClickActivation;
tester.children[1].onclick = oneClickActivation;
```

**4) before**  

  - 타겟의 앞으로 연결
  - 아무것도 선택하지 않을시 선택 알림을 위한 alert창을 활성화함

```
before_btn.onclick = function() {
  if ( tester_target === null ) {
    window.alert('왼쪽에 위치한 tester 목록 아이템 중 하나를 선택하세요.');
  }
  before(repo.children[0], tester_target);
};
```

**5) after**  
  - 타겟의 뒤로 연결

```
after_btn.onclick = function() {
  if ( tester_target === null ) {
    window.alert('왼쪽에 위치한 tester 목록 아이템 중 하나를 선택하세요.');
    return;
  }
  after(tester_target, repo.children[0]);
};
```
---

[MDN 바로가기]('https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore')
