import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { DeleteCharacteristicAPI } from '../../api/characteristic.api'

export const useCharacteristicItem = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    /* 특징 삭제 */
    const handleDelete = (id: string) => {
        DeleteCharacteristicAPI(id)
            .then(() => {
                Alert.alert(
                    '특징 삭제를 완료하였습니다.',
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
                Alert.alert('특징 삭제 도중에 문제가 발생했습니다.', error.errorMessage, [{ text: '확인' }], {
                    cancelable: false
                })
            })
    }

    return {
        events: {
            handleDelete
        }
    }
}
