import { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { CampsiteModel } from '../../model/campsite.model'
import { GetCampsiteDetailAPI } from '../../api/campsite.api'

export const useCampsiteDetail = (campsiteId: string) => {
    const [campsite, setCampsite] = useState<CampsiteModel>()

    useEffect(() => {
        GetCampsiteDetailAPI(campsiteId)
            .then((campsite) => {
                setCampsite(campsite)
            })
            .catch((error) => {
                Alert.alert('캠프장 정보 조회 도중에 문제가 발생했습니다.', error.errorMessage, [{ text: '확인' }], {
                    cancelable: false
                })
            })
    }, [])

    return {
        datas: {
            campsite
        }
    }
}
