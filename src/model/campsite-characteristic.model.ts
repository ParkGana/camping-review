import { CampsiteModel } from './campsite.model'
import { CharacteristicModel } from './characteristic.model'

export class CampsiteCharacteristicModel {
    constructor(properties: CampsiteCharacteristicModel) {
        this.id = properties.id
        this.campsite = new CampsiteModel(properties.campsite)
        this.characteristic = new CharacteristicModel(properties.characteristic)
    }

    id: string
    campsite: CampsiteModel
    characteristic: CharacteristicModel
}
