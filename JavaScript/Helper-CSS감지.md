# CSS를 감지하는 Helper함수
---

- css 속성을 브라우저가 지원하는지 파악하기 위한 테스트 객체
- `_` : 감춰진 멤버, 관례일뿐
- 의존성파일 : 함께 다녀야한다.
- 삭제를 위해 window 사용

```
window._tester = document.createElement('div').style;

- console.log('window._tester:', window._tester);
- delete _tester;
- 감지가 끝나면 delete로 삭제한다.
- 지원이 안되면 앞에 no- 가 붙는다.
```  

```
function detectCSSFeature(property) {
  if ( typeof property != 'string') {
    throw new Error('CSS 속성 이름을 문자열로 전달해주세요.')
  }
  return property in _tester;
}
```

```
properties : 반드시 배열
detectCSSFeature(['grid', 'flex', 'animation', 'transform'])

function detectCSSFeature(properties) {
  // 전달인자 유효성 검사
  if ( !Array.isArray(properties) ) {
    // 오류발생!
  }
  // 배열 탐색 탐색 : 우리가 검증해야할 속성값들
  for (var property, i = properties.length - 1; i >= 0; i--) {
    property = properties[i];
    // transform, animation, flex, grid
    if ( detectCSSFeature(property) ) {
      // 지원 되는 경우
      _root.classList.add(property);
    } else {
      // 미지원 경우
      _root.classList.add(property);
    }

  }
}
```

---
