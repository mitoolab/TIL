2017.5.10.(수)
# DOM을 깨우치다 정리
## 9장 css스타일스트와 css규칙

---

### 1. 개요
  - 스타일시트는 외부 스타일시트를 포함하도록 HTMLLinkElement 노드를 사용하거나 스타일시트를 정의하도록 HTMLStyleElement 노드를 사용하여 HTML문서에 추가됨
  - 스타일시트가 HTML 문서에 추가되면 CSSStylesheet 개체로 표현되며, 스타일시트 내부의 각 CSS 규칙은 CSSStyleRule 개체로 표현된다.

---

### 2. 모든 스타일시트에 접근
  - document.styleSheets
  ```
  console.log(document.styleSheets.length);
  console.log(document.styleSheets.[0]);
  console.log(document.styleSheets.[1]);
  ```
  ```
  console.log(document.querySelector('#linkElement').sheet);
  ```

---

### 3. CSSStylesheet의 속성 및 메서드
  - disabled
  - href (읽기전용)
  - media (읽기전용)
  - ownerNode (읽기전용)
  - parentStylesheet (읽기전용)
  - title (읽기전용)
  - type (읽기전용)
  - cssRules
  - ownerRule
  - deleteRule
  - insertRule

`읽기 전용 속성은 새로운 값을 부여할 수 없다.`

---

### 4. CSSStyleRule
  - CSSStyleRule 개체는 스타일시트에 포함된 각 CSS 규칙을 표현한다.
  ```
  var sSheet = document.querySelector('#styleElement').sheet;

  console.log(sSheet.cssRules[0].cssText);
  ```

  - 속성 및 메소드
    - cssText
    - parentRule
    - parentStylesheet
    - selectorText
    - style
    - type

---
### 5. insertRule(), deleteRule()
  - css 규칙을 삽입하고 삭제하기
  ```
  // 인라인 스타일시트의 인덱스1에 새로운 css 규칙을 추가
  document.querySelector('#styleElement').sheet.insertRule('p{color:red}',1);

  // 추가되었는지 확인
  console.log(document.querySelector('#styleElement').sheet.cssRules[1].cssText);

  // 방금 추가한 것을 삭제
  document.querySelector('#styleElement').sheet.deleteRule(1);

  // 삭제되었는지 확인
  console.log(document.querySelector('#styleElement').sheet.cssRules[1].cssText);
  ```

---

### 6. style 속성을 사용하여 값을 편집하기
  ```
  var styleSheet = document.querySelector('#styleElement').sheet;

  stylesheet.cssRules[0].style.color = 'red';
  stylesheet.cssRules[1].style.color = 'purple';
  ```

---

### 7. 새로운 인라인 css 스타일시트 생성
  - 새로운 style 노드 - innerHTML - style 노드를 HTML 문서에 추가
  ```
  var styleElm = document.createElement('style');
  style.innerHTML = 'body{color:red}';

  document.querySelector('head').appendChild(StyleElm);
  ```

---

### 8. 외부 스타일시트 추가하기
  - attribute를 사용하여 포함
  ```
  var linkElm = document.createElement('link');
  linkElm.setAttribute('rel', 'stylesheet');
  linkElm.setAttribute('type', 'text/css');
  linkElm.setAttribute('id', 'linkElement');
  linkElm.setAttribute('href', 'css 주소');

  // DOM에 추가
  document.head.appendChild(linkElm);

  // 확인
  console.log(document.querySelector('#linkElement'));
  ```

---

### 9. 스타일시트 사용 가능 / 불가능 설정
  - `.disabled`
  ```
  document.querySelector('#linkElement').disabled;
  ```
