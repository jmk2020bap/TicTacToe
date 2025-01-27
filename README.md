<br>
<br>

<p align="center">
  <img src="/assets/vaco_logo.png"  width="400">
</p>

<br>
<br>

> 바닐라코딩의 모든 과제는 실제 기업에서 주어지는 과제에 기반하여 제작되었으며, 저작권법의 보호를 받습니다. 개인 블로그 등의 공개된 장소에 관련 내용을 공유하거나 개인적으로 지인들과 공유하는 등의 행위는 삼가해주시기 바랍니다.

<br>

<p align="center">
  <img src="/assets/ticktacktoe.png"  width="300">
</p>

<br>

# 틱택토

바닐라 자바스크립트를 기반으로 틱택토 게임, 그리고 확장판 기능까지 작업해보는 과제입니다.

<br>
<br>

## 📌 작업 준비

과제를 시작하기 전, 아래 1-3 단계를 진행합니다. 매주 새로운 과제를 시작하는 단계에서 최초 1회만 진행하시면 됩니다.

<br>

### 1. 과제 클론받기

터미널에서 아래의 Git 명령어를 이용하여 과제를 클론(다운로드) 받으세요.

```sh
git clone 과제_GIT_URI
```

> 과제\_GIT_URI는 Github 과제 저장소의 메인 페이지에서 초록색 `<> Code` 버튼을 클릭하시면 확인할 수 있습니다.

<br>

### 2. 과제 디렉토리로 이동하기

다음 명령어를 이용하여 과제 디렉토리로 이동하세요.

```sh
cd 과제_저장소_이름
```

<br>

### 3. 관련 의존성 패키지를 설치하세요.

터미널의 과제 디렉토리 내에서 아래 명령어를 실행하세요.

```sh
npm install
```

> `package.json`의 `engines` 필드에 명시된 Node.js와 npm 버전을 확인하신 후, 동일한 버전을 사용해주세요.

<br>
<br>

## 📌 작업 진행

<br>

### 1. VS Code 실행

터미널에서 과제 디렉토리로 이동하여 아래 명령어를 실행하면, VS Code에서 과제 파일이 열립니다.

```sh
code .
```

> [VS Code에서 `code` 명령어 설치하는 방법](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)

<br>

### 2. 로컬 서버 실행

터미널에서 과제 디렉토리로 이동하여 아래 명령어를 실행합니다.

```sh
npm run dev # visit localhost:5173
```

> 실행 명령어는 과제에 따라 상이할 수 있으므로, 반드시 `README.md` 파일의 내용을 확인 후 진행해주세요.

<br>

### 4. 로컬 서버 중지

작업이 끝났을 경우, 터미널의 로컬 서버 실행창에서 `ctrl + c`를 입력하여 실행 중이던 로컬 서버를 중지합니다. 추후 작업 재개시, 로컬 서버를 다시 실행하고, 작업 종료시 로컬 서버를 중지시키는 행위를 매번 반복합니다.

> 로컬 서버를 장시간 동안 켜놓을 경우, 컴퓨터의 리소스가 낭비될 수 있습니다. 장시간 작업을 중단하는 경우에는 로컬 서버를 종료시키고 다시 재개하는 시점에 다시 로컬 서버를 시작하세요.

<br>
<br>

## 📌 리서치 TODO

> 과제 제출 이후, 조사하고 실험한 퀴즈나 내용을 정리하여 공유해주세요.

<br>

### 과제 시작 전 (혹은 병행)

> 처음 보는 개념이라면, 과제를 시작 하기 전에 가볍게 조사해보고 시작하기를 권장드립니다. 다만, 아래 전체를 모두 조사하더라도 너무 많은 시간을 소비하지 않도록 유의하세요. 구체적인 내용을 모두 이해하지 못했더라도, 언제 사용해야 할지 대략적인 파악만 되었다면 과제 작업을 하면서 실제로 필요한 상황이라고 판단되었을때 조사를 병행하셔도 괜찮습니다. (구현 방식에 정답은 없고, 구체적인 구현 방식에 따라서 아래 모든 내용들이 필요하지 않을 수도 있습니다.)

<br>

- [X] [`querySelector`](https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector)를 활용하여 우리는 웹 페이지에서 원하는 요소를 선택할 수 있습니다. 사용법을 알아보고, 대안이나 유사한 API(메서드)가 있다면 함께 비교하며 조사해보세요.
- [X] [`document.querySelectorAll`](https://developer.mozilla.org/ko/docs/Web/API/Document/querySelectorAll)과 [`document.getElementsByClassName`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)의 가장 핵심적인 기능상 차이점은 무엇일까요?
- [X] [`addEventListener`](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener)를 활용하여 우리가 선택한 요소에 사용자가 인터렉션 하는 것을 감지할 수 있습니다. 사용법을 알아보고, 대안이 있다면 함께 비교하며 조사해보세요.
- [X] [removeEventListener](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/removeEventListener)의 사용법 또한 조사해보세요.
- [X] [innerHTML vs innerText vs textContent](https://www.freecodecamp.org/news/innerhtml-vs-innertext-vs-textcontent/)의 차이점에 대해 간략히 살펴보세요.
- [X] [classList](https://developer.mozilla.org/ko/docs/Web/API/Element/classList)의 기능에 대해 살펴보세요.
- [X] DOM의 이벤트를 다루기 위해서는 이벤트 위임에 대해 잘 이해해야 합니다. 다음 키워드에 대해 조사해보세요.
  - 이벤트 캡처링 vs 이벤트 버블링
  - `event.stopPropagation`
  - `event.target` vs `event.currentTarget`
- [X] [개발자 도구의 기능](https://www.youtube.com/watch?v=ZaOZFkHTloM)에 대해 살펴보시고 과제를 하는 과정에서 활용해보세요.

<br>

### 과제 제출 후

- [ ] 이번 과제에서 우리는 DOM을 활용하여 작업하게 됩니다. 과연 DOM은 무엇일까요? JavaScript와 DOM은 같은 것일까요?
- [ ] Normalize CSS는 무엇이고, Reset CSS는 무엇이며 각각의 차이는 무엇일까요?
- [ ] Meta 태그란 무슨 용도이며, 이번 과제에 주어진 HTML 파일에 작성된 meta 태그들은 어떤 목적으로 사용되었을까요?
- [ ] `<!DOCTYPE html>`은 무슨 목적으로 사용되었을까요? 반드시 사용해야 하는 걸까요?
- [ ] 웹 페이지가 브라우저에 그려지는 과정은 생각보다 간단하지 않습니다. 여러분이 작업한 웹 페이지는 어떤 과정을 거쳐 화면에 나타나게 되는 것일까요?
- [ ] HTML에서 `script` 태그는 어디에 위치하게 작성해야 하며, 그 이유는 무엇일까요? `async` 속성과 `defer` 속성에 대해서도 조사해보세요.
- [ ] 페이지 로딩이 느릴 때, 프론트엔드 개발자는 어떻게 대처해야 할까요? [Google Web Dev 웹 페이지 성능 개선하기](https://web.dev/explore/fast?hl=ko)

<br>
<br>

## 📌 기본 구현사항 TODO

> 과제를 제출하는 Pull Request의 description 입력 칸에 아래 목록을 복사/붙여넣기 하여 본인의 기능구현 완성도를 체크해주세요.

<br>

구현해야 할 게임은 Tic Tac Toe 게임입니다. 명시되지 않은 사항은 상식 선에서 결정하여 진행해주세요.

<br>

### [공통] 게임 조건

- [X] 두 명의 플레이어가 게임을 하고, 3x3 크기의 게임보드에 자신의 마크를 승리조건으로 설정한 숫자 이상 놓는 쪽이 승리하게 됩니다.
- [X] 게임보드는 3x3의 격자 형태입니다.
- [X] 플레이어 두명은 번갈아 가면서 마크가 없는 격자 칸 하나에 자신의 마크를 표시합니다.
- [X] 마크를 놓았을 때 가로, 세로, 또는 대각선 방향으로 승리조건(3칸)을 채워 넣는다면 해당 마크의 플레이어가 승리합니다.
- [X] 모든 칸이 마킹되었지만 어느 플레이어도 승리하지 못한 경우 무승부가 됩니다.
- [X] 각 플레이어는 게임 종료 전일 경우 각자 3회까지 무르기가 가능합니다. 무르기를 하면 마지막 마크가 놓이기 전의 상황으로 돌아갑니다.

<br>

다음 2개의 화면을 구현해야 합니다.

<br>

### [화면 1] 게임 설정

- [X] 아래 설정에 필요한 화면과 시작 버튼이 있어야 합니다.
- [X] 각 플레이어는 자신의 마크(동그라미, 세모, 네모, 엑스 등)과 마크의 색을 설정 할 수 있습니다.
- [X] 플레이어의 기본 값은 플레이어 1은 X - 파랑, 플레이어 2는 O - 빨강 입니다.
- [X] 먼저 마크를 놓는 플레이어를 설정할 수 있어야 합니다. 기본값은 랜덤입니다.
- [X] 시작 버튼으로 화면 2으로 이동합니다.

<br>

### [화면 2] 게임 화면

- [X] 게임을 진행하기 위한 게임보드가 표시되야 합니다.
- [X] 두 플레이어에 대한 정보(마크, 마크색, 남은 무르기 횟수)가 있어야 합니다.
- [X] 현재 마크를 놓을 플레이어가 누구인지 알수 있어야 합니다.
- [] 종료 조건(플레이어 둘중 한명의 승리 혹은 무승부)가 충족되면 재시작 버튼이 나타나야 합니다.
- [세모] 재시작 버튼을 클릭하면 화면 2에서 게임이 초기화 된 상태로 변경됩니다.
- [X] 화면 1로 이동 할 수 있는 버튼이 있어야 합니다.

<br>
<br>

## 📌 Advanced 구현사항 TODO

> 기존 기능을 변경하여 [슈퍼 틱택토](https://tictactoefree.com/kr/syupeo-tigtaegto/)를 구현합니다. 명시되지 않은 조건은 기존과 동일합니다.

<br>

### [공통] 게임 조건

- [ ] 3x3 격자 형태의 게임보드가 3x3 형태로 9개 나열되어 있습니다.
- [ ] 9개의 게임보드에서 동시에 게임이 진행되며, 각 보드에서 플레이어가 마크를 놓는 위치가 다음 게임보드를 결정합니다.
- [ ] 마크를 놓아야 할 게임보드가 이미 승부가 끝난 게임보드일 경우, 플레이어가 원하는 게임보드에 자유롭게 마크를 놓을 수 있습니다.
- [ ] 가로, 세로, 혹은 대각선으로 연결된 3개의 작은 게임보드에서 승리한 플레이어가 최종 승리합니다.

<br>

### [화면 1] 게임 설정

> 변경 필요한 기능이 없습니다.

<br>

### [화면 2] 게임 화면

- [ ] 9개의 게임보드가 3x3 격자로 나열되어야 합니다.
- [ ] 현재 마크를 놓아야 하는 게임보드를 시각적으로 표기해주어야 합니다.
- [ ] 현재 마크를 놓아야 하는 게임보드에 이미 승부가 끝난 경우에는 플레이어가 자유롭게 게임보드를 선택하여 마크를 놓을 수 있으므로 별도의 표기를 해주지 않아도 됩니다.
- [ ] 승부가 결정된 게임보드는 승부에 대한 결과가 표기되어야 합니다.
