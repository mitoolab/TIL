# DOM : 문서객체모델
## 1. DOM-스크립트 퓨리뷰
  - DOM과 JS를 통해 문서를 조작하고 제어하는 방법
  - CSS : 문서의 요소를 찾아서 꾸며주는 역활을 한다.
    - 구조를 디자인하는 표현역할을 수행한다.
  - JavaScript : HTML 문서의 요소를 찾아 이벤트를 부여한다.
  - 대상을 선택하는 것 이것이 바로 DOM 능력 중 하나다.  
```
- Document : 문서
- Object : 문서의 요소들
- Model : 요소들 간의 관계도
```
  - 다른말로 가계도
  - 이러한 관계도를 DOM-tree 라고 한다.
  - 노드 : 모든게 다 노드다. (요소노드 등)
  - 객체 : 노드의 포함된 것중에 하나 (개체->개체노드, 텍스트->텍스트노드 등)

## 2. node (노드)
  1. 요소노드 (element node)
    - ```<element> 태그는 요소의 이름을 붙인 것</element>```  
  2. 속성노드 (attribute node)
  3. 텍스트노드 (text node) : 웹문서의 대부분의 내용은 텍스트 노드다.
    4. 순서 : 요소(1), 속성(2), 텍스트(3)  

## 3. DEMO : 식별 방법
  - nodeType : 노드 유형을 알려주는 명령어
  - $0.nodeType == document.element_node
  - undefined : 변수가 선언되는 시작점에 담고 있는 내용이 아무것도 없음을 알려준다.
  - Break Point 통해 태그의 버그를 찾을 수 있다.

## 4. DOM - Property (속성)
  - css ,JavaScript = Property / HTML = attribute
  - firstChild : 첫번째 자식노드를 찾습니다.
  - nodeValue : text node를 통해 노드의 값을 확인 할 수 있다.
  - innerHTML : 내부에 HTML 코드를 넣을 수 있습니다.

## 5. DOM-Method  
  - 동사형태  
  - 앞에 get 등으로 구분  
  - document.getElementById(대소문자 구분): id속성을 가진 객체를 선택
  - document.getElementsByTagName

## 6. 이벤트
  - 사용자가 무언가를 기대하고 실행하는 것
  - enter, over
  - 앞에 "on" 이 붙는다.
  - 마우스 이벤트는 "접근성이 없다." (키보드 접근성을 항상 고민해야한다.)
  - 찾고, 확인하고, 이벤트를 연결한다.

## 중요
  1. 대상찾기 - 이벤트걸기 - 처리하기
    - 이벤트의 흐름을 제어하는 것
