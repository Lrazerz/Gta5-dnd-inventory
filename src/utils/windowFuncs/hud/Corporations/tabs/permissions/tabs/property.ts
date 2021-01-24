import {RowFieldTypeEnum} from "../../../../../../../hud/models/corporations/enums";
import {PermissionsPropertyOfficeInitialStateInterface} from "../../../../../../../hud/models/corporations/tabs/permissions/tabs/propertyInterfaces";

const window_corporations_permissions_property_openOffice = (jsonData: string) => {

  const _getOptionType = (type) => {
    let convertedType: RowFieldTypeEnum;
    switch(type.toLowerCase()) {
      case 'label': {
        convertedType = RowFieldTypeEnum.label;
        break;
      }
      case 'editablelabel': {
        convertedType = RowFieldTypeEnum.editableLabel;
        break;
      }
      case 'switch': {
        convertedType = RowFieldTypeEnum.switch;
        break;
      }
      case 'dropdown': {
        convertedType = RowFieldTypeEnum.dropdown;
        break;
      }
      default: {
        convertedType = RowFieldTypeEnum.label;
      }
    }
    return convertedType;
  }

  const parsedData = JSON.parse(jsonData);

  const officeInfo: PermissionsPropertyOfficeInitialStateInterface = {
      options: parsedData.Options.map(option => ({
        // to match interface
        option: {
          type: _getOptionType(option.Type),
          title: option.Title,
          value: option.Value,
          potentialValues: option.PotentialValues
        }
      }))
  }

  return officeInfo;
}

export {
  window_corporations_permissions_property_openOffice
}