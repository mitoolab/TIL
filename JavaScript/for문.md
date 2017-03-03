# for문
---

-  **for(변수선언 ; 조건확인 ; 변수값 변화) {}**
 array, Like Array Object : length를 가지고 있음

- **while 문**
```
var i = 0;  반복자
while( i < 10 ) {
  console.log('i:', i);
   i = i + i;
   i += i;
  i++;
}
```

- **for문**
```
for(var i=0; i<10; i++) {
  console.log('i:', i);
}
```

- **for문 변경**
```
var i=0;
for(; i < 10; ) {
  console.log( 'i:', i);
  i++;
}
```

- **선생님 함수**
```
var i=0;
for (; lis.item(m++);) {
  console.log(m);
}
```

- **효율 패턴**
```
for (var m=0 , 1=lis.length; m<1;, m++) {
  var li = lis.item(m);
  console.log(li);
}
```

- **반대로 체크**
```
for (var m=lis.length-1; m>=0; m<1;, m--) {
  var li = lis.item(m);
  console.log(li);
}
```  

---
