import {PermissionsPropertyOfficeInitialStateInterface} from "../../../../../../../../../hud/models/corporations/tabs/permissions/tabs/propertyInterfaces";
import {
  PERMISSIONS_PROPERTY_OFFICE_CHANGE_OPTION,
  PERMISSIONS_PROPERTY_OFFICE_SET_OPTIONS
} from "../../../../../../../../actions/hud/corporations/tabs/permissions/tabs/property/tabs/officeTypes";
import {
  PermissionsAutoModelOptionInterface,
  RowDropdownInterface
} from "../../../../../../../../../hud/models/corporations/interfaces";
import {RowFieldTypeEnum} from "../../../../../../../../../hud/models/corporations/enums";

const initialState: PermissionsPropertyOfficeInitialStateInterface = {
  options: null,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case PERMISSIONS_PROPERTY_OFFICE_SET_OPTIONS: {
      return {
        ...state,
        options: action.options
      }
    }
    case PERMISSIONS_PROPERTY_OFFICE_CHANGE_OPTION: {
      let newOptions: PermissionsAutoModelOptionInterface[] = [...state.options];

      // if dropdown - change potentialResponsibles too
      const selectedOptionIdx = newOptions
        .findIndex(({option}) => option.title.toLowerCase() === action.title.toLowerCase());

      if(newOptions[selectedOptionIdx].option.type === RowFieldTypeEnum.dropdown) {
        let dropdownOption: RowDropdownInterface = newOptions[selectedOptionIdx].option as RowDropdownInterface;

        const potentialValueIdx = dropdownOption.potentialValues
          .findIndex(potentialValue => potentialValue.toLowerCase() === action.value.toLowerCase());

        dropdownOption.potentialValues = [
          ...dropdownOption.potentialValues.slice(0, potentialValueIdx),
          state.options[selectedOptionIdx].option.value.toString(),
          ...dropdownOption.potentialValues.slice(potentialValueIdx + 1)
        ]

        newOptions[selectedOptionIdx] = {option: dropdownOption};
      }

      newOptions[selectedOptionIdx].option.value = action.value;

      return {
        ...state,
        options: newOptions
      }
    }
    default: {
      return state;
    }
  }
}