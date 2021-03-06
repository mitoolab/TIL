2017.02.23(목)
---  

# 컴퓨터 공학 - 3
  
---

## tip
- 인스타그램 연동 : 플링방식, 이벤트 핸들러 등 사용

### 피드백
- 애자일 : 장단점 및 조심해야될 사항 추가 설명
- 프론트엔드의 관점에서의 공학에 대해서는 구체적인 문의사항이 필요
- 수업을 들어야하는 이유 : 도구를 알아가는 것
- 수업진행방향 : 개념에 대한 전반적인 틀을 만들어주는 과정
- 링크 선정
  - 오개념이 최대한 없으며 생기지 않는 내용을 기준으로 선정하였다.
  - 20개 정도의 유사한 글을 비교하면서 개념을 찾아가는 것이 중요'
- 얕은 내용이 도움이 되는 부분이 없다는 글
  - 접근법에 대한 공부가 중심이기에 정답이 없는 질문에 대해 접근할 수 있는 방법을 알려주려고 한다.
- 오늘 시험문제는 질문이 나올 가능성이 높은 질문을 선정하였기에 확인해볼 필요가 있음

### 프론트의 배우는 이유
- 과거의 프론트엔드는 퍼블리셔의 인식이 강하였으나 현재는 프로그램어로서의 성격이 강해짐
- 서버에서 코어하게 다룬 부분을 클라이언트에서 소화할 수 있게 되었음
- 스킬적인 부분은 기본으로 생각 (HTML, CSS, javaScript 등)
- 기본적인 프로그램 지식으로 프로그램의 기반을 다지는 것이 중요하기에 그 기초를 아는지 물어보는 것

---  

# 네트워크
- types of computer Network
- Network Architecture
- Network Topologies
- Network Communications Techology

---  

### LAN (Local Area Network) : 근거리 통신망
- 가정용
  - LAN 케이블의 정식명칭 : UTP케이블 (케이블마다 속도가 다르다)
  - 대중적으로 사용된 이유 : 저렴하고, 유연하고, 사용성이 편함
- MAN (Metropolitan Area Network) : 도시권 통신망 (도시권)
- WAN (Wide Area Network): 광역권 통신망 (국가권)

### 인터넷(internet)
- 컴퓨터로 연결하여 TCP/IP 프로토콜을 이용해 정보를 주고받는 컴퓨터 네트워크
- inter network : 네트워크의 네트워크 (네트워크 : 여러가지 기기가 역여있는 형태)
- LAN의 묶음이 MAN이 되고 MAN이 뭉처 WAN이 되는 현상

### TCP/IP
- TCP (Transmission Control Protocol)
- IP (Internet Protocol)
- 인터넷을 통해 무언가를 주고 받을때 제어하기 위한 상호간의 약속

### protocol
- 쉽게말해 서로간의 약속 (사전적 뜻은 규약, 조약 등)
- 통신규약
- 장비 사이에서 메시지를 주고 받는 양식과 규칙의 체계
- 즉, 통신(네트워크) 할 때 정해진 메세지 규칙
- http, https, ftp, sftp, telnet, ssh, ssl, smtp 등
  - 목적에 따라 효율적으로 전송하고 받기 위해 약속한 방법들
- host : 네트워크 장비

### WWW (World Wide Web)
- 문서(웹페이지)들이 있는 정보의 저장소
- 기본개념 : 분산과 연결 - 여러가지 정보가 분산되어 있지만 서로 연결되어 있다.

### URI (Uniform Resource Identifier)
- 구조화된 리소스 식별자
- URL (Uniform Resource Locator)는 URI의 한 종류
- 궁금한점은 세부 검색을 통해 진행
  - `[Procol]://[Host]:[Port]/[Path]`
  - `http://www.daum.net:80/map`
  - `fttp://daum.net:80/map`

### http (Hyper Text Transfer Protocol)
- Hyper Text를 전송하기 위한 약속
- 웹페이지를 전송받기 위해 브라우저에게 명령을 하는 것
- 어떤 목적으로 접근하는지 알려준다.

### FTP (File Transfer Protocol)
- 파일을 전송하는 약속

- SFTP (Secure File Transfer Protocol)
  - 암호화 파일 전송

### TElNET (TErminaL NETwork)
- 원격 로그인을 위한 프로토콜
- 터미널을 사용하여 원격으로 접속하는 것
- 터미널로만 가능하기에 터미널네트워크 라고도 한다.
- 보안이 안전하지 않다.

### SSH (Secure Shell)
- 네트워크 상의 다른 컴퓨터에 로그인하거나 원격 시스템에서 명령을 실행하고 다른 시스템으로 파일을 복사할 수 있도록 해주는 응용 프로그램 또는 그 프로토콜
- TElNET의 대용으로 설계 : TElNET을 암호화하여 접속할 수 있도록 하는 것 (안전한 터미널 통신)

### SSL (Secure Socket layer)
- 웹서버와 브라우저 사이의 보안을 위한 프로토콜(규약)
- https도 ssl을 사용하여 http문서를 ssl을 사용하여 보안을 강화한 것이다.

### SMTP (Simple Mail Transfer Protocol)
- 전자메일 발송 프로토콜

---

## Host
- 네트워크에 연결된 모든 장치
- 호스트이름 : 네트워크에 연결된 장치에 부여되는 고유한 이름 (IP주소, 도메인주소, MAC 주소 등등)

### Host 이름
- IP Address (Internet Protocol Address)
  - 컴퓨터 네트워크에서 장치들이 서로를 인식하고 통신을 하기 위해서 사용하는 번호
  - 현재 사용되는  IPv4버전으로 (255.255.255.255) : 총 32비트로 구성 (2에 32제곱)
  - 2011년도에 포화상태
  - 현재는 IP주소를 돌려서 사용하고 있다.(사용하지 않을때 회수, 사용할때 새로 갱신)
  - DHCP(동적할당 네트워크)
  - 고정IP : 속도가 빠르고, 연결이 원활하지만 가격이 높다
  - IPv6 : 128비트로 사용, 16진수로 표현 (나온지는 10년이 넘음)
  - 적용이 안된 이유 : 통신사의 하드웨어의 교체문제로 인해 늦어지고 있음

- 도메인주소 (Domain Address)
  - 네트워크상에서 컴퓨터를 식별하는 호스트이름
  - 컴퓨터는 도메인주소를 알아들을 수 없다. (사람을 위한 것)
  - 컴퓨터가 인지하는 유일한 식별자는 IP주소

- DNS (Domain Name System)
  - 호스트의 도메인 이름을 호스트의 네트워크 주소로 바꾸거나 그 반대의 변환을 수행
  - 도메인 주소를 ip주소로 변환하는 것
  - 한번 방문한 사이트의 주소를 저장한다.(IP Address 테이블) : 빠르게 접속된다.
  - 서버 교체, ip주소 변경 등 초기에 접속이 원활히 되지 않는건 DNS서버의 동기화가 되는 시간이 필요하기 때문

- MAC Address (Media Access Control Address)
  - 네트워크 어댑터에 부착된 식별자 (시리얼번호)
  - 생산시 부여되는 식별자 (전세계에서 겹치는 경우는 없음)

- Port
  - 가상의 논리적 통신 연결단
  - 번호로 구분
  - 네트워크로 들어가는 수많은 정보를 목적에 딸 구별하는 통로
  - 0번 ~ 1023번 : Well-known port (총 0번 ~ 65535번 까지 있음) - 지정된 데이터만 이동가능한 포트
  - 대부분의 포트는 막혀있다. 방화벽으로 접근을 차단하여 외부로부터 접근을 막는다.
  - 80번 port : http 포트 연결

### 7 Layers of the OSI Model
 - application protocol
 - presentation protocol
 - session protocol
 - transport protocol
 - network protocol
 - data-link protocol
 - bits protocol
 - client a가 1번 부터 들어와서 다시 반대로 올라가 1번으로 제공해준다.

### 왜 우리는 0과 1을 아직도 사용하는가?
  - 네트워크 환경 때문에 아직도 0과 1을 사용한다.
  - 저항이 발생하여 신호가 줄어들어도 최대 크기는 1이라는 것을 인지해야하기 때문임
  - 중간 증폭기를 통해 줄어든 신호를 계속 이어지게 만듬

---

## http
- 월드와이드웹(W3C)에서 정보를 주고 받을 수 있도록 고안한 프로토콜
- Well-known port : 80 (https : Well-known port: 433)
- 버전
  - 1991 : 0.9
  - 1996 : 1.0
  - 1997 : 1.1
  - 2015 : 2.0 (조만간 이동 예정)
- Request : 클라이언트에서 웹 서버로 요청
- Response : 웹 서버에서 클라이언트로 응답
- header (필수)
  - 웹 서버와 클라이언트 사이에서 실질적인 데이터 외에 추가적인 정보를 교환할 수 있도록 선두에 삽입되는 정보
  - 바디 내용에 대한 기본 정보
  - 용량, 컴퓨터, 누가, 몇일, 프로토콜 정보, user-agent, charset, content-length 등
- Body (옵션)
  - 웹 서버와 클라이언트 사이에서 전송할 실질적인 데이터
  - 이미지데이터, 음악데이터, 회원가입 사용자 정보 등 요청한 데이터 내용

### HTTP Request Methods
- 웹 서버에 요구하는 작업의 종류에 따라 요청 방법(Request Method)을 구분
- GET
  - 요청 URI에 해당하는 자료의 전송을 요청
  - 모든 접속들이 해당
  - Request body (X) : 요청에 대해 별도로 보내야할 내용은 없기 때문에 header 정보만 있음
  - Response body (O) : 요청에 대한 응답인 실질적인 내용은 body를 통해 전달되어 옴
- POST
  - 서버가 처리할 자료를 전송
  - 회원가입, 계시글작성, 사진 업로드
  - Request body (O) : 요청내용 (작성된 내용은 body를 통해 이동)
  - Response body (O) : 요청에 대한 정보의 응답 내용
- PUT
  - 해당 URI에 자료를 저장
  - Request body (O) : 요청내용 (작성된 내용은 body를 통해 이동)
  - Response body (O) : 요청에 대한 정보의 응답 내용
- DELETE
  - 해당 URI에 자료를 삭제
  - Request body (X) : 요청에 대해 별도로 보내야할 내용은 없기 때문에 header 정보만 있음
  - Response body (O) : 삭제요청에 대한 응답 또는 삭제되기전 확인 내용 등 상황에 따라 다름

```
CRUD
- Create : post
- Read : get
- Update : put
- Delete : delete
```  

- Response Status
  - 1xx : 정보교환 / 조건부 응답
  - 2xx : 성공
  - 3xx : 리다이렉션 (내가 하지 못하니 다른 곳으로 보내줄께)
  - 4xx : 요청 오류 (잘못 요청했다)
  - 5xx : 서버 오류 (서버가 제대로 못하였으니 개발자에게 문의해라)

- Developers.naver.com : 네이버 개발 페이지

### Cookie
- 서버에 필요한 정보를 클라이언트에 임시/영구적으로 저장하기 위해 사용
- 사용자에 대한 지속적인 상대감시 및 상태참조의 목적
- 민감하지 않은 정보들을 담아두는 공간으로 클라이언트에 저장된다.
- 여러 페이지를 옮겨 다닐 때에도 통용될 정보에 주로 이용
- 매번 통신에 들어가야할 데이터를 header에 적용되어 이동된다. 많아지면 무거워 진다.
- 예) 사용자 이름, 아이디, 장바구니, 최근 본 상품 등등

```
read Cookie
var cookies = document.cookie

Write cookies
document.cookie = "user_name=Jo;user_id=yagom"
```  

- 영구적 쿠키
  - 디스크에 저장 - 만료일 후에 삭제
  - 요즘엔 많이 사용하지 않음
  - 만료날자가 있음 (expires)
- 세션 쿠키
  - 주로 세션 정보를 보관하기 위해 사용
  - 메모리에 저장 : 브라우저 종료 후 사라짐 (다른컴퓨터에서 접근할 수 없음)
  - 만료날자가 없음 (expires)  

**필요에 의해 쿠키성격을 조절할 수 있음**
**데이터의 민감여부에 따라 프론트엔드 or 백엔드의 처리 파트가 달라질 수 있다**

### Session
- 클라이언트가 누군지 식별하기 위한 방법
- 웹 서버가 HTTP 요청을 한 클라이언트를 식별하기 위해 사용
- 클라이언트의 최초 요청에 세션 쿠키로 임의의 난수를 생성 (서버에서 발행한 임시번호)
- 클라이언트의 이후 요청에 세션 ID를 헤더에 담아 보내면 서버에서도 이를 통해 클라이언트를 식별
- 서버에 부담 : 난수의 검증 등
- 안전한 정보처리방법
- header에 담겨 이동

### Cache
- 빠른응답을 위해 마련한 임시저장소
- 통상적 의미 : 데이터나 값을 미리 복사해 놓은 임시 장소
- 웹 서버 : 클라이언트 모델에서의 캐싱
  - 서버 : 클라이언트 간 요청에 대한 응답을 저장해 두는 것
  - 서버의 부하와 접속 속도 문제 완화
  - 새로운 데이터의 갱신 문제
- 새로고침 : Cache데이터를 새로 갱신한다.
- 뉴스와 같은 실시간 정보는 자바스크립트 코드를 통해 새로 갱신된다.
- 아이디 자동완성과 같은건 브라우저에서 별도 관리되는 프로그램이다.

### HTTP/2
- 속도의 차이
- 개발 이유
  - 헤더 압축 지원
    - 쿠키의 과다 사용
    - HTTP/1.1의 헤더는 너무 크고 복잡
    - 속도 저하의 원인
  - 너무 빈번한 Round-trip
    - 한번의 요청으로 다양한 데이터 응답 가능
    - Round-trip : 요청에 대한 응답이 오는, 왕복하는 것을 말함  

**한번의 요청에 많은 Round-trip이 발생하면 과다한 쿠기를 가진 요청이 수없이 반복한다.**
**이러한 문제를 해결하기 위해 서버에 요청하면 서버에서 내용을 묶어서 한번에 보내준다**  

- 패킷 : 네트워크를 통해 한번에 가는 정보의 묶음
- 요청을 하면 해당 자료에 대해 순차적으로 보내준다.
- 한번의 요청으로 많은 양의 정보를 순차적으로 전달 받을 수 있다.
- Round-trip이 한번 이루어진다.

### 소켓통신
- HTTP 통신 : 한번 요청에 의해 응답을 받을 수 있는 구조.
- 서로 연결된 네트워크 통로, 실시간으로 싱크가 되어있다.
- 단점 : 비용이 많이 든다. 서로를 감시하고 있어야 하기 때문에 시스템자원이 많이 들어간다.
- 서버의 부하를 줄이기 위해 다른 대체제를 사용하고 있다.

---  

### 암호화
- 복호화 : 암호를 복원하는 것
- 해시 함수 (예전에 사용)
  - 임의 데이터(암호 등)를 고정된 길이의 데이터로 매핑하여 원래의 입력값과의 관계를 찾기 어렵게 만든 것
  - SHA, MD5 등
  - 한번 암호가 된 내용은 복구가 안된다.
  - 사용 : 사용자 정보를 데이터베이스에 저장할때 저장하기 전에 암호를 해시로 저장한다.
  - 사용자 암호입력 -> 데이터베이스에서 해시함수화 -> 매번 입력시 암호가 해시로 인증
  - 눈에는 특수문자로 보이지만 규칙이 있기 때문에 언젠가 깨지는 알고리즘    
  - 단점 : 규칙이 있기 때문에 해킹이 가능하다.

- 대칭키 암호화 방식
  - 암호화와 복호화에 같은 암호키를 쓰는 알고리즘 (자물쇠와 같다)
  - DES, AES, SEED 등
  - 단점 : 키가 노출되면 끝난다.
  - 비대칭키 암호화 방법의 사용에 대한 보조도구로 사용된다.
  - 비대칭키 암호화 보다 자원이 효율적으로 사용된다.

- 공개키(비대칭키) 방식
  - 공개키로 암호화된 데이터를 비밀키를 사용하여 복호화 할 수 있는 암호화 알고리즘
  - 암호키와 복호화키가 다르다
  - RSA 등
  - 암호를 잠그는 키는 공개적으로 줄 수 있기 떄문에 공개키라 한다.
  - 단점
    - 복호화키가 털리면 끝
    - 복잡하기 때문에 복호화하는데 많은 시스템 자원이 필요하다.

- 대칭키 + 공개키 방식
  - 대칭키 방식을 사용하려면
  - 상대방이 보내준 공개키를 사용하여 보내준다.
  - 상대편은 공개키로 확인하고 확인된 대칭키로 서로 교환한다.
  - https의 암호화 방식 : 초기에 사용하기 위해 서버와 암호화하는 단계
    - 중간에 인증기관을 둠으로서 제3자가 중간에 들어오는 것을 차단한다.

**악성소프트웨어에 감염되면 무엇을 해도 소용없다**
