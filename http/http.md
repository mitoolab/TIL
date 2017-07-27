# http - 01
2017.7.9

---
```
http 1.0 -> http1.1
- http를 더욱 http처럼 사용하기 위하여
```

## 1. http 1.0
- 모든 코드가 body에 삽입
- get, post
  
## 2. http1.1
- status code: 동작여부
- method : url 행동 (get, post, put 등)
- header : 호출타입에 대한 정보

```
리소스를 관리한다.
- 고유한 url 패스
```

### 1. status code : 동작여부
- data에 대한 상태 체크 : 200, 300, 400, 500 등
- 각 상황마다 처리해야할 내용이 다르다.
  
### 2. method
- 내가 할려는 것이 무엇인지 파악해야 한다.
- 불필요한 url을 줄 필요가 없어진다.
- head : 데이터에 대해 이미 있는 파일인지 판별
- option : 
- get : 데이터를 가져올때 사용
- post : 데이터를 추가할때 사용
    - rest 파라미터(동적변환) 없다. : 데이터추가가 모든 메서드의 시작이기 때문 
- put : 전체 데이터 수정할때
- patch : 데이터의 특정 요소를 수정할 때
- delete : 삭제

### 3. url 작성법칙
- 명사 사용
- 복수 (예시) users / :id / devies / :devies id

### 4. header
- contents : utf-8 등
- 어셉트
- 라스트모디파이 : 서버에서 가장 나중에 처리된 데이터
- http : 헤더가 무겁다.
- 레스트  api - 소문자 사용
