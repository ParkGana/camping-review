import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export const useConnection = (connectionState: string) => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    useEffect(() => {
        if (connectionState === 'C') {
            navigation.replace('BottomTab', { screen: 'CampsiteList' })
        }
    }, [])
}
