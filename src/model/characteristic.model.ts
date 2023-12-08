export class CharacteristicModel {
    constructor(properties: CharacteristicModel) {
        this.id = properties.id
        this.type = properties.type
        this.contents = properties.contents
    }

    id: string
    type: string
    contents: string
}
