<script setup>
import { artistData, artistMenus } from '@/constants/index';
</script>

<template>
  <section id="artist" class="container page">
    <div class="artist-inner">
      <div class="cont-title">
        <p>Genre By Artists</p>
        <h2>장르별 아티스트</h2>
      </div>
      <div class="artist-btn sch-area center">
        <div class="btn-box">
          <button :class="{ active: activeButton === artistMenus.menu1 }" @click="handleButtonClick(artistMenus.menu1)">
            {{ artistMenus.menu1 }}
          </button>
          <button :class="{ active: activeButton === artistMenus.menu2 }" @click="handleButtonClick(artistMenus.menu2)">
            {{ artistMenus.menu2 }}
          </button>
          <button :class="{ active: activeButton === artistMenus.menu3 }" @click="handleButtonClick(artistMenus.menu3)">
            {{ artistMenus.menu3 }}
          </button>
          <button :class="{ active: activeButton === artistMenus.menu4 }" @click="handleButtonClick(artistMenus.menu4)">
            {{ artistMenus.menu4 }}
          </button>
        </div>
      </div>
      <div class="artist-cont">
        <div class="genre-desc">
          <p class="genre-title">{{ activeArtistData.menu }}</p>
          <div class="genre-txtbox">
            <p>{{ activeArtistData.title }}</p>
            <p>{{ activeArtistData.desc }}</p>
          </div>
        </div>
        <div class="artist-list" v-for="(item, i) in activeArtistData.artistLists" :key="i">
          <a :href="item.link" target="_blank">
            <figure class="artist-photo">
              <img :src="item.artistImg" :alt="item.name" />
            </figure>
            <div class="artist-info">
              <div class="artist-logo">
                <img :src="item.iconImg" :alt="item.name" />
              </div>
              <div class="artist-name">
                <h4>{{ item.name }}</h4>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeButton: 'POP'
    };
  },
  computed: {
    activeArtistData() {
      return artistData.find((item) => item.menu === this.activeButton);
    }
  },
  methods: {
    handleButtonClick(menu) {
      this.activeButton = menu;
    }
  }
};
</script>

<style scoped lang="scss">
@import '/public/assets/scss/setting/mixin';
#artist {
  .artist-inner {
    .artist-btn {
      padding-bottom: 20px;

      div {
        display: inline-block;

        button {
          margin-bottom: 10px;
        }
      }
    }
    .artist-cont {
      @include flex-between;
      gap: 40px 0;

      .genre-desc {
        width: 100%;
        height: 100%;
        padding: 40px;
        letter-spacing: -0.05em;
        font-size: 18px;
        color: var(--black);
        background-color: #feeded;
        box-sizing: border-box;
        @include border(20px);

        .genre-title {
          margin-bottom: 15px;
          font-size: 32px;
          line-height: 45px;
          font-weight: 700;
          transition: all 0.3s;
        }

        .genre-txtbox {
          p {
            &:nth-child(1) {
              font-size: 22px;
              font-weight: 600;
              margin-bottom: 5px;
            }
          }
        }
      }

      .artist-list {
        width: calc(25% - 20px);

        a {
          .artist-photo {
            img {
              width: 100%;
              @include border(20px);
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
          }
          .artist-info {
            display: flex;
            padding: 20px 0px;
            .artist-logo {
              margin-right: 10px;

              img {
                @include border(100%);
                width: 100%;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
            }
            .artist-name {
              h4 {
                @include line-ellipsis;
                font-size: 17px;
                font-weight: 700;
              }
              p {
                @include line-ellipsis;
              }
            }
          }
        }
      }
    }
  }
}

/* =======================================================
    반응형
========================================================*/
@media (max-width: 1024px) {
  #artist {
    .artist-inner {
      .artist-cont {
        .genre-desc {
          .genre-title {
            font-size: 26px;
            margin-bottom: 10px;
          }

          .genre-txtbox {
            p {
              &:nth-child(1) {
                font-size: 18px !important;
                font-weight: 600;
                margin-bottom: 5px;
              }
            }
          }
        }

        .artist-list {
          width: calc(50% - 20px);
          a {
            .artist-info {
              .artist-logo {
                // width: 27%;
              }
              .artist-name {
                // width: 90%;
                h4 {
                  font-size: 17px;
                  font-weight: 700;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
