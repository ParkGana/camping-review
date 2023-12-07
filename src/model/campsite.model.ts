import { UserModel } from './user.model'

export class CampsiteModel {
    constructor(properties: CampsiteModel) {
        this.id = properties.id
        this.name = properties.name
        this.address = properties.address
        this.inTime = properties.inTime
        this.outTime = properties.outTime
        this.type = properties.type
        this.feeling = properties.feeling
        this.user = new UserModel(properties.user)
    }

    id: string
    name: string
    address: string
    inTime: string
    outTime: string
    type: string
    feeling: string
    user: UserModel
}
