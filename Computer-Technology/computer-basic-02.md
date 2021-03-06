2017.02.16(목)
---

# 컴퓨터 공학 - 2
---  

## tip
  - 자료구조 + 알고리즘 : 환상의 조합
  - 흐름을 파악하고 생성원리를 이해하여 문제에 대한 개선방향을 생각하는 것이 중요하다.
  - 알고리즘은 정답이 없다. 특성을 파악 후 상황에 맞게 적용하는것이 중요하다.
  - 컴퓨터에게 명령함에 있어 순차적으로 진행해야함이 중요하다.
  - 프론트엔드는 접근성, 웹표준이 우선적으로 중요하다.
  - 웹 렌더링의 속도 개선을 위한 노력이 중요하다.
  - 참고 : 미닉스의 작은이야기 (블로그)

## 자료구조  

### 1. 기본개념  
  - 자료를 효율적으로 이용할 수 있는 방법론
  - 데이터를 구조적으로 표현하는 방식
  - 데이터베이스와 차이
    - 데이터베이스 : 데이터를 어떻게 정리하고, 그 중 유의미한 자료를 메모리로 이동시키는 것
    - 자료구조 : 메모리에서 데이터를 어떻게 구조화하고 사용할 것인가
  - 메모리의 공간을 어떻게 효율적으로 사용할 것 인가  

### 2. 자료의 구조  
  - **원시구조** : 정수, 실수, 문자 등
  - **선형구조** : 배열, 연결리스트, 스택, 큐, 덱
    - 배열 : 크기가 불변하는 자료들의 묶음 O(1)
      - 장점 : 자료를 빠르게 가져올 수 있다.(ex)신발장)
      - 단점 : 크기를 변경할 수 없다.
    - 연결 리스트 : 자료는 자신의 주소를 가지고 있다. 다음 자료의 주소값을 통해 연결시킨다.(연결순서가 중요하다.)
      - 장점 : 삽입과 삭제가 유용하다.
      - 단점 : 접근속도가 배열보다 느리고, 파일의 크기가 커진다.
      - 기본의 연결을 유지한 상태에서 새로운 자료의 이동자리를 먼저 정한 뒤 기존 연결을 새로 이어준다.  
      - 단순 연결 리스트 : 앞으로 연결 (처음과 끝이 있음. 인덱스 등)
      - 이중 연결 리스트 : 앞,뒤 연결 (처음과 끝이 있음. 인덱스 등)
      - 원형 연결 리스트 : 시작과 끝이 없은 순환고리
      - 리스트 순서
        - 스택(Stack) 구조 : 후입선출 - 늦게 들어온것이 먼저 나가는 구조
          - push : 자료 삽입
          - pop : 자료 추출
          - 실생활 사용 : 웹브라우저 뒤로가기, 앱 환경설정
        - 큐(Queue) : 선입선출 - 먼저 들어온게 먼저 나간다
          - put : 자료 삽입
          - get : 자료 추출
          - 실생활 사용 : 대기열, 작업대기열을 작성되면 순차적으로 작업되는 것에 사용
        - 덱(Dequeue)
          - 스택과 큐를 혼합한 것
  - **비선형구조** : 트리, 그래프
    - 트리(Tree)
      - 사용 : DOM, 폴더, 조직도
      - 사용이유 : 탐색을 용의하게 하기 위해 자료를 분류하는데 사용된다.
      - 리스트로 연결되어 있다.
    - 그래프(Graph)
      - 시작점을 알 수 없고, 위계가 없으며, 뿌리노드가 없다.
      - 사용 : 경로탐색, 빅데이터, 소셜미디어, 어떤것에 대한 상관관계들을 표현
* 통상적으로 사용되는 자료구조이기 때문에 사용하게 된다.
* 의미 : 왜 필요하고, 언제 사용되면 유용한지를 아는게 중요하다.

## 알고리즘  
  - 문제해결을 위한 절차 / 방법
  - 어떠한 문제를 해결하기 위한 여러동작들의 모음
  - 대표적 알고리즘(실무에서 많이 사용): 정렬, 탐색, 재귀 등  

### 1. 정렬 알고리즘  
  - 일정한 규칙에 의해 정렬하게 된다.
  - 대표적인 정렬방식 : 삽입, 선택, 버블, 머지, 병합 등
    1. **선택정렬** - O(n2)
      - 전체 중에 크기 순서에 따라 선택하여 앞에 정렬하는 방식 (내림차순, 올림차순)
    2. **버블정렬** - O(n2)
      - 두개씩 비교하여 더 큰것이 뒤로가게 된다. 가장 큰것부터 쌓이게 된다.
    3. **삽입정렬** - O(n2)
      - 데이터를 순차적으로 비교하여 기준에 의한 자리에 삽입하여 정렬하는 것
    4. **병합정렬** - O(nlogn)
      - 영역을 나눠 정렬 후 합치면서 계속 정렬하는 방식
    5. **퀵정렬** - O(nlogn)
      - 기준의 정한 후 기준과 비교하여 정렬
      - 단점 : 기준이 없는 데이터에 취약함, 기준을 어떻게 선정하는 것이 중요
      - 평균적으로 좋은 성능을 보장하여준다는 뜻  

### 2. 시간복잡도 - 서버운용에선 중요함
  - 알고리즘이 실행되는데 소요되는 시간분석
  - 선형 탐색 - O(n)
    - **점근표기법**
      - 대문자 오 표기법 - 최악
        - 최악의 경우의 수, 표기: O(n2)
        - 아무리 최악의 경우에도 이정도 성능을 줄 수 있다는 의미로 사용됨
      - 오메가 표기법 - 최선
        - 최고의 경우의 수
      - 세타 표기법 - 평균
        - 평균의 경우 수
      - 단위 순서 : O(1) < O(log n) < O(n) < O(n log n) < O(n2) < O(2^) < O(n!) < O(n^)

  - **이진 탐색** - O(logn) = O(log2n)
    - 트리구조에서 2개의 비교를 통해 탐색을 진행한다.
    - 트리구조는 탐색에 용의하게 이용된다
    - 중간값을 설정하는게 중요하다.
  - Data Structure Operations : 자료구조 표
* 공간복잡도

## 소프트웨어 공학
  - 공학이란
    - 유용한 사물이나 환경을 구축하는 것을 목적으로 하는 학문
  - 소프트웨어 공학
    - 소프트웨어의 개발, 운용, 유지보수 및 폐기에 대한 체계적인 접근방법
  - 분류
    - 요구공학
    - 아키텍처
    - 개발 방법론
    - 테스팅
    - 프로세스
    - 형상관리
    - 프로젝트 관리
    - 유지보수  

### 1. 소프트웨어 개발 생명주기 모델 (Software Development Life Cycle Model)
  - **주먹구구식 모델**
    - 개인의 주관적인 경험에 의한 개발 방법론 (체계적인 방법론과는 거리가 있다)
  - **폭포수 모델**
    - 진행방식
      - Requirements : 클라이언트 요구사항 분석
      - Design : 소프트웨어 구조설계
      - Implementation : 구현단계
      - Verification : 검증단계
      - Maintenance : 유지보수 단계
    - 단점 : 수정이 어려움, 시간이 오래걸림(앞에 일의 영향을 받음)
  - **프로토타이핑 모델** : 모델하우스
    - 진행방식
      - 요구분석
      - prototype 설계
      - prototype 개발
      - prototype 평가 -> 요구분석 단계로 전환이 빠름
      - 구현
      - 인수 및 설치
    - 단점
      - 시간이 오래걸램(중간 재평가 기간의 포함)
      - 커뮤니케이션 비용의 많은 부담
      - 요구분석자체의 변경으로 재작업의 위험
      - 최종 결과물의 품질에 대한 문제
  - **나선형 모델**
    - 폭포수 모델을 작은 단위로 진행하는 방식
    - 진행방식
      - 계획 및 정의
      - 위험분석
      - 구축
      - 고객평가
      - 고객과의 의사소통
      - 위의 단계를 작은 기능의 범위로 계속 반복하며 완성해 가는 방식
    - 단점
      - 전체적인 조화에 대한 문제  

### 2. 소프트웨어 개발 방법론
  - 소프트웨어를 생산하는데 필요한 반복적인 과정들을 정리하는 것
  - 구조적 프로그래밍, 객체지향, 고속 개발 방법론, 익스트림 프로그램(Agile), 스크럼(Agile), Up..
  - **애자일 개발 프로세스**
    - 기존의 방법론과의 차이점 : 실절적인 코딩을 통한 방법론
    - adaptive style : 끊임없이 프로토 타입을 만들어내며, 그때 그떄 필요한 요구를 더하고 수정하여 하나의 커다란 소프트웨어를 개발하는 것
    - 특정 개발 방법론을 가리키는 말은 아니고 "애자일(Agile = 기민한, 좋은것을 빠르고 낭비없게 만드는 것)" 개발을 가능하게 해 주는 다양한 방법론 전체를 일컫는 말
  - **TTD** (Test-driven Development)
    - 테스트 주도 개발
    - 매우 짧은 개발 사이클을 반복하는 소프트웨어 개발 프로세스
    - 테스트 코드를 별도로 제작하여 버그테스트를 진행하는 방식
    - 사람이 발견하는 버그는 주관이 강하기 때문에 컴퓨터에게 맡기는 것
    - 내용
      - 결함을 점검하는 자동화된 테스트 케이스를 작성
      - 케이스를 통과하기 위한 최소한의 양의 코드를 생성
      - 새 코드를 표준에 맞도록 리팩토링 : 사용상의 문제를 개선해주는 작업
    - 단점
      - 테스트코드가 모든 경우의수를 만족할 수 없기에 예상할 수 없는 버그가 발생할 수 있다.
      - 직접 테스트코드를 작성해야하기 때문에 건너띄거나 지치는 상황이 발생한다.
    - 적당하게, 필요한 부분만 차용하여 진행함이 좋다.
  - **PDD** (Plan-driven Development)
    - 계획 기반 개발
    - 계획을 세우고 그 계획을 실천하는데에 많은 시간과 노력을 할애하는 개발 방법

### 3. UML (Unified Modeling Language)
  - 통합 모델링 언어, 표준화된 범용 모델링 언어
  - 객체 지향 소프트웨어 집합 시스템을 개발할 때 산출물을 명세화, 시각화, 문서화할 때 사용
  - S/W 개발 방법론 + 모델 + 클래스 다이어그램

### 4. 형상관리
  - SW개발 및 유지보수 과정에서 발생하는 소스코드, 문서, 인터페이스 등 각종 결과물에 대해 형상을 만들고, 이들 형상에 대한 변경을 체계적으로 관리하는 것
  - **버전관리**
    - 형상관리의 일부
    - 일반적인 소프트웨어 소스 코드만의 형상을 관리하는 것
    - SVN(Subversion), Git, Mercurial, CVS...  

---
과제
1. HTTP 와 HTTPS 무엇이며 차이는?
2. 국내에 공인인증서가 생긴 배경과 그 위험성은?
3. ActiveX란 무엇이며 장단점 조사
