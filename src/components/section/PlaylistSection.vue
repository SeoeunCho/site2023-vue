<script setup>
import { playlistSectionData } from '@/constants/index';
</script>

<template>
  <section id="playlist" class="section center">
    <h3 class="txt-hidden">플레이리스트 섹션</h3>
    <div class="playlist-inner container">
      <h3>취향껏 즐기는 플레이리스트</h3>
      <p>지금 듣고 싶은 음악은?<br />기억으로 남게 될 <strong>플레이리스트</strong>를 유튜브 검색으로 찾아보세요.</p>
      <router-link to="/playlist" class="button-green">자세히 보기</router-link>

      <div class="playlist-cont">
        <div class="playlist-item" v-for="(video, i) in playlistSectionData" :key="i">
          <figure class="playlist-main">
            <a :href="video.link">
              <img :src="video.img" :alt="video.title" />
              <span class="play-icon"></span>
            </a>
          </figure>
          <div class="playlist-info">
            <div class="title">
              <h4>{{ video.title }}</h4>
            </div>
          </div>
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

        .playlist-info {
          display: flex;
          align-items: left;
          margin-top: 10px;

          .title {
            width: 100%;
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
