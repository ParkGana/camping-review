import axios from 'axios'
import { CharacteristicModel } from '../model/characteristic.model'
import { BaseUrl } from '../../api.config'
import { CharacteristicAddDTO } from '../dto/characteristic-add.dto'

/* 특징 목록 조회 */
export async function GetCharacteristicListAPI(email: string): Promise<CharacteristicModel[]> {
    try {
        const characteristicList = await axios.get(`${BaseUrl}/characteristic/list/${email}`)

        return characteristicList.data.map((v: CharacteristicModel) => new CharacteristicModel(v))
    } catch (e) {
        throw axios.isAxiosError(e) ? e.response?.data : e
    }
}

/* 특징 추가 */
export async function CreateCharacteristicAPI(dto: CharacteristicAddDTO): Promise<void> {
    try {
        await axios.post(`${BaseUrl}/characteristic/create`, dto)
    } catch (e) {
        throw axios.isAxiosError(e) ? e.response?.data : e
    }
}

/* 특징 삭제 */
export async function DeleteCharacteristicAPI(characteristicId: string): Promise<void> {
    try {
        await axios.delete(`${BaseUrl}/characteristic/delete/${characteristicId}`)
    } catch (e) {
        throw axios.isAxiosError(e) ? e.response?.data : e
    }
}
