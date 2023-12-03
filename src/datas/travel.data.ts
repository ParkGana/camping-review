import { ImageSourcePropType } from 'react-native'

export interface TravelDataType {
    id: number
    title: string
    content: string
    images: ImageSourcePropType[]
    startDate: string
    endDate: string
    campsiteId: number
}

export const TravelData: TravelDataType[] = [
    {
        id: 1,
        title: '호명산캠프 첫번째 방문',
        content: '호명산캠프에서 오토캠핑을 즐겼다.',
        images: [],
        startDate: '2023-01-07',
        endDate: '2023-01-08',
        campsiteId: 1
    },
    {
        id: 2,
        title: '호랑이캠핑 첫번째 방문',
        content: '호랑이캠핑에서 글램핑을 즐겼다.',
        images: [],
        startDate: '2023-02-04',
        endDate: '2023-02-05',
        campsiteId: 2
    },
    {
        id: 3,
        title: '베어스글램핑 첫번째 방문',
        content: '베어스글램핑에서 글램핑을 즐겼다.',
        images: [],
        startDate: '2023-03-04',
        endDate: '2023-03-05',
        campsiteId: 3
    },
    {
        id: 4,
        title: '경호강그린캠프 첫번째 방문',
        content: '경호강그림캠프에서 오토캠핑을 즐겼다.',
        images: [],
        startDate: '2023-04-01',
        endDate: '2023-04-02',
        campsiteId: 4
    },
    {
        id: 5,
        title: '푸른고래카라반캠핑장 첫번째 방문',
        content: '푸른고래카라반캠핑장에서 카라반을 즐겼다.',
        images: [],
        startDate: '2023-05-06',
        endDate: '2023-05-07',
        campsiteId: 5
    },
    {
        id: 6,
        title: '기회송림공원야영장 첫번째 방문',
        content: '기회송림공원야영장에서 오토캠핑을 즐겼다.',
        images: [],
        startDate: '2023-06-03',
        endDate: '2023-06-04',
        campsiteId: 6
    },
    {
        id: 7,
        title: '스톤힐 첫번째 방문',
        content: '스톤힐에서 카라반을 즐겼다.',
        images: [],
        startDate: '2023-07-01',
        endDate: '2023-07-02',
        campsiteId: 7
    },
    {
        id: 8,
        title: '용천수카라반캠핑장 첫번째 방문',
        content: '용천수카라반캠핑장에서 카라반을 즐겼다.',
        images: [],
        startDate: '2023-08-05',
        endDate: '2023-08-06',
        campsiteId: 8
    },
    {
        id: 9,
        title: '더예감스테이 첫번째 방문',
        content: '더예감스테이에서 오토캠핑을 즐겼다.',
        images: [],
        startDate: '2023-09-02',
        endDate: '2023-09-03',
        campsiteId: 9
    },
    {
        id: 10,
        title: '기회송림공원야영장 두번째 방문',
        content: '기회송림공원야영장에서 오토캠핑을 즐겼다.',
        images: [],
        startDate: '2023-10-07',
        endDate: '2023-10-08',
        campsiteId: 6
    },
    {
        id: 11,
        title: '기회송림공원야영장 세번째 방문',
        content: '기회송림공원야영장에서 오토캠핑을 즐겼다.',
        images: [],
        startDate: '2023-11-04',
        endDate: '2023-11-05',
        campsiteId: 6
    },
    {
        id: 12,
        title: '호명산캠프 두번째 방문',
        content: '호명산캠프에서 오토캠핑을 즐겼다.',
        images: [],
        startDate: '2023-12-02',
        endDate: '2023-12-03',
        campsiteId: 1
    }
]
