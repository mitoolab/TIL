2017.4.30.(일)
# DOM을 깨우치다 정리
## 2장 Document 노드

---

1. 주목해야 할 속성과 메서드
  - doctype
  - documentElement
  - implementation
  - activeElement
  - body
  - head
  - title
  - lastModified
  - referrer
  - URL
  - defaultView
  - compatMode
  - ownerDocument
  - hasFocus()

---

1. activeElement
  - 문서 내에서 포커스를 가지고 있거나 활성 상태인 노드에 대한 참조 얻기
  ```
  document.querySeletor('textarea').focus();
  console.log(document.activeElement);
  ```

---

2. hasFocus()
  - 사용자가 현재 해당 HTML 문서가 로드된 창에 포커스를 두고 있는지를 알 수 있다.
  - boolean 값 반환

---

3. document.defaultView
  - 최상위/전역 개체에 대한 바로가기
  - 웹 브라우저에서 최상위 개체는 window 개체
