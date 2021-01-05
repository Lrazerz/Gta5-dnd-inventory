import {CorporationsPermissionsTabsEnum} from "../../../../../hud/models/corporations/enums";
import {
  PERMISSIONS_COMMON_PERMISSION_CHANGE,
  PERMISSIONS_ROLE_SELECT, PERMISSIONS_ROLES_PERMISSIONS_SET,
  PERMISSIONS_TAB_OPEN
} from "../../../../actions/hud/corporations/tabs/permissionsTypes";
import {
  CommonPermissionsSetInterface,
  PermissionInterface,
  PermissionsTabAutoInterface
} from "../../../../../hud/models/corporations/interfaces";

interface InitialStateInterface {
  openedTab: CorporationsPermissionsTabsEnum;
  roles: string[];
  selectedRole: string;
  commonPermissions: CommonPermissionsSetInterface[];
  // sub tabs
  modules: {};
  houses: {};
  enterprises: {};
  auto: PermissionsTabAutoInterface;
}

// const initialState: InitialStateInterface = {
//   openedTab: CorporationsPermissionsTabsEnum.auto,
//   roles: [],
//   selectedRole: null,
//   commonPermissions: []
// }

const initialState: InitialStateInterface = {
  openedTab: CorporationsPermissionsTabsEnum.auto,
  roles: [
    'DigitalNox Design1',
    'DigitalNox Design2',
    'DigitalNox Design3',
    'DigitalNox Design4',
    'DigitalNox Design5',
    'DigitalNox Design6',
    'DigitalNox Design7',
    'DigitalNox Design8',
    'DigitalNox Design9',
    'DigitalNox Design10',
    'DigitalNox Design11',
    'DigitalNox Design12',
    'DigitalNox Design13',
    'DigitalNox Design14',
  ],
  selectedRole: 'DigitalNox Design4',
  commonPermissions: [
    {
      title: 'Общие разрешения',
      permissions: [
        {
          id: '0',
          title: 'Доступ в панель разрешений',
          value: false
        },
        {
          id: '1',
          title: 'Возможность изменять разрешения ролей',
          value: true
        },
        {
          id: '2',
          title: 'Возможность изменять оплату ролей',
          value: false
        }
      ]
    },
    {
      title: 'Персонал',
      permissions: [
        {
          id: '0',
          title: 'Доступ в меню персонала',
          value: true
        },
        {
          id: '1',
          title: 'Возможность приглашать игроков',
          value: true
        },
        {
          id: '2',
          title: 'Возможность кикать игроков',
          value: false
        }
      ]
    },
    {
      title: 'Казна',
      permissions: [
        {
          id: '0',
          title: 'Доступ в меню казны',
          value: false
        }
      ]
    },
  ],
  modules: {},
  houses: {},
  enterprises: {},
  auto: {
    models: [
      {
        id: '0',
        title: 'Пример модели 1'
      },
      {
        id: '1',
        title: 'Пример модели 2'
      },
      {
        id: '2',
        title: 'Пример модели 3'
      },
      {
        id: '3',
        title: 'Пример модели 4'
      },
      {
        id: '4',
        title: 'Пример модели 5'
      },
      {
        id: '5',
        title: 'Пример модели 6'
      },
    ],
    selectedModelInfo: {
      id: '0',
      title: 'Пример модели 1',
      availableInventorySlots: 1,
      responsible: {
        id: '0',
        title: 'Hova)_Type_1'
      },
      potentialResponsible: [
        {
          id: '0',
          title: 'Hova)_Type_1'
        },
        {
          id: '1',
          title: 'Raciman'
        },
        {
          id: '0',
          title: 'DigitalNoxDesign'
        }
      ],
      availableGaragePlaces: 3,
      permissions: [
        {
          id: '0',
          title: 'Разрешение на спавн',
          value: true
        },
        {
          id: '1',
          title: 'Разрешение на тюнинг',
          value: false
        },
        {
          id: '2',
          title: 'Разрешение на тюнинг',
          value: false
        },
        {
          id: '3',
          title: 'Разрешение на тюнинг',
          value: false
        },
        {
          id: '4',
          title: 'Разрешение на тюнинг',
          value: false
        },
        {
          id: '5',
          title: 'Разрешение на тюнинг',
          value: false
        },
        {
          id: '6',
          title: 'Разрешение на тюнинг',
          value: false
        }
      ]
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PERMISSIONS_ROLES_PERMISSIONS_SET: {
      return {
        ...state,
        roles: action.roles,
        commonPermissions: action.permissions
      }
    }
    case PERMISSIONS_ROLE_SELECT: {
      return {
        ...state,
        selectedRole: action.selectedRole
      }
    }
    case PERMISSIONS_COMMON_PERMISSION_CHANGE: {
      const prevCommonPermissions = [...state.commonPermissions];
      const permSetIdx = prevCommonPermissions.findIndex(set => set.title === action.setTitle);
      const permIdx = prevCommonPermissions[permSetIdx].permissions.findIndex(perm => perm.title === action.title);
      prevCommonPermissions[permSetIdx].permissions[permIdx] = action.value;
      return {
        ...state,
        commonPermissions: prevCommonPermissions
      }
    }
    case PERMISSIONS_TAB_OPEN: {
      return {
        ...state,
        openedTab: action.openedTab
      }
    }
    default: {
      return state;
    }
  }
}