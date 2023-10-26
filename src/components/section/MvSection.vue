<script setup>
import { mvSectionData } from '@/constants/index';
</script>

<template>
  <section id="mv" class="section center">
    <div class="mv-inner container">
      <h3 v-html="mvSectionData.title"></h3>
      <p v-html="mvSectionData.desc"></p>

      <div class="mv-cont">
        <div class="mv-item" v-for="(mv, i) in mvSectionData.data" :key="i">
          <figure class="mv-main">
            <a :href="mv.link">
              <img :src="mv.img" :alt="mv.title" />
              <span class="play-icon"></span>
            </a>
          </figure>
          <div class="mv-info">
            <div class="pic">
              <img :src="mv.icon" :alt="mv.title" />
            </div>
            <div class="title">
              <p>{{ mv.title }}</p>
              <span>{{ mv.desc }}</span>
            </div>
          </div>
        </div>
      </div>

      <router-link to="/mv" class="more-btn">뮤직비디오 더보기</router-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
@import '/public/assets/scss/setting/mixin';

#mv {
  background-color: var(--subBg200);

  .mv-inner {
    .mv-btn {
      margin-bottom: 30px;

      ul {
        display: flex;
        justify-content: center;

        li {
          a {
            @include border(50px);
            display: inline-block;
            padding: 10px 30px;
            margin: 0 5px;
            transition: all 0.3s;
            color: var(--white);
            background-color: #83a5f9;

            &:hover {
              background-color: #3617ce;
              color: var(--white);
            }
          }
        }
      }
    }
    .mv-cont {
      @include flex-between;

      .mv-item {
        width: 32.2222%;
        height: auto;
        margin-bottom: 30px;

        .mv-main {
          > a {
            display: block;
            width: 100%;
            height: 100%;
            position: relative;
            top: 0;
            left: 0;

            img {
              width: 100%;
              height: 100%;
              @include border(20px);
              opacity: 0.9;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .play-icon {
              width: 50px;
              height: 50px;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background: url(/assets/img/icon/play_video.png) no-repeat center;
              background-size: 100%;
              z-index: 1000;
            }
          }
        }

        .mv-info {
          display: flex;
          align-items: left;
          margin-top: 10px;

          .pic {
            margin-right: 10px;
            width: 50px;
            height: 50px;

            img {
              @include border(50%);
            }
          }
          .title {
            width: calc(100% - 60px);
            text-align: left;

            p {
              @include line-ellipsis;
              font-size: 20px;
              font-weight: 600;
              color: #222;
              word-break: keep-all;
            }
            span {
              display: block;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
</style>
