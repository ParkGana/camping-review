export interface CharacteristicDataType {
    id: number
    type: string
    name: string
}

export const CharacteristicData: CharacteristicDataType[] = [
    {
        id: 1,
        type: 'G',
        name: '뷰가 좋다.'
    },
    {
        id: 2,
        type: 'G',
        name: '시설이 깔끔하다.'
    },
    {
        id: 3,
        type: 'G',
        name: '방풍막이 있다.'
    },
    {
        id: 4,
        type: 'B',
        name: '시설이 더럽다.'
    },
    {
        id: 5,
        type: 'G',
        name: '공간이 프라이빗하다.'
    },
    {
        id: 6,
        type: 'G',
        name: '사장님이 친절하다.'
    },
    {
        id: 7,
        type: 'B',
        name: '사장님이 불친절하다.'
    }
]
