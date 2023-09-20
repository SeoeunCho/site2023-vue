<script setup>
import { mvText } from '@/constants/index';
</script>

<template>
  <section id="mv" class="section center">
    <div class="mv-inner container">
      <h3>뮤직비디오 구경하기</h3>
      <p>음악의 감동을 두배로! 영상으로 즐기는 음악! 뮤직비디오를 감상해보세요.</p>
      <router-link to="/mv" class="button-violet">더 많은 MV 보러가기</router-link>

      <div class="mv-cont">
        <div class="mv-item" v-for="(mv, index) in mvText" :key="index">
          <figure class="mv-main">
            <a :href="mv.link">
              <img :src="mv.img" :alt="'아이들' + (index + 1)" />
            </a>
          </figure>
          <div class="mv-info">
            <div class="pic">
              <img :src="mv.icon" alt="아이들" />
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

<style lang="scss">
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
      flex-wrap: wrap;
      margin-top: 70px;

      .mv-item {
        width: 32.2222%;
        margin-bottom: 30px;

        .mv-info {
          display: flex;
          align-items: center;
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
            h4 {
              font-size: 20px;
              color: var(--color_body);
            }
            span {
              font-size: 16px;
              color: #243a4b;
            }
          }
        }

        img {
          @include border(10px);
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
