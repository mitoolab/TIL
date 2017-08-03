2017.08.03(목)
#SASS

## 쉽고 빠른 시작을 위한 package.json

---

- sass 시작을 위해선 몇가지의 설정을 입력해야 한다.
- 그러한 수고를 줄여 작업환경을 최적화 하기 위한 방법이다. 

### 코드 내용
```json
{
  "name": "sass-basic-study",
  "version": "0.0.1",
  "description": "package",
  "scripts": {
    "start": "npm run sass",
    "sass": "node-sass -w -r src/sass -o dist/css --output-style expanded --source-map ./map",
    "sass-build": "node-sass -r scss -o css --output-style compressed"
  }
}
```

---

### 설명
- `name` : `json`을 설정한 코드블록의 이름
- `start` : 실행을 위한 입력 명령
- `sass` : 실행위치 및 설정
- `sass-build` : 생성 파일 설정

### 주요 단축 명령 설명
- `-w` : `--watch` 파일 관찰
- `-r` : 하위 디렉토리/파일 포함 관찰
- `src/sass` : ./sass의 의미로 관찰 장소를 의미(폴더)
- `-o` : 출력 디렉토리 설정
- `dist/css` : ./css의 의미로 출력 장소 의미 (폴더)
- `-output-style` : 출력 스타일
- `source-map` : source-map 파일 생성
- `./map ` :  source-map 파일 생성 위치


> 변환 옵션(--output-style) 4가지  
>  1. `compact`    : 한 줄로 정리 (촘촘하게)  
>  2. `compressed` : 압축 (공백없이)  
>  3. `expanded`   : 확장  
>  4. `nested`     : 중첩   

### 주의 및 진행 방법
- 생성된 `.jsone`파일은 **작업 폴더**내에 있어야 한다.
- 지역에 영향을 주기 때문에 프로젝트폴더에 맞춰 복사하여 사용하여야 한다.
- 프로젝트 폴더내에는 `src 폴더`안쪽에 `sass 폴더` 생성 후 `.scss` 파일을 생성한다.
- 터미널 경로를 프로젝트 폴더로 이동 후 설정한 `start`명령어를 입력한다.
- `.scss`파일을 변경하고 저장하면 자동으로 `dist`,`css`,`.css` 파일이 생성된다.