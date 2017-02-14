# 역사 및 기본

## 역사 History
  - 개발자 : Brendan Eich (브랜드 아이크)
  - 초기 이름
    - LiveScript : 웹 페이지를 좀 더 동적으로 보이게 하기 위해 웹 브라우저에 나중에 추가된 기능(언어)
    - JavaScript로 변경 (표준이름 : ECMA Script (에크마 스크립트))
  - css 보다 먼저 개발되었음

## JavaScript와 JAVA 비교
  - JavaScript : 인터프린터 interpreter(통역서), 처리속도: 느림
    - https://developer.mozilla.org/ko/docs/Web/JavaScript
    - 일급함수
      - 조건
        - 변수(variable)에 담을 수 있다
        - 인자(parameter)로 전달할 수 있다
        - 반환값(return value)으로 전달할 수 있다
        ```
        함수가 1급 객체라는 사실은 겉으로 봤을 땐 그리 특별하지 않다. 함수를 그냥 주고받을 수 있다는 것 뿐이지만 이것이 아주 큰 차이점을 만든다.
        가장 중요한 장점은 바로 고차 함수(high order function)가 가능하다는 점이다. JavaScript의 each, filter, map, sort 등의 함수들이 얼마나 편리한지는 잘 알고 있을 것이다. 인자로 목적에 맞는 함수를 하나 넘겨주면 아주 쉽게 처리가 된다.
        ```
  - JAVA : 컴파일(번역서), 처리속도: 빠름

## Flach의 후퇴
  - 후퇴원인 모바일 환경에서 배터리소모 높음, 윈도우 최적화, 느림
  - 대체프로그램의 발전 : HTML5, css, js, svg(내부에 코드로 되어있음, 접근성 있음), canvas(접근성없음,미디어 등 사용) 등으로 대체

## 참고사이트 및 도서
  - gyu.que.jp
  - 3d 미디어 : mrdoob.com , threejs.org
    (날씨 정보를 받아 애니메이션으로 반영할 수 있다.)
  - 완전정복 스터디 1,2,3 (저자 김춘경)


  - JavaScript 적용 확인방법
    - 웹 브라우저 - 관리자도구 - console 창에서 작성

## 용어
  - 웹의 HTML 분석기 : parser
  - API : 사용설명서
  - 빈문자 : "", '' 스페이스도 없이 아무것도 없는 상태
  - transpiler (트랜스파일러) : 바벨, 타임스크립트
  - CRUD : Create(생성), Read(읽기), Update(갱신), Delete(삭제)
  - outerHeigth : 띄어쓰는 공백을 대문자로 표기 : camelCase(낙타등 모양)
  - BOM : Browser Object Model
  - DOM : 도큐먼트 오브젝트 모델

## 기본 사항 Tip
  - 웹은 운영체제를 모방한다. 현재의 접근성도 완벽하지 않다.
  - 뷰 구현은 프론트엔드의 기본이며, 체험을 통해 익힐 필요가 있다.
  - 인터넷에 최신 업데이트 정보를 적극 활용하라
  - 자바스크립트를 활용하여 직접 먼가를 만들어 봐야 한다.
  - 라이브러리와 프레임워크에 의존하지말고 직접 제작 가능한 개발자가 되어야 한다.
  - 자바스크립트는 개체이고, 개체는 능력을 가지고 있는데 그것을 할용하는 것
  - 공부순서 : 자바스크립트, es5(많이사용), es6(넘어가는 수순), 바벨JS
  - 구조, 표현, 동작의 분리
  - JavaScript 적용 확인방법
    - 웹 브라우저 - 관리자도구 - console 창에서 작성
