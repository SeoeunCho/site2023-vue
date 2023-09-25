<template>
  <section id="unsplash" class="section">
    <div class="unsplash-inner container">
      <h3>음악 이미지 다운로드</h3>
      <p>
        음악에 관련된 이미지들을 고화질로 다운로드 받을 수 있습니다.
        <br />무료로 사용 가능하지만 상업적 이용은 피해주세요!
      </p>
      <router-link to="/unsplash" class="button-blue"> 자세히 보기 </router-link>

      <div class="unsplash-item">
        <div>
          <img src="@/assets/img/unsplash/unsplash04.png" alt="unsplashIMG" />
        </div>
        <div>
          <img src="@/assets/img/unsplash/unsplash03.png" alt="unsplashIMG" />
        </div>
        <div>
          <img src="@/assets/img/unsplash/unsplash02.png" alt="unsplashIMG" />
        </div>
        <div>
          <img src="@/assets/img/unsplash/unsplash01.png" alt="unsplashIMG" />
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

#unsplash {
  background-color: var(--subBg400);

  .unsplash-inner {
    height: 600px;

    .unsplash-item {
      @include flex-between;
      margin-top: 70px;
      position: absolute;
      > div {
        width: 413px;
        img {
          width: 100%;
          padding: 0 20px 0 0;
          @include border(20px);
        }
      }
    }
  }

  // unsplash-page
  .unsplash-cont {
    ul {
      column-count: 4;
      li {
        margin-bottom: 20px;
      }
    }
  }

  // unsplash-search
  .unsplash-search {
    text-align: center;
    margin-bottom: 50px;
    margin-top: 70px;
    input {
      border: 1px solid #e8ecf2;
      font-size: 16px;
      padding: 10px 20px;
      min-width: 300px;
      margin-right: 10px;
      @include border(50px);
    }
    button {
      @include button(#4857ec, #fff);
      @include border(50px);
    }
  }

  .unsplash-slider {
    a {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      img {
        width: 50%;
        height: 650px;
      }
    }
  }

  .unsplash-tag {
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
