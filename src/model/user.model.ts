export class UserModel {
    constructor(properties: UserModel) {
        this.email = properties.email
        this.name = properties.name
        this.profileImage = properties.profileImage
    }

    email: string
    name: string
    profileImage: string | null
}
