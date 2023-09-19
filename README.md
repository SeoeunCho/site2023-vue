# Vue.js 사이트 프로젝트

이 프로젝트는 여러 가지 API사용에 익숙해지는 과정을 담은 사이트입니다. 
Youtube, Unsplash, TMDB(The Movie Database) API를
Postman사이트를 이용하여 데이터를 분류하고 그 중에서 원하는 데이터만 가져와 사용했습니다.
Prettier, ESlint를 이용해 문법에 오류가 없도록 작업하며 코드정리를 하였습니다.

![image](https://)


## 완성작 보기 
- 미리보기 : DEMO(https://vue.netlify.app/)
- 작업 기간 : 2일


## 학습
- 가상 DOM과 Reactivity(반응성) 시스템을 통해 빠른 렌더링과 DOM 업데이트를 수행합니다. 필요한 부분만 업데이트하므로 성능이 향상되며, 작은 규모의 프로젝트부터 큰 규모의 애플리케이션까지 효율적으로 작동합니다.
- 템플릿 문법을 활용하여 컴포넌트 기반 개발을 쉽게 할 수 있습니다.
- 컴포넌트 기반 아키텍처를 사용하여 UI를 작은 단위로 쪼개고 재사용 가능한 컴포넌트를 만들 수 있습니다. 이로 인해 코드의 재사용성이 높아지고 유지 보수가 용이해집니다.
- 단방향 데이터 흐름을 지원합니다. 데이터는 상위 컴포넌트에서 하위 컴포넌트로만 전달되며, 하위 컴포넌트는 상위 컴포넌트의 데이터를 수정할 수 없습니다. 이로 인해 데이터의 흐름이 예측 가능하고 유지 보수가 용이해집니다.


## 사용 스택
- vue(https://ko.vuejs.org/) 를 사용하여 사이트를 번들링하고 관리합니다.
- YoutubeAPI(https://console.cloud.google.com/apis/) 를 이용하여 유튜브 목록, 검색 기능을 구현합니다.
- Unsplash API(https://unsplash.com/ko) 를 postman이용하여 이미지 목록, 검색, 이미지슬라이드를 기능을 구현합니다.
- TMDB API(https://www.themoviedb.org/?language=ko) 를 이용하여 영화 목록, 검색, 이미지슬라이드를 기능을 구현합니다.
- Postman(https://www.postman.com/) 을 이용하여 restfulAPI를 요청하여 데이터를 분류하고 원하는 데이터만 가져와서 사용합니다.
- netlify(https://www.netlify.com/) 를 통해 사이트를 배포합니다.
- github(https://github.com/) 을 사용하여 파일을 관리합니다.
- HTML, CSS 기반으로 웹사이트의 기본 레이아웃 설계하고, 웹 표준 및 웹 접근성을 준수하여 작업합니다. <br />
[ARIA(Accessible Rich Internet Applications)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)

## 프로젝트 실행
- vue를 설치합니다. `npm init vue@latest`
- sass를 설치합니다. `npm install sass`
- swiper를 설치합니다. `npm install swiper`
- 프로젝트 시작 `npm run dev`

## API 요청
1. **YOUTUBE :** ([ YouTube Data API v3 ](https://console.cloud.google.com/apis/)에서 API Key 발급 필요)
2. **UNSPLASH :** ([ postman ](https://www.postman.com/downloads/)에서 API Key 발급 필요)
3. **MOVIE :** ([ themoviedb ](https://www.themoviedb.org/?language=ko)에서 API Key 발급 필요)

## Screenshots
![image](https://)
![image](https://)
![image](https://)