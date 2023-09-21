<script setup>
import { headerNav } from '@/constants/index';
</script>

<template>
  <header id="header" role="header" :class="{ active: scrollActive, 'router-active': $store.state.headerClass }">
    <div class="header-inner container">
      <h1 class="header-logo left">
        <router-link to="/" @click="$store.commit('scrollTop')">Seoeun<em>Vue-Site</em></router-link>
      </h1>
      <nav class="header-gnb left" role="navigation" aria-label="메인 메뉴">
        <ul>
          <li class="left" v-for="(nav, key) in headerNav" :key="key">
            <router-link :to="nav.url">{{ nav.title }}</router-link>
          </li>
        </ul>
      </nav>
      <div class="header-right">
        <span></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      scrollActive: false
    };
  },
  computed: {},
  created() {},
  mounted() {
    document.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 78) {
        this.scrollActive = true;
      } else {
        this.scrollActive = false;
      }
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/setting/mixin';

#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 79px;
  box-sizing: border-box;
  z-index: 1003;
  border-bottom: 1px solid rgb(255 255 255 / 0.2);

  .header-inner {
    // position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    text-align: center;

    .header-logo {
      line-height: 1;
      // font-size: 1.625rem;
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
    .header-gnb {
      li {
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
            width: 100%;
            height: 2px;
            background-color: var(--black200);
            position: absolute;
            left: 0;
            bottom: -5px;
            transform: scaleX(0);
            transition: all 0.3s;
          }
          &:hover::before {
            transform: scaleX(1);
          }
        }
      }
    }
    .header-right {
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
}
.active {
  background-color: var(--white);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 0;
  color: #222 !important;
}
.router-active {
  background-color: var(--white);
  border-bottom: 1px solid #eee !important;
}
</style>
