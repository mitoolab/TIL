2017.08.03(목)  
# SASS  

## 쉽고 빠른 시작을 위한 package.json  

---

### 문제
- sass 시작을 위해선 매번 몇가지의 설정을 입력해야 한다. 번거롭다.

### 해결 
- `.json`파일로 단축 명령어를 구성하여 작업환경을 최적화 한다.

### 단점
- 프로젝트 폴더에 있어야 구동되기때문에 복사하여 사용하여야 한다.  
> `Webpack`을 사용하면 깨끗하게 해결된다.  

### 코드 내용
```json
{
  "name": "sass-basic-study",
  "version": "0.0.1",
  "description": "package",
  "scripts": {
    "start": "npm run sass",
    "sass": "node-sass -w -r src/sass -o dist/css --output-style expanded --source-map-embed",
    "sass-build": "node-sass -r src/sass -o dist/css/build --output-style compressed"
  }
}
```  

> #### 실행 명령어
> `npm run sass` : sass 컴파일 활성화  
> `npm run sass-build` : 배포용으로 사용할 --output-style 변경 파일 생성  
  
### 목록 설명
- `name` : `json`을 설정한 코드블록의 이름  
- `start`: 실행을 위한 입력 명령  
- `sass` : 컴파일 내용에 대한 설정  
- `sass-build` : 배포 파일에 필요한 설정 (dist/css/ 경로에 build 폴더 생성) (필요시 사용)  

---

### 주요 명령 설명
- `-w` (--watch) : 파일 관찰  
- `-r` (--recursive) : 하위 디렉토리/파일 포함 관찰  
- `src/sass` : 관찰 장소를 의미  
- `-o` (-output) : 출력 디렉토리 설정  
- `dist/css` : 출력 장소 의미  
- `-output-style` : 출력 스타일  
- `source-map` : source-map 파일 생성  

> 관찰, 출력 경로 변경 가능  

---

### 변환 옵션(--output-style) 4가지  
- 1. `compact`    : 한 줄로 정리 (촘촘하게) 
```css
#main {color: #fff; background-color: #000;}
```  
- 2. `compressed` : 압축 (공백없이) 
```css
#main{color:#fff;background-color:#000;}#main p{width:10em;}
```
- 3. `expanded`   : 확장  
```css
#main {
  color: #fff; background-color: #000;
}
```
- 4. `nested`     : 중첩 (Default) 
 ```css
#main {
  color: #fff; background-color: #000; }
 ```

---

### 주의 및 진행 방법
- 프로젝트 폴더내에는 `src 폴더`안쪽에 `sass 폴더` 생성 후 `.scss` 파일을 생성한다.
- 터미널 경로를 프로젝트 폴더로 이동 후 설정한 `start`명령어를 입력한다.
- `.scss`파일을 변경하고 저장하면 자동으로 `dist 폴더`,`css 폴더`,`.css 파일` 생성된다.  