import axios from 'axios'
import { BaseUrl } from '../../api.config'
import { CampsiteModel } from '../model/campsite.model'
import { CampsiteAddDTO } from '../dto/campsite-add.dto'
import { CampsiteEditDTO } from '../dto/campsite-edit.dto'

/* 캠핑장 목록 조회 */
export async function GetCampsiteListAPI(email: string): Promise<CampsiteModel[]> {
    try {
        const campsiteList = await axios.get(`${BaseUrl}/campsite/list/${email}`)

        return campsiteList.data.map((v: CampsiteModel) => new CampsiteModel(v))
    } catch (e) {
        throw axios.isAxiosError(e) ? e.response?.data : e
    }
}

/* 캠핑장 정보 조회 */
export async function GetCampsiteDetailAPI(id: string): Promise<CampsiteModel> {
    try {
        const campsite = await axios.get(`${BaseUrl}/campsite/${id}`)

        return new CampsiteModel(campsite.data)
    } catch (e) {
        throw axios.isAxiosError(e) ? e.response?.data : e
    }
}

/* 캠핑장 추가 */
export async function CreateCampsiteAPI(dto: CampsiteAddDTO): Promise<void> {
    try {
        await axios.post(`${BaseUrl}/campsite/create`, dto)
    } catch (e) {
        throw axios.isAxiosError(e) ? e.response?.data : e
    }
}

/* 캠핑장 수정 */
export async function UpdateCampsiteAPI(dto: CampsiteEditDTO): Promise<void> {
    try {
        await axios.post(`${BaseUrl}/campsite/update`, dto)
    } catch (e) {
        throw axios.isAxiosError(e) ? e.response?.data : e
    }
}
