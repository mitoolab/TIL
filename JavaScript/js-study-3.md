2017.08.01(화)
# js-study - 03

- 함수 (function)

## 1. 함수 (function)

**함수란** 어떤 특정 작업을 수행하기 위해 필요한 일련의 구문들을 그룹화하기 위한 개념이다.  
- 만일 스크립트의 다른 부분에서도 동일한 작업을 반복적으로 수행해야 한다면 (동일한 구문을 계속해서 반복 작성하는 것이 아니라) 미리 작성된 함수를 재사용할 수 있다.(코드의 재사용)  
- 함수의 일반적 기능은 특정 작업을 수행하는 구문들의 집합을 정의하고 필요시에 호출하여 필요한 값 또는 수행 결과를 얻는 것이다.  
- 그러나 이러한 일반적 기능(코드의 재사용) 이외에 객체 생성, 객체의 행위 지정(메서드), 정보의 구성 및 은닉, 클로저, 모듈화 등의 기능을 수행할 수 있다.  
- 함수는 구문(statement)의 집합으로 모듈화의 근간이 된다.
- 일반적으로 프로그래밍 기술은 요구사항의 집합을 자료구조와 함수의 집합으로 변환하는 것이다.  
- 함수도 객체이다.  
- 다른 객체와 구분될 수 있는 특징은 호출할 수 있다는 것이다.  
- 함수도 객체(일급 객체 First-class object)이므로 다른 값들처럼 사용할 수 있다.
- 즉 변수나 객체, 배열 등에 저장될 수 있고 다른 함수에 전달되는 인수로도 사용될 수 있으며 함수의 반환값이 될 수도 있다.  

### 1.1 함수 정의 방식
1. 함수선언식(Function declaration)
2. 함수표현식(Function expression)
3. Function() 생성자 함수 : 자바스크립트 엔진이 사용하는 함수

### 1.1 함수선언식(Function declaration)  

- 함수명
  - 함수선언식의 경우, 함수명은 생략할 수 없다. 함수명은 함수 몸체에서 자신을 재귀적(recursive) 호출하거나 자바스크립트 디버거가 해당 함수를 구분할 수 있는 식별자의 역할을 한다.
- 매개변수 목록
  - 0개 이상의 목록으로 괄호로 감싸고 콤마로 분리한다. 다른 언어와의 차이점은 **매개변수의 자료형을 기술하지 않는다는 것이다.** 이 때문에 함수 몸체 내에서 매개변수의 자료형 체크가 필요할 수 있다.
- 함수 몸체
  - 실제 함수가 호출되었을 때 실행되는 구문들의 집합이다. 중괄호({ })로 구문들을 감싸고 return 문으로 결과값을 반환할 수 있다. 이를 반환값(return value)라 한다.
```
function square(number) {
  return number * number;
}
```
> 함수 호이스팅의 문제로 사용하지 않는 것이 좋다.  
  
### 1.2 함수표현식(Function expression)

> 1급객체 특징  
> - 무명의 리터럴로 표현이 가능하다.  
> - 변수나 자료 구조(객체, 배열…)에 저장할 수 있다.  
> - 함수의 파라미터로 전달할 수 있다.  
> - 반환값(return value)으로 사용할 수 있다.  

- 함수의 일급객체 특성을 이용하여 **함수 리터럴 방식** 으로 함수를 정의하고 변수에 할당할 수 있는데
- 이러한 방식을 함수표현식(Function expression)이라 한다.

```
var square = function(number) {
  return number * number;
};
```
  
> 코딩습관 : 호출전에 선언할 것  
  
- 함수표현식으로 정의한 함수는 함수명을 생략할 수 있다.
- 이러한 함수를 익명 함수(anonymous function)이라 한다.
- 함수표현식에서는 함수명을 생략하는 것이 일반적이다.

- 함수는 일급객체이기 때문에 변수에 할당할 수 있는데 이 변수는 함수명이 아니라 할당된 함수를 가리키는 참조값을 저장하게 된다.
- 함수 호출시 이 변수가 함수명처럼 사용된다.

- 함수가 할당된 변수를 사용해 함수를 호출하지 않고 기명 함수의 함수명을 사용해 호출하게 되면 에러가 발생한다. 이는 함수표현식에서 사용한 함수명은 외부 코드에서 접근 불가능하기 때문이다. (사실은 함수선언식의 경우도 마찬가지이다.)

### 1.3 Function() 생성자 함수
- 함수표현식으로 함수를 정의할 때 함수 리터럴 방식을 사용한다.
- 함수선언식도 내부적으로 자바스크립트 엔진이 기명 함수표현식으로 변환하므로 결국 함수 리터럴 방식을 사용한다.

- 따라서 함수선언식과 함수표현식은 모두 함수 리터럴 방식으로 함수를 정의하는데 이것은 결국 내장 함수 Function() 생성자 함수로 함수를 생성하는 것을 단순화 시킨 것이다.

### 1.4 함수 호이스팅(Function Hoisting)

- 자바스크립트는 ES6의 let, const를 포함하여 모든 선언(var, let, const, function, function*, class)을 호이스팅(Hoisting)한다.

- 함수선언식으로 정의된 함수는 자바스크립트 엔진이 스크립트가 로딩되는 시점에 바로 초기화하고 이를 VO(variable object)에 저장한다.
- 즉, 함수 선언, 초기화, 할당이 한번에 이루어진다. 그렇기 때문에 함수 선언의 위치와는 상관없이 소스 내 어느 곳에서든지 호출이 가능하다.
- 함수선언식의 경우와는 달리 TypeError가 발생하였다. 함수표현식의 경우 함수 호이스팅이 아니라 변수 호이스팅이 발생한다.

### 2. 매개변수(Parameter, 인자)

- 함수의 작업 실행을 위해 추가적인 정보가 필요할 경우, 매개변수를 지정한다.
- 매개변수는 함수 내에서 변수와 동일하게 동작한다.
- 함수 내부에서 사용하기 위한 변수와 비슷하다.

### 2.1 매개변수(parameter, 인자) vs 인수(argument)
- 매개변수는 함수 내에서 변수와 동일하게 메모리 공간을 확보하며 전달되어진 인수는 매개변수에 할당된다.
- 만약 인수가 전달되지 않으면 매개변수는 undefined로 초기화된다.
- 인자와 인수의 수가 일치하지 않을 수 있다. 앞부터 채우고, 없으면 undefined를 반환한다.
```
var foo = function (p1, p2) { (인자,parameter)
  console.log(p1, p2); (인수,argument, 지역변수와 같다.)
};

foo(1); // 1 undefined
```

### 3. Call-by-value
- Primitives(기본자료형) 인수는 Call-by-value(값에 의한 호출)로 동작한다.
- 이는 함수 호출 시 기본자료형 인수를 함수에 매개변수로 전달할 때 매개변수에 값을 복사하여 함수로 전달하는 방식이다.
- 이때 함수 내에서 매개변수를 통해 값이 변경되어도 전달이 완료된 **기본자료형 값은 변경되지 않는다.**
```
function foo(primitive) {
  primitive += 1;
  return primitive;
}

var x = 0;

console.log(foo(x)); // 1
console.log(x);      // 0
```

### 4. Call-by-reference
- 객체 타입(참조 타입) 인수는 Call-by-reference(참조에 의한 호출)로 동작한다.
- 이는 함수 호출 시 참조 타입 인수를 함수에 매개변수로 전달할 때 매개변수에 값이 복사되지 않고 객체의 참조값이 매개변수에 저장되어 함수로 전달되는 방식이다.
- 이때 함수 내에서 매개변수의 참조값이 이용하여 객체의 값을 변경했을 때 전달되어진 **참조형의 인수값도 같이 변경된다.**

```
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = 'Kim';
  obj.gender = 'female';
}

var num = 100;
var obj = {
  name: 'Lee',
  gender: 'male'
};

console.log(num); // 100
console.log(obj); // Object {name: 'Lee', gender: 'male'}

changeVal(num, obj);

console.log(num); // 100
console.log(obj); // Object {name: 'Kim', gender: 'female'}
```


### 5. 반환값 (return value)
- 함수는 자신을 호출한 코드에게 수행한 결과를 반환(return)할 수 있다.  
> 개발자가 명시적으로 리턴하지 않아도 내부적으로 반환값이 생성된다.  
  
- return 키워드는 함수를 호출한 코드에게 값을 반환할 때 사용한다.
- 함수는 배열 등을 이용하여 한 번에 여러 개의 값을 리턴할 수 있다.
- 함수는 반환을 생략할 수 있다. 이때 함수는 암묵적으로 undefined를 반환한다.
- 자바스크립트 해석기는 return 키워드를 만나면 함수의 **실행을 중단한 후(빠진다)** , 함수를 호출한 코드로 되돌아간다.
- 만일 return 키워드 이후에 다른 구문이 존재하면 그 구문은 실행되지 않는다.

> 함수의 마지막에 사용하는 것이 정상적이다. (실행을 중단하면 뒤쪽 구문을 실행하지 않는다.)  

```
function calculateArea(width, height) {
  var area = width * height;
  return area; // 단일 값의 반환
}
console.log(calculateArea(3, 5)); // 15
console.log(calculateArea(8, 5)); // 40

function getSize(width, height, depth) {
  var area = width * height;
  var volume = width * height * depth;
  return [area, volume]; // 복수 값의 반환 (배열로 리턴, 어떤값을 리턴하는지 알려주어야 함수를 사용하는 사람이 대응 할 수 있다.)
}

console.log('area is ' + getSize(3, 2, 3)[0]);   // area is 6
console.log('volume is ' + getSize(3, 2, 3)[1]); // volume is 18
```

> 함수를 사용하는 기본 문법 종료  

### 6. 함수 객체의 프로퍼티
- 함수는 객체이다. 따라서 함수도 프로퍼티를 가질 수 있다. (자바스크립트 엔진이 자동을 만든다.)
```
function square(number) {
  return number * number;
}
console.dir(square);
```

### 6.1. arguments(인수) 프로퍼티
- arguments 객체는 함수 호출 시 전달된 인수(argument)들의 정보를 담고 있는 순회가능한(iterable) **유사 배열 객체(array-like object)이다.**
- 함수 객체의 arguments 프로퍼티는 arguments 객체를 값으로 가지며 함수 내부에서 **지역변수처럼** 사용된다.
- 즉 **함수 외부에서는 사용할 수 없다.**
- 자바스크립트는 함수 호출 시 함수 정의에 따라 인수를 전달하지 않아도 에러가 발생하지 않는다.
  
### 6.2. caller 프로퍼티
- caller 프로퍼티는 **자신을 호출한 함수를 의미한다.**

### 6.3. length 프로퍼티
- length 프로퍼티는 함수 정의 시 작성된 매개변수 갯수를 의미한다.
- arguments.length의 값과는 다를 수 있으므로 주의하여야 한다. **arguments.length는 함수 호출시 인자의 갯수이다.**

### 6.4. name 프로퍼티
- 함수명을 나타낸다. 기명함수의 경우 함수명을 값으로 갖고 익명함수의 경우 빈문자열을 값으로 갖는다.

### 6.5. __proto__ 프로퍼티
- ECMAScript spec에서는 모든 객체는 자신의 프로토타입을 가리키는 [[Prototype]]이라는 숨겨진 프로퍼티를 가진다 라고 되어있다.
- 크롬, 파이어폭스 등에서는 숨겨진 [[Prototype]] 프로퍼티가 `__proto__`프로퍼티로 구현되어 있다.
- 즉 `__proto__`과 [[Prototype]]은 같은 개념이다.
- 함수의 프로토타입 객체는 Function.prototype이며 이것 역시 **함수이다.**
  
> 함수, 일반 객체가 전부 가지고 있다.  
> 부모를 찾아가는 것


### 6.6. prototype 프로퍼티
- 모든 함수 객체는 prototype 프로퍼티를 갖는다. 주의해야 할 것은 prototype 프로퍼티는 프로토타입 객체를 가리키는 [[Prototype]] 프로퍼티(__proto__ 프로퍼티)와는 다르다는 것이다.
- prototype 프로퍼티와 [[Prototype]] 프로퍼티는 모두 프로토타입 객체를 가리키지만 관점의 차이가 있다.

- `__proto__` 프로퍼티
  - **모든 객체가 가지고 있는 프로퍼티이다.**
  - **객체의 입장에서 자신의 부모 역할을 하는 프로토타입 객체을 가리키며** 함수 객체의 경우 `Function.prototype`를 가리킨다.

- prototype 프로퍼티
  - **함수 객체만 가지고 있는 프로퍼티이다.**
  - 함수 객체가 생성자로 사용될 때 이 함수를 통해 생성된 객체의 **부모 역할을 하는 객체를 가리킨다.**
  - 함수가 생성될 때 만들어 지며 `constructor` 프로퍼티를 가지는 객체를 가리킨다. 이 `constructor` 프로퍼티는 함수 객체 자신을 가리킨다.

> 함수 객체만 가지고 있는 것.  
> 생성자 함수가 만들 객체의 부모를 가리키는 프로퍼티  
> constructor : 생성자를 가리킨다.  

> 모든 객체는 부모가 있다.  
> 생성자 함수 : function.prototype 이 부모가 된다.  
> 일반 함수 : 
> 객체가 생성되었을때 의미가 있다.  
> 프로토타입 체인의 의하여 부모의 기능을 사용 가능하다.  

```
function square(number) {
  return number * number;
}

// console.dir(square);
console.dir(square.__proto__);
console.dir(square.prototype);

console.log(square.__proto__ === Function.prototype); // true ①
console.log(square.__proto__ === square.prototype);   // false
console.log(square.prototype.constructor === square); // true ②
console.log(square.__proto__.constructor === square.prototype.constructor); // false
```
> 프로토타입 기반 객체지향 언어  
> 객체리터럴 : 오브젝트 생성자 함수 object.prototype
> 

## 7. 함수의 다양한 형태

### 7.1. 즉시호출함수표현식 (IIFE, Immediately Invoke Function Expression)
- 함수의 정의와 동시에 실행되는 함수를 즉시호출함수라고 한다.
- 최초 한번만 호출되며 다시 호출할 수는 없다. 이러한 특징을 이용하여 최초 한번만 실행이 필요한 초기화 처리등에 사용할 수 있다.
- 기명 즉시실행함수(named immediately-invoked function expression)
```
(function myFunction() {
  var a = 3;
  var b = 5;
  return a * b;
}());
```
- 익명 즉시실행함수(immediately-invoked function expression)
```
(function() {
  var a = 3;
  var b = 5;
  return a * b;
}());
```
> 코드가 엉킬 수 있기 때문에 전체를 막아준다.  
> 지역변수화 한다.  
> ES6 `let`, `const` 기능이 추가되었다.  
> 지역화하는 것이 좋다.  
> 파일 분리할때는 **무조건 사용한다.** 라고 생각한다.  

### 7.2 내부 함수 (Inner function)
- 함수 내부에 정의된 함수를 내부함수라 한다.
- 내부함수 child는 자신을 포함하고 있는 부모함수 parent의 변수에 접근할 수 있다.
- 하지만 부모함수는 자식함수(내부함수)의 변수에 접근할 수 없다.
> 스코프는 좁을 수록 좋고, 전역은 피하라.  

### 7.3 콜백 함수 (Callback function)
- 콜백함수는 함수를 명시적으로 호출하는 방식이 아니라 특정 이벤트가 발생했을 때 시스템에 의해 호출되는 함수를 말한다.
- 콜백함수가 자주 사용되는 대표적인 예는 이벤트 핸들러 처리이다.
- 어딘가에서 대기하다가 이벤트가 발생하면 불려져서 실행된다.
- 콜백 함수는 주로 비동기식 처리 모델(Asynchronous processing model)에 사용된다.
  - 비동기식 처리 모델이란 처리가 종료하면 호출될 함수(콜백함수)를 미리 매개변수에 전달하고 처리가 종료하면 콜백함수를 호출하는 것이다.

```
<html>
<body>
  <button id="myButton">Click me</button>
  <script>
    var button = document.getElementById('myButton');
    button.addEventListener('click', function() {
      console.log('button clicked!');
    });
  </script>
</body>
</html>
```
