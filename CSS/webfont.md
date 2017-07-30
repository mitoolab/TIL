2017.07.30(일)
# Web font 사용하기

## 1.웹폰트 적용 방법 
- CSS에 직접 import 방법 (대용량)
  - css 직접 import방식은 화면번쩍거림(FOUT : Flash Of Unstyled Content)를 발생할 수 있음
`@import url('http://fonts.googleapis.com/earlyaccess/nanumgothic.css');`  
  
---
  
- 브라우저 대응 방법 (최적화) */
```
@font-face {
	font-family: NanumGothic;
	src: url(../webfont/NanumGothic/NanumGothic.eot); /* IE 호환성보기 */
  src: url(../webfont/NanumGothic.eot?#iefix) format('embedded-opentype'), /* IE 6~8, IE9+ */
	url(../webfont/NanumGothic/NanumGothic.woff) format('woff2'), /* WOFF시험 버전 */
	url(../webfont/NanumGothic/NanumGothic.woff) format('woff'), /* 표준 브라우저 */
	url(../webfont/NanumGothic/NanumGothic.ttf) format('truetype');
}
```

- 설명
src : 적용 경로 설정
- local : 방문자의 컴퓨터에서 해당 폰트의 서체가 있는지 찾습니다.
- url : 만일 방문자의 컴퓨터에 로컬 폰트가 없다면 해당 폰트 파일을 내려받습니다.
- format
  - 참조 할 서체의 파일 포맷을 명시한 부분입니다.
  - 웹 브라우저는 이 포맷을 통해 자기가 지원할 수 있는 파일만 다운로드 받는데
    만약 파일 포맷을 명시하지 않고 url만 적을 경우,
    사용중인 웹 브라우저가 화면에 표현도 못할 서체 파일까지
    다운로드 받을 수 있습니다.

- src: local("☺")
  - 바로 NanumGothic.woff 다운로드 되도록 하는 명령어
  - 하위 브라우저 대응이 필요없을때 사용


