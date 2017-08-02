2017.08.02(수)
# Responsive Web Development

## Padding-Bottom 을 활용하여 반응형 박스 만들기 tip

### 문제

- `hight`의 `%`단위로 박스 생성시 뷰포트 크기변경할때 터지는 현상
- 크기 비율이 유지되는 사각형을 얻기 힘든점
  - `widht`의 `%`는 부모컨테이너의 폭을 기준으로하고, `heigth`는 `%`는 컨테이너의 세로높이 기준으로 하기 때문에 얻기 힘들다.

### 해결

- `padding-bottom`을 활용한 박스 만들기

### 내용

- 패딩은 컨테이너의 넓이을 기준으로 하기 때문에 `width`속성과 동일하다.
- 내부의 콘텐츠를 배치하기 전 콘텐츠의 절대높이의 기준을 잡기 위해 `position:relative`를 사용한다.
- 내부 콘텐츠의 크기에 영향을 받아 `height`가 변경될 수 있기 때문에 `position:absolute`를 사용하면 해결된다.
- 크기와 관계없이 정사각형(직사각형)을 만들 수 있고, 비율이 유지된다.

> 초기 : 내부 이미지는 `float:left`로 정렬되어 있음

- `padding-bottom`은 `width`의 속성과 동일하므로 동일한 범위를 설정하면 정확한 정사각형을 구할 수 있다.  
> 25% * 25% 의 박스 생성  
```css
.image-box {
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
  /* 테두리를 벗어난 요소 숨김 */
   overflow: hidden; 
}
```

- layout 안정장치 : 콘텐츠가 `width`의 100% 차지하고 있지만 `float:left`로 정렬되어있기 때문에 안전장치로 작성한다.
```css
.imagesWrapper::after {
  content: "";
  display: block;
  clear: both;
}
```

- `position: relative`로 기준점을 명시한다.
- `padding-bottom` 영역 밖의 요소를 `hidden` 시켜 주변을 정리한다.
```css
.image-img {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;
}
```

- 내부 이미지 중앙정렬 : top, left로 각각 50% 이동하고, 콘텐츠 크기의 절반만큼 이동하여 박스의 중앙으로 배치한다.
- `padding-bottom`의 문제 중 콘텐츠가 삽입되면 `height`의 크기가 변경되는 것을 방지하기 위하여 내부 콘텐츠를 `position: absolute`로 정렬한다.
```css
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