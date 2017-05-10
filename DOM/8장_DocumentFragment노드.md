2017.5.4.(목)
# DOM을 깨우치다 정리
## 8장 DocumentFragment 노드

---

### 1. 개체 개요
  - 라이브 DOM 트리 외부에 경량화된 문서 DOM을 만들 수 있다.
  - 마치 라이브 DOM 트리처럼 동작하되, 메모리상에서만 존재하는 빈 문서 템플릿으로 생각하면 된다.
  - 자식노드를 메모리상에서 손쉽게 조작한 후, 라이브 DOM에 추가하는 것도 가능하다.

---

### 2. DocumentFragment 생성
  - createDocumentFragment()
  ```
  var docFrag = document.createDocumentFragment();

  ["blue", "green", "red", "blue", "pink"].forEach(function(e) {
    var li = document.createElement("li");
    li.textContent = e;
    docFrag.appendChild(li);
    });

  console.log(docFrag.textContent);
    - bluegreenredbluepink 출력됨
  ```
  - DocumentFragment를 사용하여 메모리상에서 노드 구조를 만들고 이를 라이브 노드 구조에 삽입하면 매우 효율적이다.

  - div 내부에 DOM 구조를 생성하는 것에 비해 가지는 이점
      - DocumentFragment는 어떤 종류의 노드(body, html 제외)도 가질 수 있는 반면, element는 그렇지 않다.
      - DocumentFragment를 DOM에 추가하더라도 DocumentFragment자체는 추가되지 않으며, 노드의 내용만이 추가된다. element를 추가할 경우에는 element 자체도 추가동작에 속하게 된다.
      - DocumentFragment를 DOM에 추가할 때, DocumentFragment는 추가되는 위치로 이전되며, 생성한 메모리상의 위치에 더 이상 존재하지 않는다. 노드를 포함하기 위해 일시적으로 사용된 후 라이브 DOM으로 이동되는 element 노드는 그렇지 않다.

---

### 3. DocumentFragment를 라이브 DOM에 추가하기
  - appendChild(), insertBefore()
  ```
  var ulElm = document.querySelector('ul');
  var docFrag = document.createDocumentFragment();

  ["blue", "green", "red", "blue", "pink"].forEach(function(e) {
    var li = document.createElement("li");
    li.textContent = e;
    docFrag.appendChild(li);
    });
  ulElm.appendChild(docFrag);
  ```

---

### 4. DocumentFragment에서 innerHTML 사용하기
  - DocumentFragment를 생성하여 <div>를 추가한 다음, HTML문자열로 갱신하기 위해 innerHTML 속성을 사용하는 것
  - 결과적으로 HTML 문자열로부터 DOM 구조가 만들어짐
  ```
  var divElm = document.createElement('div');
  var docFrag = document.createDocumentFragment();

  docFrag.appendChild(divElm);

  docFrag.querySelector('div').innerHTML = '<ul><li>foo</li><li>bar</li></ul>';

  console.log(docfrag.querySelectorAll('li').length); // 2가 출력됨
  ```

  
