2017.4.30.(일)
# DOM을 깨우치다 정리
## 3장 Element 노드

---

### 1. 주요 속성 및 메서드
  - createElement
  - tagName
  - children
  - getAttribute()
  - setAttribute()
  - hasAttribute()
  - removeAttribute()
  - classList()
  - dataset
  - attributes

---

### 2.createElement
  - Element 생성
  ```
  var elementNode = document.createElement('textarea');
  document.body.appendChild(elementNode);
  ```

---

### 3. tagName
  - Element의 태그 이름 얻기
  - 대문자 반환
  `document.querySeletor('a').tagName;`

---

### 4. Element의 attributes 및 값에 대한 리스트/컬렉션 얻기
  - 반환된 리스트는 NameNodeMap 이다.
  ```
  var attr = document.querySeletor('a').attributes;
  for(var i = 0; i < atts.length; i++){
    console.log(atts[i].nodeName +'='+ atts[i].nodeValue);
  }
  ```

---

### 5. Attribute 값 획득, 설정, 제거
  - null이나 ' ' 로 설정하지 말고 removeAttribute()를 사용한다.
  - 획득 : getAttribute()
  `atts.getAttribute('내용')`
  - 설정 : setAttribute()
  `atts.setAttribute('기존내용', '변경내용')`
  - 제거 : removeAttribute()
  `atts.removeAttribute('내용');`

---

### 6. hasAttribute
  - 해당 element 가 attribute 요소를가지고 있는지 판별하는 메서드
  - boolean 값 반환
  ```
  var atts = document.querySelector('input');
  console.log(atts.hasAttribute('checked')); // true 출력
  ```

---

### 7. classList
  - Class Attribute 값 리스트 얻기
  - 유사배열, length 값을 가진다.
  - add(), remove(), contains(), toggle() 메서드를 사용하여 변경할 수 있다.

---

### 8. class attribute에 하위 값 추가 및 제거하기
  - 추가 : classList.add()
  - 제거 : classList.remove()
  ```
  var elm = document.querySelector('div');
  elm.classList.add('cat');
  elm.classList.remove('dog');
  ```

---

### 9. class attribute 값 토글
  - classList.toggle()  
  - 값이 누락된 경우 추가하거나 값이 이미 있는 경우 제거할 수 있게 해준다.
  ```
  var elm = document.querySelector('div');
  elm.classList.toggle('visible');
  elm.classList.toggle('grow');
  console.log(elm.className); // 'grow'
  ```

---

### 10. class attribute 값이 특정 값을 가지고 있는지 판별하기
  - classList.contains()
  ```
  var elm = document.querySelector('div');
  console.log(elm.classList.contains('brown')); // true 출력
  ```

---

### 11. dateset
  - data-* attribute를 가져오고 설정하기
  - 가저오기
  ```
  console.log(elm.dataset.fooFoo);
  console.log(elm.dataset.barBar);
  ```
  - 설정하기 (추가)
  ```
  elm.dataset.gooGoo = 'goo';
  ```
