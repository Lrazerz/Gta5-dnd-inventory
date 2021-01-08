import {
  PermissionsTabAutoInterface,
  ResponsibleForAutoInterface
} from "../../../../../../../hud/models/corporations/interfaces";
import {
  PERMISSIONS_AUTO_CHANGE_PERMISSION,
  PERMISSIONS_AUTO_SELECT_MODEL,
  PERMISSIONS_AUTO_SET_DATA, PERMISSIONS_AUTO_SET_RESPONSIBLE
} from "../../../../../../actions/hud/corporations/tabs/permissions/tabs/autoTypes";
import {PERMISSIONS_ROLE_SELECT} from "../../../../../../actions/hud/corporations/tabs/permissions/permissionsTypes";

const initialState: PermissionsTabAutoInterface = {
  models: null,
  selectedModelInfo: null
}

// const initialState: PermissionsTabAutoInterface = {
//   models: [
//     {
//       id: '0',
//       title: 'Пример модели 1'
//     },
//     {
//       id: '1',
//       title: 'Пример модели 2'
//     },
//     {
//       id: '2',
//       title: 'Пример модели 3'
//     },
//     {
//       id: '3',
//       title: 'Пример модели 4'
//     },
//     {
//       id: '4',
//       title: 'Пример модели 5'
//     },
//     {
//       id: '5',
//       title: 'Пример модели 6'
//     },
//   ],
//   selectedModelInfo: {
//     id: '0',
//     title: 'Пример модели 1',
//     availableInventorySlots: 1,
//     responsible: {
//       id: '0',
//       title: 'Hova)_Type_1'
//     },
//     potentialResponsibles: [
//       {
//         id: '0',
//         title: 'Hova)_Type_1'
//       },
//       {
//         id: '1',
//         title: 'Raciman'
//       },
//       {
//         id: '0',
//         title: 'DigitalNoxDesign'
//       }
//     ],
//     availableGaragePlaces: 3,
//     permissions: [
//       {
//         id: '0',
//         title: 'Разрешение на спавн',
//         value: true
//       },
//       {
//         id: '1',
//         title: 'Разрешение на тюнинг',
//         value: false
//       },
//       {
//         id: '2',
//         title: 'Разрешение на тюнинг',
//         value: false
//       },
//       {
//         id: '3',
//         title: 'Разрешение на тюнинг',
//         value: false
//       },
//       {
//         id: '4',
//         title: 'Разрешение на тюнинг',
//         value: false
//       },
//       {
//         id: '5',
//         title: 'Разрешение на тюнинг',
//         value: false
//       },
//       {
//         id: '6',
//         title: 'Разрешение на тюнинг',
//         value: false
//       }
//     ]
//   }
// }

export default (state = initialState, action) => {
  switch(action.type) {
    case PERMISSIONS_ROLE_SELECT: {
      return initialState;
    }
    case PERMISSIONS_AUTO_SET_DATA: {
      return {
        ...action.data
      }
    }
    case PERMISSIONS_AUTO_SELECT_MODEL: {
      return {
        ...state,
        selectedModelInfo: {
          id: action.id
        }
      }
    }
    case PERMISSIONS_AUTO_SET_RESPONSIBLE: {
      const selectedResponsibleIdx = state.selectedModelInfo.potentialResponsibles
        .findIndex(responsible => responsible.id === action.id);
      const newResponsible: ResponsibleForAutoInterface =
        state.selectedModelInfo.potentialResponsibles[selectedResponsibleIdx];

      const newPotentialResponsibles = [state.selectedModelInfo.responsible,
        ...state.selectedModelInfo.potentialResponsibles.slice(0,selectedResponsibleIdx),
        ...state.selectedModelInfo.potentialResponsibles.slice(selectedResponsibleIdx + 1)];

      return {
        ...state,
        selectedModelInfo: {
          ...state.selectedModelInfo,
          responsible: newResponsible,
          potentialResponsibles: newPotentialResponsibles
        }
      }
    }
    case PERMISSIONS_AUTO_CHANGE_PERMISSION: {
      const newPermissions = [...state.selectedModelInfo.permissions];
      const selectedPermissionIdx = newPermissions
        .findIndex(permission => permission.id === action.id);

      console.log('idx', selectedPermissionIdx, action.id);
      newPermissions[selectedPermissionIdx].value = action.value;

      return {
        ...state,
        selectedModelInfo: {
          ...state.selectedModelInfo,
          permissions: newPermissions
        }
      }
    }
    default: {
      return state;
    }
  }
}