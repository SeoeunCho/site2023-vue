<template>
  <section id="mv" class="container page">
    <div class="mv-inner">
      <div class="cont-title">
        <p>Music Video</p>
        <h2>뮤직비디오</h2>
      </div>

      <div class="mv-btn sch-area center">
        <MvTag @search="searchMvList" />
        <MvSearch @search="searchMvList" />
      </div>

      <MvCont :mv-list="filteredMvList" />
    </div>
  </section>
</template>

<script setup>
import MvSearch from '@/components/mv/MvSearch.vue';
import MvTag from '@/components/mv/MvTag.vue';
import MvCont from '@/components/mv/MvCont.vue';
import { ref, computed } from 'vue';

const mvData = ref([]);
// mvData.value = [
//   {
//     kind: 'youtube#searchResult',
//     etag: 'sfYzR0uePQvnqzPPBmZKisVaRsM',
//     id: {
//       kind: 'youtube#video',
//       videoId: 'QU9c0053UAU'
//     },
//     snippet: {
//       publishedAt: '2023-07-14T04:00:00Z',
//       channelId: 'UC3IZKseVpdzPSBaWxBxundA',
//       title: '정국 (Jung Kook) &#39;Seven (feat. Latto)&#39; Official MV',
//       description:
//         "정국 (Jung Kook) 'Seven (feat. Latto)' Official MV 'Seven (feat. Latto)' Release Listen to 'Seven': https://ingrv.es/Seven Credits: ...",
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/QU9c0053UAU/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/QU9c0053UAU/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/QU9c0053UAU/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'HYBE LABELS',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-07-14T04:00:00Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: 'kIzejQSguMQdF9_OLxgFLwNyxeM',
//     id: {
//       kind: 'youtube#video',
//       videoId: 'cSqOY5nktfg'
//     },
//     snippet: {
//       publishedAt: '2023-08-25T04:43:41Z',
//       channelId: 'UCOmHUn--16B90oW2L6FRR3A',
//       title: 'BLACKPINK THE GAME - ‘THE GIRLS’ MV',
//       description:
//         "BLACKPINK THE GAME - 'THE GIRLS' MV If you with it then I'm with it get it started Got no time for no itty-bitty parties See the ...",
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/cSqOY5nktfg/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/cSqOY5nktfg/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/cSqOY5nktfg/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'BLACKPINK',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-08-25T04:43:41Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: 'prbHctKQUwtAMcJx4vo8QcpEF4I',
//     id: {
//       kind: 'youtube#video',
//       videoId: 'Crq_fRV0O0E'
//     },
//     snippet: {
//       publishedAt: '2023-09-06T09:00:07Z',
//       channelId: 'UCiM8arBZ-GyuBFG3wy6fEgw',
//       title: '화사 (HWASA) - &#39;I Love My Body&#39; MV',
//       description:
//         "HWASA Digital Single 'I Love My Body' OUT NOW Melon : https://kko.to/jecRkHFYDe Genie : http://genie.co.kr/EWXM58 ...",
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/Crq_fRV0O0E/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/Crq_fRV0O0E/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/Crq_fRV0O0E/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'HWASA',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-09-06T09:00:07Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: 'xkEdXh1pxaIvAk13RHYba2n9D3g',
//     id: {
//       kind: 'youtube#video',
//       videoId: '0bIRwBpBcZQ'
//     },
//     snippet: {
//       publishedAt: '2023-07-31T08:58:09Z',
//       channelId: 'UCaO6TYtlC8U5ttz62hTrZgg',
//       title: 'ITZY “CAKE” M/V @ITZY',
//       description:
//         'ITZY “CAKE” M/V TITLE http://kko.to/eoMjL0dgJy ALBUM http://ITZY.lnk.to/KILLMYDOUBT [ITZY Official] ...',
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/0bIRwBpBcZQ/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/0bIRwBpBcZQ/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/0bIRwBpBcZQ/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'JYP Entertainment',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-07-31T08:58:09Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: 'UkKEuMuw9xAY83qRYk9tBoBJMP0',
//     id: {
//       kind: 'youtube#video',
//       videoId: '6ZUIwj3FgUY'
//     },
//     snippet: {
//       publishedAt: '2023-04-10T09:00:10Z',
//       channelId: 'UCYDmx2Sfpnaxg488yBpZIGg',
//       title: 'IVE 아이브 &#39;I AM&#39; MV',
//       description:
//         'STARSHIP SQUARE (Domestic) : https://bit.ly/3HtQ7GF STARSHIP SQUARE (Global) : https://bit.ly/3JWPxm0 IVE US EXCLUSIVE ...',
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/6ZUIwj3FgUY/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/6ZUIwj3FgUY/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/6ZUIwj3FgUY/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'starshipTV',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-04-10T09:00:10Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: 'ahuwydFNRvKpytfqh-N3yIMJ5Ps',
//     id: {
//       kind: 'youtube#video',
//       videoId: 'eI0iTRS0Ha8'
//     },
//     snippet: {
//       publishedAt: '2023-09-08T04:00:01Z',
//       channelId: 'UC3IZKseVpdzPSBaWxBxundA',
//       title: 'V &#39;Slow Dancing&#39; Official MV',
//       description:
//         "V 'Slow Dancing' Official MV 'Layover' Release https://ingrv.es/layover Credits: Producer: MIN HEE JIN Music Video Director: ...",
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/eI0iTRS0Ha8/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/eI0iTRS0Ha8/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/eI0iTRS0Ha8/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'HYBE LABELS',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-09-08T04:00:01Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: 'zU4b2U2kZeyPhK0REQp7JZKko7Y',
//     id: {
//       kind: 'youtube#video',
//       videoId: 'ArmDp-zijuc'
//     },
//     snippet: {
//       publishedAt: '2023-07-07T03:58:10Z',
//       channelId: 'UC3IZKseVpdzPSBaWxBxundA',
//       title: 'NewJeans (뉴진스) &#39;Super Shy&#39; Official MV',
//       description:
//         "NewJeans (뉴진스) 'Super Shy' Official MV Producer: MIN HEE JIN Music Video Director: Heewon Shin 0:00 Super Shy 1:44 Join ...",
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/ArmDp-zijuc/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/ArmDp-zijuc/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/ArmDp-zijuc/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'HYBE LABELS',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-07-07T03:58:10Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: 'ADDVDHZiKg6l1yueCt9esuSlPKE',
//     id: {
//       kind: 'youtube#video',
//       videoId: '_GgIt2EFHV8'
//     },
//     snippet: {
//       publishedAt: '2023-08-07T09:00:12Z',
//       channelId: 'UCg8ZzloDPTrOiGztK0C9txQ',
//       title: 'JEON SOMI (전소미) - ‘Fast Forward’ M/V',
//       description:
//         "JEON SOMI (전소미) - 'Fast Forward' M/V I'm your future lover 타락한 밤 너의 ruler 영화 속 달콤한 promise 믿지 않아 let's be ...",
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/_GgIt2EFHV8/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/_GgIt2EFHV8/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/_GgIt2EFHV8/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'THEBLACKLABEL',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-08-07T09:00:12Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: '9244lxe5QqLI-dFBPyVWEex809s',
//     id: {
//       kind: 'youtube#video',
//       videoId: '-GQg25oP0S4'
//     },
//     snippet: {
//       publishedAt: '2023-04-24T08:58:11Z',
//       channelId: 'UC3IZKseVpdzPSBaWxBxundA',
//       title: 'SEVENTEEN (세븐틴) &#39;손오공&#39; Official MV',
//       description:
//         "SEVENTEEN (세븐틴) '손오공' Official MV #SEVENTEEN #세븐틴 #FML #손오공 #Super Credits: Production｜OUI PRODUCTION ...",
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/-GQg25oP0S4/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/-GQg25oP0S4/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/-GQg25oP0S4/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'HYBE LABELS',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-04-24T08:58:11Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: 'Xy5vDfsonzJpaVAFcnGdjK6PDIQ',
//     id: {
//       kind: 'youtube#video',
//       videoId: 'YudHcBIxlYw'
//     },
//     snippet: {
//       publishedAt: '2023-03-31T04:00:14Z',
//       channelId: 'UCOmHUn--16B90oW2L6FRR3A',
//       title: 'JISOO - ‘꽃(FLOWER)’ M/V',
//       description:
//         "JISOO - '꽃(FLOWER)' ABC 도레미만큼 착했던 나 그 눈빛이 싹 변했지 어쩌면 이 또한 나니까 난 파란 나비처럼 날아가 잡지 못한 건 ...",
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/YudHcBIxlYw/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/YudHcBIxlYw/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/YudHcBIxlYw/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'BLACKPINK',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-03-31T04:00:14Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: '67j8JchhhmaYWrtAJVfiz0cOdnw',
//     id: {
//       kind: 'youtube#video',
//       videoId: 'Os_heh8vPfs'
//     },
//     snippet: {
//       publishedAt: '2023-05-08T08:59:11Z',
//       channelId: 'UCEf_Bc-KVd7onSeifS3py9g',
//       title: 'aespa 에스파 &#39;Spicy&#39; MV',
//       description: "aespa's 3rd Mini Album 'MY WORLD' is out! Listen and download on your favorite platforms: ...",
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/Os_heh8vPfs/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/Os_heh8vPfs/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/Os_heh8vPfs/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'SMTOWN',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-05-08T08:59:11Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: 'O1xrFV1xzytisr2jAYq-_lb98QQ',
//     id: {
//       kind: 'youtube#video',
//       videoId: 'gfk3QLU1x0E'
//     },
//     snippet: {
//       publishedAt: '2023-08-18T03:59:10Z',
//       channelId: 'UCEf_Bc-KVd7onSeifS3py9g',
//       title: 'aespa 에스파 &#39;Better Things&#39; MV',
//       description:
//         "aespa's new single 'Better Things' is out! Listen and download on your favorite platform: https://aespa.lnk.to/BetterThings aespa ...",
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/gfk3QLU1x0E/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/gfk3QLU1x0E/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/gfk3QLU1x0E/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'SMTOWN',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-08-18T03:59:10Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: 'x7KQ_BzAL91dSYomy7Uh9zcfNoE',
//     id: {
//       kind: 'youtube#video',
//       videoId: 'JsOOis4bBFg'
//     },
//     snippet: {
//       publishedAt: '2023-06-02T03:59:56Z',
//       channelId: 'UCaO6TYtlC8U5ttz62hTrZgg',
//       title: 'Stray Kids &quot;특(S-Class)&quot; M/V',
//       description:
//         "Stray Kids(스트레이 키즈) '특(S-Class)' M/V Listen to ＜ (5-STAR)＞ now! https://Stray-Kids.lnk.to/5-STAR Stray Kids ...",
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/JsOOis4bBFg/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/JsOOis4bBFg/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/JsOOis4bBFg/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'JYP Entertainment',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-06-02T03:59:56Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: '0W3TnmZCRR7IKKc2hISJQWs4a2s',
//     id: {
//       kind: 'youtube#video',
//       videoId: 'iUw3LPM7OBU'
//     },
//     snippet: {
//       publishedAt: '2023-09-04T09:00:24Z',
//       channelId: 'UCEf_Bc-KVd7onSeifS3py9g',
//       title: 'RIIZE 라이즈 &#39;Get A Guitar&#39; MV',
//       description:
//         "RIIZE's 1st single 'Get A Guitar' is out! Listen and download on your favorite platform: https://RIIZE.lnk.to/GetAGuitar ...",
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/iUw3LPM7OBU/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/iUw3LPM7OBU/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/iUw3LPM7OBU/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'SMTOWN',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-09-04T09:00:24Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: 'Ln4Fpfx4rz5HWo3mIKOxN7bvnOU',
//     id: {
//       kind: 'youtube#video',
//       videoId: 'dJdqn5v4Dkw'
//     },
//     snippet: {
//       publishedAt: '2023-07-25T15:00:02Z',
//       channelId: 'UC3IZKseVpdzPSBaWxBxundA',
//       title: 'NewJeans (뉴진스) &#39;ASAP&#39; Official MV',
//       description:
//         "NewJeans (뉴진스) 'ASAP' Official MV Producer: MIN HEE JIN Music Video Director: Jakyoung Kim © 2023 ADOR. All Rights ...",
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/dJdqn5v4Dkw/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/dJdqn5v4Dkw/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/dJdqn5v4Dkw/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'HYBE LABELS',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-07-25T15:00:02Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: 'tGEO1A5pyCqTUZbdPRq55wMoRW8',
//     id: {
//       kind: 'youtube#video',
//       videoId: 'gxeyC1cPJsA'
//     },
//     snippet: {
//       publishedAt: '2023-07-28T09:00:09Z',
//       channelId: 'UCx9hXYOCvUYwrprEqe4ZQHA',
//       title: 'TREASURE - &#39;BONA BONA&#39; M/V',
//       description:
//         "TREASURE – BONA BONA 낮에 타는 태양 새벽의 별 같아 내 세상 속엔 네가 매일 떠오르니까 Baby don't cry 꽉 잡아 여길 떠나 너와 ...",
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/gxeyC1cPJsA/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/gxeyC1cPJsA/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/gxeyC1cPJsA/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'TREASURE (트레저)',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-07-28T09:00:09Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: '5IImNacCwqoW2IBh-bvHDq1syBE',
//     id: {
//       kind: 'youtube#video',
//       videoId: 'wXFLzODIdUI'
//     },
//     snippet: {
//       publishedAt: '2023-05-22T08:56:10Z',
//       channelId: 'UC3IZKseVpdzPSBaWxBxundA',
//       title: 'ENHYPEN (엔하이픈) &#39;Bite Me&#39; Official MV',
//       description:
//         "ENHYPEN (엔하이픈) 'Bite Me' Official MV Credits: Production : LOVEANDMONEY Director : Mingyu Song 1st AD : Moonju Jeong ...",
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/wXFLzODIdUI/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/wXFLzODIdUI/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/wXFLzODIdUI/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'HYBE LABELS',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-05-22T08:56:10Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: 'imNxkQMbTqv0TRizZodD33k1KmI',
//     id: {
//       kind: 'youtube#video',
//       videoId: 'XDnGdcgd3Pc'
//     },
//     snippet: {
//       publishedAt: '2023-07-17T09:00:19Z',
//       channelId: 'UCEf_Bc-KVd7onSeifS3py9g',
//       title: 'NCT DREAM 엔시티 드림 &#39;ISTJ&#39; MV',
//       description:
//         "NCT DREAM's 3rd album 'ISTJ' is out! Listen and download on your favorite platform: https://NCTDREAM.lnk.to/ISTJ 'Broken ...",
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/XDnGdcgd3Pc/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/XDnGdcgd3Pc/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/XDnGdcgd3Pc/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'SMTOWN',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-07-17T09:00:19Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: 'xIhdcBg983rjVkIzGEa79aFQOpc',
//     id: {
//       kind: 'youtube#video',
//       videoId: 'gvXsmI3Gdq8'
//     },
//     snippet: {
//       publishedAt: '2023-08-28T09:00:19Z',
//       channelId: 'UCEf_Bc-KVd7onSeifS3py9g',
//       title: 'NCT U 엔시티 유 &#39;Baggy Jeans&#39; MV',
//       description:
//         "NCT's 4th album 'Golden Age' is out now! Listen and download on your favorite platform: https://lnk.to/NCTGoldenAge 'Golden ...",
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/gvXsmI3Gdq8/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/gvXsmI3Gdq8/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/gvXsmI3Gdq8/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'SMTOWN',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-08-28T09:00:19Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: 'RfX72AAxSY1YYcKM0TJPMJN37bw',
//     id: {
//       kind: 'youtube#video',
//       videoId: 'Mra0MJnMHh0'
//     },
//     snippet: {
//       publishedAt: '2023-08-16T11:00:15Z',
//       channelId: 'UCiJcM95iuhvQoGkmz30eV1w',
//       title: 'ลั่นทม - COCKTAIL |Official MV| เพลงประกอบซีรีส์ หอมกลิ่นความรัก',
//       description: "'ลั่นทม' เพลงประกอบซีรีส์หอมกลิ่นความรัก (I Feel You Linger In The Air) จากวง COCKTAIL ...",
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/Mra0MJnMHh0/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/Mra0MJnMHh0/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/Mra0MJnMHh0/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'Gene Lab',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-08-16T11:00:15Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: 'iid6oHjkZJsb32NdakEsuY44XgI',
//     id: {
//       kind: 'youtube#video',
//       videoId: 'UBURTj20HXI'
//     },
//     snippet: {
//       publishedAt: '2023-05-01T08:58:10Z',
//       channelId: 'UC3IZKseVpdzPSBaWxBxundA',
//       title: 'LE SSERAFIM (르세라핌) &#39;UNFORGIVEN (feat. Nile Rodgers)&#39; OFFICIAL M/V',
//       description:
//         'Creative Director : NU KIM Visual Creative Operation Managing : Yujoo Kim Style Directing : Yoon Cho, Yuli Song Brand ...',
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/UBURTj20HXI/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/UBURTj20HXI/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/UBURTj20HXI/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'HYBE LABELS',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-05-01T08:58:10Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: 'JUgNTbAMuS4RhWxcZLqklesyJ-I',
//     id: {
//       kind: 'youtube#video',
//       videoId: 'Z6PQtPL0I6A'
//     },
//     snippet: {
//       publishedAt: '2023-08-31T11:00:20Z',
//       channelId: 'UCiJcM95iuhvQoGkmz30eV1w',
//       title: 'ทนได้ทุกที - TaitosmitH (ซนซน 40 ปี GMM GRAMMY) [Official MV]',
//       description:
//         "'ทนได้ทุกที' เรื่องราวความรักของคนช้ำ ๆ ที่ผ่านความเจ็บปวดมาได้ตั้งมากมาย และหากจะเจ็บปวดกับความรักอีกสักครั้งมันก็คงไม่ตายหรอก ...",
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/Z6PQtPL0I6A/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/Z6PQtPL0I6A/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/Z6PQtPL0I6A/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'Gene Lab',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-08-31T11:00:20Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: 'gRdrrHyRFyGnUQUpVb-KVS-1uSE',
//     id: {
//       kind: 'youtube#video',
//       videoId: 'jNYVbmVIP4A'
//     },
//     snippet: {
//       publishedAt: '2023-09-18T08:59:09Z',
//       channelId: 'UCEf_Bc-KVd7onSeifS3py9g',
//       title: 'D.O. 디오 &#39;Somebody&#39; MV',
//       description:
//         "D.O.'s 2nd Mini Album '기대' is out! Listen and download on your favorite platform: https://DO.lnk.to/the2ndmini '별 떨어진다 (I ...",
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/jNYVbmVIP4A/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/jNYVbmVIP4A/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/jNYVbmVIP4A/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'SMTOWN',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-09-18T08:59:09Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: '7d_MfRcfSl93Q1ZxETNfQ6ac5PM',
//     id: {
//       kind: 'youtube#video',
//       videoId: 'IR8gXjm507Y'
//     },
//     snippet: {
//       publishedAt: '2023-06-28T09:00:17Z',
//       channelId: 'UCx9hXYOCvUYwrprEqe4ZQHA',
//       title: 'TREASURE - &#39;MOVE (T5)&#39; M/V',
//       description:
//         "TREASURE (T5) - MOVE You made me feel like everything's alright yeah 거지 같은 세상 속 유일한 Butterfly When I walk in the ...",
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/IR8gXjm507Y/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/IR8gXjm507Y/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/IR8gXjm507Y/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'TREASURE (트레저)',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-06-28T09:00:17Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: 'rezCSjyazMD5yEVrMSCFeSR1ft0',
//     id: {
//       kind: 'youtube#video',
//       videoId: '3-ptVHZZdBg'
//     },
//     snippet: {
//       publishedAt: '2023-08-16T09:00:12Z',
//       channelId: 'UCod5V2dpnpJLklGvVOv5FcQ',
//       title: 'STAYC(스테이씨) &#39;Bubble&#39; MV',
//       description:
//         "STAYC(스테이씨) The 3rd Mini Album [TEENFRESH] 'Bubble' MV ➫ https://stayc.bio.to/TEENFRESH #STAYC #스테이씨 ...",
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/3-ptVHZZdBg/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/3-ptVHZZdBg/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/3-ptVHZZdBg/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'STAYC',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-08-16T09:00:12Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: 'M9Lt2OEBMAhbGe9aLdqaUaH6GBU',
//     id: {
//       kind: 'youtube#video',
//       videoId: 'aO5DPf0vebc'
//     },
//     snippet: {
//       publishedAt: '2023-06-05T08:58:10Z',
//       channelId: 'UCEf_Bc-KVd7onSeifS3py9g',
//       title: 'TAEYONG 태용 &#39;샤랄라 (SHALALA)&#39; MV',
//       description:
//         "TAEYONG's 1st mini album 'SHALALA' is out! Listen and download on your favorite platform: https://TAEYONG.lnk.to/SHALALA ...",
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/aO5DPf0vebc/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/aO5DPf0vebc/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/aO5DPf0vebc/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'SMTOWN',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-06-05T08:58:10Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: 'bLi8YitCoCVtFJSJkv4GSM2FTTc',
//     id: {
//       kind: 'youtube#video',
//       videoId: '2R_S5TgDWMY'
//     },
//     snippet: {
//       publishedAt: '2023-06-19T08:59:08Z',
//       channelId: 'UCEf_Bc-KVd7onSeifS3py9g',
//       title: 'NCT DREAM 엔시티 드림 &#39;Broken Melodies&#39; MV',
//       description:
//         "NCT DREAM's 3rd album 'ISTJ' is out! Listen and download on your favorite platform: https://NCTDREAM.lnk.to/ISTJ 'ISTJ' MV ...",
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/2R_S5TgDWMY/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/2R_S5TgDWMY/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/2R_S5TgDWMY/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'SMTOWN',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-06-19T08:59:08Z'
//     }
//   },
//   {
//     kind: 'youtube#searchResult',
//     etag: '7CpbepH6p0Rtdkb4cKpaOholl_s',
//     id: {
//       kind: 'youtube#video',
//       videoId: 'e42AhJzYpVE'
//     },
//     snippet: {
//       publishedAt: '2023-09-15T04:00:05Z',
//       channelId: 'UC3IZKseVpdzPSBaWxBxundA',
//       title: 'TXT (투모로우바이투게더), Anitta ‘Back for More’ Official MV',
//       description:
//         "TXT (투모로우바이투게더), Anitta 'Back for More' Official MV Credits: Directed & Produced by MOTHER Director Of Photography: ...",
//       thumbnails: {
//         default: {
//           url: 'https://i.ytimg.com/vi/e42AhJzYpVE/default.jpg',
//           width: 120,
//           height: 90
//         },
//         medium: {
//           url: 'https://i.ytimg.com/vi/e42AhJzYpVE/mqdefault.jpg',
//           width: 320,
//           height: 180
//         },
//         high: {
//           url: 'https://i.ytimg.com/vi/e42AhJzYpVE/hqdefault.jpg',
//           width: 480,
//           height: 360
//         }
//       },
//       channelTitle: 'HYBE LABELS',
//       liveBroadcastContent: 'none',
//       publishTime: '2023-09-15T04:00:05Z'
//     }
//   }
// ];

const getMvList = () => {
  fetch(
    'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=mv&type=video&key=AIzaSyAjUxqgxAQqdMg0RAnLOlPYV4AM1DdroXM'
    // 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=mv&type=video&key=AIzaSyCuRG9CovWM7isuZ0RmIH9xoIee0WBetiA'
  )
    .then((response) => response.json())
    .then((result) => {
      mvData.value = result.items;
    })
    .catch((error) => console.log('error', error));
};
getMvList();

const searchMvList = async (query) => {
  await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}&type=video&key=AIzaSyAjUxqgxAQqdMg0RAnLOlPYV4AM1DdroXM`
    // `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}&type=video&key=AIzaSyCuRG9CovWM7isuZ0RmIH9xoIee0WBetiA`
  )
    .then((response) => response.json())
    .then((result) => {
      mvData.value = result.items;
    })
    .catch((error) => console.log('error', error));
};

const filteredMvList = computed(() => {
  return mvData.value.filter((mv) => {
    const title = mv.snippet.title.toLowerCase();
    return (
      title.includes('mv') || title.includes('m/v') || title.includes('music video') || title.includes('official video')
    );
  });
});
</script>

<style scoped lang="scss"></style>
