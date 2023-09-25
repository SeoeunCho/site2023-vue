<script setup>
import { playlistSectionData } from '@/constants/index';
</script>

<template>
  <section id="playlist" class="section">
    <div class="playlist-inner container">
      <h3>당신의 음악 취향을 충족시킬 유튜버</h3>
      <p>음악의 다양한 매력을 느끼게 해주는<br />음악을 사랑하는 이들을 위한 열정이 가득한 유튜버들을 만나보세요.</p>
      <router-link to="/playlist" class="button-red">자세히 보기</router-link>

      <div class="playlist-item">
        <div v-for="(video, i) in playlistSectionData" :key="i">
          <a :href="video.link">
            <img :src="video.img" :alt="video.title" />
          </a>
          <span>{{ video.title }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import '../../assets/scss/setting/mixin';
#playlist {
  background-color: var(--subBg300);

  .playlist-inner {
    height: 600px;

    .playlist-item {
      @include flex-between;
      margin-top: 70px;
      width: auto;
      position: absolute;

      > div {
        width: 400px;
        margin-right: 20px;

        img {
          width: 100%;
          margin-bottom: 20px;
          @include border(10px);
        }

        span {
          font-size: 20px;
        }
      }
    }
  }

  // .playlist-page {
  // }
  // .playlist-slider {
  //   display: none;
  // }
  // .playlist-search {
  //   text-align: center;
  //   margin-bottom: 50px;

  //   input {
  //     border: 1px solid #e8ecf2;
  //     font-size: 16px;
  //     padding: 10px 20px;
  //     @include border(50px);
  //     min-width: 300px;
  //     margin-right: 10px;
  //   }
  //   button {
  //     @include button(#f7100d, #fff);
  //     @include border(50px);
  //   }
  // }
  // .playlist-tag {
  //   ul {
  //     display: flex;
  //     justify-content: center;
  //     margin-top: 100px;
  //     margin-bottom: 50px;

  //     li {
  //       a {
  //         border: 1px solid #f7100d;
  //         padding: 10px 20px;
  //         margin: 0 10px;
  //         color: #f7100d;
  //       }
  //     }
  //   }
  // }
  // .playlist-cont {
  //   ul {
  //     display: flex;
  //     flex-wrap: wrap;
  //     justify-content: space-between;
  //     margin-bottom: 100px;

  //     li {
  //       width: 24%;
  //       margin-bottom: 4%;

  //       img {
  //         width: 100%;
  //         @include border(20px);
  //       }

  //       span {
  //         display: block;
  //         margin: 4px 0;
  //         overflow: hidden;
  //         text-overflow: ellipsis;
  //         white-space: nowrap;
  //       }
  //     }
  //   }
  // }
  // .playlist-tag {
  //   ul {
  //     display: flex;
  //     justify-content: center;
  //     margin-top: 100px;
  //     margin-bottom: 50px;

  //     li {
  //       a {
  //         border: 1px solid #f7100d;
  //         padding: 10px 20px;
  //         margin: 0 10px;
  //         color: #f7100d;
  //       }
  //     }
  //   }
  // }
}
</style>
