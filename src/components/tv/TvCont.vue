<template>
  <div class="tv-cont">
    <ul>
      <li class="item" v-for="(tv, index) in tvPrograms" :key="index">
        <div class="item-flip">
          <div class="item-img">
            <img
              :src="
                tv.poster_path !== null
                  ? `https://image.tmdb.org/t/p/w500${tv.poster_path}`
                  : '/src/assets/img/icon/skeleton_tmdb.svg'
              "
              :alt="tv.name"
            />
          </div>
          <div class="item-detail">
            <div class="item-detail-inner">
              <h2 class="title">{{ tv.name }}</h2>
              <p class="desc">{{ tv.overview }}</p>
              <div class="watch-btn">
                <div class="rating" :data-content="tv.vote_average.toFixed(1)">
                  <i class="star"></i>
                  {{ tv.vote_average.toFixed(1) }}
                </div>
                <span class="date">{{ getYear(tv.first_air_date) }}</span>
                <a :href="`https://www.themoviedb.org/tv/${tv.id}?language=ko-KR`" target="_blank">자세히보기</a>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tvPrograms: {
      type: Array,
      required: true
    }
  },
  methods: {
    getYear(date) {
      return date.substring(0, 4);
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/setting/mixin';
@import url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.css);
.tv-cont {
  ul {
    @include flex-between;

    .item {
      width: 23%;
      margin-bottom: 3%;
      transition: all 0.3s ease-in-out;
      position: relative;
      display: inline-block;
      perspective: 1000px;

      .item-flip {
        transition: 0.6s;
        transform-style: preserve-3d;
        position: relative;

        .item-img,
        .item-detail {
          backface-visibility: hidden;
          transition: 0.6s;
          transform-style: preserve-3d;
        }

        .item-img {
          position: relative;
          z-index: 2;

          img {
            width: 100%;
            height: 441px;
            @include border(10px);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background-color: #dbdbdb;
          }
        }

        &:hover .item-img {
          -webkit-transform: rotateY(180deg);
          -moz-transform: rotateY(180deg);
          -o-transform: rotateY(180deg);
          transform: rotateY(180deg);
        }

        &:hover .item-detail {
          -webkit-transform: rotateY(0);
          -moz-transform: rotateY(0);
          -o-transform: rotateY(0);
          -ms-transform: rotateY(0);
          transform: rotateY(0);
        }

        .item-detail {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          width: auto;
          height: auto;
          transform: rotateY(-180deg);

          .item-detail-inner {
            display: block;
            height: 100%;
            padding: 20px;
            background: #1d1b24;
            overflow: hidden;
            @include border(10px);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

            .title {
              color: #fff;
              font-size: 18px;
              font-weight: 600;
              padding-bottom: 15px;
              @include line-ellipsis;
            }
            .desc {
              font-size: 15px;
              color: rgba(255, 255, 255, 0.7);
              overflow: hidden;
            }

            .watch-btn {
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              // font-weight: 600;
              text-align: center;
              padding: 70px 10px 10px;
              @include border(10px);
              background: linear-gradient(
                to bottom,
                rgba(29, 27, 36, 0) 0,
                rgba(29, 27, 36, 1) 40%,
                rgba(29, 27, 36, 1) 100%
              );

              .rating {
                position: relative;
                float: left;
                color: rgba(255, 255, 255, 0.7);
                padding-left: 10px;
                padding-bottom: 10px;
                z-index: 1;

                .star {
                  display: inline-block;
                  font: normal normal normal 14px/1 FontAwesome;
                  font-size: inherit;
                  text-rendering: auto;
                  -webkit-font-smoothing: antialiased;
                  color: #febf15;
                  padding-right: 5px;
                  margin-left: -2px;

                  &::before {
                    margin: 0;
                    content: '\f005';
                    box-sizing: inherit;
                  }
                }
              }

              .date {
                position: relative;
                float: right;
                font-weight: 300;
                color: rgba(255, 255, 255, 0.7);
                padding-top: 1px;
                padding-right: 10px;
                z-index: 1;
              }

              > a {
                display: block;
                width: 100%;
                color: #fff;
                background: var(--main-color);
                line-height: 40px;
                @include border(5px);
                clear: both;
              }
            }
          }
        }
      }
    }
  }
}
</style>
