import axios from 'axios'
import { BaseUrl } from '../../api.config'
import { CampsiteModel } from '../model/campsite.model'

/* 캠핑장 목록 조회 */
export async function GetCampsiteListAPI(email: string): Promise<CampsiteModel[]> {
    try {
        const campsiteList = await axios.get(`${BaseUrl}/campsite/list/${email}`)

        return campsiteList.data.map((v: CampsiteModel) => new CampsiteModel(v))
    } catch (e) {
        throw axios.isAxiosError(e) ? e.response?.data : e
    }
}
