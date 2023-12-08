import axios from 'axios'
import { CharacteristicModel } from '../model/characteristic.model'
import { BaseUrl } from '../../api.config'

/* 특징 목록 조회 */
export async function GetCharacteristicListAPI(email: string): Promise<CharacteristicModel[]> {
    try {
        const characteristicList = await axios.get(`${BaseUrl}/characteristic/list/${email}`)

        return characteristicList.data.map((v: CharacteristicModel) => new CharacteristicModel(v))
    } catch (e) {
        throw axios.isAxiosError(e) ? e.response?.data : e
    }
}
