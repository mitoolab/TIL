2017.08.10(목)
# 함수를 공부하자-01


## 1. 두 수를 입력받아 큰 수를 반환하는 함수
- `Math`
```js
  Math
function max(a,b) {
  // type 체크
  if (typeof a === 'number' && typeof b === 'number') {
    // Math js메서드 사용
    return Math.max(a, b);
  }
}
console.log(max(2,3));
```

- `if함수`
```js
function max(a, b) {
  if ( a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(max(2,3));
```

- `삼항식`
```js
function max(a, b) {
  return a > b ? a : b;
}
console.log(max(2,3));
```  

---  
## 2. 숫자를 입력하면 요일을 반환하는 함수
```js
function getDay(n) {
  var days = ['일', '월', '화', '수', '목', '금', '토'];
  return days[ n % 7 ];
}
console.log(getDay(0));
```

---  
## 3. 숫자를 배열로 전달받아 숫자의 평균을 반환하는 함수
- `for문`
```js
function avg0(numArr) {
  var result = 0;
  for ( var i = numArr.length; i--;) {
    result += i;
  }
  return result/i;
}
console.log(avg0([1, 2, 3, 4, 5]));
```

- `reduce`
```js
function avg1(numArr) {
  return numArr.reduce(function(prev, curr){ return prev + curr;})/numArr.length;
}
console.log(avg1([1, 2, 3, 4, 5, 8]));
```

---  
## 4. 숫자를 n개 전달 받아 숫자들의 평균을 반환하는 함수
- `for문`
```js
function avgN2() {
  var result = 0;
  for ( var l = arguments.length; l--;) {
    result += arguments[l];
  }
  return result/l;
}
console.log(avgN2(1, 2, 3, 4, 5));
```

- `Array`
```js
function avgN() {
  return Array.prototype.slice.call(arguments).reduce(function(prev, curr){
     return prev + curr;})/arguments.length;
}
console.log(avgN(1, 2, 3, 4, 5));
```

- `ES6`
```js
function avgN1(...n) {
  return n.reduce(function(prev, curr){ 
    return prev + curr;})/n.length;
}
console.log(avgN1(1, 2, 3, 4, 5));
```

---  
## 5. 문자를 배열로 전달 받아 문자열 하나로 반환하는 함수
```js
function oneString(stringArr) {
  // 빈 문자 초기화
  var result = '';
  for(var i = 0, l = stringArr.length; i < l; i++){
    result += stringArr[i];
  }
  return result;
}
console.log(oneString(['a', 'b', 'c', 'd']));
```

---  
## 6. 세 수를 입력받아 큰 수를 반환하는 함수
```js
function threeMax(a, b, c) {
  return max(max(a, b), c);
}
console.log(threeMax(5, 10, 15));
```

- `Math`
```js
function threeMax2(a, b, c) {
  return Math.max(a, b, c);
}
console.log(threeMax2(5, 10, 15));
```

---
## 7. n개의 인자를 받아서 가장 큰 수를 반환
- `ES5`
```js
function nMax1() {
  var numArr = Array.prototype.slice.call(arguments);
  return Math.max.apply(null, numArr);
}
console.log((nMax1(12, 54, 112, 123,546)));
```

- `ES6`
```js
function nMax2(...numArr) {
  return Math.max(...numArr);
}
console.log(nMax2(123,234,33456,57,679));
```

---
## 8. 문자열을 역순으로 바꿔주는 함수
```js
function reverseMsg(msg) {
  return msg.split('').reverse().join('');
}
console.log(reverseMsg('안녕하세요'));
```

---  
## 9. 비밀번호 문자열 validation 최소 8글자 최대 20글자 영어 대문자 숫자 포함
- `정규식`
```js
function pwValidation(pw){
	return /^.*(?=.{8,20})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/.test(pw.trim());
}
console.log(pwValidation('pW1123adfq'));
```

- `if/for`
```js
function pwValidation(pw){
  // 글자수, 영어대문자, 영어 소문자, 숫자
  var pw = pw.trim()
  var upperChk = false;
  var lowerChk = false;
  var numChk = false;
  var l = pw.length;
  if( l >= 8 && l <= 20){
  	for(var i = 0 ; i < l; i++){
  		if('a' <= pw[i] && pw[i] <= 'z' ){
  			lowerChk = true;
  			if(lowerChk && numChk && upperChk){
  				break;
  			}
  		}
  		else if('A' <= pw[i] && pw[i] <= 'Z'){
  			upperChk = true;
  			if(lowerChk && numChk && upperChk){
  				break;
  			}
  		}
  		else if('0' <= pw[i] && pw[i] <= '9'){
  			numChk = true;
  			if(lowerChk && numChk && upperChk){
  				break;
  			}
  		}
  	}
  }
  return lowerChk && numChk && upperChk;
}
console.log(pwValidation('pW1123adfq'));
```