export class CharacteristicModel {
    constructor(properties: CharacteristicModel) {
        this.id = properties.id
        this.type = properties.type
        this.name = properties.name
    }

    id: string
    type: string
    name: string
}
