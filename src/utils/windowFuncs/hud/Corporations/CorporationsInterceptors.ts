import shortId from 'shortid';
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

  const roles: SingleRoleInterface[] = Roles.map(role => ({id: shortId.generate(), title: role.Title}));

  // find selected role id
  const selectedRole = roles.find(role => role.title.toLowerCase() === SelectedRoleInfo.Title.toLowerCase());
  if(!selectedRole) {
    console.log('error', 'Selected role name doesnt exists in the roles list');
  }
  const selectedRoleId = selectedRole ? selectedRole.id : shortId.generate();

  const selectedRoleInfo = {
    id: selectedRoleId,
    commonPermissionsSets: SelectedRoleInfo.CommonPermissionsSets.map(singlePermissionSet => ({
      id: shortId.generate(),
      title: singlePermissionSet.Title,
      permissions: singlePermissionSet.Permissions.map(singlePermission => (
        {
          id: shortId.generate(),
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
    id: shortId.generate(),
    title: permissionSet.Title,
    permissions: permissionSet.Permissions.map(permission => ({
      id: shortId.generate(),
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
      id: shortId.generate(),
      title: permissionsSet.Title,
      permissions: permissionsSet.Permissions.map(permission => ({
        id: shortId.generate(),
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

  const models = parsedAutoData.Models.map(model => ({id: shortId.generate(), title: model.Title}));

  const selectedModel = models.find(
    model => model.title.toLowerCase() === parsedAutoData.SelectedModelInfo.Title.toLowerCase());

  const selectedModelId = selectedModel ? selectedModel.id : shortId.generate();

  const selectedModelInfo = {
    id: selectedModelId,
    title: parsedAutoData.SelectedModelInfo.Title,
    availableInventorySlots: parsedAutoData.SelectedModelInfo.AvailableInventorySlots,
    responsible: {
      id: shortId.generate(),
      title: parsedAutoData.SelectedModelInfo.Responsible.Title
    },
    potentialResponsibles: parsedAutoData.SelectedModelInfo.PotentialResponsibles.map(singleResponsible => ({
      id: shortId.generate(),
      title: singleResponsible.Title
    })),
    availableGaragePlaces: parsedAutoData.SelectedModelInfo.AvailableGaragePlaces,
    permissions: parsedAutoData.SelectedModelInfo.Permissions.map(permission => ({
      id: shortId.generate(),
      title: permission.Title,
      value: permission.Value
    }))
  }

  return {
    models,
    selectedModelInfo
  }
}

export {
  openCorporations,

  corporationsOpenPermissionsTab,

  corporationsPermissionsOpenRole,
  corporationsRefreshPermissions,

  corporationsPermissionsOpenAutoTab
};