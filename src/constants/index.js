export const headerNavList = [
  {
    title: '유튜브',
    key: 'youtube',
    url: '/artist',
    subMenu: [
      { title: '아티스트', url: '/artist' },
      { title: '뮤직비디오', url: '/mv' },
      { title: '플레이리스트', url: '/playlist' }
    ]
  },
  {
    title: '이미지',
    key: 'unsplash',
    url: '/unsplash'
  },
  {
    title: '영화 & TV',
    key: 'movie',
    url: '/movie',
    subMenu: [
      { title: '영화', url: '/movie' },
      { title: 'TV 프로그램', url: '/tv' }
    ]
  }
];

export const sliderSectionData = [
  {
    title: 'Music &&nbsp<p class="youtube">Youtube</p>',
    subTitle: '유튜브 영상으로 더욱 풍부하게 즐기는 음악',
    desc: '여러분의 마음을 사로잡을 장르별 아티스트들의 음악과<br />눈과 귀를 즐겁게 해주는 뮤직비디오를 감상할 수 있습니다.<br />새로운 공간으로 데려다 주는 플레이리스트로 음악 여행을 시작해 보세요.',
    image1: './img/icon/icon01.png',
    image2: './img/icon/icon12.svg',
    image3: './img/icon/icon11.svg',
    linkText: '유튜브',
    link: '/mv'
  },
  {
    title: 'Image &&nbsp<p class="unsplash">Unsplash</p>',
    subTitle: 'Unsplash 사이트의 이미지',
    desc: '다양한 주제를 담은 가장 깔끔한<br />고화질 이미지를 무료로 제공합니다.',
    image1: './img/icon/icon09.png',
    image2: './img/icon/icon10.png',
    image3: './img/icon/icon03.png',
    linkText: '이미지',
    link: '/unsplash'
  },
  {
    title: 'Movie &&nbsp<p class="movie">TV Program</p>',
    subTitle: '전 세계의 모든 영화와 TV 프로그램',
    desc: '인기, 상영중, 높은 평점 등의 다양한 필터링<br />전 세계의 모든 영화와 TV 프로그램을 검색하고 상세정보를 확인해보세요.',
    image1: './img/icon/icon02.png',
    image2: './img/icon/icon08.png',
    image3: './img/icon/icon04.png',
    linkText: '영화',
    link: '/movie'
  }
];

export const artistSectionData = {
  title: '장르별 아티스트 추천',
  desc: '다양한 장르의 음악을 선사해주는 <strong>아티스트</strong>를 소개합니다.<br />유튜브 영상과 함께 즐거운 음악 여행을 시작해봅시다!',
  genres: [
    {
      title: '팝 (Pop)',
      desc: '팝은 대중적인 음악 장르로, 널리 알려진 가수와 인기 있는 멜로디, 재치 있는 가사를 특징으로 합니다. 팝 음악은 다양한 스타일과 장르의 요소를 결합하여 다채로운 음악을 만들어냅니다. 주로 라디오와 상업 음악 산업에서 많이 접할 수 있으며, 청취자들에게 일상에서 즐길 수 있는 캐치한 곡들을 제공합니다.'
    },
    {
      title: '발라드 (Ballad)',
      desc: '발라드는 서정적이고 감성적인 가사를 가진 음악 장르입니다. 발라드는 일련의 이야기를 다루며, 주로 사랑, 이별, 그리움, 희망 등의 주제를 다루는 경우가 많습니다. 발라드는 주로 피아노, 현악기, 어쿠스틱 기타와 같은 악기를 사용하여 연주되며, 가수의 목소리와 가사에 집중하는 형태로 선보입니다.'
    },
    {
      title: '힙합 (Hip-hop)',
      desc: '힙합은 리듬과 랩을 중심으로 한 음악 장르로, 가사에 주목할 만한 중요성을 두고 있습니다. 힙합 음악은 강한 리듬과 특색 있는 비트, 개성 있는 랩 스타일로 이루어져 있으며, 자아 표현과 사회적인 문제에 대한 이야기를 전달하는 데 중점을 둡니다. 힙합은 다양한 서브 장르를 가지고 있으며, 다양한 아티스트들이 이를 통해 자신의 음악적 아이덴티티를 구축하고 있습니다.'
    },
    {
      title: '알앤비 (R&B)',
      desc: '알앤비는 리듬과 블루스의 영향을 받은 음악 장르로, 감성적이고 몽환적인 멜로디와 소울풀한 보컬이 특징입니다. 알앤비 음악은 사랑, 감정, 관계 등을 주로 다루며, 부드러운 리듬과 섬세한 보컬 스타일을 가지고 있습니다. 다양한 아티스트들이 알앤비 장르에서 성공을 거두었으며, 현대 팝 음악에도 큰 영향을 미치고 있습니다.'
    }
  ]
};

export const mvSectionData = [
  {
    img: 'https://i.ytimg.com/vi/dZs_cLHfnNA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_1Dfi2h36DHgLk-z0sAzlS_B0UQ',
    title: 'LE SSERAFIM (르세라핌) ‘이브, 프시케 그리고 푸른 수염의 아내’ OFFICIAL M/V',
    desc: '조회수 6050만회 · 3개월 전',
    icon: 'https://yt3.ggpht.com/ytc/APkrFKaWqx5IfcKbi5z8FgPsM_kA6NQ2zTAx8gr27yQcdQ=s48-c-k-c0x00ffffff-no-rj',
    link: 'https://youtu.be/dZs_cLHfnNA?si=4Qxg-KegeVNP6V9k'
  },
  {
    img: 'https://i.ytimg.com/vi/ArmDp-zijuc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEM94IxWekQBbD4awEKbgt3q11Sw',
    title: "NewJeans (뉴진스) 'Super Shy' Official MV",
    desc: '조회수 9039만회 · 2개월 전',
    icon: 'https://yt3.ggpht.com/ytc/APkrFKaWqx5IfcKbi5z8FgPsM_kA6NQ2zTAx8gr27yQcdQ=s48-c-k-c0x00ffffff-no-rj',
    link: 'https://youtu.be/ArmDp-zijuc?si=FgUjxgEbHsDEFSz-'
  },
  {
    img: 'https://i.ytimg.com/vi/pG6iaOMV46I/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPvSn1eXBCIzlg7ZxwPjL9dEtTag',
    title: "IVE 아이브 'Kitsch' MV",
    desc: '조회수 9476만회 · 5개월 전',
    icon: 'https://yt3.ggpht.com/ytc/AOPolaRp25cimsVuxcbbZcgjWFsTwmPP_ScPi8BDoEL5Hw=s68-c-k-c0x00ffffff-no-rj',
    link: 'https://www.youtube.com/watch?v=pG6iaOMV46I'
  },
  {
    img: 'https://i.ytimg.com/vi/AKg_9dn_VmA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwXKT9dklxn7YpY-t_aChZkwdTzA',
    title: "(여자)아이들((G)I-DLE) - '퀸카 (Queencard)' M/V (Performance Ver.)",
    desc: '조회수 4705만회 · 3개월 전',
    icon: 'https://yt3.ggpht.com/ytc/APkrFKbGrI182ZniS64zKXUGr2CeJ9tMxoa9w90e6SaZkA=s88-c-k-c0x00ffffff-no-rj',
    link: 'https://www.youtube.com/watch?v=AKg_9dn_VmA'
  },
  {
    img: 'https://i.ytimg.com/vi/Os_heh8vPfs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_qbx-P9ZvFVjYha-ZEKaWOadgHA',
    title: "aespa 에스파 'Spicy' MV",
    desc: '조회수 1.1억회 · 4개월 전',
    icon: 'https://yt3.ggpht.com/_1Z4I2qpWaCN9g3BcDd3cVA9MDHOG43lE1YNWDNkKro49haGxkjwuFK-I8faWTKM6Jle9qb4ag=s68-c-k-c0x00ffffff-no-rj',
    link: 'https://youtu.be/Os_heh8vPfs?si=LP0fwGpIvbhGbHJ_'
  },
  {
    img: 'https://i.ytimg.com/vi/0bIRwBpBcZQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1qqdIywd22GvstLhp85LKSZ7hcA',
    title: 'ITZY(있지) “CAKE” M/V @ITZY',
    desc: '조회수 4520만회 · 1개월 전',
    icon: 'https://yt3.ggpht.com/kcV7NQkBm-UvvzVTJvrg1Yf1eHSqi-DLXuZPt_ECa3cHEPefujS951Dxj6KUEQ5i9Z7_fyMUjw=s68-c-k-c0x00ffffff-no-rj',
    link: 'https://youtu.be/0bIRwBpBcZQ?si=a3gbGV9jvdKXYJ_U'
  }
];

export const playlistSectionData = [
  {
    img: 'https://i.ytimg.com/vi/JmF9pZHxFKg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSfBcP5zBdorFJtCQp5KgA7by_XQ',
    title: '[KPOP Playlist] 텐션업 시켜주는 케이팝 노동요',
    link: 'https://youtu.be/JmF9pZHxFKg?si=0ySnOu0Qz6MRwMMU'
  },
  {
    img: 'https://i.ytimg.com/vi/yOlBsus_Hno/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzq0yFa4goB5NiloEdSpax3e37UQ',
    title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 제이팝 붐은 온다! 한번쯤은 들어본 유명한 J-POP 부터 숨은 명곡까지 | 요루시카, YOASOBI, 아이묭',
    link: 'https://youtu.be/yOlBsus_Hno?si=EtnbbI9KktMXnhOR'
  },
  {
    img: 'https://i.ytimg.com/vi/NdO1_PuJbls/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqDekXQVsRZMS_Xc9RD4I3n86I6Q',
    title: '[playlist] 여행갈때 들으려고 아껴놓은 국내R&B 플레이리스트✈️',
    link: 'https://youtu.be/NdO1_PuJbls?si=IiZhu9QW6bfg9i8C'
  },
  {
    img: 'https://i.ytimg.com/vi/C2Zp813vd1Q/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA14VdkH_ubiZV2JyyvJS84rfsQ7A',
    title:
      '[Playlist] 오래도록 기억될 우리의 여름날 | 여름밤 감성 드라이빙 with 르노코리아자동차 | sentimental drive pop',
    link: 'https://youtu.be/C2Zp813vd1Q?si=RTq_pesUmFYehpDI'
  },
  {
    img: 'https://i.ytimg.com/vi/Vsw-ujh9I3c/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA75viQy-7SAZw7v85p1Rj11GGOaA',
    title: '[𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭] 겨울에는 진득한 Old Jazz🎺',
    link: 'https://youtu.be/Vsw-ujh9I3c?si=QDJx8tyumT94pPDu'
  },
  {
    img: 'https://i.ytimg.com/vi/BvCg4W5hvNk/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARhlIFUoQjAP&rs=AOn4CLBap64o59tpsiUqck0rE6W2wbfQSw',
    title: 'this playlist will make you feel like a 19th century villain || Music Of The 19th Century',
    link: 'https://youtu.be/BvCg4W5hvNk?si=bF02hmpm5ADfcqie'
  }
];

export const unsplashSectionData = [
  {
    img: 'https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
    link: 'https://unsplash.com/ko/%EC%82%AC%EC%A7%84/AZMmUy2qL6A'
  },
  {
    img: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fCVFQiVCMCVBNCVFRCU5NSU5OCVFQiU4QSU5OHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    link: 'https://unsplash.com/ko/%EC%82%AC%EC%A7%84/oMpAz-DN-9I'
  },
  {
    img: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGNpdHl8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60',
    link: 'https://unsplash.com/ko/%EC%82%AC%EC%A7%84/alY6_OpdwRQ'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1681433333347-1a8b6fed55fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fHNreXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    link: 'https://unsplash.com/ko/%EC%82%AC%EC%A7%84/HiQUGZKk-uk'
  },
  {
    img: 'https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGFpcnBsYW5lfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    link: 'https://unsplash.com/ko/%EC%82%AC%EC%A7%84/96A9UTFAMUM'
  },
  {
    img: 'https://images.unsplash.com/photo-1548192746-dd526f154ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGZsb3dlcnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    link: 'https://unsplash.com/ko/%EC%82%AC%EC%A7%84/KJGBY76mmS4'
  },
  {
    img: 'https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9yZXN0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    link: 'https://unsplash.com/ko/%EC%82%AC%EC%A7%84/-heLWtuAN3c'
  },
  {
    img: 'https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW91bnRhaW58ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60',
    link: 'https://unsplash.com/ko/%EC%82%AC%EC%A7%84/ePpaQC2c1xA'
  },
  {
    img: 'https://images.unsplash.com/photo-1550948537-130a1ce83314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGRvZ3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    link: 'https://unsplash.com/ko/%EC%82%AC%EC%A7%84/8-sgismcDAQ'
  }
];

export const movieSectionData = [
  {
    img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/jjHccoFjbqlfr4VGLVLT7yek0Xn.jpg',
    link: 'https://www.themoviedb.org/movie/496243'
  },
  {
    img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/xiz6TiSduvR1U3VLfWVlBEdT9fO.jpg',
    link: 'https://www.themoviedb.org/movie/4935'
  },
  {
    img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/zTgjeblxSLSvomt6F6UYtpiD4n7.jpg',
    link: 'https://www.themoviedb.org/movie/27205-inception'
  },
  {
    img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/f6dNinWX8rBM79JXKcShkfSh2oA.jpg',
    link: 'https://www.themoviedb.org/movie/155-the-dark-knight'
  },
  {
    img: 'https://www.themoviedb.org/t/p/w220_and_h330_face/6bdUtxydFXLtgcxHMMvlkNnRZWg.jpg',
    link: 'https://www.themoviedb.org/movie/555604'
  },
  {
    img: 'https://www.themoviedb.org/t/p/w220_and_h330_face/wrCwH6WOvXQvVuqcKNUrLDCDxdw.jpg',
    link: 'https://www.themoviedb.org/movie/475557'
  },
  {
    img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9uh4pH6lxTIWlcToZ1PPpdhYJBD.jpg',
    link: 'https://www.themoviedb.org/movie/399055-the-shape-of-water'
  },
  {
    img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/zrpapwMGMBeCGqeBn1Svoyz7SBI.jpg',
    link: 'https://www.themoviedb.org/movie/399174-isle-of-dogs'
  },
  {
    img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5TJjXwERQGX9nUu21UaK9N4wECD.jpg',
    link: 'https://www.themoviedb.org/movie/129'
  }
];

export const artistMenus = {
  menu1: 'POP',
  menu2: '발라드',
  menu3: '힙합',
  menu4: 'R&B'
};

export const artistData = [
  {
    menu: 'POP',
    title: '팝(POP)이란?',
    desc: '팝은 대중적인 음악 장르로, 널리 알려진 가수와 인기 있는 멜로디, 재치 있는 가사를 특징으로 합니다. 팝 음악은 다양한 스타일과 장르의 요소를 결합하여 다채로운 음악을 만들어냅니다. 주로 라디오와 상업 음악 산업에서 많이 접할 수 있으며, 청취자들에게 일상에서 즐길 수 있는 캐치한 곡들을 제공합니다.',
    artistLists: [
      {
        artistImg: '/src/assets/img/artist/artist01.png',
        iconImg: '/src/assets/img/artist/artist01_01.png',
        name: '트로이 시반',
        desc: 'Troye Sivan',
        link: 'https://youtu.be/IR-6KE8C4VQ?si=TUOe6H7eqwdr7JK2'
      },
      {
        artistImg: '/src/assets/img/artist/artist02.png',
        iconImg: '/src/assets/img/artist/artist02_01.png',
        name: '해리 스타일스',
        desc: 'Harry Styles',
        link: 'https://youtu.be/H5v3kku4y6Q?si=sCmm-DNYaLsEtIZC'
      },
      {
        artistImg: '/src/assets/img/artist/artist03.png',
        iconImg: '/src/assets/img/artist/artist03_01.png',
        name: '이매진 드래곤스',
        desc: 'Imagine Dragons',
        link: 'https://youtu.be/7wtfhZwyrcc?si=4Pw7h0fylGH6sLWj'
      },
      {
        artistImg: '/src/assets/img/artist/artist04.png',
        iconImg: '/src/assets/img/artist/artist04_01.png',
        name: '마룬 5',
        desc: 'Maroon 5',
        link: 'https://youtu.be/SlPhMPnQ58k?si=YPZitT1aFo5Xdkcg'
      },
      {
        artistImg: '/src/assets/img/artist/artist05.png',
        iconImg: '/src/assets/img/artist/artist05_01.png',
        name: '샘 스미스',
        desc: 'Sam Smith',
        link: 'https://youtu.be/8RvAKRoIDqU?si=C8GMuI0e-BsgFzgv'
      },
      {
        artistImg: '/src/assets/img/artist/artist06.png',
        iconImg: '/src/assets/img/artist/artist06_01.png',
        name: '빌리 아일리시',
        desc: 'Billie Eilish',
        link: 'https://youtu.be/Dm9Zf1WYQ_A?si=xTJ5xOzrb0faCzKB'
      },
      {
        artistImg: '/src/assets/img/artist/artist07.png',
        iconImg: '/src/assets/img/artist/artist07_01.png',
        name: '브루노 마스',
        desc: 'Bruno Mars',
        link: 'https://youtu.be/PMivT7MJ41M?si=PipJ193gnlsFvuAy'
      },
      {
        artistImg: '/src/assets/img/artist/artist08.png',
        iconImg: '/src/assets/img/artist/artist08_01.png',
        name: '위켄드',
        desc: 'The Weeknd',
        link: 'https://youtu.be/4NRXx6U8ABQ?si=yAXCw_vsz96lVo-M'
      }
    ]
  },
  {
    menu: '발라드',
    title: '발라드(Ballad)란?',
    desc: '발라드는 서정적이고 감성적인 가사를 가진 음악 장르입니다. 발라드는 일련의 이야기를 다루며, 주로 사랑, 이별, 그리움, 희망 등의 주제를 다루는 경우가 많습니다. 발라드는 주로 피아노, 현악기, 어쿠스틱 기타와 같은 악기를 사용하여 연주되며, 가수의 목소리와 가사에 집중하는 형태로 선보입니다.',
    artistLists: [
      {
        artistImg: '/src/assets/img/artist/artist11.png',
        iconImg: '/src/assets/img/artist/artist11_01.png',
        name: '선우정아',
        desc: 'Sun Woo Jung A',
        link: 'https://youtu.be/GOS6C2jXTa8?si=9_0UEzWjPgJeShnn'
      },
      {
        artistImg: '/src/assets/img/artist/artist12.png',
        iconImg: '/src/assets/img/artist/artist12_01.png',
        name: '정승환',
        desc: 'Jung Seung Hwan',
        link: 'https://youtu.be/C9RI-OXMyu4?si=VwLQTNW1V7p_n6bi'
      },
      {
        artistImg: '/src/assets/img/artist/artist13.png',
        iconImg: '/src/assets/img/artist/artist13_01.png',
        name: '박원',
        desc: 'Park Won',
        link: 'https://youtu.be/CbNmRJCkwQs?si=mH9t3drzHtpdNfEJ'
      },
      {
        artistImg: '/src/assets/img/artist/artist14.png',
        iconImg: '/src/assets/img/artist/artist14_01.png',
        name: '박효신',
        desc: 'Park Hyo Shin',
        link: 'https://youtu.be/Xp8Ep1W-azw?si=xO9m0AQBdjOCxYmt'
      },
      {
        artistImg: '/src/assets/img/artist/artist15.png',
        iconImg: '/src/assets/img/artist/artist15_01.png',
        name: '폴킴',
        desc: 'Paul Kim',
        link: 'https://youtu.be/__42NedgjrQ?si=23Pei02T6YhGdB2C'
      },
      {
        artistImg: '/src/assets/img/artist/artist16.png',
        iconImg: '/src/assets/img/artist/artist16_01.png',
        name: '멜로망스',
        desc: 'MeloMance',
        link: 'https://youtu.be/qYYJqWsBb1U?si=vdmJE2ZAqeHIhxIZ'
      },
      {
        artistImg: '/src/assets/img/artist/artist17.png',
        iconImg: '/src/assets/img/artist/artist17_01.png',
        name: '아이유',
        desc: 'IU',
        link: 'https://youtu.be/OcVmaIlHZ1o?si=h6NPCESGwOwjr0e5'
      },
      {
        artistImg: '/src/assets/img/artist/artist18.png',
        iconImg: '/src/assets/img/artist/artist18_01.png',
        name: '박재정',
        desc: 'Parc Jae Jung',
        link: 'https://youtu.be/yFlxYHjHYAw?si=T_Z138sTsnumqDFF'
      }
    ]
  },
  {
    menu: '힙합',
    title: '힙합(Hip-Hop)이란?',
    desc: '힙합은 리듬과 랩을 중심으로 한 음악 장르로, 가사에 주목할 만한 중요성을 두고 있습니다. 힙합 음악은 강한 리듬과 특색 있는 비트, 개성 있는 랩 스타일로 이루어져 있으며, 자아 표현과 사회적인 문제에 대한 이야기를 전달하는 데 중점을 둡니다. 힙합은 다양한 서브 장르를 가지고 있으며, 다양한 아티스트들이 이를 통해 자신의 음악적 아이덴티티를 구축하고 있습니다.',
    artistLists: [
      {
        artistImg: '/src/assets/img/artist/artist19.png',
        iconImg: '/src/assets/img/artist/artist19_01.png',
        name: '창모',
        desc: 'CHANGMO',
        link: 'https://youtu.be/lOrU0MH0bMk?si=vw9aJkN2hcppcjtj'
      },
      {
        artistImg: '/src/assets/img/artist/artist20.png',
        iconImg: '/src/assets/img/artist/artist20_01.png',
        name: '우원재',
        desc: 'Woo',
        link: 'https://youtu.be/mCIEbuv2Rg4?si=oo9STg9POdiYejds'
      },
      {
        artistImg: '/src/assets/img/artist/artist21.png',
        iconImg: '/src/assets/img/artist/artist21_01.png',
        name: '지코',
        desc: 'ZICO',
        link: 'https://youtu.be/JEXsNICXdrc?si=HlW5mottb5utGCTh'
      },
      {
        artistImg: '/src/assets/img/artist/artist22.png',
        iconImg: '/src/assets/img/artist/artist22_01.png',
        name: '로꼬',
        desc: 'Loco',
        link: 'https://youtu.be/tqJwU6Qmeu0?si=4NIWMwpS4PjQquaa'
      },
      {
        artistImg: '/src/assets/img/artist/artist23.png',
        iconImg: '/src/assets/img/artist/artist23_01.png',
        name: '씨엘(이채린)',
        desc: 'CL',
        link: 'https://youtu.be/QMwJtMJLXE0?si=cPOcojoL8b4cRjLV'
      },
      {
        artistImg: '/src/assets/img/artist/artist24.png',
        iconImg: '/src/assets/img/artist/artist24_01.png',
        name: '블루',
        desc: 'BLOO',
        link: 'https://youtu.be/P07XG1P0ums?si=Ok_sWf80_DIuy-nH'
      },
      {
        artistImg: '/src/assets/img/artist/artist25.png',
        iconImg: '/src/assets/img/artist/artist25_01.png',
        name: '제시',
        desc: 'Jessi',
        link: 'https://youtu.be/6j928wBZ_Bo?si=6RK7_LetNDXRHGx_'
      },
      {
        artistImg: '/src/assets/img/artist/artist26.png',
        iconImg: '/src/assets/img/artist/artist26_01.png',
        name: '릴체리',
        desc: 'Lil Cherry',
        link: 'https://youtu.be/kyW3gW5xUNo?si=pyeZKRbk03n1GKG8'
      }
    ]
  },
  {
    menu: 'R&B',
    title: '알앤비(R&B)란?',
    desc: '알앤비는 리듬과 블루스의 영향을 받은 음악 장르로, 감성적이고 몽환적인 멜로디와 소울풀한 보컬이 특징입니다. 알앤비 음악은 사랑, 감정, 관계 등을 주로 다루며, 부드러운 리듬과 섬세한 보컬 스타일을 가지고 있습니다. 다양한 아티스트들이 알앤비 장르에서 성공을 거두었으며, 현대 팝 음악에도 큰 영향을 미치고 있습니다.',
    artistLists: [
      {
        artistImg: '/src/assets/img/artist/artist27.png',
        iconImg: '/src/assets/img/artist/artist27_01.png',
        name: '크러쉬',
        desc: 'Crush',
        link: 'https://youtu.be/FNnYIIdTBhQ?si=XqxDDt1iqQ6JME7_'
      },
      {
        artistImg: '/src/assets/img/artist/artist28.png',
        iconImg: '/src/assets/img/artist/artist28_01.png',
        name: '죠지',
        desc: 'George',
        link: 'https://youtu.be/lAx7C_uUhFo?si=fxkr1P_YDXMMYr2J'
      },
      {
        artistImg: '/src/assets/img/artist/artist29.png',
        iconImg: '/src/assets/img/artist/artist29_01.png',
        name: '피에이치원',
        desc: 'pH-1',
        link: 'https://youtu.be/FFkLoUwQ9a4?si=1HHrSLkYm8J6PjPD'
      },
      {
        artistImg: '/src/assets/img/artist/artist30.png',
        iconImg: '/src/assets/img/artist/artist30_01.png',
        name: '비비',
        desc: 'BIBI',
        link: 'https://youtu.be/gjyEcSim4js?si=IleG8xa4ht5pwV78'
      },
      {
        artistImg: '/src/assets/img/artist/artist31.png',
        iconImg: '/src/assets/img/artist/artist31_01.png',
        name: '헤이즈',
        desc: 'Heize',
        link: 'https://youtu.be/afxLaQiLu-o?si=ixrQDPnsw46Cd568'
      },
      {
        artistImg: '/src/assets/img/artist/artist32.png',
        iconImg: '/src/assets/img/artist/artist32_01.png',
        name: '콜드',
        desc: 'Colde',
        link: 'https://youtu.be/9i0JJnLvM9E?si=LiCURRPo-mFAFjUJ'
      },
      {
        artistImg: '/src/assets/img/artist/artist33.png',
        iconImg: '/src/assets/img/artist/artist33_01.png',
        name: '백예린',
        desc: 'Yerin Baek',
        link: 'https://youtu.be/6Kb0_IkO3P4?si=2aBg0lwdTiIBZjiW'
      },
      {
        artistImg: '/src/assets/img/artist/artist34.png',
        iconImg: '/src/assets/img/artist/artist34_01.png',
        name: '후디',
        desc: 'Hoody',
        link: 'https://youtu.be/Efbv_daNkfg?si=9AZrK413oC8UzG3a'
      }
    ]
  }
];

export const mvTagData = [
  { name: '전체' },
  { name: '아이브' },
  { name: '르세라핌' },
  { name: '뉴진스' },
  { name: '아이들' },
  { name: '에스파' },
  { name: '블랙핑크' },
  { name: 'ITZY' },
  { name: 'STAYC' },
  { name: 'BTS' },
  { name: 'NCT' },
  { name: 'EXO' },
  { name: 'SEVENTEEN' }
];

export const playlistTagData = [
  { name: '전체' },
  { name: '팝송' },
  { name: 'K-POP' },
  { name: 'J-POP' },
  { name: '여행' },
  { name: '드라이브' },
  { name: '알앤비' },
  { name: '재즈' },
  { name: '클래식' },
  { name: '카페' }
];

export const unsplashTagData = [
  { name: '전체', eng: 'all' },
  { name: '코딩', eng: 'coding' },
  { name: '여행', eng: 'travel' },
  { name: '구름', eng: 'cloud' },
  { name: '강아지', eng: 'dog' },
  { name: '키보드', eng: 'keyboard' },
  { name: '인테리어', eng: 'interior' }
];

export const movieTagData = [
  { name: '인기 영화', eng: 'popular' },
  { name: '현재 상영 중', eng: 'now_playing' },
  { name: '개봉 예정', eng: 'upcoming' },
  { name: '높은 평점', eng: 'top_rated' }
];

export const tvTagData = [
  { name: '인기 TV 프로그램', eng: 'popular' },
  { name: '오늘 방영', eng: 'airing_today' },
  { name: 'TV 방영 중', eng: 'on_the_air' },
  { name: '높은 평점', eng: 'top_rated' }
];
