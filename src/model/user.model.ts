export class UserModel {
    constructor(properties: UserModel) {
        this.email = properties.email
        this.name = properties.name
        this.profileImage = properties.profileImage
        this.connectionEmail = properties.connectionEmail
        this.connectionState = properties.connectionState
    }

    email: string
    name: string
    profileImage: string | null
    connectionEmail: string | null
    connectionState: string | null
}
