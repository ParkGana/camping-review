import { UserModel } from './user.model'

export class CampsiteModel {
    constructor(properties: CampsiteModel) {
        this.id = properties.id
        this.name = properties.name
        this.address = properties.address
        this.feeling = properties.feeling
        this.inTime = properties.inTime
        this.outTime = properties.outTime
        this.user = new UserModel(properties.user)
    }

    id: string
    name: string
    address: string
    feeling: string
    inTime: string
    outTime: string
    user: UserModel
}
