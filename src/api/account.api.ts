import axios from 'axios'
import { BaseUrl } from '../../api.config'
import { SignUpDTO } from '../dto/signup.dto'
import { UserModel } from '../model/user.model'
import { SignInDTO } from '../dto/signin.dto'

/* 회원가입 */
export async function SignUpAPI(dto: SignUpDTO): Promise<UserModel> {
    try {
        const user = await axios.post(`${BaseUrl}/user/signup`, dto)

        return new UserModel(user.data)
    } catch (e) {
        throw axios.isAxiosError(e) ? e.response?.data : e
    }
}

/* 로그인 */
export async function SignInAPI(dto: SignInDTO): Promise<UserModel> {
    try {
        const user = await axios.post(`${BaseUrl}/user/signin`, dto)

        return new UserModel(user.data)
    } catch (e) {
        throw axios.isAxiosError(e) ? e.response?.data : e
    }
}

/* 계정 정보 조회 */
export async function GetProfileAPI(email: string): Promise<UserModel> {
    try {
        const user = await axios.get(`${BaseUrl}/user/profile/${email}`)

        return new UserModel(user.data)
    } catch (e) {
        throw axios.isAxiosError(e) ? e.response?.data : e
    }
}
