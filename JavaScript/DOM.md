# DOM : 문서객체모델

## * 중요
  1. 순서 대상찾기 - 이벤트걸기 - 처리하기
    - 이벤트의 흐름을 제어하는 것
  2. DOM(document object Model) API(Application Programming Interface)
    - Selection API  
      - .getElementById()
      - .getElementsByTagName()
      - .getElementsByClassName() // IE 9+
  3. DOM Script
    - 문서객체모델을 이용하여 문소의 요소를 선택하고, 자바스크립트를 이용하여 이벤트 핸드링 및 조작하는 것.

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

## 7. DOM Level
### Level 0
  - 초창기, 1989년(?), 자바스크립트 1.0 시절, (레가시 돔)
  - 웹 문서의 특정 요소에만 접근 가능
  - 하이퍼링크(href, map 등), 이미지, 폼 필드
  - 해당 요소의 속성을 교체할 수 있는 API 제공
  - 폼 유효성 검사, 이미지 마우스 오버 효과 버튼 제작이 전부

### 중급 DOM
- intermediate DOM
- ms와 네스케이프의 전쟁시기
- css와 중급DOM이 현대 웹 디자인의 시초
- 웹 문서의 대부분 요소에 접근
- 해당 요소의 css속성을 조작할 수 있는 api 제공
- document.all : 구시대의 유물, 익스만 지원

### DOM Level 1
  - 화합의 시대, 공동 표준 개발, 공식버전 1
  - 1998년 표준화 작업 착수 (넷스케이프, ms)
  - www.w3.org/TR/REC-DOM-LEVEL-1/
    - chapter Level 1 (core, HTML) 확인
      - core : XML 스타일 (모든 산업 공통)
      - HTML : 웹 적용
  - 브라우저 개발자들이 제작한 웹개발 문서를 바탕으로 제작하게 된다.

### DOM Level 2
  - 새로운 이벤트 모델의 개발방향에 따른 의견 충돌
  - 2000년 발표 이후 널리 보급된 모델

## DOM Level 3  

## DOM Level 4
  - 제이쿼리의 능력을 바탕으로 제작되어 기능 중 일부가 기본 기능으로 제공됨

## W3C DOM properties
  - properties : 모든 명사형태의 요소들
  - method : 동사형태의 함수가 오프젝트를 만났을때 발생되는 현상

## Node Interface
  - 웹 문서를 구성하는 원자단위
  - 객체 : 분자단위
  - 1번 엘리먼드노드, 3번 텍스트 노드 중요
  - 텍스트가 문서를 해석하면서 관계를 구축하는데 그것이 도큐먼트 오브젝트 모델이다. (DOM)
  - 루트노드(html) - 노드 (모든것들)
  - 프로퍼티 : 개체의 속성 . 으로 구분한다. ()가 붙지 않는다.

## html DOM 방식
  - document
    - documentElement
    - head
    - body
