# replaceChild
---

- 요소 교체하기
- 교체된 요소는 문서에서 사라진다.
---

## 예
**1.요소 선택**  
- query 헬퍼를 사용하여 각각의 클래스를 찾아 선택한다.
- ```alt_h1``` 클래스 안에 ```alternate-h1``` ```class``` 를 추가한다.
- ```alt_h1_content``` 로 textNode를 추가한다.
- ```append``` 를 통해 ```alt_h1``` 안에 ```alt_h1_content``` 를 자식요소로 추가한다.

```
var replace_btn = query('.replace-button');
var replaced_h1 = query('.replaced-h1');
var alt_h1 = document.createElement('h1');
alt_h1.setAttribute('class', 'alternate-h1');
var alt_h1_content = document.createTextNode('DOM API 완전 정복 했다! :-)');
append(alt_h1, alt_h1_content);
```  

**2.replace-button 요소노드 클릭 이벤트 설정(연결)하고, replace-h1 대신 직접 생성한 ```alt_h1노드``` 로 대체한다**

```
replace_btn.onclick = function() {
  replaced_h1.parentNode.replaceChild(alt_h1, replaced_h1);
};  
```  

---

[MDN 바로가기]('https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild')
