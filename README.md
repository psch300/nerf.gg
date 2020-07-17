This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![NERF.GG](./public/images/logo.png "NERF.GG")

# NERFGG

React.js의 기본을 익히고 컨테이너, 컴포넌트 구조를 이해해보기 위해 만들어 본 리그 오브 레전드 전적 검색 사이트 [OP.GG](https://www.op.gg) 클론 코딩 프로젝트

## 개요

5월 한 달간 [OP.GG](https://www.op.gg/)의 전적검색 탭을 확인하며 최대한 비슷하게 제작.

최대한 외부 라이브러리에 대한 의존없이 기본에 충실히 웹사이트를 제작하는 것에 중점을 둠.

사용한 외부 라이브러리는 제작 시간 절약을 위해 URL 파싱을 위한 `query-string`, 그리고 게임이 플레이된 시간을 계산하기 위한 `moment.js`만 사용.

## 내용

1. 구조
  - `src/client` : 브라우저 측에서 사용할 최상위 컴포넌트인 `Root.js`가 위치해있음. `react-router`를 사용하기 때문에 여기서 라우터를 설정해줌.
  - `src/pages` : 각 라우트들이 위치하는 디렉토리. 처음 접속했을 때 나타나는 `MainContainer.js`와 소환사명을 검색해 전적을 확인할 때 나타나는 `SummonerContainer.js`로 구분. `state`들을 관리하고 데이터를 작업하기 위한 컨테이너들로 구성되있음.
  - `src/components` : 프로젝트를 구성하는 컴포넌트들이 모두 위치해있음. `props`로 전달받은 값을 렌더링하고 CSS 스타일을 가지고 웹을 꾸며주는 역할을 함.
  - `src/server` : 서버 측에서 사용하는 코드들을 넣어둠. `axios`를 이용해 RIOT API를 통해 각 소환사들의 정보를 받아옴.
  - `src/shared` : 서버와 클라이언트에서 공용으로 사용되는 컴포넌트인 `App.js`가 위치함.

2. 후기
  - 단지 프로젝트 하나를 빨리 완성해보자는 생각보다는 정확하게 구조를 세우고 이에 맞춰 코드를 작성하다보니, 프로젝트의 전체적인 진행상황 확인 및 코드 수정이 필요한 소스를 쉽게 찾을 수 있어서 효율적이었음을 깨달음.
  - 처음에 프로젝트를 시작했을 때는 데스크탑에서의 화면만 신경쓰면서 화면을 구성했었는데 모바일 화면을 보고 처참하다는 것을 알게됨. 요즘 시대에는 웹페이지를 핸드폰으로 접근하는 경우가 많기 때문에 반응형 웹에 대해서 깊게 생각하는 계기가 됨. 반응형 웹을 위해 대단한 코드를 작성한 것은 아니지만 모바일에서도 화면이 깨지지 않도록 신경쓰게 됨.
  - 게임 데이터를 활용하면서 정돈되지 않은 데이터를 UI의 도움을 받아 화면에 제공함으로 데이터의 가치를 높혀줄 수 있다는 생각을 하게 됨.

3. 한계
  - RIOT API의 요청 제한이 있어 한 번에 많은 양의 전적을 불러올 수가 없었음. 그래서 한 번 전적검색 할 때마다 5게임만 불러와 화면에 표시.
  - 요청 한계를 늘려달라고 요청했으나 5월 한 달간 응답이 없었던 관계로 일단은 그대로 프로젝트를 진행했음. 혹시나 이후에 요청이 더 가능해진다면 5게임 이상 가져올 수 있도록 만들어 볼 계획.

## 실행 화면

1. 데스크탑
  - 메인
    ![desktop_main](./public/images/desktop_main.png)

  - 'hide on bush' 전적 검색
    ![desktop_search1](./public/images/desktop_search1.png)

  - 같은 매치에 있었던 다른 소환사 전적 검색
    ![desktop_search2](./public/images/desktop_search2.png)

2. 모바일
  - 메인
    ![mobile_main](./public/images/mobile_main.png | width=100)

  - 'hide on bush' 전적 검색
    ![mobile_search](./public/images/mobile_search.png | width=100)