# removeChild
---  

- 부모로부터 선택을 제거하는 것  

## 1. 예시
**1. 변환되었을시 발생할 이벤트 설정**
- css를 통한 내용 설정
  - ```li``` 내에 ```will-remove``` 클래스를 새로 만들고 색상을 부여한다.

```
li
  &.will-remove
    background: #dedede
    color: #787878
```  

**2. onclick 이벤트**
  - ```for``` 를 통한 선택자 지정
    - i : 범위는 repo의 children의 전체 수보다 작으며 0부터 시작하여 1씩 더해진다. 이러한 값을 ```assignWillRemoveClass```  로 지정한다.  
  - ```assignWillRemoveClass = this```  
  - 선택하여 지정된 값에 ```will-remove``` ```class``` 를 추가하여 설정된 값을 부여한다.
  - i의 범위안에 있는 것 중 여러가지 선택이 가능하다.

```
var assignWillRemoveClass = function() {
  this.setAttribute('class', 'will-remove');
};

for (var i=0; i<repo.children.length; i=i+1) {
  repo.children[i].onclick = assignWillRemoveClass;
}
```  

**3. 삭제 이벤트**
- onclick으로 지정된 ```will-remove``` 를 선택한다.
- 만일 선택하지 않을시```( remove_els.length === 0 )``` , ```alert```의 값을 호출한다.
- i는 0부터 시작하며 1씩 더해지고 선택된 ```remove_els``` 의 수 만큼 ```remove``` 기능을 수행하여 삭제한다.

```
remove_btn.onclick = function() {  
  var remove_els = queryAll('.will-remove',repo);
  if ( remove_els.length === 0 ) {
    window.alert('오른쪽에 위치한 repository 아이템 중 하나를 반드시 클릭하셔서 제거할 대상을 선택해주셔야 합니다.');
    return;
  }
  for ( var i=0; i<remove_els.length; i=i+1 ) {
    remove(remove_els[i]);
  }  
};
```  

---

[MDN 바로가기](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)
