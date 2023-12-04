import axios from 'axios'
import { BaseUrl } from '../../api.config'
import { SignUpDTO } from '../dto/signup.dto'
import { UserModel } from '../model/user.model'

/* 회원가입 */
export async function SignUpAPI(dto: SignUpDTO): Promise<UserModel> {
    try {
        const user = await axios.post(`${BaseUrl}/user/signup`, dto)

        return new UserModel(user.data)
    } catch (e) {
        console.log(e)
        throw axios.isAxiosError(e) ? e.response?.data : e
    }
}
