<template>
  <section id="youtube" class="section">
    <div class="youtube__inner container">
      <div class="youtube__text">
        <h3>당신의 음악 취향을 충족시킬 유튜버</h3>
        <p>음악의 다양한 매력을 느끼게 해주는<br />음악을 사랑하는 이들을 위한 열정이 가득한 유튜버들을 만나보세요.</p>
        <router-link to="/youtube" class="button-red">자세히 보기</router-link>
      </div>
      <div class="youtube__item">
        <div>
          <router-link to="https://www.youtube.com/watch?v=ZS6HeUBNWVw"
            ><img src="@/assets/images/youtube/youtube01.svg" alt="제이플라" /></router-link
          ><span>J Fla - To Me</span>
        </div>
        <div>
          <router-link to="https://www.youtube.com/watch?v=CgkDpBHmlxk"
            ><img src="@/assets/images/youtube/youtube02.svg" alt="예빛" /></router-link
          ><span>Yesterday - The Beatles</span>
        </div>
        <div>
          <router-link to="https://www.youtube.com/watch?v=JNk8AfSvdM4"
            ><img src="@/assets/images/youtube/youtube03.svg" alt="예빈나다" /></router-link
          ><span>봄의 고백 - Yeahshine</span>
        </div>
        <div>
          <router-link to="https://www.youtube.com/watch?v=hCsxrEYR7yI"
            ><img src="@/assets/images/youtube/youtube04.svg" alt="정성하" /></router-link
          ><span>Bohemian Rhapsody - Sungha Jung</span>
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
#youtube {
  background-color: var(--subBg300);
  .youtube__wrap {
    overflow: hidden;
  }
  .youtube__inner {
    height: 600px;

    .youtube__text {
      h3 {
        font-size: 50px;
        margin-bottom: 40px;
      }
      p {
        font-size: 22px;
        font-weight: 300;
        margin-bottom: 30px;
      }
      a {
        @include border(50px);
        // margin-bottom: 100px;
      }
    }
    .youtube__item {
      @include flex-between;
      margin-top: 70px;
      width: auto;
      position: absolute;

      > div {
        width: 400px;
        margin-right: 20px;

        > span {
          font-size: 20px;
        }

        img {
          width: 100%;
          margin-bottom: 20px;
          @include border(10px);
        }
      }
    }
  }

  // youtube__page
  .youtube__page {
  }
  .youtube__slider {
    display: none;
  }
  .youtube__search {
    text-align: center;
    margin-bottom: 50px;

    input {
      border: 1px solid #e8ecf2;
      font-size: 16px;
      padding: 10px 20px;
      @include border(50px);
      min-width: 300px;
      margin-right: 10px;
    }
    button {
      @include button(#f7100d, #fff);
      @include border(50px);
    }
  }
  .youtube__tag {
    ul {
      display: flex;
      justify-content: center;
      margin-top: 100px;
      margin-bottom: 50px;

      li {
        a {
          border: 1px solid #f7100d;
          padding: 10px 20px;
          margin: 0 10px;
          color: #f7100d;
        }
      }
    }
  }
  .youtube__cont {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 100px;

      li {
        width: 24%;
        margin-bottom: 4%;

        img {
          width: 100%;
          border-radius: 20px;
        }

        span {
          display: block;
          margin: 4px 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
  .youtube__tag {
    ul {
      display: flex;
      justify-content: center;
      margin-top: 100px;
      margin-bottom: 50px;

      li {
        a {
          border: 1px solid #f7100d;
          padding: 10px 20px;
          margin: 0 10px;
          color: #f7100d;
        }
      }
    }
  }
}
</style>
