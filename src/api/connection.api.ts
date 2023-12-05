import axios from 'axios'
import { BaseUrl } from '../../api.config'
import { ConnectionDTO } from '../dto/connection.dto'

/* 계정 연결 신청 */
export async function RequestConnectionAPI(dto: ConnectionDTO): Promise<void> {
    try {
        await axios.post(`${BaseUrl}/user/connection/request`, dto)
    } catch (e) {
        throw axios.isAxiosError(e) ? e.response?.data : e
    }
}

/* 계정 연결 수락 */
export async function ResponseConnectionAPI(dto: ConnectionDTO): Promise<void> {
    try {
        await axios.post(`${BaseUrl}/user/connection/response`, dto)
    } catch (e) {
        throw axios.isAxiosError(e) ? e.response?.data : e
    }
}
