2017.5.1.(월)
# DOM을 깨우치다 정리
## 6장 Element노드 인라인 스타일

---

### 1. style attribute
  `var divStyle = document.querySeletor('div').style;`

---

### 2. 개별 인라인 css속성 가져오기, 설정, 제거
  - 카멜케이스 사용 (fontSize, backgroundColor) 등
  - css 속성명이 javaScript 키워드인 경우 css라는 접두가 붙는다 (float = cssFloat)
  - 단위를 정확히 포함해야 한다.
  - 설정
  `divStyle.backgroundColor = 'red'`
  - 가져오기
  `console.log(divStyle.backgroundColor);`
  - 제거
  `divStyle.backgroundColor = '';`

---

### 3. 모든 인라인 css속성 가져오기, 설정, 제거
  - getAttribute()
  - setAttribute()
  ```
  var div = document.querySeletor('div');
  var divStyle = div.style;
  - 설정
  div.setAttribute('style','background-color:red;border:1px solid black;height:100px;width:100px;');
  - 가져오기
  console.log(div.getAttribute('style'));
  - 제거
  div.removeAttribute('style');
  ```

---

### 4. class 및 id attribute를 사용하여 css 속성 적용 및 제거하기
  - 설정
    - setAttribute()
    - classList.add()
  - 제거
    - removeAttribute()
    - classList.remove()
