import { PermissionsPropertyOfficeInitialStateInterface } from '../../../../../../../../../models/hud/corporations/tabs/permissions/tabs/propertyInterfaces';
import {
  PERMISSIONS_PROPERTY_OFFICE_CHANGE_OPTION,
  PERMISSIONS_PROPERTY_OFFICE_SET_OPTIONS,
} from '../../../../../../../../actions/hud/corporations/tabs/permissions/tabs/property/tabs/officeTypes';
import {
  PermissionsAutoModelOptionInterface,
  RowDropdownInterface,
} from '../../../../../../../../../models/hud/corporations/interfaces';
import { RowFieldTypeEnum } from '../../../../../../../../../models/hud/corporations/enums';
import { CORPORATIONS_TAB_OPEN } from '../../../../../../../../actions/hud/corporations/corporationsTypes';
import {
  PERMISSIONS_ROLE_REMOVE,
  PERMISSIONS_ROLE_SELECT,
  PERMISSIONS_TAB_OPEN,
} from '../../../../../../../../actions/hud/corporations/tabs/permissions/permissionsTypes';
import { PERMISSIONS_PROPERTY_OPEN_TAB } from '../../../../../../../../actions/hud/corporations/tabs/permissions/tabs/property/propertyTypes';

const initialState: PermissionsPropertyOfficeInitialStateInterface = {
  options: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CORPORATIONS_TAB_OPEN:
    case PERMISSIONS_ROLE_SELECT:
    case PERMISSIONS_ROLE_REMOVE:
    case PERMISSIONS_TAB_OPEN:
    case PERMISSIONS_PROPERTY_OPEN_TAB: {
      return initialState;
    }
    case PERMISSIONS_PROPERTY_OFFICE_SET_OPTIONS: {
      return {
        ...state,
        options: action.options,
      };
    }
    case PERMISSIONS_PROPERTY_OFFICE_CHANGE_OPTION: {
      const newOptions: PermissionsAutoModelOptionInterface[] = [...state.options];

      // if dropdown - change potentialResponsibles too
      const selectedOptionIdx = newOptions.findIndex(
        ({ option }) => option.title.toLowerCase() === action.title.toLowerCase(),
      );

      if (newOptions[selectedOptionIdx].option.type === RowFieldTypeEnum.dropdown) {
        const dropdownOption: RowDropdownInterface = newOptions[selectedOptionIdx].option as RowDropdownInterface;

        const potentialValueIdx = dropdownOption.potentialValues.findIndex(
          (potentialValue) => potentialValue.toLowerCase() === action.value.toLowerCase(),
        );

        dropdownOption.potentialValues = [
          ...dropdownOption.potentialValues.slice(0, potentialValueIdx),
          state.options[selectedOptionIdx].option.value.toString(),
          ...dropdownOption.potentialValues.slice(potentialValueIdx + 1),
        ];

        newOptions[selectedOptionIdx] = { option: dropdownOption };
      }

      newOptions[selectedOptionIdx].option.value = action.value;

      return {
        ...state,
        options: newOptions,
      };
    }
    default: {
      return state;
    }
  }
};
