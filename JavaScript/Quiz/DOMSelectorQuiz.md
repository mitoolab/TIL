DOM 제어 Quiz

1. DOM tree 종류 4가지
- **문서 노드(Document Node)**
    - 트리의 최상위에 존재하며 각각 요소, 어트리뷰트, 텍스트 노드에 접근하려면 문서 노드를 통해야 한다. 즉 DOM tree에 접근하기 위한 시작점(entry point)이다.
- **요소 노드(Element Node)**
    - 요소 노드는 HTML 요소를 표현한다. HTML 요소는 중첩에 의해 부자 관계를 가지며 이 부자 관계를 통해 정보를 구조화한다. 따라서 요소 노드는 문서의 구조를 서술한다고 말 할 수 있다. 어트리뷰트, 텍스트 노드에 접근하려면 먼저 요소 노드를 찾아 접근해야 한다. 모든 요소 노드는 요소별 특성을 표현하기 위해 HTMLElement 객체를 상속한 객체로 구성된다. (그림: DOM tree의 세부 구성 참고)
- **어트리뷰트 노드(Attribute Node)**
    - 어트리뷰트 노드는 HTML 요소의 어트리뷰트를 표현한다. 어트리뷰트 노드는 해당 어트리뷰트가 지정된 요소의 자식이 아니라 해당 요소의 일부로 표현된다. 따라서 해당 요소 노드를 찾아 접근하면 어트리뷰트를 참조, 수정할 수 있다.
- **텍스트 노드(Text Node)**
    - 텍스트 노드는 HTML 요소의 텍스트를 표현한다. 텍스트 노드는 요소 노드의 자식이며 자신의 자식 노드를 가질 수 없다. 즉 텍스트 노드는 DOM tree의 최종단이다.

--- 

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Cities</title>
</head>
  <style>
    body{
      width: 100%;
    }
    .wrapper {
      margin: auto;
      box-sizing : border-box;
    }
    .main { 
      list-style: none;
      padding: 0;
    }
    h1 {
      font-size: 50px;
    }
    .head {
      margin-top: 20vh;
      text-align: center;
    }

    /* 추가요소 */
    .text {
      font-size: 30px;
      font-weight: 300;
      color: rgb(80,80,80);
    }

    .red  { color: red; }
    .blue { color: blue; }
    .green { color: green;}
    .gray { color: gray;}
  </style>
<body>
  <!-- wrapper 시작 -->
  <div class="wrapper">
    <div class="head">
        <h1>Cities</h1>
        <ul class="main">
          <li id="one" class="red">Seoul</li>
          <li id="two" class="red">London</li>
          <li id="three" class="red">Newyork</li>
          <li id="four">Tokyo</li>
        </ul>
    </div>
  </div>
  <!-- wrapper 종료 -->
  <script>

  </script>
</body>
</html>
```

2. `id = one` 으로 접근하여 `className`을 `gray`로 변경하시요.
```js
var elem = document.getElementById('one');

elem.className = 'gray';
```

3. `qureSelectorAll`을 사용하여 `class = "red"`를 `green`으로 변경하시요. (for문)
```js
var elems = document.querySelectorAll('.red');

  for (var i = 0; i < elems.length; i++) {
  elems[i].className = 'green';
```

4. `id = four`에 대해 `setAttribute`을 사용하여 `class = "blue"`를 추가하시오.
```js
var four = document.getElementById('four');

if (!four.hasAttribute('class')) {
  four.setAttribute('class', 'blue');
} else {
  four.className = 'blue';
}
```

5. `<h1>`태그와 `<ul>`태그 사이에 `<p class="text">Daliy Quiz</p>` 를 추가하시오. (insertAdjacentHTML() 사용)
  - `insertAdjacentHTML`를 사용하여 항상 같은 위치에 원하는 요소가 올 수 있도록 한다.
```js
var mainle = document.querySelector('.main');

mainle.insertAdjacentHTML('beforebegin', `<p class="text">Daliy Quiz</p>`);
```

6. `li`요소 중 마지막 요소를 삭제 하시오.
- 항상 마지막 요소가 선택되어 삭제될 수 있도록 한다.
```js
var elem = document.querySelector('.main');
var reEleme = elem.children[elem.children.length-1];
elem.removeChild(reEleme);
```

```js
// IE +9
var reEleme = elem.lastElementChild;
elem.removeChild(reEleme);
```