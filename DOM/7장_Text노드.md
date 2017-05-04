2017.5.4.(목)
# DOM을 깨우치다 정리
## 7장 Text 노드

---

### 1. 주목해야 하는 속성
  - textContent
  - splitText()
  - appendData()
  - deleteData()
  - insertData()
  - replaceData()
  - subStringData()
  - normalize()
  - data
  - document.creataTextNode()

---

### 2. 공백도 Text 노드를 생성한다.
  - 공백, 줄바꿈 text 노드를 생성한다.

---

### 3. Text 노드 생성 및 삽입하기
  - Text 노드 생성
  `var textNode = document.createTextNode('Hi');`
  - 삽입하기
  `document.querySelector('div').appendChild(textNode);`
  - 확인
  `console.log(document.querySelector('div').innerText);` //  Hi 출력

  - element 생성 후 Text 노드 삽입하기
  ```
  var elementNode = document.createElement('p');
  var textNode = document.createTextNode('Hi');
  elementNode.appendChild(textNode);
  document.querySelector('div').appendChild(elementNode);
  ```
  - 확인
  `console.log(document.querySelector('div').innerHTML);` // <div>Hi</div> 출력됨

---

### 4. Text 노드 조작하기
  `var pElementText = document.querySelector('p').firstChild;`
  - appendData() : 추가
    ```
    pElementText.appendData('!');
    console.log(pElementText.data);
    ```

  - deleteData() : 삭제
    ```
    pElementText.deleteData(7,5);
    console.log(pElementText.data);
    ```

  - insertData() : 삽입
    ```
    pElementText.insertData(7,'Blue ');
    console.log(pElementText.data);
    ```

  - replaceData() : 바꿈
    ```
    pElementText.replaceData(7,5,'Bunny ');
    console.log(pElementText.data);
    ```    

  - subStringData() : 추출
  `console.log(pElementText.subStringData(7,10));`

---

### 5. textContent
  - 마크업이 제거된 모든 자식 텍스트 노드를 반환
  - 노드의 텍스트 내용을 가죠오기 위해 해당 속성을 사용하면, 메서드에 호출하는 노드에 포함된 모든 텍스트 노드의 문자열을 합쳐서 반환한다.
  - HTML 문서에서 모든 텍스트 노드를 매우 쉽게 추출할 수 있게 해준다.
  ```
  <h1> Dude</h1>
  <p>you <strong>rock!</strong></p>

  - 확인
  console.log(document.body.textContent);
    - 공백이 추가된 'Dude you rock!' 이 출력됨.
  ```

  - 모든 자식 노드가 제거 및 text 노드 변경
  ```
  document.body.textContent = 'you don\`t rock!'
  console.log(document.querySelector('div').textContent);
    - 'you don`t rock!' 출력
  ```

---

### 6. normalize()
  - 형제 텍스트 노드들을 단일 텍스트 노드로 결합하기
  - 형제 텍스트 노드들은 통상적으로 텍스트를 DOM에 프로그래밍적으로 추가한 경우에만 나타난다.
  ```
  var pElementNode = document.createElement('p');
  var textNodeHi = document.createTextNode('Hi');
  var textNodeCody = document.createTextNode('Cody');

  pElementNode.appendChild(textNodeHi);
  pElementNode.appendChild(textNodeCody);

  document.querySelector('div').appendChild(pElementNode);

  console.log(document.querySelector('p').childNodes.length) // 2 출력

  document.querySelector('div').normalize();

  console.log(document.querySelector('p').childNodes.length); // 1 출력
  ```

---

### 7. splitText()
  - 노드 분할
  - 해당 텍스트 노드를 변경하고 옵셋을 기반으로 원래 텍스트에서 분할된 텍스트를 가진 새로운 텍스트노드를 반환한다.
  ```
  - DOM으로 부터 새로운 텍스트 노드를 반환
  console.log(document.querySelector('p').firstChild.splitText(4).data); // 4번째 글자까지 잘라지고 이후 텍스트 반환

  - DOM에 남아있는 것
  console.log(document.querySelector('p').firstChild.textContent); 잘려나간 텍스트 반환
  ```
