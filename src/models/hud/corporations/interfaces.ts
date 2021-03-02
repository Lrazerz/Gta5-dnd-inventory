// common
// to generate list from config file
import { CorporationsPermissionsTabsEnum, RowFieldTypeEnum } from "./enums";

// row field interfaces
interface _RowLabelInterface {
  type: RowFieldTypeEnum.label;
  title: string;
  value: string;
}

interface _RowEditableLabelInterface {
  type: RowFieldTypeEnum.editableLabel;
  title: string;
  value: string;
}

interface _RowSwitchInterface {
  type: RowFieldTypeEnum.switch;
  title: string;
  value: boolean;
}

interface RowDropdownInterface {
  type: RowFieldTypeEnum.dropdown;
  title: string;
  value: string;
  potentialValues: string[];
}

//region -------------------- Permissions Tab --------------------
interface PermissionsReducerInterface {
  openedTab: CorporationsPermissionsTabsEnum;
  roles: SingleRoleInterface[];
  selectedRole: SingleRoleInterface;
  commonPermissionsSets: CommonPermissionsSetInterface[];
}

interface SingleRoleInterface {
  title: string;
  priority: number;
}

interface CommonPermissionsSetInterface {
  title: string;
  permissions: PermissionInterface[];
}

interface PermissionInterface {
  title: string;
  value: boolean;
}

// boost sub tab
// interface BoostTabInterface {}

// auto sub tab
interface PermissionsTabAutoInterface {
  models: SingleAutoModelTitleInterface[];
  selectedModelInfo: PermissionsAutoModelInterface;
}

interface SingleAutoModelTitleInterface {
  title: string;
}

interface PermissionsAutoModelOptionInterface {
  option: _RowLabelInterface | _RowEditableLabelInterface | _RowSwitchInterface | RowDropdownInterface;
}

interface PermissionsAutoModelInterface {
  title: string;
  options: PermissionsAutoModelOptionInterface[];
  permissions: PermissionInterface[];
}

//endregion

export {
  RowDropdownInterface,
  PermissionsReducerInterface,
  SingleRoleInterface,
  CommonPermissionsSetInterface,
  PermissionInterface,
  SingleAutoModelTitleInterface,
  PermissionsAutoModelOptionInterface,
  PermissionsAutoModelInterface,
  PermissionsTabAutoInterface
};
