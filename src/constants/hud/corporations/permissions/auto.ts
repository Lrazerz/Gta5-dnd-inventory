import shortId from 'shortid';
import {PermissionsAutoModelOptionInterface} from "../../../../hud/models/corporations/interfaces";
import {RowFieldTypeEnum} from "../../../../hud/models/corporations/enums";


// fields for selected model
const permissionsAutoFields: PermissionsAutoModelOptionInterface[] = [
  {
    option: {
      type: RowFieldTypeEnum.label,
      title: 'Слотов доступно в инвентаре',
      value: '1'
    }
  },
  {
    option: {
      type: RowFieldTypeEnum.dropdown,
      title: 'Ответственный',
      value: 'Hova)_Type',
      potentialValues: [
        'Hova)_Type_1',
        'Raciman',
        'DigitalNoxDesign'
      ]
    }
  },
  {
    option: {
      type: RowFieldTypeEnum.label,
      title: 'Доступно мест в гараже',
      value: '2'
    }
  }
]

export {
  permissionsAutoFields
}