# React

# 1. 리액트 시작

## 1.1 왜 리액트인가?

- 현재 자바스크립트는 웹 애플리케이션에서 가장 핵심적인 역할을 함
- 이제 규모가 큰 어플리케이션도 자바스크립트로 만들 수 있음

#### 예시

- Electron(자바스크립트로 데스크톱 애플리케이션을 만들 수 있는 프레임워크) 
  -> Slack, Atom, VS Code 등

- Ionic, Titanium, NativeScript, React Native 등(자바스크립트로 크로스 플랫폼 애플리케이션을 개발할 수 있는 프레임워크)
  -> 페이스북, 디스코드, 페이팔, 이베이 등

#### 자바스크립트를 이용하는 프레임 워크들

- Angular

- Backbone.js

- Derby.js

- Ember.js

- Ext.js

- Knockback.js

- Sammy.js

- PureMVC

- Vue.js 

#### 주요 아키텍처

- MVC (Model-View-Controller)

- MVVM (Model-View-View Model)

- MVW (Model-View-Whatever)

#### 아키텍처 공통점

- Model : 어플리케이션에서 사용하는 데이터를 관리하는 영역

- View : 사용자에게 보이는 부분

#### 리액터 개발배경

- 보통 데이터에 수정이 있을 시 뷰를 변형하는데 규모가 커지면 복잡해짐

- 페이스북 개발 팀은 이를 해결하기 위해 기존 뷰를 날려 버리고 처음부터 새로 렌더링하는 방식을 고안

01/16

#### 컴포넌트

- 사용자 정의 태그(<>)

- 가독성, 재사용성, 유지보수 ↑

# 리액트 시작해보기

#### 공식문서

- https://ko.reactjs.org/docs/getting-started.html

- codesandbox
  
  - 온라인 상에서 리액트 애플리케이션을 적용해볼 수 있음

- add React to and HTML in on minute

- toolchain
  
  - 유용한 기능들을 제공

- node.js 설치
  
  - cmd에서 설치 확인
    
    ```
    npm -v
    ```

- react 설치( 권한 에러인 경우 sudo를 붙임 )
  
  ```
  npm install -g create-react-app 
  sudo npm install -g create-react-app
  ```

- react 설치 확인
  
  ```
  create-react-app -V
  ```

- 공식 문서에서는 npm보단 npx를 권장
  
  - npx 는 임시로 설치 후 사용하고 지우는 프로그램이라고 이해
    
    - 최신 버전을 항시 사용가능
    
    - 리소스 사용이 적음

#### 리액트 환경설정

- cmd 창에서 cd (원하는 디렉토리를 드래그 앤 드롭)

- 해당 디렉토리에 react app create
  
  ```
  create-react-app .
  ```

#### 리액트 시작

- vs code 에서 ctrl + ` 로 terminal 창 열기
  
  ```
  npm (run) start
  ```

- 해당 메세지와 창이 뜸
  ![](C:\Users\SSAFY\AppData\Roaming\marktext\images\2023-01-16-20-13-24-image.png)

- 서버를 종료할 시 커맨드 창에 ctrl + c 

- public 디렉토리 안에 index.html
  
  - root 태그안에 src 디렉토리 안에 있는 컴포넌트들이 담김
    ![](C:\Users\SSAFY\AppData\Roaming\marktext\images\2023-01-16-20-16-57-image.png)
  
  - src 의 index.js
    ![](C:\Users\SSAFY\AppData\Roaming\marktext\images\2023-01-16-20-19-50-image.png)
    
    root 태그를 불러오는것을 볼 수 있음

[React - 7. JS 코딩하는 법 - YouTube](https://youtu.be/LEPiRfPD9Uw?list=PLuHgQVnccGMCRv6f8H9K5Xwsdyg4sFSdi&t=214)
