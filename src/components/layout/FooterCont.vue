<template>
  <footer id="footer">
    <div class="footer-top">
      <div class="footer-info">
        <h5>SeoeunCho</h5>
        <p>
          contact me
          <a href="mailto:jowestsilver@gmail.com" class="strong"> jowestsilver@gmail.com</a>
        </p>
        <div class="info">
          <ul>
            <li>
              <p><span>이름</span>조서은 (Seoeun Cho)</p>
            </li>
            <li>
              <p><span>생년월일</span>1995.12.14</p>
            </li>
            <li>
              <p><span>전화번호</span>010-8577-4978</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-menu">
        <div>
          <h4>유튜브</h4>
          <ul>
            <li>
              <router-link to="/artist">아티스트 페이지</router-link>
            </li>
            <li>
              <router-link to="/mv">뮤직비디오 페이지</router-link>
            </li>
            <li>
              <router-link to="/playlist">플레이리스트 페이지</router-link>
            </li>
          </ul>
        </div>
        <div>
          <h4>이미지</h4>
          <ul>
            <li>
              <router-link to="/unsplash">Unsplash 페이지</router-link>
            </li>
          </ul>
        </div>
        <div>
          <h4>영화 & TV</h4>
          <ul>
            <li>
              <router-link to="/movie">영화 페이지</router-link>
            </li>
            <li>
              <router-link to="/tv">TV 프로그램 페이지</router-link>
            </li>
          </ul>
        </div>
        <div class="sns">
          <ul>
            <li>
              <a href="https://github.com/SeoeunCho">
                <span class="txt-hidden">깃허브</span>
              </a>
            </li>
            <li>
              <a href="https://enchanting-drip-66d.notion.site/661e000688d04abf94686ae02d8983ff?pvs=4/">
                <span class="txt-hidden">노션 이력서</span>
              </a>
            </li>
            <li>
              <a href="https://open.kakao.com/o/sTuSneIf">
                <span class="txt-hidden">카카오톡</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-copyright">Copyright @ 2023 <span>조서은</span> All rights reserved.</div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import '/public/assets/scss/setting/mixin';
#footer {
  color: #eee;

  .footer-top {
    height: 100%;
    background-color: var(--footerBg100);
    padding: 20px 0px;

    .footer-info {
      @include flex-between;
      width: 100%;
      max-width: 1320px;
      height: 100%;
      margin: 0 auto;
      padding: 0 20px;
      box-sizing: border-box;

      h5 {
        font-size: 26px;
        font-weight: 700;
        margin-right: 30px;
      }
      p {
        // width: calc(100% - 700px);
        font-size: 16px;

        a {
          margin-left: 5px;
          color: #eee;
        }
      }
      .info {
        // width: 540px;
        ul {
          li {
            margin-bottom: 10px;
            letter-spacing: 0;

            p {
              span {
                width: 80px;
                height: 30px;
                line-height: 30px;
                font-size: 14px;
                color: #fff;
                @include border(15px);
                display: inline-block;
                text-align: center;
                margin-right: 10px;
              }
            }

            &:nth-child(1) span {
              background-color: #4857ec;
            }
            &:nth-child(2) span {
              background-color: #23bdb7;
            }
            &:nth-child(3) span {
              background-color: #af0043;
            }
          }
        }
      }
    }
  }
  .footer-bottom {
    padding: 30px 0;
    font-size: 14px;
    background-color: var(--footerBg200);

    .footer-menu {
      position: relative;
      display: flex;
      width: 100%;
      max-width: 1320px;
      height: 100%;
      margin: 0 auto;
      padding: 0 20px;
      box-sizing: border-box;

      > div {
        width: 100%;

        h4 {
          font-size: 18px;
          margin-bottom: 20px;
        }
        a {
          color: #eee;
          font-size: 14px;
          line-height: 1.8;
          font-weight: 300;
        }
      }
      .sns {
        position: absolute;
        bottom: -20px;
        right: 0;
        width: auto;
        height: 35px;

        ul {
          display: flex;

          li {
            margin-right: 6px;

            &:last-child {
              margin-right: 0px;
            }

            a {
              display: block;
              width: 35px;
              height: 35px;
              @include border(50px);
              background-color: #fff;
              background-size: 20px auto;
              background-repeat: no-repeat;
              background-position: 50% 50%;
              background-image: url(/assets/img/icon/github.png);
            }

            &:nth-child(2) a {
              background-image: url(/assets/img/icon/notion.png);
            }
            &:nth-child(3) a {
              background-image: url(/assets/img/icon/kakao.png);
            }
          }
        }
      }
    }
    .footer-copyright {
      width: 100%;
      padding: 30px;
      text-align: center;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      margin-top: 50px;
      color: var(--black300);
      font-size: 14px;
      font-weight: 300;

      span {
        color: var(--white);
      }
    }
  }
}

/* =======================================================
    반응형
========================================================*/
@media (max-width: 1024px) {
  #footer {
    .footer-top {
      .footer-info {
        display: grid !important;
        max-width: 100% !important;

        p {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
