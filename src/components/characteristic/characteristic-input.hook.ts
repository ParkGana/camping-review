import { useState, useContext } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { UserContext } from '../../../App'
import { CreateCharacteristicAPI } from '../../api/characteristic.api'

export const useCharacteristicInput = (type: string) => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    const { userEmail } = useContext(UserContext)

    const [contents, setContents] = useState<string>('')

    /* 특징 추가 */
    const handleAdd = () => {
        if (!contents) {
            Alert.alert('특징 추가 도중에 문제가 발생했습니다.', '내용을 입력해 주세요.', [{ text: '확인' }], {
                cancelable: false
            })
        } else {
            CreateCharacteristicAPI({ type, contents, userEmail })
                .then(() => {
                    Alert.alert(
                        '특징 등록을 완료하였습니다.',
                        '특징 페이지를 다시 로드합니다.',
                        [
                            {
                                text: '확인',
                                onPress: () => {
                                    navigation.replace('Characteristic')
                                }
                            }
                        ],
                        {
                            cancelable: false
                        }
                    )
                })
                .catch((error) => {
                    Alert.alert('특징 등록 도중에 문제가 발생했습니다.', error.errorMessage, [{ text: '확인' }], {
                        cancelable: false
                    })
                })
        }
    }

    return {
        datas: {
            contents
        },
        events: {
            setContents,
            handleAdd
        }
    }
}
