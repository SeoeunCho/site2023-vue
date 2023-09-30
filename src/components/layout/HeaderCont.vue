<script setup>
import { headerNavList } from '@/constants/index';
</script>

<template>
  <!-- S: header -->
  <header id="header" role="header" :class="{ active: scrollActive, 'router-active': $store.state.headerClass }">
    <div class="header-inner container">
      <h1 class="header-logo left">
        <router-link to="/" @click="$store.commit('scrollTop')">Seoeun<em>Vue-Site</em></router-link>
      </h1>
      <nav class="header-gnb left" role="navigation" aria-label="메인 메뉴">
        <ul>
          <li class="depth01 left" v-for="(nav, i) in headerNavList" :key="i">
            <router-link :to="nav.url" target>{{ nav.title }}</router-link>
            <ul class="depth02-list" v-if="nav.subMenu">
              <template v-for="(item, i) in nav.subMenu" :key="i">
                <li class="depth02">
                  <router-link :to="item.url">{{ item.title }}</router-link>
                </li>
              </template>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="header-right" @click="showSiteMap">
        <button type="button" class="btn-allmenu"><span class="txt-hidden">전체보기</span></button>
      </div>
    </div>
  </header>
  <!-- E: header -->
  <!-- S: site-map -->
  <div id="site-map" class="allmenu" :class="{ active: allMenuActive }">
    <div class="header-inner container">
      <div class="menu-top">
        <h1 class="header-logo left" @click="showSiteMap">
          <router-link to="/" @click="$store.commit('scrollTop')">Seoeun<em>Vue-Site</em></router-link>
        </h1>
        <button class="btn-close txt-hidden" @click="showSiteMap">닫기</button>
      </div>
      <ul class="allmenu-list">
        <li v-for="(nav, i) in headerNavList" :key="i" @click="showSiteMap">
          <router-link :to="nav.url">{{ nav.title }}</router-link>
          <ul class="gnb-depth" v-if="nav.subMenu">
            <template v-for="(item, i) in nav.subMenu" :key="i">
              <li class="depth02">
                <router-link :to="item.url">{{ item.title }}</router-link>
              </li>
            </template>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <!-- E: site-map -->
</template>

<script>
export default {
  data() {
    return {
      scrollActive: false,
      allMenuActive: false
    };
  },
  watch: {
    allMenuActive() {
      document.body.classList.toggle('scrollLock');
    }
  },
  computed: {},
  created() {},
  mounted() {
    document.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 0) {
        this.scrollActive = true;
      } else {
        this.scrollActive = false;
      }
    },
    showSiteMap() {
      if (!this.allMenuActive) {
        this.allMenuActive = true;
      } else {
        this.allMenuActive = false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/setting/mixin';

#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: transparent;
  box-sizing: border-box;
  z-index: 1003;
  border-bottom: 1px solid rgb(255 255 255 / 0.2);

  &:hover {
    background-color: var(--white);

    .depth01 {
      > a {
        color: var(--black);
      }
    }
  }

  &.active {
    background-color: var(--white);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border: 0;
    color: var(--black);

    .depth01 {
      > a {
        color: var(--black);
      }
    }
  }
  &.router-active {
    background-color: var(--white);
    border-bottom: 1px solid #eee !important;

    
  }
}

#site-map {
  &.allmenu {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateX(200px);
    opacity: 0;
    -webkit-transition: all 500ms cubic-bezier(0.9, 0, 0.33, 1);
    transition: all 500ms cubic-bezier(0.9, 0, 0.33, 1);
    background-color: #fff;
    z-index: -1;

    &.active {
      opacity: 1;
      transform: translateX(0px);
      z-index: 2000;
    }

    .header-inner {
      height: 100%;
      max-height: 90vh;
      overflow-y: auto;

      .menu-top {
        width: 100%;
        height: 69px;

        .btn-close {
          background: url(../../assets/img/icon/btn_close.png) no-repeat center;
          background-size: 100%;
          text-indent: -9999px;
          font-size: 0;
          width: 34px;
          height: 34px;
          float: right;
          padding: 18px 0;
        }

        .header-logo {
          padding: 0;
        }
      }

      .allmenu-list {
        > li {
          padding: 36px 0;
          float: left;
          width: calc(33.5555% - 30px);
          margin-right: 40px;
          text-align: left;

          > a {
            display: block;
            font-size: 24px;
            font-weight: 700;
            padding-bottom: 12px;
            border-bottom: 2px solid var(--black);
            position: relative;
            width: 100%;

            pointer-events: all;
            color: var(--black) !important;

            &::before {
              content: '';
              position: absolute;
              bottom: -2px;
              left: 0;
              width: 0;
              height: 2px;
              background-color: var(--main-color);
              -webkit-transition: width 600ms ease;
              transition: width 600ms ease;
            }
          }

          &:hover > a {
            color: var(--main-color) !important;
          }
          &:hover > a::before {
            width: 100%;
          }

          > ul {
            margin-top: 12px;

            > li > a {
              display: block;
              padding: 10px 0;
              box-sizing: border-box;

              &:hover {
                color: var(--main-color);
              }
            }
          }

          &:nth-child(3n) {
            margin-right: 0;
          }
        }
      }
    }
  }
}

.header-inner {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  text-align: center;

  .header-logo {
    line-height: 1;
    padding: 18px 0 20px;
    box-sizing: border-box;
    margin-right: 20px;

    a {
      color: var(--main-color);
      font-size: 30px;
      text-transform: uppercase;
      font-weight: 900;

      em {
        color: var(--sub-color);
        font-size: 12px;
        display: block;
        font-weight: 600;
      }
    }
  }

  .header-gnb {
    .depth01 {
      margin: 0 24px;
      position: relative;
      color: var(--white);

      > a {
        display: block;
        position: relative;
        font-size: 18px;
        line-height: 80px;
        text-align: center;
        color: var(--white);

        &:hover {
          color: var(--black) !important;
        }

        &::before {
          position: absolute;
          top: 12px;
          left: 50%;
          transform: translateX(-50%);
          content: '';
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 3px;
          background-color: var(--main-color);
          transition: all 1s;
          display: none;
          box-sizing: border-box;

          @keyframes bounce_dot {
            from {
              transform: translate3d(-3px, 0, 0);
            }
            to {
              transform: translate3d(-3px, 9px, 0);
            }
          }
        }
        &:hover::before {
          display: block;
          animation: bounce_dot 0.5s;
          animation-direction: alternate;
          animation-timing-function: cubic-bezier(0.5, 0.05, 1, 0.5);
          animation-iteration-count: infinite;
        }

        &::after {
          content: '';
          display: none;
          width: 100%;
          height: 3px;
          position: relative;
          z-index: 1;
          margin-top: -18px;
          background-color: var(--main-color);
        }
        &:hover::after {
          display: block;
        }
      }

      .depth02-list {
        padding: 14px 0;
        text-align: center;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 0 0 10px 10px;
        position: absolute;
        left: 50%;
        top: 78px;
        transform: translateX(-50%);
        min-width: 180px;
        box-shadow: 2px 10px 10px rgb(34 34 34 / 20%);
        display: none;

        .depth02 {
          color: var(--black);
          letter-spacing: -0.025em;
          padding: 10px;
          font-size: 16px;
          word-break: keep-all;

          a:hover {
            color: var(--main-color);
            text-decoration: underline;
            text-underline-offset: 5px;
          }
        }
      }

      &:hover .depth02-list {
        display: block;
      }
    }
  }
  .header-right {
    float: right;
    padding: 18px 0;

    .btn-allmenu {
      width: 45px;
      height: 45px;
      @include border(50%);
      background-image: url(../../assets/img/icon/header_allmenu.png);
      background-position: center;
      background-repeat: no-repeat;
      background-size: 20px;
      background-color: var(--main-color);
      border: none;
    }
  }
}
</style>
