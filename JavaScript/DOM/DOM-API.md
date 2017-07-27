
## 자주 사용되는 DOM API

### Node 속성 : 최상위 속성
- childNodes
  - 주어진 요소의 자식 노드 모음(collection)을 반환
- firstChild
  - 트리에서 노드의 첫 번째 자식이나 null(노드가 자식이 없으면)을 반환
- lastChild
  - 트리에서 노드의 첫 번째 자식이나 null(노드가 자식이 없으면)을 반환
- nextSibling
  - 읽기 전용 속성으로 다음 노드를 반환
  - 마지막 노드일 경우 null을 반환
- previousSibling
  - 이전 형제 요소를 반환
- parentNode
  - 부모 요소를 반환
- nodeType
  - 노드의 유형을 나타내는 읽기전용속성
  - 1 : ELEMENT_NODE
  - 2 : ATTRIBUTE_NODE
  - 3 : TEXT_NODE
  - 8 : COMMENT_NODE
- nodeName
  - 읽기 전용 속성
  - 현재 노드의 이름을 반환
- nodeValue
  - 현재 노드의 값을 반환
  - 서로 다른 종류의 노드를 구별하는데 사용할 수 있음

### Node 메서드

- hasChildNodes()
  - 현재 노드(Node)에게 자식노드(child nodes)가 있는지를 Boolean 값으로 반환함
  - true : 있음 | false : 없음
- appendChild()
  - 새로운 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙임
  - 기존 생성된 노드를 현재 위치에서 새로운 위치로 이동
- insertBefore()
  - 이벤트 발생시 insert요소를 target요소의 바로 앞으로 이동
- removeChild()
  - 부모로부터 선택 제거
- replaceChild()
  - 특정 부모 노드의 자식 노드를 다른 노드로 교체
  - 교체를 당한 노드는 별도의 저장이 없으면 문서에서 사라짐
- cloneNode()
  - 노드 복사하기
  - true (참): 모두 복제
  - false (거짓): 자기자신만 복제(부모 복제)
  - 분리되어있는 이벤트는 복제가 되지 않음(제이쿼리는 전부 복제)
  - HTML에 작성된 이벤트는 복제됨
  - 아이디 사용 금지(아이디 중복 오류 발생)
- [contains()](https://developer.mozilla.org/en-US/docs/Web/API/Node/contains)
- [isEqualNode()](https://developer.mozilla.org/en-US/docs/Web/API/Node/isEqualNode) (IE 9+)
- [compareDocumentPosition()](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition) (IE 9+)

### Document 메서드

- createElement()
  - 지정된 태그이름을 가지는 엘리먼트를 생성
  - `var newDiv = document.createElement("div");`
- createTextNode()
  - 텍스트 노드를 생성
  - 데이터 텍스트 노드에 쓰여지는 문자열

### HTML*Element 속성

- children
  - 현재 요소에 대한 모든자식 Element 요소로 반환
- firstElementChild
  - 첫번째 Element 요소 반환
- lastElementChild
  - 마지막 Element 요소 반환
- nextElementSibling
  - 다음 형제 Element 요소 반환
- previousElementSibling
   - 이전 형제 Element 요소 반환
- innerHTML
- outerHTML
- innerText
- [textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) (IE 9+)
- [childElementCount](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/childElementCount) (IE 9+)

### HTML*Element 메서드

- getAttribute()
  - 해당 요소에 지정된 값을 가져와 반환 합니다.
- setAttribute()
  - 새 특성을 추가하거나 지정된 요소의 기존 특성 값을 변경
- removeAttribute()
  - 특정 엘리먼트의 속성을 제거
- [insertAdjacentHTML()](https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML)
- [insertAdjacentElement()](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement)
- [insertAdjacentText()](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText) (IE ?)

#### 특징(주의 할 점!)

- `innerHTML`은 HTML 텍스트 코드를 실제 DOM 노드로 변환한다.
- `textContent`는 HTML 텍스트 코드를 단순히 텍스트로 출력한다.
- `document.write()` 구문은 로딩 시 HTML 문서 해석을 지연/차단시키니 사용하지 않는 것이 좋다.
- `innerHTML`은 무겁고 비싼 대가를 치는 HTML 해석기를 호출하므로 사용에 주의가 요구된다.
- `insertAdjacentHTML()`은 `beforebegin`, `afterend` 옵션은 노드가 문서 트리에 존재하고 부모 요소노드를 가진 경우에만 동작한다.
- `textContent`는 모든 요소의 내용을 가져올 수 있다. 반면 `innerText`는 그렇지 않다.
- `innerText`는 `textContent`와 달리 숨겨진 요소들의 텍스트는 반환하지 않는다.
- `insertBefore()` 사용 시, 두번째 인자를 전달하지 않으면 `appendChild()`처럼 동작한다.
- `cloneNode()` 사용 시, 모든 속성/값(인라인 이벤트 포함)을 복제한다. 하지만 외부 스크립트에 연결된 이벤트는 복제하지 않는다.
- `cloneNode()` 사용 시, `id` 속성을 사용할 경우 문서 내 `id` 속성 값이 중복되니 주의가 요구된다.

#### Nodelist & HTMLCollection

Nodelist는 새로운 API(e.g `.querySelector()`)를 사용하여 수집한 집합을 말하며, HTMLCollection은 과거의 API(e.g `document.images`)를 사용하여 수집한 집합을 말한다. 이들은 배열 객체(Array Object)와 유사하여 유사 배열 객체(Array Like Object)라고 부른다.

- 집합은 정적(Static)일 수 있다. 이는 집합에 포함된 노드들이 현재 문서에 대한 스냅샷(Snapshot)이라는 것이다.
- 기본적으로 노드는 문서에 구조화된 트리(Tree) 순서에 따라 정렬된다. 요컨데 순서대로 수집된다.
- `length` 속성을 사용하여 집합 내 노드의 개수를 알 수 있다.
