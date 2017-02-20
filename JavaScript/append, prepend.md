# appendChild, prependChild
---

## 1. appendChild
- 부모노드 내부에 마지막 자식노드로 요소를 추가하는 것

```  
function appendChild(parent_node, child_node) {
  parent_node.appendChild(child_node);
  return child_node;
```

[MDN 바로가기]('https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild')

---  

## 2. prependChild  
  - 부모노드 내부에 첫번재 자식노드로 요소를 추가하는 것
  - 크로스브라이징과 문법 문제로 append 함수와 일치시키기 위해 헬퍼를 제작하여 사용한다.

  ```  
  function prependChild(parent_node, child_node) {
    var first = parent_node.children[0];
    parent_node.insertBefore(child_node, first);
    return child_node;
  }
  ```

[MDN 바로가기]('https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend')

---

## 3.예시  
- append,  prependChild로 작동하는 버튼 만들기

**1.버튼 수집**  
  - 사전에 제작한 query 헬퍼를 이용하여 각각의 클래스를 선택한다.
```
var prepend_btn = query('.prepend-button');
var append_btn  = query('.append-button');
```  

**2. 클래스 연결**  
  - 리스트 항목 중 새로운 항목이 추가되어도 각 항목의 last, first 항목을 선택하기 위함

```
var tester = query('.tester');
var tester_last_child = query('.tester > :last-child');  

var repo = query('.repository');
var repo_first_child = query('.repository > :first-child');
```

**3. append**  

- 선택요소를 전체의 마지막으로 이동
  - append 버튼을 클릭시 tester 항목의 **마지막** 으로 repo의 첫번째 항목을 이동시킨다.  

```
append_btn.onclick = function() {
  append(tester, repo.children[0]);
};
```  

**4. prepend**  

- 선택요소를 전체의 앞으로 이동
  - prepend 버튼을 클릭시 tester 항목의 **처음** 으로 repo의 첫번째 항목을 이동시킨다.

```
prepend_btn.onclick = function() {
  prepend(tester, repo.children[0]);
};
```  
---
