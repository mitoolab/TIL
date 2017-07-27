2017.5.1.(월)
# DOM을 깨우치다 정리
## 5장 Element노드 지오메트리와 스크롤링 지오메트리

---

### 1. offsetParent를 기준으로 element의 offsetTop 및 offsetLeft 값을 가져오기
  - offsetParent로 부터 element 노드의 오프셋 픽셀 값을 가져올 수 있다.
  ```
  div.offsetLeft; // 픽셀
  div.offsetTop; // 픽셀
  div.offsetParent; // <body> 출력
  ```
---

### 2. 뷰포트 기준 테두리 오프셋 얻기
  - getBoundingClientRect()
  - 뷰포트 기준 Top, Right, Bottom, Left
  - height, width 속성/값 반환 : 내용, 패팅, 테두리 모두 더한 값을 반환한다.
  ```
  var divEdges = document.querySeletor('div').getBoundingClientRect();
  console.log(divEdges.top, divEdges.right, divEdges.bottom, divEdges.left);
  console.log(div.height, div.width);
  console.log(div.offsetHeigth, div.offsetWidth);
  ```

### 3. 테두리를 제외한 크기 얻기
  - 패딩 + 내용
  - clientHeigth, clientWidth

---

### 4. 뷰포트의 특정지점에서 최상단 element 얻기
  - elementFromPoint()
  - 해당 위치에 두 개의 element가 있을 시 최상단(z-index, 하위설정 요소)요소가 선택된다.
  `console.log(document.elementFromPoint(50,50));`

---

### 5. 스크롤될 element의 크기를 얻기
  - scrollHeight, scrollWidth
  - 뷰포트의 크기를 반환하므로 사용하지 않는 것이 좋다.
