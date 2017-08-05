2017.08.04(금)
# Pair-Programming

## Fizzbuzz Game  

- 두명이 짝을 지어 한대의 컴퓨터를 두고 한명은 드라이버, 한명은 네이게이터가 되어 서로 역할을 전환하면서 코드를 작성하는 게임
- 프로그램의 이해 등의 효과가 있음  
- 프로젝트 초반, 창의성을 요하거나 어려운 업무, 신입팀원 적응 시 사용된다.  

> 필수 : 상대방에 대한 존중, 개발업무 목표를 잊지 않는 것  

- 장점
  - 자연스러운 코드 리뷰
  - 코드 공동 소유
  - 친밀도, 팀웍 상승
  - 성장감

---js
var fi = 0;
for (var i = 0; i <= 30; ++i) {
  if (i % 15 === 0) {
    console.log("fizzbuzz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else {
    console.log(i);
  }
};
--  
  
