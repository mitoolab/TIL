2017.5.10.(수)
# DOM을 깨우치다 정리
## 11장 DOM 이벤트

---

### 1. 개요
  - DOM의 이벤트는 DOM 내의 element, document 개체, window 개체와 관련되어 발생하는 사전 정의된 시점이나 정의 시점을 말함
  - 시점이 발생할 때 실핼될 기능(핸들러/콜백)을 연관시킴으로써 프로그래밍적으로 알 수 있음
    - UI의 상태
    - JavaScript 프로그램을 실행하는 환경의 상태
    - 프로그램 자체의 상태
  - 이벤트 속성
    - 인라인 attribute 이벤트 핸들러
    - 속성 이벤트 핸들러
    - addEventListener() 메서드
  ```
  var elementDiv = document.querySelector('div');

  // 속성 이벤트 핸들러 패턴
  elementDiv.oncilck = function() {
    console.log( ~ )
  };

  // addEventListener 메서드 패턴
  elementDiv.addEventListener('click', function(){
    console.log( ~ )
    }, false);
  ```

---
