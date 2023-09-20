<template>
  <section id="movie" class="section">
    <div class="movie-inner container">
      <h3>음악과 영화의 환상적인 만남</h3>
      <p>음악은 우리의 삶을 아름답게 만듭니다.<br />음악이 주는 힘을 영화를 통해 더욱 깊이 경험해보세요!</p>
      <router-link to="/movie" class="button-green">자세히 보기</router-link>
      <div class="movie-item">
        <div>
          <img src="@/assets/img/movie/movie01.svg" alt="비긴어게인" />
        </div>
        <div>
          <img src="@/assets/img/movie/movie02.svg" alt="어거스트러쉬" />
        </div>
        <div>
          <img src="@/assets/img/movie/movie03.svg" alt="위플래쉬" />
        </div>
        <div>
          <img src="@/assets/img/movie/movie04.svg" alt="스타이즈본" />
        </div>
        <div>
          <img src="@/assets/img/movie/movie05.svg" alt="위대한쇼맨" />
        </div>
        <div>
          <img src="@/assets/img/movie/movie06.svg" alt="보헤미안랩소디" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '../../assets/scss/setting/mixin';

#movie {
  background-color: var(--subBg500);

  .movie-inner {
    height: 730px;

    .movie-item {
      @include flex-between;
      margin-top: 70px;
      position: absolute;
      > div {
        width: 268px;
        img {
          width: 100%;
          padding: 0 20px 0 0;
          @include border(20px);
        }
      }
    }
  }

  .movie-cont {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 100px;
      li {
        width: 23.3333%;
        margin-bottom: 4%;
        position: relative;
        img {
          width: 100%;
          border-radius: 20px;
          box-shadow: 0px 10px 10px #00000022;
        }
        em {
          .title {
            font-size: 20px;
            padding: 3px 0;
            &:hover {
              text-decoration: underline;
              text-underline-position: under;
            }
          }
          .star {
            position: absolute;
            right: 20px;
            top: 20px;
            width: 40px;
            height: 40px;
            background-color: #fff;
            text-align: center;
            line-height: 40px;
            border-radius: 50%;
            font-size: 15px;
            color: #4b4bff;
          }
        }
        span {
          display: block;
          margin: 4px 0;
        }
      }
    }
  }

  // movie-search
  .movie-search {
    text-align: center;
    margin-bottom: 50px;
    margin-top: 70px;
    input {
      border: 1px solid #e8ecf2;
      font-size: 16px;
      padding: 10px 20px;
      border-radius: 50px;
      min-width: 300px;
      margin-right: 10px;
    }
    button {
      @include button(#4857ec, #fff);
      border-radius: 50px;
    }
  }

  .movie-slider {
    a {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      img {
        width: 100%;
        height: 650px;
      }
    }
  }

  .movie-tag {
    ul {
      display: flex;
      justify-content: center;
      margin-top: 100px;
      margin-bottom: 50px;

      li {
        button {
          border: 1px solid #4857ec;
          padding: 10px 20px;
          margin: 0 10px;
          color: #4857ec;
          background-color: #fff;
        }
      }
    }
  }
}
</style>
