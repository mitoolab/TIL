# loop, while
---

- 순환(Loop) 처리 제어

## 1) if () {}  vs  while() {}
- **1-1 if : 한번실행**

```
 var condition = true;

 if ( condition ) {
   console.log('this is true.');
 }
```  

- **1-2 while : 조건이 "참" 일동안 계속반복해서 실행**

```
var arr = ['one',  'two', 'three'];

while ( arr.length ) {
  console.log('this is ' + arr.pop());
   조건(상태) 변경
}
```  

## 2) 특정 item을 제외하여 출력 (two 제외)
```
var arr = ['one',  'two', 'three'];
while ( arr.length ) {
   console.log('this is ' + arr.pop());
   조건(상태) 변경
   조건을 확인할 변수 생성
  var item = arr.pop();
  if ( item !== 'two') {
    console.log('this is ' + item);
  }
}
```

## 3) 순서 변경하기
```
var arr = ['one',  'two', 'three'];
while ( arr.length ) {
   console.log('this is ' + arr.pop());
   조건(상태) 변경
   조건을 확인할 변수 생성
  var item = arr.shift();
  if ( item !== 'two') {
    console.log('this is ' + item);
  }
}
```
