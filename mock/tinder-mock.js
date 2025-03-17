export const user = {
    uid: 'coder',
    job: 'programmer',
    displayName: "The Coder's Studios",
    age: '80',
    photoURL: 'https://img.khan.co.kr/news/2023/01/02/news-p.v1.20230102.1f95577a65fc42a79ae7f990b39e7c21_P1.png'
};

export const etc = {
    loginBg: 'https://cdn.discordapp.com/attachments/438965098787241996/1174254198498525194/2023-11-15_4.46.46.png?ex=6566ec71&is=65547771&hm=e2f57e69acefd7cc52e99b6fe2e42353063e5f47c3c86550b1b3d0fe584f3ae6&',
    logo: 'https://cdn.discordapp.com/attachments/1096067258121453612/1173838902256218112/image.png?ex=656569ab&is=6552f4ab&hm=d18bd666de18e2d3b63d77318fd35b9522cf526fc8cbafdb600475393461e11a&',
    matchedLogo:
    'https://cdn.discordapp.com/attachments/1096067258121453612/1173838902256218112/image.png?ex=656569ab&is=6552f4ab&hm=d18bd666de18e2d3b63d77318fd35b9522cf526fc8cbafdb600475393461e11a&',
};

export const users = [
    {
        uid: '123',
        displayName: 'Zendaya',
        job: 'actress',
        photoURL: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/E172/production/_126241775_getty_cats.png',
        age: 26,
    },
    {
        uid: '4',
        displayName: 'Ann',
        job: 'actress',
        photoURL: 'https://product.cdn.cevaws.com/var/storage/images/_aliases/reference/media/feliway-2017/images/kor-kr/1_gnetb-7sfmbx49emluey4a/6341829-1-kor-KR/1_gNETb-7SfMBX49EMLUeY4A.jpg',
        age: 22,
    },
    {
        uid: '5',
        displayName: 'Lea',
        job: 'actress',
        photoURL: 'https://src.hidoc.co.kr/image/lib/2022/5/12/1652337370806_0.jpg',
        age: 24,
    },
    {
        uid: '6',
        displayName: 'Natalia',
        job: 'actress',
        photoURL: 'https://img.freepik.com/free-photo/cute-kitten-lies-on-bed-enjoying-rest-generated-by-ai_188544-14315.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696377600&semt=ais',
        age: 24,
    },
    {
        uid: '7',
        displayName: 'Sophie',
        job: 'actress',
        photoURL: 'https://cdn.imweb.me/upload/S20210807d1f68b7a970c2/e7b94b0c106a8.jpg',
        age: 26,
    },
]

export const assets = {
    logo: 'https://cdn.discordapp.com/attachments/1096067258121453612/1173823305086685204/image.png?ex=65655b24&is=6552e624&hm=c0457a646267667e077a099b5c84aed97a5b371591eddade0e1838d313236687&',
    modalLogo:
    'https://cdn.discordapp.com/attachments/438965098787241996/1174251885667029012/image.png?ex=6566ea4a&is=6554754a&hm=e2fc3d3b37020f2f61341acb123586d113caa8e0dea247625573d905a740c0b8&'
};

const messages = [
    { uid: '123', displayName: 'Zendaya', text: '안녕하세요!', id: 1},
    { uid: 'coder', displayName: 'the coders studios', text: '안녕하세요 ㅎㅎ', id: 2},

    { uid: '123', displayName: 'Zendaya', text: '반가워요 :)', id: 3},
    { uid: 'coder', displayName: 'the coders studios', text: '저도 반가워요', id: 4},

    { uid: '123', displayName: 'Zendaya', text: '저는 젠다이아에요', id: 5},
    { uid: '123', displayName: 'Zendaya', text: '스파이더맨에 나왔어요', id: 6},
].reverse();

const chat = users.map((user) =>({
    ...user,
    message: 'Hello',
}));
export const dept = [
    {
        "idx": 0,
        "title": "교양분과",
        "image": "https://cdn.imweb.me/thumbnail/20220203/05e030a819d0f.jpg",
        "desc": "석우회, 스타일러스, 애견클럽, 자놀자, 자유의지, 천마기우회",
        "navi": 'Home',
    },
    {
        "idx": 1,
        "title": "봉사분과",
        "image": "https://cdn.imweb.me/thumbnail/20220203/eaa3c914cd389.jpg",
        "desc": "G.F.C, K.U.S.A, 그루터기, 스카우트, 아베스타, 아트리, 영바시, 영지회, 위더스, 이끌림, 천마라이프라인, 천마회, 한울회, 해오름",
        "navi": 'Home',
    },
    {
        "idx": 2,
        "title": "어학분과",
        "image": "https://cdn.imweb.me/thumbnail/20220203/19baad00696a9.jpg",
        "desc": "DALA, IN SPANISH, KABS, KO-JACOS, TIME",
        "navi": 'Home',
    },
    {
        "idx": 3,
        "title": "예술분과",
        "image": "https://cdn.imweb.me/thumbnail/20220203/61707ebfb19f2.jpg",
        "desc": "(c)ARTOON, BLUEWAVE, COSMOS, ECHOES, HO-SA, MAX&ZENITH, THE WE, Y.E.P, Y.U.A.O, 사우회, 신명마당, 영남대 합창단, 영화공간, 예사가락, 육현, 천마극단, 천마응원단, 힙합컴퍼니",
        "navi": 'Home',
    },
    {
        "idx": 4,
        "title": "응용학술분과",
        "image": "https://cdn.imweb.me/thumbnail/20220203/607fb5d1033df.jpg",
        "desc": "그라니치, 대맥학회, 사고뭉치, 천마DM",
        "navi": 'Home',
    },
    {
        "idx": 5,
        "title": "종교분과",
        "image": "https://cdn.imweb.me/thumbnail/20220203/1a788d67de80d.jpg",
        "desc": "I.V.F, S.F.C., 돌샘, 아뉴스",
        "navi": 'Home',
    },
    {
        "idx": 6,
        "title": "체육분과",
        "image": "https://cdn.imweb.me/thumbnail/20220203/44bfa447e2ece.jpg",
        "desc": "E.V.E, HI-CLEAR, S.F.A, YUBC, YUTA, YUTA, 검도부, 다이나마이트, 문무반, 산악회, 아카데믹스, 영남대농구반, 유도사랑, 탁우회, 탐험대, 페가수스, 한마음",
        "navi": 'Home',
    },
    {
        "idx": 7,
        "title": "학술분과",
        "image": "https://cdn.imweb.me/thumbnail/20220203/3c232065af4f7.jpg",
        "desc": "4-H, R2. SELV. 청탑, 필드워크, 해시태그",
        "navi": 'Home',
    }
]

export const cate_data = [
    {key:'1', value:'교양분과'},
    {key:'2', value:'봉사분과'},
    {key:'3', value:'어학분과'},
    {key:'4', value:'예술분과'},
    {key:'5', value:'응용학술분과'},
    {key:'6', value:'종교분과'},
    {key:'7', value:'체육분과'},
    {key:'8', value:'학술분과'},
]

export const mock = {user, etc, assets, chat, users, messages, dept, cate_data};