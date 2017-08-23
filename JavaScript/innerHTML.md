2017.08.23(수)
# innerHTML 사용하기

## 목표 : bookList 정보 체크하고 innerHTML로 넣기

---  
## 넣어야할 대상
```html
<tr>
  <td><input type="checkbox" id="${book.id}"></td>
  <th>${book.id}</th>
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.price}</td>
</tr>
```

---  
### for  
- `bookList`의 요소를 `for`문을 활용하여 `[i]`에 담고 `book`에 연결하여 `innerHTML`로 삽입한다.  
- `+=` 연산을 사용하여 순회하면서 하나씩 추가되도록 한다.
```js
for(let i = 0; i < bookList.length; i++) {
  let book = bookList[i];
  tabelBody.innerHTML += `<tr>
  <td><input type="checkbox" id="${book.id}"></td>
  <th>${book.id}</th>
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.price}</td>
</tr>`
};
```

### forEach
- `forEach`을 통해 `bookList`의 요소를 탐색하고 `book`요소를 인자로 전달한다.
```js
bookList.forEach(function(book) {
  tabelBody.innerHTML += `<tr>
  <td><input type="checkbox" id="${book.id}"></td>
  <th>${book.id}</th>
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.price}</td>
</tr>`
});
```

### ES6
- `forEach`문을 `ES6` 형식으로 작성한다.
```js
bookList.forEach((book) => {
  tabelBody.innerHTML += `<tr>
  <td><input type="checkbox" id="${book.id}"></td>
  <th>${book.id}</th>
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.price}</td>
</tr>`
});
```