2017.5.1.(월)
# DOM을 깨우치다 정리
## 4장 Element 노드 선택

---

### 1. 특정 Element 선택
  - querySeletor()
  - getElementById()

---

### 2. 리스트 선택
  - querySelectorAll()
  - getElementsByTagName()
  - getElementsByClassName()

---

### 3. 직계자식 선택
  - childern
  - 해당 element의 모든 직계자식을 노드 리스트/배열을 출력
  - 자식이 없을 경우 빈 유사 배열 리스트를 반환
  `document.queryseletor('ui').children;`

---

### 4. 사전에 구성된 element 노드 선택 / 리스트
  - document.all : 문서 내의 모든 element (파이어폭스x)
  - document.forms : 문서 내의 모든 <form> element
  - document.images : 문서 내의 모든 <img> element
  - document.links : 문서 내의 모든 <a> element
  - document.scripts : 문서 내의 모든 <script> element
  - document.styleSheets : 문서 내의 모든 <link> 또는 <style> element
      - StyleSheetList

---

### 5. 선택될 Element를 검증
  - matchesSelector()
  `console.log(document.querySeletor('li').matchesSelector('li:first-child'));`

---
