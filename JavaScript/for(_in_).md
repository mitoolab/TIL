# for( _ in _ )
- length가 없을 경우 사용, for보다 헐씬 느리다.

```
- for( 속성 in 객체 ) {}
- for( var prop in obj ) {}
```

**디텍션 : 객체가 해상 속성이 있는지 검사하는 것**


- 객체 내부의 속성을 하나하나 찾는다.
```
'flex' in tester.style
'backdrop-filter' in tester.style
'webkitMaskImage' in makeEl('div').style
```  

- 순환하여 정보를 찾을 수 있다.
```
for ( var prop in makeEl('span').style ) {
  console.log('HTMLElement Style Property:', prop );
}
```

- Value 값 정보 찾기
- `[]` : 무엇이 들어올지 모르는 상태일때 사용

```
var tester_style = makeEl('span').style;

for ( var prop in tester_style ) {
  console.log('%ckey:', prop, 'color: tan' );
  console.log('value:', tester_style[prop] );
}
```
