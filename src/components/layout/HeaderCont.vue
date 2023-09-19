<script setup>
import { headerNav } from '@/constants/index';
</script>

<template>
  <header id="header" role="header">
    <div class="header__inner container">
      <h1 class="header__logo">
        <router-link to="/">Seoeun<em>Vue-Site</em></router-link>
      </h1>
      <nav class="header__gnb" role="navigation" aria-label="메인 메뉴">
        <ul>
          <li v-for="(nav, key) in headerNav" :key="key">
            <router-link :to="nav.url">{{ nav.title }}</router-link>
          </li>
        </ul>
      </nav>
      <div class="header__right">
        <span></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
@import '@/assets/scss/setting/mixin';

#header {
  position: fixed;
  // background-color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  height: 79px;
  box-sizing: border-box;
  z-index: 1003;
  border-bottom: 1px solid rgb(255 255 255 / 0.2);
}
.header__inner {
  // position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  text-align: center;

  .header__logo {
    line-height: 1;
    // font-size: 1.625rem;
    float: left;
    padding: 18px 0;
    box-sizing: border-box;
    margin-right: 20px;

    a {
      font-size: 30px;
      text-transform: uppercase;
      font-weight: 800;

      em {
        font-size: 12px;
        display: block;
        color: var(--black200);
        font-weight: 500;
      }
    }
  }
  .header__gnb {
    float: left;

    li {
      float: left;
      margin: 0 24px;
      position: relative;

      a {
        position: relative;
        font-size: 18px;
        line-height: 78px;
        text-align: center;
        color: #222;

        &::before {
          content: '';
          width: calc(100% - 28px);
          height: 1px;
          background-color: var(--black);
          position: absolute;
          left: 14px;
          bottom: 10px;
          transform: scaleX(0);
          transition: all 0.3s;
        }
        &:hover::before {
          transform: scaleX(1);
        }
      }
    }
    // @media (max-width: 800px) {
    //   ul {
    //     position: fixed;
    //     right: -150px;
    //     top: 68px;
    //     height: 100vh;
    //     background-color: rgba(224, 214, 207, 0.7);
    //     backdrop-filter: blur(15px);
    //     z-index: 10000;
    //     min-width: 150px;
    //     padding: 20px 0;
    //     transition: right 0.8s;

    //     li {
    //       display: block;
    //       text-align: center;

    //       a {
    //         display: inline-block;
    //         padding: 10px;
    //       }
    //     }
    //   }

    //   &.show {
    //     ul {
    //       right: 0px;
    //     }
    //   }
    //   &.show + .header__nav__mobile span::before {
    //     width: 20px;
    //   }
    //   &.show + .header__nav__mobile span::after {
    //     width: 20px;
    //   }
    // }
  }
  .header__right {
    float: right;
    padding: 18px 0;
    width: 25px;
    height: 40px;
    cursor: pointer;

    @media (max-width: 800px) {
      display: block;
    }

    span {
      display: block;
      width: 25px;
      height: 2px;
      background-color: var(--black);
      margin-top: 19px;
      position: relative;

      &::before {
        content: '';
        width: 25px;
        height: 2px;
        background-color: var(--black);
        position: absolute;
        right: 0;
        top: 6px;
        transition: width 0.3s;
      }
      &::after {
        content: '';
        width: 25px;
        height: 2px;
        background-color: var(--black);
        position: absolute;
        left: 0;
        bottom: 6px;
        transition: width 0.3s;
      }
    }
  }
}
</style>
