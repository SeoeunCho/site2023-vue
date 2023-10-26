<script setup>
import { playlistSectionData } from '@/constants/index';
</script>

<template>
  <section id="playlist" class="section center">
    <div class="playlist-inner container">
      <h3 v-html="playlistSectionData.title"></h3>
      <p v-html="playlistSectionData.desc"></p>

      <div class="playlist-cont">
        <div class="playlist-item" v-for="(video, i) in playlistSectionData.data" :key="i">
          <figure class="playlist-main">
            <a :href="video.link">
              <img :src="video.img" :alt="video.title" />
              <span class="play-icon"></span>
            </a>
          </figure>
          <div class="playlist-info">
            <div class="title">
              <p>{{ video.title }}</p>
            </div>
          </div>
        </div>
      </div>

      <router-link to="/playlist" class="more-btn">플레이리스트 더보기</router-link>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import '/public/assets/scss/setting/mixin';

#playlist {
  background-color: var(--subBg300);

  .playlist-inner {
    .playlist-btn {
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
    .playlist-cont {
      @include flex-between;

      .playlist-item {
        width: 32.2222%;
        height: auto;
        margin-bottom: 30px;

        .playlist-main {
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

        .playlist-info {
          display: flex;
          align-items: left;
          margin-top: 10px;

          .title {
            width: 100%;
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

        img {
          @include border(20px);
        }
      }
    }
  }
}
</style>
