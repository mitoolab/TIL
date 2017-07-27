2017.5.10.(수)
# DOM을 깨우치다 정리
## 10장 DOM에서의 JavaScript

---

### 1. 기본적으로 JavaScript는 동기방식으로 해석됨
  - 각 스크립트가 순차적으로 다운로드되어 실행될 때까지는 아무런 다른 동작이 발생하지 않는다.

---

### 2. defer
  - 외부 JavaScript의 다운로드 및 실행을 지연시키기 위함
  - html 노드 해석을 마친 후 JavaScript를 해석함
  ```
  <script defer src= ~ ></script>
  ```

---

### 3. async
  - 외부 JavaScript 다운로드 및 실행을 비동기로 수행
  - 순차적 로딩이 아닌 병렬적으로 로드되며, 다운로드가 끝난 순서대로 해석됨
  - IE10 이상 지원
  - defer와 함께 사용시 async가 우선 실행 됨
  ```
  <script async src = ~ ></script>
  ```

---

### 4. onload 콜백
  - 비동기 <script>가 로드되는 시점을 알 수 있음
  ```
  var underscoreScript = document.createElement("script");
  underscoreScript.src =
    "https:// ~ .onload =
      function(){console.log('underscoreScript is loaded and executed');};

  document.body.appendChild(underscoreScript);
  ```
  ```
  <script async src = "https:// ~ .js"
    onload="console.log('~ is loaded and executed');">
  ```
---

### 5. DOM 조작 시 HTML에서 <script>의 위치에 주의
  - 원래 동기 방식이므로, <head> element에 두게되면 의존적인 경우 타이밍 문제가 발생한다.
