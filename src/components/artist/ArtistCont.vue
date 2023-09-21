<template>
  <section id="artist" class="section center">
    <h3>{{ activeButton }}</h3>

    <div class="artist-inner container">
      <div class="artist-btn">
        <button :class="{ active: activeButton === artistMenu.menu1 }" @click="handleButtonClick(artistMenu.menu1)">
          {{ artistMenu.menu1 }}
        </button>
        <button :class="{ active: activeButton === artistMenu.menu2 }" @click="handleButtonClick(artistMenu.menu2)">
          {{ artistMenu.menu2 }}
        </button>
        <button :class="{ active: activeButton === artistMenu.menu3 }" @click="handleButtonClick(artistMenu.menu3)">
          {{ artistMenu.menu3 }}
        </button>
        <button :class="{ active: activeButton === artistMenu.menu4 }" @click="handleButtonClick(artistMenu.menu4)">
          {{ artistMenu.menu4 }}
        </button>
      </div>
      <div class="artist-cont">
        <!-- <h3>{{ activeartistText.menu }}</h3> -->
        <!-- <p>{{ activeartistText.artistText[0].desc }}</p> -->
        <ul>
          <li v-for="(item, index) in activeartistText.artistText" :key="index">
            <!-- <a :href="item.link" target="_blank">{{ item.desc }}</a> -->
          </li>
        </ul>
      </div>
      <div class="artist-cont2">
        <div v-for="(text, index) in activeartistText.artistText" :key="index" class="artist">
          <a :href="text.link" target="_blank">
            <figure class="artist-header">
              <img :src="text.artistImg" :alt="text.title" />
            </figure>
            <div class="artist-body">
              <span>
                <img :src="text.iconImg" :alt="text.title" />
              </span>
              <div>
                <h4>{{ text.title }}</h4>
                <p>{{ text.desc }}</p>
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
      activeButton: '팝 (Pop)',
      artistMenu: {
        menu1: '팝 (Pop)',
        menu2: '발라드 (ballad)',
        menu3: '힙합 (Hip-hop)',
        menu4: '알앤비 (R&B)'
      },
      artistDescription: {
        menu1:
          '팝은 대중적인 음악 장르로, 널리 알려진 가수와 인기 있는 멜로디, 재치 있는 가사를 특징으로 합니다. 팝 음악은 다양한 스타일과 장르의 요소를 결합하여 다채로운 음악을 만들어냅니다. 주로 라디오와 상업 음악 산업에서 많이 접할 수 있으며, 청취자들에게 일상에서 즐길 수 있는 캐치한 곡들을 제공합니다.',
        menu2:
          '발라드는 서정적이고 감성적인 가사를 가진 음악 장르입니다. 발라드는 일련의 이야기를 다루며, 주로 사랑, 이별, 그리움, 희망 등의 주제를 다루는 경우가 많습니다. 발라드는 주로 피아노, 현악기, 어쿠스틱 기타와 같은 악기를 사용하여 연주되며, 가수의 목소리와 가사에 집중하는 형태로 선보입니다.',
        menu3:
          '힙합은 리듬과 랩을 중심으로 한 음악 장르로, 가사에 주목할 만한 중요성을 두고 있습니다. 힙합 음악은 강한 리듬과 특색 있는 비트, 개성 있는 랩 스타일로 이루어져 있으며, 자아 표현과 사회적인 문제에 대한 이야기를 전달하는 데 중점을 둡니다. 힙합은 다양한 서브 장르를 가지고 있으며, 다양한 아티스트들이 이를 통해 자신의 음악적 아이덴티티를 구축하고 있습니다.',
        menu4:
          '알앤비는 리듬과 블루스의 영향을 받은 음악 장르로, 감성적이고 몽환적인 멜로디와 소울풀한 보컬이 특징입니다. 알앤비 음악은 사랑, 감정, 관계 등을 주로 다루며, 부드러운 리듬과 섬세한 보컬 스타일을 가지고 있습니다. 다양한 아티스트들이 알앤비 장르에서 성공을 거두었으며, 현대 팝 음악에도 큰 영향을 미치고 있습니다.'
      },
      artistData: [
        {
          menu: '팝 (Pop)',
          artistText: [
            {
              artistImg: '@/assets/images/artist/artist01.png',
              iconImg: '@/assets/images/artist/artist01_01.png',
              title: '에드시런',
              desc: 'Ed Sheeran',
              link: 'https://www.youtube.com/watch?v=nSDgHBxUbVQ'
            },
            {
              artistImg: '@/assets/images/artist/artist02.png',
              iconImg: '@/assets/images/artist/artist02_01.png',
              title: '해리 스타일스',
              desc: 'Harry Styles',
              link: 'https://www.youtube.com/watch?v=H5v3kku4y6Q'
            },
            {
              artistImg: '@/assets/images/artist/artist03.png',
              iconImg: '@/assets/images/artist/artist03_01.png',
              title: '찰리 푸스',
              desc: 'Charlie Puth',
              link: 'https://www.youtube.com/watch?v=Nq3x1AkwgpY'
            },
            {
              artistImg: '@/assets/images/artist/artist04.png',
              iconImg: '@/assets/images/artist/artist04_01.png',
              title: '저스틴 비버',
              desc: 'Justin Bieber',
              link: 'https://www.youtube.com/watch?v=tQ0yjYUFKAE'
            },
            {
              artistImg: '@/assets/images/artist/artist05.png',
              iconImg: '@/assets/images/artist/artist05_01.png',
              title: '아델',
              desc: 'Adele',
              link: 'https://www.youtube.com/watch?v=U3ASj1L6_sY'
            },
            {
              artistImg: '@/assets/images/artist/artist06.png',
              iconImg: '@/assets/images/artist/artist06_01.png',
              title: '테일러 스위프트',
              desc: 'Taylor Swift',
              link: 'https://www.youtube.com/watch?v=e-ORhEE9VVg'
            },
            {
              artistImg: '@/assets/images/artist/artist07.png',
              iconImg: '@/assets/images/artist/artist07_01.png',
              title: '리한나',
              desc: 'Rihanna',
              link: 'https://www.youtube.com/watch?v=lWA2pjMjpBs'
            },
            {
              artistImg: '@/assets/images/artist/artist08.png',
              iconImg: '@/assets/images/artist/artist08_01.png',
              title: '아리아나 그란데',
              desc: 'Ariana Grande',
              link: 'https://www.youtube.com/watch?v=gl1aHhXnN1k'
            }
          ]
        },
        {
          menu: '발라드 (ballad)',
          artistText: [
            {
              artistImg: '@/assets/images/artist/artist11.png',
              iconImg: '@/assets/images/artist/artist11_01.png',
              title: '선우정아',
              desc: 'Sunwoo Junga',
              link: 'https://www.youtube.com/watch?v=cl9_Nl2bbgA'
            },
            {
              artistImg: '@/assets/images/artist/artist12.png',
              iconImg: '@/assets/images/artist/artist12_01.png',
              title: '정승환',
              desc: 'Jung Seung Hwan',
              link: 'https://www.youtube.com/watch?v=h7OSsqMj8Nk'
            },
            {
              artistImg: '@/assets/images/artist/artist13.png',
              iconImg: '@/assets/images/artist/artist13_01.png',
              title: '최유리',
              desc: 'Choi Yu Ree',
              link: 'https://www.youtube.com/watch?v=Z2tv0GyQdL8'
            },
            {
              artistImg: '@/assets/images/artist/artist14.png',
              iconImg: '@/assets/images/artist/artist14_01.png',
              title: '폴킴',
              desc: 'Paul Kim',
              link: 'https://www.youtube.com/watch?v=YBzJ0jmHv-4'
            },
            {
              artistImg: '@/assets/images/artist/artist15.png',
              iconImg: '@/assets/images/artist/artist15_01.png',
              title: '권진아',
              desc: 'Kwon Jinah',
              link: 'https://www.youtube.com/watch?v=sOgsp64fw0M'
            },
            {
              artistImg: '@/assets/images/artist/artist16.png',
              iconImg: '@/assets/images/artist/artist16_01.png',
              title: '박원',
              desc: 'PARK WON',
              link: 'https://www.youtube.com/watch?v=1hZa60t8wSE'
            },
            {
              artistImg: '@/assets/images/artist/artist17.png',
              iconImg: '@/assets/images/artist/artist17_01.png',
              title: '태연',
              desc: 'Taeyeon',
              link: 'https://www.youtube.com/watch?v=qDW-sVVtTGk'
            },
            {
              artistImg: '@/assets/images/artist/artist18.png',
              iconImg: '@/assets/images/artist/artist18_01.png',
              title: '성시경',
              desc: 'Sung Si Kyung',
              link: 'https://www.youtube.com/watch?v=nD1p_H3qo_A'
            }
          ]
        },
        {
          menu: '힙합 (Hip-hop)',
          artistText: [
            {
              artistImg: '@/assets/images/artist/artist21.png',
              iconImg: '@/assets/images/artist/artist21_01.png',
              title: '애쉬 아일랜드',
              desc: 'ASH ISLAND',
              link: 'https://www.youtube.com/watch?v=qk9bccYpgEA&list=RDqk9bccYpgEA&start_radio=1'
            },
            {
              artistImg: '@/assets/images/artist/artist22.png',
              iconImg: '@/assets/images/artist/artist22_01.png',
              title: '비오',
              desc: 'BE-O',
              link: 'https://www.youtube.com/watch?v=tsaOFqIP9dM'
            },
            {
              artistImg: '@/assets/images/artist/artist23.png',
              iconImg: '@/assets/images/artist/artist23_01.png',
              title: '그리즐리',
              desc: 'Grizzly',
              link: 'https://www.youtube.com/watch?v=QtqZvXvinKo'
            },
            {
              artistImg: '@/assets/images/artist/artist24.png',
              iconImg: '@/assets/images/artist/artist24_01.png',
              title: '서동현',
              desc: 'BIG Naughty',
              link: 'https://www.youtube.com/watch?v=SDsCCr21zXg'
            },
            {
              artistImg: '@/assets/images/artist/artist25.png',
              iconImg: '@/assets/images/artist/artist25_01.png',
              title: '이영지',
              desc: 'Lee Young Ji',
              link: 'https://www.youtube.com/watch?v=g3rD2V4meGs'
            },
            {
              artistImg: '@/assets/images/artist/artist26.png',
              iconImg: '@/assets/images/artist/artist26_01.png',
              title: '윤미래',
              desc: 'Yoonmirae',
              link: 'https://www.youtube.com/watch?v=1DK-MPh7vKk'
            },
            {
              artistImg: '@/assets/images/artist/artist27.png',
              iconImg: '@/assets/images/artist/artist27_01.png',
              title: '치타',
              desc: 'CHEETAH',
              link: 'https://www.youtube.com/watch?v=d-iIt-00Gk'
            },
            {
              artistImg: '@/assets/images/artist/artist28.png',
              iconImg: '@/assets/images/artist/artist28_01.png',
              title: '김승민',
              desc: 'Kim Seungmin',
              link: 'https://www.youtube.com/watch?v=XKpDYzVzqgE'
            }
          ]
        },
        {
          menu: '알앤비 (R&B)',
          artistText: [
            {
              artistImg: '@/assets/images/artist/artist31.png',
              iconImg: '@/assets/images/artist/artist31_01.png',
              title: '크러쉬',
              desc: 'Crush',
              link: 'https://www.youtube.com/watch?v=vAa8R_ze6ZI'
            },
            {
              artistImg: '@/assets/images/artist/artist32.png',
              iconImg: '@/assets/images/artist/artist32_01.png',
              title: '죠지',
              desc: 'George',
              link: 'https://www.youtube.com/watch?v=rtlq3yiFw6Y'
            },
            {
              artistImg: '@/assets/images/artist/artist33.png',
              iconImg: '@/assets/images/artist/artist33_01.png',
              title: 'pH-1 ',
              desc: 'pH-1 ',
              link: 'https://www.youtube.com/watch?v=FFkLoUwQ9a4'
            },
            {
              artistImg: '@/assets/images/artist/artist34.png',
              iconImg: '@/assets/images/artist/artist34_01.png',
              title: '비비',
              desc: 'BIBI',
              link: 'https://www.youtube.com/watch?v=gjyEcSim4js'
            },
            {
              artistImg: '@/assets/images/artist/artist35.png',
              iconImg: '@/assets/images/artist/artist35_01.png',
              title: '수우',
              desc: 'soowoo',
              link: 'https://www.youtube.com/watch?v=vjv4JhQNwo8'
            },
            {
              artistImg: '@/assets/images/artist/artist36.png',
              iconImg: '@/assets/images/artist/artist36_01.png',
              title: '콜드',
              desc: 'Colde',
              link: 'https://www.youtube.com/watch?v=mjVq7Ha_WtQ'
            },
            {
              artistImg: '@/assets/images/artist/artist37.png',
              iconImg: '@/assets/images/artist/artist37_01.png',
              title: '네이비쿼카',
              desc: 'NavyQuokka',
              link: 'https://www.youtube.com/watch?v=OhrXHSASzV8'
            },
            {
              artistImg: '@/assets/images/artist/artist38.png',
              iconImg: '@/assets/images/artist/artist38_01.png',
              title: '서리',
              desc: 'Seori',
              link: 'https://www.youtube.com/watch?v=e2Tdtw9RRyw'
            }
          ]
        }
      ]
    };
  },
  computed: {
    activeartistText() {
      return this.artistData.find((item) => item.menu === this.activeButton);
    }
  },
  methods: {
    handleButtonClick(button) {
      this.activeButton = button;
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/setting/mixin';
#artist {
  margin: 0px 0 50px 0;

  h3 {
    font-size: 50px;
    text-align: center;
  }

  .artist-inner {
    display: flex;
    justify-content: space-between;
  }
  .artist-title {
    width: 33%;

    span {
      background-color: #ff3344;
      font-size: 14px;
      padding: 4px 30px 2px;
      color: #fff;
      border-radius: 40px;
      text-transform: uppercase;
      margin-bottom: 10px;
      display: inline-block;
    }
    h3 {
      font-size: 50px;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 30px;
    }
    p {
      font-size: 18px;
      line-height: 1.5;
      font-weight: 500;
    }
  }
  .artist-desc {
    width: 66%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    > div {
      width: 48%;
      margin-bottom: 40px;

      h4 {
        font-size: 24px;
        margin-bottom: 15px;
      }
      &:nth-child(3) {
        margin-bottom: 0;
      }
      &:nth-child(4) {
        margin-bottom: 0;
      }
    }
  }

  .artist-wrap h3 {
    font-size: 50px;
    text-align: center;
  }
  .artist-inner {
    font-family: 'SCoreDream';
    .artist-btn {
      text-align: center;
      margin: 50px 0 80px;
      button {
        width: 10%;
        background-color: #ffffff;
        border: 1px solid #7a33ff;
        border-radius: 50px;
        margin: 10px;
        padding: 10px 5px;
        color: #7a33ff;
        transition: all 0.3s;
        &:hover {
          background-color: #7a33ff;
          border: 1px solid #ffffff;
          color: #fff;
          cursor: pointer;
        }
      }
      button.active {
        background-color: #7a33ff;
        border: 1px solid #fff;
        color: #fff;
      }
    }
    .artist-cont {
      @include flex-between;
      flex-wrap: wrap;
      .artist {
        width: 32%;
        .artist-header {
          margin-bottom: 10px;
          img {
            width: 100%;
          }
        }
        .artist-body {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: 'SCoreDream';
          span {
            border-radius: 50px;
            img {
              width: 50px;
              height: 50px;
            }
          }
          > div {
            margin-top: 10px;
            width: 80%;
            text-align: left;
            font-family: 'SCoreDream';
            h4 {
              margin-bottom: 5px;
              font-size: 24px;
              font-family: 'SCoreDream';
            }
            p {
              color: #a0a0a0;
              font-family: 'SCoreDream';
            }
          }
        }
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          margin-bottom: 50px;
        }
        &:hover > a > .artist-body > div > p {
          text-decoration: underline;
          text-underline-position: under;
        }
      }
    }
    .artist-cont2 {
      @include flex-between;
      font-family: 'SCoreDream';
      flex-wrap: wrap;
      .artist {
        width: 23%;
        .artist-header {
          margin-bottom: 10px;
          img {
            width: 300px;
            height: 210px;
          }
        }
        .artist-body {
          display: flex;
          align-items: center;
          justify-content: space-between;
          span {
            border-radius: 50px;
            img {
              width: 50px;
              height: 50px;
            }
          }
          > div {
            margin-top: 10px;
            width: 80%;
            text-align: left;
            h4 {
              margin-bottom: 5px;
              font-size: 24px;
            }
            p {
              color: #a0a0a0;
            }
          }
        }
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4) {
          margin-bottom: 50px;
        }
        &:hover > a > .artist-body > div > p {
          text-decoration: underline;
          text-underline-position: under;
        }
      }
    }
  }
}
</style>
