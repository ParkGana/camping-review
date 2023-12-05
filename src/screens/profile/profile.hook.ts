import { useEffect, useState, useContext } from 'react'
import { Alert } from 'react-native'
import { UserModel } from '../../model/user.model'
import { UserContext } from '../../../App'
import { GetProfileAPI } from '../../api/account.api'

export const useProfile = () => {
    const { userEmail } = useContext(UserContext)

    const [profile, setProfile] = useState<UserModel>()

    useEffect(() => {
        GetProfileAPI(userEmail)
            .then((user) => {
                setProfile(user)
            })
            .catch((error) => {
                Alert.alert('계정 정보 조회 도중에 문제가 발생했습니다.', error.errorMessage, [{ text: '확인' }], {
                    cancelable: false
                })
            })
    }, [])

    return {
        datas: {
            profile
        }
    }
}
