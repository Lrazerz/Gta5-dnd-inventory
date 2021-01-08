import {
  CommonPermissionsSetInterface, PermissionsAutoModelInterface,
  PermissionsTabAutoInterface,
  SingleRoleInterface
} from "../../../../hud/models/corporations/interfaces";

let openCorporations: (data: {}) => Object;
openCorporations = (data) => {
  return {};
}

// to get single tab data
let corporationsOpenPermissionsTab: (jsonData: string) => {
  roles: SingleRoleInterface[],
  selectedRoleInfo: {
    id: string,
    commonPermissionsSets: CommonPermissionsSetInterface[],
  }
};
// @ts-ignore
corporationsOpenPermissionsTab = (jsonData) => {

  const {Roles, SelectedRoleInfo, Modules} = JSON.parse(jsonData);

  console.log('roles', Roles, SelectedRoleInfo, Modules);

  const roles: SingleRoleInterface[] = Roles.map(role => ({id: role.Id, title: role.Title}));
  const selectedRoleInfo = {
    id: SelectedRoleInfo.Id,
    commonPermissionsSets: SelectedRoleInfo.CommonPermissionsSets.map(singlePermissionSet => ({
      id: singlePermissionSet.Id,
      title: singlePermissionSet.Title,
      permissions: singlePermissionSet.Permissions.map(singlePermission => (
        {
          id: singlePermission.Id,
          title: singlePermission.Title,
          value: singlePermission.Value
        }
      ))
    })),
  }

  return {
    roles,
    selectedRoleInfo
  }
}

let corporationsPermissionsOpenRole: (roleDataJson: string) => {
  commonPermissionsSets: CommonPermissionsSetInterface[],
  modules: {},
}
corporationsPermissionsOpenRole = (roleDataJson) => {
  const parsedData = JSON.parse(roleDataJson);

  const commonPermissionsSets = parsedData.CommonPermissionsSets.map(permissionSet => ({
    id: permissionSet.Id,
    title: permissionSet.Title,
    permissions: permissionSet.Permissions.map(permission => ({
      id: permission.Id,
      title: permission.Title,
      value: permission.Value
    }))
  }));
  const modules = parsedData.Modules;

  return {
    commonPermissionsSets,
    modules
  }
}

// refresh only common permissions
let corporationsRefreshPermissions: (permissionsDataJson: string) => CommonPermissionsSetInterface[];
corporationsRefreshPermissions = (permissionsDataJson) => {

  const parsedPermissionsData = JSON.parse(permissionsDataJson);

  const commonPermissionsSets: CommonPermissionsSetInterface[] =
    parsedPermissionsData.CommonPermissionsSets.map(permissionsSet => ({
      id: permissionsSet.Id,
      title: permissionsSet.Title,
      permissions: permissionsSet.Permissions.map(permission => ({
        id: permission.Id,
        title: permission.Title,
        value: permission.Value
      }))
    }));

  return commonPermissionsSets;
}

interface AcceptedAutoModelDataInterface {
  Models: { Id: string, Title: string }[],
  SelectedModelInfo: {
    Id: string;
    Title: string;
    AvailableInventorySlots: number;
    Responsible: { Id: string, Title: string };
    PotentialResponsibles: { Id: string, Title: string }[];
    AvailableGaragePlaces: number;
    Permissions: { Id: string, Title: string, Value: boolean }[];
  }
}

let corporationsPermissionsOpenAutoTab: (autoData: string) => PermissionsTabAutoInterface;
corporationsPermissionsOpenAutoTab = (autoData) => {

  const parsedAutoData: AcceptedAutoModelDataInterface = JSON.parse(autoData);

  const mappedAutoData = {
    models: parsedAutoData.Models.map(model => ({id: model.Id, title: model.Title})),
    selectedModelInfo: {
      id: parsedAutoData.SelectedModelInfo.Id,
      title: parsedAutoData.SelectedModelInfo.Title,
      availableInventorySlots: parsedAutoData.SelectedModelInfo.AvailableInventorySlots,
      responsible: {
        id: parsedAutoData.SelectedModelInfo.Responsible.Id,
        title: parsedAutoData.SelectedModelInfo.Responsible.Title
      },
      potentialResponsibles: parsedAutoData.SelectedModelInfo.PotentialResponsibles.map(singleResponsible => ({
        id: singleResponsible.Id,
        title: singleResponsible.Title
      })),
      availableGaragePlaces: parsedAutoData.SelectedModelInfo.AvailableGaragePlaces,
      permissions: parsedAutoData.SelectedModelInfo.Permissions.map(permission => ({
        id: permission.Id,
        title: permission.Title,
        value: permission.Value
      }))
    }
  }

  return mappedAutoData;
}

export {
  openCorporations,

  corporationsOpenPermissionsTab,

  corporationsPermissionsOpenRole,
  corporationsRefreshPermissions,

  corporationsPermissionsOpenAutoTab
};