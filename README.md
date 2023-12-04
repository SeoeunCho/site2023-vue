# Vue.js 사이트 프로젝트

이 프로젝트는 여러 가지 `API`사용에 익숙해지는 과정을 담은 `Vue.js` 사이트입니다.<br/>
Youtube, Unsplash, TMDB(The Movie Database) API를
`Postman`사이트를 이용하여 데이터를 분류하고 그 중에서 원하는 데이터만 가져와 사용했습니다.<br/>
유튜브 영상 / 이미지 / 영화 목록과 검색이 가능합니다.
웹표준을 준수하며, `Sass`와 `Media Query`를 사용해 어떤 기기에도 대응하는 반응형으로 작업했습니다.<br/>
`Prettier`, `ESlint를` 이용해 문법에 오류가 없도록 작업하며 코드정리를 하였습니다.

![image](https://github.com/SeoeunCho/site2023-vue/blob/main/src/assets/img/scrrenshot/site2023-vue-screenshot.png)


## 완성작 보기 
- 미리보기 : DEMO(https://seoeun-vuesite.netlify.app/)
- 작업 기간 : 9일
- React 버전 : [ 소스코드 ](https://github.com/SeoeunCho/site2023-react) / [DEMO](https://seoeun-reactsite.netlify.app/)


## 학습

- Composition API : Vue3 버전의 `<script setup>` 문법을 사용하여 컴포지션 API를 더 효율적으로 사용했습니다.
- 반응형 데이터 바인딩 : Vue.js는 데이터와 UI를 매우 간편하게 바인딩할 수 있습니다. 데이터의 변경이 자동으로 UI에 반영되어 화면과 상태가 항상 일치하도록 도와주어서 직접 DOM 조작을 하지 않고도 데이터 상태 변화를 처리할 수 있어 개발 생산성을 높일 수 있습니다.
- 컴포넌트 기반 : 자체적인 데이터와 로직을 가진 각각의 컴포넌트를 조합하여 코드의 유지보수가 용이해지고 코드 재사용성이 높아집니다.
- Virtual DOM : Vue.js는 가상 DOM(Virtual DOM)을 사용하여 화면 갱신 성능을 최적화하고, 변경된 부분만 실제 DOM에 적용하여 불필요한 렌더링을 방지하고 앱의 성능을 향상시킵니다.
- 디렉티브 : Vue.js는 디렉티브(Directive)를 통해 HTML 요소의 동작을 확장할 수 있습니다. v-bind, v-if, v-for, v-on 등과 같은 디렉티브를 사용하여 템플릿과 데이터 간의 상호작용을 정의할 수 있습니다.
- 이벤트 핸들링 : Vue.js는 이벤트 핸들링을 쉽게 구현할 수 있도록 지원합니다. 사용자 입력에 따른 이벤트 처리 뿐만 아니라 커스텀 이벤트도 쉽게 정의하고 사용할 수 있습니다.
- 라우팅 기능 : Vue-Router를 사용하여 각 경로에 해당하는 컴포넌트를 렌더링하고 다른페이지로 이동하도록 SPA(Single Page Application)를 구축했습니다.
- 단방향 데이터 흐름 : Vue.js는 단방향 데이터 흐름을 따르며 데이터는 항상 상위 컴포넌트에서 하위 컴포넌트로 흐르며, 하위 컴포넌트에서 직접 상위 컴포넌트의 데이터를 수정할 수 없습니다. 이로써 데이터의 흐름이 예측 가능하고 디버깅이 용이해집니다.
- Swiper.js : JavaScript 라이브러리인 스와이퍼 슬라이드를 사용하여 반응형에 대응하고 제공된 Parameter를 적극 활용하여 이미지를 더욱 효과적으로 보여줍니다.


## 사용 스택
- Vue3(https://ko.vuejs.org/) 를 사용하여 사이트를 번들링하고 관리합니다.
- YoutubeAPI(https://developers.google.com/youtube/v3/getting-started) 를 이용하여 유튜브 목록, 검색 기능을 구현합니다.
- Unsplash API(https://unsplash.com/developers) 를 이용하여 Unsplash의 이미지 목록, 검색, 이미지슬라이드를 기능을 구현합니다.
- TMDB API(https://www.themoviedb.org/?language=ko) 를 이용하여 영화 목록, 검색, 이미지슬라이드를 기능을 구현합니다.
- Postman(https://www.postman.com/) 을 이용하여 restfulAPI를 요청하여 데이터를 분류하고 원하는 데이터만 가져와서 사용합니다.
- Swiper.js(https://swiperjs.com/) 를 사용하여 이미지 슬라이더를 구현합니다.
- Netlify(https://www.netlify.com/) 를 통해 사이트를 배포합니다.
- Github(https://github.com/) 을 사용하여 파일을 관리합니다.
- HTML, SCSS 기반으로 웹사이트의 기본 레이아웃 설계하고, 웹 표준 및 웹 접근성을 준수하여 작업합니다. <br />
[ARIA(Accessible Rich Internet Applications)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)

## 프로젝트 실행
- Vue를 설치합니다. `npm init vue@latest`
- Sass를 설치합니다. `npm install sass`
- Swiper를 설치합니다. `npm install swiper`
- 프로젝트 시작 `npm run dev`

## API 요청
1. **YOUTUBE :** ([ YouTube Data API v3 ](https://developers.google.com/youtube/v3/getting-started)에서 API Console로 이동 후, API Key 발급 필요)
2. **UNSPLASH :** ([ Unsplash Developers ](https://unsplash.com/developers/)에서 API Key 발급 필요)
3. **MOVIE :** ([ The Movie Database ](https://www.themoviedb.org/?language=ko)에서 API Key 발급 필요)

## Screenshots
<div style="display: flex;">
  <img src="https://github.com/SeoeunCho/site2023-vue/blob/main/src/assets/img/scrrenshot/site2023-vue-mobile01.png" alt="image" width="32%" height="auto">
  <img src="https://github.com/SeoeunCho/site2023-vue/blob/main/src/assets/img/scrrenshot/site2023-vue-mobile02.png" alt="image" width="32%" height="auto">
  <img src="https://github.com/SeoeunCho/site2023-vue/blob/main/src/assets/img/scrrenshot/site2023-vue-mobile03.png" alt="image" width="32%" height="auto">
</div>
