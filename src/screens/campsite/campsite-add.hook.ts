import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export const useCampsiteAdd = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    /* 이전 페이지로 이동 */
    const moveToBack = () => {
        navigation.replace('BottomTab', { screen: 'CampsiteList' })
    }

    return {
        events: {
            moveToBack
        }
    }
}
