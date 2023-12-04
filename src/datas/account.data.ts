import { ImageSourcePropType } from 'react-native'

export interface AccountDataType {
    id: number
    name: string
    email: string
    profileImage: ImageSourcePropType
    connectAccountId: number | undefined
}

export const AccountData: AccountDataType[] = [
    {
        id: 1,
        name: '박가나',
        email: 'gnchoco97@gmail.com',
        profileImage: require('../../assets/images/profile.png'),
        connectAccountId: 2
    },
    {
        id: 2,
        name: '강석준',
        email: 'cjdthf6091@daum.net',
        profileImage: require('../../assets/images/profile.png'),
        connectAccountId: 1
    },
    {
        id: 3,
        name: '정현수',
        email: 'hyeonsu@gmail.com',
        profileImage: require('../../assets/images/profile.png'),
        connectAccountId: undefined
    }
]
