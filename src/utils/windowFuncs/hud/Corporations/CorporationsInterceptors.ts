import {
  CommonPermissionsSetInterface,
  PermissionsTabAutoInterface,
  SingleRoleInterface,
} from '../../../../models/hud/corporations/interfaces';
import { RowFieldTypeEnum } from '../../../../models/hud/corporations/enums';

let openCorporations: (data: {}) => Object;
openCorporations = (data) => {
  return {};
};

// to get single tab data
let corporationsOpenPermissionsTab: (
  jsonData: string,
) => {
  roles: SingleRoleInterface[];
  selectedRoleInfo: {
    title: string;
    commonPermissionsSets: CommonPermissionsSetInterface[];
  };
};

corporationsOpenPermissionsTab = (jsonData) => {
  const { Roles, SelectedRoleInfo } = JSON.parse(jsonData);

  const roles: SingleRoleInterface[] = Roles.map((role) => ({
    title: role.Title,
  }));

  // find selected role id
  const selectedRole = roles.find(
    (role) => role.title.trim().toLowerCase() === SelectedRoleInfo.Title.trim().toLowerCase(),
  );
  if (!selectedRole) {
    console.warn('[forb] Selected role name doesnt exists in the roles list');
  }

  const selectedRoleInfo = {
    title: SelectedRoleInfo.Title,
    commonPermissionsSets: SelectedRoleInfo.CommonPermissionsSets.map((singlePermissionSet) => ({
      title: singlePermissionSet.Title,
      permissions: singlePermissionSet.Permissions.map((singlePermission) => ({
        title: singlePermission.Title,
        value: singlePermission.Value,
      })),
    })),
  };

  return {
    roles,
    selectedRoleInfo,
  };
};

let corporationsPermissionsOpenRole: (
  roleDataJson: string,
) => {
  commonPermissionsSets: CommonPermissionsSetInterface[];
  modules: {};
};
corporationsPermissionsOpenRole = (roleDataJson) => {
  const parsedData = JSON.parse(roleDataJson);

  const commonPermissionsSets = parsedData.CommonPermissionsSets.map((permissionSet) => ({
    title: permissionSet.Title,
    permissions: permissionSet.Permissions.map((permission) => ({
      title: permission.Title,
      value: permission.Value,
    })),
  }));
  const modules = parsedData.Modules;

  return {
    commonPermissionsSets,
    modules,
  };
};

// refresh only common permissions
let corporationsRefreshPermissions: (permissionsDataJson: string) => CommonPermissionsSetInterface[];
corporationsRefreshPermissions = (permissionsDataJson) => {
  const parsedPermissionsData = JSON.parse(permissionsDataJson);

  const commonPermissionsSets: CommonPermissionsSetInterface[] = parsedPermissionsData.CommonPermissionsSets.map(
    (permissionsSet) => ({
      title: permissionsSet.Title,
      permissions: permissionsSet.Permissions.map((permission) => ({
        title: permission.Title,
        value: permission.Value,
      })),
    }),
  );

  return commonPermissionsSets;
};

interface AcceptedAutoModelDataInterface {
  Models: { Title: string }[];
  SelectedModelInfo: {
    Title: string;
    Options: {
      Type: string;
      Title: string;
      Value: string | boolean;
      PotentialValues?: string[];
    }[];
    Permissions: { Title: string; Value: boolean }[];
  };
}

const corporationsPermissionsOpenAutoTab = (autoData: string) => {
  const _getOptionType = (type) => {
    let convertedType: RowFieldTypeEnum;

    switch (type.toLowerCase()) {
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
  };

  const parsedAutoData: AcceptedAutoModelDataInterface = JSON.parse(autoData);

  const models = parsedAutoData.Models.map((model) => ({ title: model.Title }));

  const selectedModelInfo = {
    title: parsedAutoData.SelectedModelInfo.Title,
    options: parsedAutoData.SelectedModelInfo.Options.map((option) => ({
      option: {
        type: _getOptionType(option.Type),
        title: option.Title,
        value: option.Value,
        potentialValues: option.PotentialValues,
      },
    })),
    permissions: parsedAutoData.SelectedModelInfo.Permissions.map((permission) => ({
      title: permission.Title,
      value: permission.Value,
    })),
  };

  return {
    models,
    selectedModelInfo,
  };
};

export {
  openCorporations,
  corporationsOpenPermissionsTab,
  corporationsPermissionsOpenRole,
  corporationsRefreshPermissions,
  corporationsPermissionsOpenAutoTab,
};
