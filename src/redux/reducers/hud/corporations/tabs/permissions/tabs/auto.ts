import {
  PermissionsAutoModelOptionInterface,
  PermissionsTabAutoInterface,
  RowDropdownInterface,
} from '../../../../../../../models/hud/corporations/interfaces';
import {
  PERMISSIONS_AUTO_CHANGE_OPTION,
  PERMISSIONS_AUTO_CHANGE_PERMISSION,
  PERMISSIONS_AUTO_SELECT_MODEL,
  PERMISSIONS_AUTO_SET_DATA,
} from '../../../../../../actions/hud/corporations/tabs/permissions/tabs/autoTypes';
import {
  PERMISSIONS_ROLE_REMOVE,
  PERMISSIONS_ROLE_SELECT,
  PERMISSIONS_TAB_OPEN,
} from '../../../../../../actions/hud/corporations/tabs/permissions/permissionsTypes';
import { RowFieldTypeEnum } from '../../../../../../../models/hud/corporations/enums';
import { CORPORATIONS_TAB_OPEN } from '../../../../../../actions/hud/corporations/corporationsTypes';
// import {permissionsAutoFields} from "../../../../../../../constants/hud/corporations/permissions/auto";

const initialState: PermissionsTabAutoInterface = {
  models: null,
  selectedModelInfo: null,
};

//region filled initState
// const initialState: PermissionsTabAutoInterface = {
//   models: [
//     {
//       title: 'ЮЮЮЮЮЮЮЮЮЮ' // 10
//     },
//     {
//       title: 'Пример модели 2'
//     },
//     {
//       title: 'Пример модели 3'
//     },
//     {
//       title: 'Пример модели 4'
//     },
//     {
//       title: 'Пример модели 5'
//     },
//     {
//       title: 'Пример модели 7'
//     },
//     {
//       title: 'Пример модели 8'
//     },
//     {
//       title: 'Пример модели 9'
//     },
//     {
//       title: 'Пример модели 10'
//     },
//     {
//       title: 'Пример модели 11'
//     },
//     {
//       title: 'Пример модели 12'
//     },
//     {
//       title: 'Пример модели 13'
//     },
//     {
//       title: 'Пример модели 14'
//     },
//     {
//       title: 'Пример модели 15'
//     },
//   ],
//   selectedModelInfo: {
//     title: 'Пример модели 7',
//     options: permissionsAutoFields,
//     permissions: [
//       {
//         title: 'Разрешение на спавн',
//         value: true
//       },
//       {
//         title: 'Разрешение на тюнинг',
//         value: false
//       },
//       {
//         title: 'Разрешение на тюнинг2',
//         value: false
//       },
//       {
//         title: 'Разрешение на тюнинг3',
//         value: false
//       },
//       {
//         title: 'Разрешение на тюнинг4',
//         value: false
//       },
//       {
//         title: 'Разрешение на тюнинг5',
//         value: false
//       },
//       {
//         title: 'Разрешение на тюнинг6',
//         value: false
//       }
//     ],
//   }
// }
//endregion

export default (state = initialState, action) => {
  switch (action.type) {
    case CORPORATIONS_TAB_OPEN:
    case PERMISSIONS_ROLE_SELECT:
    case PERMISSIONS_ROLE_REMOVE:
    case PERMISSIONS_TAB_OPEN: {
      return initialState;
    }
    case PERMISSIONS_AUTO_SET_DATA: {
      return {
        ...action.data,
      };
    }
    case PERMISSIONS_AUTO_SELECT_MODEL: {
      return {
        ...state,
        selectedModelInfo: {
          title: action.title,
        },
      };
    }
    //cfg-file
    // case PERMISSIONS_AUTO_SET_RESPONSIBLE: {
    //   const selectedResponsibleIdx = state.selectedModelInfo.potentialResponsibles
    //     .findIndex(responsible => responsible.id === action.id);
    //   const newResponsible: ResponsibleForAutoInterface =
    //     state.selectedModelInfo.potentialResponsibles[selectedResponsibleIdx];
    //
    //   const newPotentialResponsibles = [state.selectedModelInfo.responsible,
    //     ...state.selectedModelInfo.potentialResponsibles.slice(0,selectedResponsibleIdx),
    //     ...state.selectedModelInfo.potentialResponsibles.slice(selectedResponsibleIdx + 1)];
    //
    //   return {
    //     ...state,
    //     selectedModelInfo: {
    //       ...state.selectedModelInfo,
    //       responsible: newResponsible,
    //       potentialResponsibles: newPotentialResponsibles
    //     }
    //   }
    // }
    case PERMISSIONS_AUTO_CHANGE_OPTION: {
      const newOptions: PermissionsAutoModelOptionInterface[] = [...state.selectedModelInfo.options];

      // if dropdown - change potentialResponsibles too

      // else - just value

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
          state.selectedModelInfo.options[selectedOptionIdx].option.value.toString(),
          ...dropdownOption.potentialValues.slice(potentialValueIdx + 1),
        ];

        newOptions[selectedOptionIdx] = { option: dropdownOption };
      }

      newOptions[selectedOptionIdx].option.value = action.value;

      return {
        ...state,
        selectedModelInfo: {
          ...state.selectedModelInfo,
          options: newOptions,
        },
      };
    }
    case PERMISSIONS_AUTO_CHANGE_PERMISSION: {
      const newPermissions = [...state.selectedModelInfo.permissions];
      const selectedPermissionIdx = newPermissions.findIndex((permission) => permission.title === action.title);

      newPermissions[selectedPermissionIdx].value = action.value;

      return {
        ...state,
        selectedModelInfo: {
          ...state.selectedModelInfo,
          permissions: newPermissions,
        },
      };
    }
    default: {
      return state;
    }
  }
};
