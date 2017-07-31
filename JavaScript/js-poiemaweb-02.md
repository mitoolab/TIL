017.07.31(월)
# JavaScript - 2

## 1. Data Type (자료형)
- 기본 자료형 (primitive data type)
```
Boolean
null : 껍데기만 있는 객체
undefined
Number
String
Symbol (ECMAScript 6에서 추가)
```
  
- 객체형 (Object type)
```
Object
```
  
>Javascript의 자료형은 크게 기본 자료형(primitive data type)과 객체형(참조형)으로 구분할 수 있다.  
  
---  
  
### 1.1 Primitive Data Type (기본자료형)

기본자료형(Primitive data type)의 값은 **변경 불가능한 값(immutable value)**이다. 또한 이들은 **pass-by-value** 이다.  
  
#### 1.1.1 String
- 논리적인 요소를 나타내며 true와 false 두가지 값을 가질 수 있다.  
- 비어있는 문자열과 null, undefined, 숫자 0은 false로 간주된다.  

---



### 1.2 객체형 (Object type, 참조형)
- 객체는 데이터와 그 데이터에 관련되는 동작(절차,방법,기능)을 모두 포함할 수 있는 개념적 존재이다.
- **이름과 값을 가지는 데이터를 의미하는 프로퍼티(property)**와 **동작을 의미하는 메서드(method)**를 포함하고 있는 독립적 주체이다.
  
> 어트리뷰트와 프로퍼티  
>  
   
- 종류
```
함수 (Function)
배열 (Array)
날짜 (Date)
정규식 (RegExp)
```

---

## 2. 변수 (Variable)  

### 2.0 기본  
- 변수명 짓기 : 처음부터 결정하고 들어가기  
- 반드시 영문자(특수문자 제외)  
- underscore ( _ ) : 프라이빗한 변수에 사용
- 달러 기호($) : 라이브러리에서 사용됨
- 이어지는 문자에는 숫자(0~9)도 사용할 수 있다.  
- JavaScript는 대/소문자를 구별하므로 사용할 수 있는 문자는 “A” ~ “Z” (대문자)와 “a” ~ “z” (소문자)이다.  
  
> 기호를 사용하는 변수명은 눈에 띄기 때문에 특별하게 사용된다.  
  
- 사용방법 : 선언하고 할당한다. 
```
var age = 30; : 선언과 동시에 첫번째 할당
```  
- 명시적으로 개별 선언하는 것을 기본으로 한다. (오류 위험 제거)
```
var price = 10;
var tax   = 1;
var total = price + tax;
```
- 선언만 하는 경우
  - 변수명을 가지고 메모리 공간을 확보한 후 `undefined`를 넣어놓는다.  
> 미할당 선언에 undefined를 넣은 이유  
> - JavaScript 스스로 공간을 초기화 한다.  
  
```
var x;
console.log(x); // undefined
console.log(y); // ReferenceError (참조에러)
```
  
> 변수를 참조한다. : 메모리에 있는 데이터를 변수명을 가지고 꺼내온다.  
  
### 2.1 변수의 중복선언
- 변수는 중복 선언이 가능하다.
- 변수의 중복 선언은 문법적으로 허용되지만 의도하지 않게 변수의 값을 변경할 수 있으므로 **사용하지 않는 것이 좋다.**  
  
### 2.2 변수 선언 시 var 키워드 생략 허용  
- var 키워드의 생략은 문법적으로 허용되지만 의도하지 않게 변수를 **전역화**할 수 있으므로 **사용하지 않는 것이 좋다.**  
```
x = 1;
console.log(x); // 1
```
> 전역화 : 소스코드 모든영역에서 참조할 수 있는 코드가 된다.  
> 프레임워크는 전역변수를 해결할 수 있는 방법들이 있다.  
  
### 2.3 동적 타이핑 (Dynamic Typing)  
- 데이터의 타입을 정하는 행위
- 상황에 따라 동적으로 타이핑 한다.
- JavaScript는 동적 타입(dynamic typed) 언어 혹은 느슨한 타입(loosely typed) 언어이다.
- 이것은 변수의 Type annotation이 필요없이 값이 할당되는 과정에서 자동으로 자료형이 결정(Type Inference)될 것이라는 뜻이다.
- 따라서 같은 변수에 여러 data type의 값을 대입할 수 있다. 이를 동적 타이핑(Dynamic Typing)이라 한다.
  
> - 한계를 극복하기 위해 탄생한것이 **TypeScript** 이다.  
> - 컴퍼일에러 : 테스트 단계에서 발생하는 에러  
> - 런타임에러 : 프로그램 실행 시 발생하는 에러  
  
### 2.4 변수 호이스팅(Variable Hoisting)
- 변수의 선언이 밑에 있는데 선두에서 그 변수를 참조했을때 안되는 것이 정상이지만 자바스크립트에서는 참조가 된다.
- 종류 : 변수 호이스팅, 함수 호이스팅
```
console.log(foo); // ① undefined
var foo = 123;
console.log(foo); // ② 123
{
  var foo = 456;
}
console.log(foo); // ③ 456
```  
  
> 스코프 : 변수의 유효범위
> - 중복선언이 될 위험이 있다.  
  
- 호이스팅이란 var 선언문이나 function 선언문**(자바스크립트의 모든 선언문)**을 해당 Scope의 선두로 옮기는 것**(옮겨진것 처럼)**을 말한다. 즉 자바스크립트는 코드를 실행하기 전에 var 선언문과 function 선언문을 해당 스코프의 맨위로 옮긴다.  

#### 변수가 만들어지는 과정 (3단계)
1. 선언 단계(Declaration phase)
```
변수 객체(Variable Object)에 변수를 등록한다. 이 변수 객체는 스코프가 참조하는 대상이 된다.
```
> 메모리를 만들지 않는다.  

2. 초기화 단계(Initialization phase)
```
변수 객체(Variable Object)에 등록된 변수를 메모리에 할당한다. 이 단계에서 변수는 undefined로 초기화된다.
```
> 메모리를 할당한다. : undefined  
  
3.  할당 단계(Assignment phase)
```
undefined로 초기화된 변수에 실제값을 할당한다.
```

- 자바스크립트가 코드를 읽을 때 변수 선언문을 우선적으로 실행된다. 그러하기 때문에 호이스팅현상이 발생한다.
- 변수객체에 메모리 할당하고 undefined 를 할당하는 작업

> 스코프 간단 설명  
> - 자바스크립트의 유일한 지역은 **함수블럭** 이다.  
```
Function-level scope
함수내에서 선언된 변수는 함수 내에서만 유효하며 함수 외부에서는 참조할 수 없다. 즉,함수 내부에서 선언한 변수는 지역 변수이며 함수 외부에서 선언한 변수는 모두 전역 변수이다.
```

### 2.5 var 키워드로 선언된 변수의 문제점
1. Function-level scope
- 전역 변수의 남발
- for loop 초기화식에서 사용한 변수를 for loop 외부 또는 전역에서 참조할 수 있다.
2. var 키워드 생략 허용
- 의도하지 않은 변수의 전역화
- 중복 선언 허용
- 의도하지 않은 변수값 변경
3. 변수 호이스팅
- 변수를 선언하기 전에 참조가 가능하다.
  
---
  
> Node
1. REPL (Read Eval Print Loop)

REPL(Read Eval Print Loop: 입력 수행 출력 반복)은 Node.js는 물론 대부분의 언어(Java, Python 등)이 제공하는 가상환경으로 간단한 코드를 직접 실행해 결과를 확인해 볼 수 있다. 터미널(윈도우의 경우 커맨드창)에 다음과 명령어를 실행시켜 보자.
```
> var foo = 1;
undefined
> foo
1
```
---

## 3. 연산자

### 3.1. 산술연산자
1. 증가 연산자
```
z = x++;    // 5 선대입후증가
z = ++x;    // 7 선증가후대입
z = x--;    // 7 선대입후감소
z = --x;    // 5 선감소후대입
```
  
2. `+`연산자의 특이사항
- 한쪽이라도 문자가 오면 문자열 연결 연산자의 역할을 수행한다.
- 숫자는 숫자와, 문자는 문자와 연결함을 원칙으로 한다. 
```
var str1 = '5' + 5;      // '55'
var str2 = 5 + '5';      // '55'
var str3 = 'Hello' + 5;  // 'Hello5'
```
  
### 3.1. 대입연산자
- `=`  :	x = y  : x = y
- `+=` :	x += y : x = x + y
- `-=` :	x -= y : x = x - y
- `*=` :	x *= y : x = x * y
- `/=` :	x /= y : x = x / y
- `%=` :	x %= y : x = x % y


### 3.2. 비교 연산자 (Comparison Operators)
- `==`  : 형변화발생 (어떻게든 비교가 가능하도록 한쪽이 형변화 한다.)
- `===` : 값과 형이 동일하여야 true
- `!=`  : 형변화발생 (어떻게든 비교가 가능하도록 한쪽이 형변화 한다.)
- `!==` : 값과 형이 동일하여야 true


> 삼항연산자(ternary operator)
> - 조건 `?` 조건이 `ture`일때 반환할 값 `:` 조건이 `false`일때 반환할 값
> - 긴 구문은 가독성 문제가 있기 때문에 사용을 자제한다.
```
var condition = true;
var result = condition ? 'true' : 'false';
console.log(result); // 'true'
```
- 사용의 예
```
// id의 길이가 INPUT_ID_MIN_LEN보다 작으면 에러 메시지를 출력한다.
var id = 'lee';
var INPUT_ID_MIN_LEN = 5; (상수)
var errMsg = id.length < INPUT_ID_MIN_LEN ? '아이디는 5자리 이상으로 입력하세요' : '성공';
console.log(errMsg); // '아이디는 5자리 이상으로 입력하세요'
```
> 모든 기본자료형은 레퍼클래스가 있어서 `.`을 찍는 순간 객체로 변한다.  
  
### 3.3. 논리 연산자 (Logical Operators)
- 

### 3.4. 단축 평가 (Short-Circuit Evaluation)
- 논리연산자가 Boolean 값과 함께 사용되지 않을 경우, Boolean 값을 반환하지 않을 수 있다.   
- 이는 논리 연산자가 피연산자 중 하나를 반환하기 때문이다.  
- 논리연산자는 다음의 규칙을 따라서 “단축 평가”로 검사된다.  

- 논리연산을 중지한 값을 반환한다.
  
> 빈 문자열이 아닌 문자열은 `창`으로 인식한다.  
  

### 3.5. 타입 연산자 (Type Operators)
- `typeof` : 변수의 자료형을 문자열로 반환한다. null과 배열의 경우 object, 함수의 경우 function를 반환하는 것에 유의하여야 한다.
- `instanceof` : 객체가 동일 객체형의 인스턴스이면 true를 반환한다.

### 3.6. !!
- 피연산자를 boolean으로 변환하는 것이다.
- 피연산자의 `형`을 알아내는데 boolean으로 알아내는 것이다.

---

## 4. 제어문 (Control Flow)

### 4.1. 블록 구문(Block statement)
- 블록 구문(Block statement)는 구문들의 집합으로 가장 기본이 되는 구문이다.
- (블록은 중괄호로 그 범위를 정한다) 블록 구문은 일반적으로 함수, 객체리터럴, 흐름 제어 구문(control flow statement)에서 사용된다. 
- (e.g. if, for, while)

### 4.2. 조건문(Conditional statement)

#### 4.2.1. if 문  
- if 문은 주어진 조건식을 평가하여 논리적 참, 거짓을 구별하는 구문이다.  
- 조건식은 표현식이기 때문에 하나의 값(true/false)으로 수렴될 수 있다.  
1. if
```
if (조건식) {
  // 조건식이 참이면 이 코드블록이 실행된다.
} else { (써도 되고 안써도 된다.)
  // 조건식이 거짓이면 이 코드블록이 실행된다.
}
```

2. else if
```
if (hour < 10) {
  greeting = 'Good morning'; 
} else if (hour < 20) {     (거짓일때 다시 진행)
  greeting = 'Good day'; 
} else {                    (최종 거짓이면 실행)
  greeting = 'Good evening';
}

console.log(greeting);
```

3. switch 문
- switch 문의 경우, switch변수의 값과 일치되는 case문으로 실행 순서가 이동하게 된다.
- switch변수의 값과 일치되는 case문이 없다면 실행 순서는 default로 이동한다.  
>`break` : switch 구문에서 탈출하는 역할을 수행한다. break문이 없다면 case문의 조건과 일치하지 않더라도 실행 순서는 다음 case문으로 이동한다.  

- `switch`문에는 반드시 break를 사용한다.

### 4.3. 반복문(Loop)
- 반복문은 주어진 조건식(conditional expression)이 참인 경우 코드 블록을 실행한다.
- 그 후 조건식을 다시 검사하여 여전히 참인 경우 코드 블록을 다시 실행하며 이는 조건식이 거짓일 때까지 반복된다.
- JavaScript는 3가지의 반복문 `for`, `while`, `do while`을 제공한다.

#### 4.3.1. for 문
- for문은 특정 조건이 거짓으로 판별될 때까지 반복한다.
- 가장 일반적으로 사용되는 반복문이다.

```
for ([초기문]; [조건문]; [증감문]) {
  구문;
}
```

> 디버깅  
> - 한줄 한줄 변수값을 대응하여 문제가 있는 지 파악한다.  
> - 코드를 읽을 줄 알아야 하기 때문에 컴퓨터 공학(변수생성에 따른 메모리 등)을 알아야한다.  
> - 디버깅 브래이크포인트를 알기 위해선 작성한 코드의 작동원리를 명확히 알고 있어야 한다.  
  
#### 4.3.2. while 문
- while 문은 조건문이 참이면 코드 블럭을 계속해서 반복 실행한다.
- 조건문이 거짓이 되면 실행을 종료하고 반복문을 빠져나간다.
  
> 무한루프 조심  
  
#### 4.3.3. do while 문
- while문과 유사하나 코드블록은 조건문을 확인하기 전에 무조건 1회 실행된다.
- 그후 조건문을 확인하여 실행 여부를 판별한다.
  
> 무조건 한번은 실행  
  
#### 4.3.4. continue
- break문은 반복문 하나를 탈출한다.
- continue문은 이후 구문의 실행을 스킵하고 반복문의 조건문으로 이동한다.

---

### 5. 평가(Evaluating)
- 흐름제어를 위해서는 조건식을 평가하여 논리적 참, 거짓을 구별한 후 평가 결과에 따라 의사결정을 하는 것이 일반적이다.
```
if (1) {
  console.log('1'); (true)
}

if ('str') {
  console.log('2'); (true)
}

if (true) {
  console.log('3'); (true)
}

if (null) {
  console.log('4'); (false)
}

var x = '';

if (x) {
  console.log('5');
}

if (!x) {
  console.log('6');
}
```
> 함수 체크할 때 자주 사용 (문자열을 자르기 전에 문장열이 비어있지 않은가? 등)  
  


#### 5.1. 암묵적 강제 형 변환 (Type coercion)
```
console.log('1' > 0);            // true   (문자 => 숫자)
console.log(1 + '2');            // '12'   (숫자 => 문자)
console.log(2 - '1');            // 1      (숫자 => 문자)
console.log('10' == 10);         // true   (문자 => 숫자)
console.log('10' === 10);        // false  (타입 체크)
console.log(undefined == null);  // true   (부정값으로 표현)
console.log(undefined === null); // false  (타입 체크)
```

#### 5.2. Type Conversion Table
- 패턴을 찾는게 중요함
- 부정적, 없는것은 = false

#### 5.3. Data type conversion
```
var val = '123';
console.log(typeof val + ': ' + val); // string: 123

// sting -> number
val *= 1;
// val = Number(val);
// val = parseInt(val);
console.log(typeof val + ': ' + val); // number: 123

// number -> sting 
val += '';
// val = String(val);
console.log(typeof val + ': ' + val); // string: 123
```

#### 5.4. Truthy & Falsy values
- 아래 값들은 Boolean context에서 false로 평가된다.
```
false
undefined
null
0
NaN (Not a Number)
'' (빈문자열)
```

---

### 6. 객체(Object)란?
- 객체의 생성은 3가지 방법이 있음
- 객체는 데이터와 그 데이터에 관련되는 동작(절차, 방법, 기능)을 모두 포함할 수 있는 개념적 존재이다.
- 이름(키)과 값으로 구성된 데이터를 의미하는 **프로퍼티(property)** 와 
- 동작을 나타내는 **메서드(method)** 를 포함하고 있는 독립적 주체이다.
- 객체는 데이터를 한 곳에 모으고 구조화하는데 유용하다. 
- 객체 하나는 다른 객체를 포함할 수 있기 때문에 그래프나 트리와 같은 자료구조를 쉽게 표현할 수 있다.

#### 6.1. 프로퍼티(Property)
객체는 이름(name)과 값(value)의 쌍인 프로퍼티들을 포함하는 컨테이너라고 할 수 있다.  
프로퍼티는 프로퍼티 이름과 프로퍼티 값으로 구성된다. 프로퍼티 이름의 명명 규칙과 프로퍼티 값으로 사용할 수 있는 값은 아래와 같다.

- 프로퍼티 이름 : 빈 문자열을 포함하는 문자열과 숫자
- 프로퍼티 값 : `undefined`을 제외한 모든 값  
> `undefined`제외하는 이유 : 만들지 않는 것과 같기 때문이다.  

#### 6.2. 메서드(Method)
- 메서드는 객체에 제한되어 있는 함수를 의미한다. 즉 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 **메서드** 라 칭한다.

#### 6.3 객체 생성 방법
- 자바에서는 클래스를 사전에 정의하고 필요한 시점에 new 연산자를 사용하여 인스턴스를 생성하는 방식으로 객체를 생성한다.
- 하지만 자바스크립트는 클래스라는 개념이 없고 별도의 객체 생성 방법이 존재한다.

### 6.4. 객체 리터럴
- 변수의 우항에 객체 리터럴을 사용하면 객체의 리터널이 생성된다.
- 내용없는 객체 생성 : {}
```
var emptyObject = {};
console.log(typeof emptyObject); // object
```
- 내용있는 객체 생성 : 추상화  
> 추상화 : 다른 것들도 있지만 중요한 것들을 나열하여 객체를 생성한다.  
```
var person =(할당) { (person이란 변수에 객체리터럴이 할당된 것)
  name(프로퍼티명): 'Lee'(프로퍼티값),(구분)
  gender: 'male',
  sayHello: function ()(메서드) {
    console.log('Hi! My name is ' + this.name);
  }
};
``` 
> 객체내에서 메서드가 다른 프로퍼티를 지칭할때는 `this`를 사용하고  
> 객체 리터럴일때는 자기를 가리킨다.  

- 
```
console.log(typeof person); // object
console.log(person); // { name: 'Lee', gender: 'male', sayHello: [Function: sayHello] }

person.sayHello(); // Hi! My name is Lee (함수 호출)
```

### 6.4. Object() 생성자 함수
- new 연산자와 Object() 생성자 함수를 사용하여 **빈 객체** 를 생성할 수 있다.
- 빈 객체 생성 이후 프로퍼티와 메서드를 추가하여 객체를 완성하는 방법이다.
- 객체의 프로퍼티에 새로운 값을 할당하면 프로퍼티 값은 갱신된다.
- 객체가 소유하고 있지 않은 프로퍼티에 값을 할당하면 해당 객체에 프로퍼티를 추가하고 값을 할당한다.  
> Java를 흉내내어 만들어내는 객체
  
```
// 빈 객체의 생성
var person = new Object();
// 프로퍼티 추가
person.name = 'Lee';
person.gender = 'male';
person.sayHello = function () {
  console.log('Hi! My name is ' + this.name);
};

console.log(typeof person); // object
console.log(person); // { name: 'Lee', gender: 'male', sayHello: [Function] }

person.sayHello(); // Hi! My name is Lee
```  
> JavaScript 엔진에서 사용하는 것  
> 객체 리터럴 방식으로 생성된 객체는 결국 내장(Built-in) 함수인 Object() 생성자 함수로 객체를 생성하는 것을 단순화 시킨 short-hand(축약법)이다.  

### 6.4. 생성자 함수
- 객체 리터럴 방식과 Object() 생성자 함수 방식으로 객체를 생성하는 것은 프로퍼티 값만 다른 여러개의 객체 생성에 불편이 있다.
- 동일한 프로퍼티를 갖는 객체임에도 불구하고 매번 같은 프로퍼티를 기술해야한다.
- 객체 리터럴 방식
```
var person1 = {
  name: 'Lee',
  gender: 'male',
  sayHello: function () {
    console.log('Hi! My name is ' + this.name);
  }
};

var person2 = {
  name: 'Kim',
  gender: 'female',
  sayHello: function () {
    console.log('Hi! My name is ' + this.name);
  }
};
```
- 생성자 함수를 사용하면 마치 객체를 생성하기 위한 **템플릿(클래스)** 처럼 사용하여 구성이 동일한 객체 여러개를 간편하게 생성할 수 있다.

- 생성자 함수
  - `this`: 생성될 프로퍼티를 가리킴
  - 첫 문자를 대문자로 표기하는 관심이 있다.
```
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
  this.sayHello = function(){
    console.log('Hi! My name is ' + this.name);
  };
}
```

- 인스턴스의 생성
```
var person1 = new Person('Lee', 'male');
var person2 = new Person('Kim', 'female');

console.log('person1: ', typeof person1);
console.log('person2: ', typeof person2);
console.log('person1: ', person1);
console.log('person2: ', person2);

person1.sayHello();
person2.sayHello();
```

> 유사한 객체를 다량 생산할때 유용함  (공장과 같음)

- 앞으로 객체를 생성할때는
  - 오브젝트 방식은 사용안함
  - 실제객체 (객체리터럴)
  - 생성자 (객체리터럴을 만들어내는 함수)
  
> 사용에 따라 사용하는 방법을 선택하면 된다.  
  
### 6.4. 객체 프로퍼티 접근
#### 6.4.1. 프로퍼티 이름
- 금지 : `-`(마이너스, 케밥케이스)라는 의미가 있기때문에 사용할 수 없다.
- 사용 : `_`(스테이크케이스), `lastName`(카멜케이스)
- `''` 사용 : 스크립트가 오해할 수 있는 단어 및 키워드, 예약어(엔진이 아는 이름)
- 길어지더라도 명확하게 사용하기를 권장함
- tip
  - 변수 : 명사 사용
  - 메서드 : 동사 또는 목적어 사용

#### 6.4.2. 프로퍼티 값 읽기
- 마침표(.) 표기법
- 대괄호([]) 표기법 : 대괄호 안에는 반드시 `' '`사용(문자열)
- 객체에 존재하지 않는 프로퍼티를 참조하면 `undefined`를 반환한다.

#### 6.4.3. 프로퍼티 값 갱신
- 객체가 소유하고 있는 프로퍼티에 새로운 값을 할당하면 프로퍼티 값은 갱신된다.
```
person['first-name'] = 'Kim';
```

#### 6.4.4. 프로퍼티 동적 생성
- 객체가 소유하고 있지 않은 프로퍼티에 값을 할당하면 하면 해당 프로퍼티를 객체에 추가하고 값을 할당한다.
```
person.age = 20;
```

#### 6.4.5. 프로퍼티 삭제
- `delete` 연산자를 사용하면 객체의 프로퍼티를 삭제할 수 있다.
- 프로퍼티에만 사용가능 하다. (객체에 사용하면 무시된다.)
```
delete person.gender;
```

#### 6.4.5. for-in 문
- for-in 문을 사용하면 객체에 포함된 모든 프로퍼티에 대해 루프를 수행할 수 있다.
- prototype 과 같이 걸리기 때문에 사용하지 않는것을 권장한다.
- ES6 `for-of` 문으로 사용한다.

#### 6.4.6. Pass-by-reference
- 참조형과 기본형
- 참조형은 값이 참조되기 때문에 변경되면 원안도 변경된다.
- 기본형은 복사된다. 변경되어도 원안은 변경되지 않는다.