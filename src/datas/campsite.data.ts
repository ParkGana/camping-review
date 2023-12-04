export interface CampSiteDataType {
    id: number
    name: string
    address: string
    type: string[]
    feeling: string
    point: {
        good: string[]
        bad: string[]
    }
    accountId: number
}

export const CampSiteData: CampSiteDataType[] = [
    {
        id: 1,
        name: '호명산캠프',
        address: '경기 가평군 청평면 하천리 산4',
        type: ['오토'],
        feeling: 'good',
        point: {
            good: ['데크가 계단식으로 구분되어있어 프라이빗하다'],
            bad: ['편의점이 없다', '데크를 오가는 길이 가파르다']
        },
        accountId: 1
    },
    {
        id: 2,
        name: '호랑이캠핑 (가평점)',
        address: '경기 가평군 설악면 유명로 2204',
        type: ['글램핑'],
        feeling: 'bad',
        point: {
            good: [],
            bad: ['편의점이 없다', '시설이 더럽다', '리버뷰의 메리트가 없다']
        },
        accountId: 1
    },
    {
        id: 3,
        name: '베어스글램핑',
        address: '경기 포천시 내촌면 금강로 3009',
        type: ['글램핑'],
        feeling: 'soso',
        point: {
            good: [],
            bad: ['시설이 더럽다']
        },
        accountId: 1
    },
    {
        id: 4,
        name: '경호강그린캠프',
        address: '경남 산청군 단성면 목화로474번길 14-5',
        type: ['오토'],
        feeling: 'good',
        point: {
            good: ['편의점이 있다.'],
            bad: []
        },
        accountId: 1
    },
    {
        id: 5,
        name: '푸른고래카라반캠핑장',
        address: '경북 포항시 남구 장기면 동해안로 2784',
        type: ['카라반'],
        feeling: 'good',
        point: {
            good: ['뷰가 좋다.', '외부 공간에 방풍막이 있다.'],
            bad: []
        },
        accountId: 1
    },
    {
        id: 6,
        name: '기회송림공원야영장',
        address: '경남 밀양시 산외면 남기리 838-3',
        type: ['오토'],
        feeling: 'good',
        point: {
            good: ['편의점이 있다', '그날그날 원하는 자리에 텐트를 설치할 수 있다.', '계곡이 있다.'],
            bad: []
        },
        accountId: 1
    },
    {
        id: 7,
        name: '스톤힐',
        address: '경남 거제시 수양1길 92-5',
        type: ['글램핑', '카라반'],
        feeling: 'good',
        point: {
            good: ['외부 공간에 방풍막이 있다.'],
            bad: []
        },
        accountId: 1
    },
    {
        id: 8,
        name: '용천수카라반캠핑장',
        address: '경북 경주시 마동큰마을5길 13-14',
        type: ['카라반'],
        feeling: 'good',
        point: {
            good: ['수영장이 있다.', '외부 공간에 방풍막이 있다'],
            bad: []
        },
        accountId: 1
    },
    {
        id: 9,
        name: '더예감스테이',
        address: '경남 산청군 단성면 호암로 702-22',
        type: ['글램핑', '오토'],
        feeling: 'good',
        point: {
            good: ['밤에 별이 잘 보인다.'],
            bad: []
        },
        accountId: 1
    }
]
