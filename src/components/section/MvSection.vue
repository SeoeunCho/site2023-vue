<script setup>
import { mvSectionData } from '@/constants/index';
</script>

<template>
  <section id="mv" class="section center">
    <h3 class="txt-hidden">뮤직비디오 섹션</h3>
    <div class="mv-inner container">
      <h3>뮤직비디오 구경하기</h3>
      <p>
        음악의 감동을 두배로! 영상으로 즐기는 음악!<br />스타들의 <strong>뮤직비디오</strong>를 유튜브로 검색하고
        감상해보세요.
      </p>
      <router-link to="/mv" class="button-violet">더 많은 MV 보러가기</router-link>

      <div class="mv-cont">
        <div class="mv-item" v-for="(mv, i) in mvSectionData" :key="i">
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
              <h4>{{ mv.title }}</h4>
              <span>{{ mv.desc }}</span>
            </div>
          </div>
        </div>
      </div>
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
@import '../../assets/scss/setting/mixin';

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
              border-radius: 20px;
              opacity: 0.9;
              max-width: 100%;
              border: 0;
              display: block;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .play-icon {
              width: 50px;
              height: 50px;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background: url(@/assets/img/icon/play.png) no-repeat center;
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
            h4 {
              @include line-ellipsis;
              font-size: 20px;
              font-weight: 600;
              color: #222;
              word-break: keep-all;
              color: var(--color_body);
            }
            span {
              display: block;
              font-size: 16px;
            }
          }
        }

        img {
          @include border(20px);
          width: 100%;
        }

        &:nth-child(4) {
          margin-bottom: 0;
        }
        &:nth-child(5) {
          margin-bottom: 0;
        }
        &:nth-child(6) {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
