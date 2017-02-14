# display Block
```
<script>
  // 버튼 찾고, 메뉴 패널 찾고
  var btn = document.getElementsByTagName('button').item(0);
  var panel = document.getElementById('unique-menu');
  console.log(panel);
  // 버튼 클릭하면
  btn.onclick = function() {
    // 메뉴 패널 보여주고
    panel.style.display = 'block';
  };
</script>
```

* var 변수이름 : 변수이름으로 값의 저장을 선언함
* tagName : 다수의 집합을 찾는 것으로 Elements "s"를 붙어야 한다.
* Id : 단수를 선택하는 것으로 Element 를 사용한다,
* console.log(); 를 통해 선택을 확인한다.
* function(){} : 이벤트 부여 (변수이름으로 이벤트를 설정)
