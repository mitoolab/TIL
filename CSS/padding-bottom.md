2017.08.02(수)
# Responsive Web Development

## Padding-Bottom 을 활용한 크기가 고정된 박스 만들기 tip

### 문제

- `hight`의 `%`단위로 박스 생성시 뷰포트 크기변경할때 터지는 현상
  - `widht`의 `%`는 부모컨테이너의 폭을 기준으로 생성된다.
  - `heigth`는 `%`는 컨테이너의 세로높이 기준으로 생성된다.
  - 항상 크기가 유지되는 사각형을 얻기 힘들다.

### 해결

- padding-bottom을 활용한 박스 만들기

### 내용

- 패딩값은 컨테이너의 넓이값을 기준으로 하며 `width`속성과 동일하다.
- 내부의 콘텐츠를 배치할 때 콘텐츠의 절대높이로 기준을 잡기 위해 `position:relative`를 사용한다.
- 보여주고자 하는 이미지의 상위 레이어에 해당 크기의 패딩박스를 만들어 보여주고 싶은 것을 선택할 수 있다.
- 크기와 관계없이 정사각형(직사각형)을 만들 수 있고, 비율이 유지될 수 있다.

> 주의) 콘텐츠를 삽입하면 콘텐츠의 높이만큼 패딩이 늘어남  
> 해결) 콘텐츠를 absolute하여 해결한다.  


- 초기 : 내부 이미지는 왼쪽 상단으로 정렬되어 있음
- `padding-bottom`은 `width`의 속성과 동일하므로 동일한 범위를 설정하면 정확한 정사각형을 구할 수 있다.
```
.image-box {
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
  /* 테두리를 벗어난 요소 숨김 */
   overflow: hidden; 
}
```

- layout 안정장치 : 콘텐츠가 `width`의 100% 차지하고 있지만 `float`정렬되었기 때문에 안전장치로 작성한다.
```
.imagesWrapper::after {
  content: "";
  display: block;
  clear: both;
}
```

- `absolute`된 내부 콘텐츠의 기준점 설정
- `padding-bottom` 영역 밖의 요소를 `hidden` 시킨다.
```
.image-img {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;
}
```

- 내부 이미지 중앙정렬 : 상, 좌로 각각 50% 내리고, 콘텐츠의 절반만끔 움직여 콘텐츠를 중앙으로 배치한다.
- `padding-bottom`의 단점 중 콘텐츠가 삽입되면 height의 크기가 변경되는 것을 방지하기 위하여 내부 콘텐츠를 `absolute`를 활용한다.
```
.image-fit {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
}

.image-title, .image-arrow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 14px;
  font-weight: 200;
  color: rgb(255, 255, 255);
}
```