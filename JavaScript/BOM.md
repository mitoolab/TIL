# BOM  

## 1. Browser Object Model
  - Model-관계도를 뜻한다.    

## 2. 브라우저는 여러가지 객체로 이루어져 있다.  
  - window.document.documentElement : html 정보접근 명령어  
  - 아웃터 outer h, w: 창 전체 크기
  - 이너 inner h,w: 스크롤 제외
  - screentop screenY, screenleft screenX 등 브라우저마다 지원되는 명령어가 다르다.

## 3. JavaScript 클라이언트 사이트 환경
###  BOM
#### 1. global object = window
#### 2. .alert()
      - To: 절대값 / By : 상대값
####    3. document(문서)
      - documentElement -> html root element
      - .document.title : get
      - .document.title = '변경글' : set, 설정할때는 연산자를 통해 개체의 속성에 대입해준다.
      - .cookie : 사용자의 정보를 저장한다.
#### 4. event(이벤트)
#### 5. location(주소)
      - href, hash, reload()
      - SPA : single page application
        - 빠른속도의 처리가 가능하다.
        - 한번 요청한 페이지에 대해 재 요청을 하지 않는다.
        - 에이젝스를 사용하여 빠른속도로 데이터를 갱신한다.
        - window.location
        - hash : 페이지의 목적지를 가리킴
        - 동사
          - window.location.href : 주소를 부른다.
          - window.location.hash : 사용자가 준 정보를
#### 6. history(기억)
      - 사용자가 현재 머물고 있는 정보를 기억해야 한다.
#### 7. navigator(정보수집, 탐색)
      - MIME 정보를 가지고 있다.
      - 객체판별법 사용
      - .userAgent : 브라우저의 정보를 제공해준다. 내역의 텍스트를 필터링해온다.
      - 빌트인 오브젝트, 네이티브 오브젝트 : 내장된 기본 기능
      - toLowerCase() : 소문자화
      - toUpperCase() : 대문자화
      - window.navigator.userAgent.toLowerCase().indexOf('android') > -1
      - 코드가 복잡하기때문에 함수로 만들어 편리하게 사용한다.
      - 찾고 싶은게 있을때는 window.명령어를 통해 찾을 수 있다.
      - 위치 : navigator.geolocation : 사용자의 위도, 경도 값을 찾아준다.
#### 8. screen(사용자 스크린환경 정보값, 통계)
      - width, availWidth
      - 사용자가 접속한 정보
      - screen.
      - 사용자가 사용하는 공간의 정보
      - availHeight
      - orientation : 모바일 대비 회전 제공

#### 9. 종합
* Bom
  - global object -> window object
    - document object
    - navigator object
      - userAgent
      - geolocation
    - screen object
      - width
      - availWidth
    - location object
      - hash
      - protocol
      - host
      - pathname
      - search
      - href
      - reload()
    - history object
      - back()
      - go()
      - forward()
