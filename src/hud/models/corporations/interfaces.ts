// permissions tab
interface SingleRoleInterface {
  id: string;
  title: string;
}

interface CommonPermissionsSetInterface {
  id: string;
  title: string;
  permissions: PermissionInterface[];
}

interface PermissionInterface {
  id: string;
  title: string;
  value: boolean;
}

// boost tab
interface BoostTabInterface {

}

// auto sub tab
interface PermissionsTabAutoInterface {
  models: SingleAutoModelTitleInterface[];
  selectedModelInfo: PermissionsAutoModelInterface;
}

interface SingleAutoModelTitleInterface {
  id: string;
  title: string;
}

interface PermissionsAutoModelInterface {
  id: string;
  title: string;
  availableInventorySlots: number;
  responsible: ResponsibleForAutoInterface
  potentialResponsibles: ResponsibleForAutoInterface[];
  availableGaragePlaces: number;
  permissions: PermissionInterface[];
}

interface ResponsibleForAutoInterface {
  id: string;
  title: string;
}

export {
  SingleRoleInterface,

  CommonPermissionsSetInterface,
  PermissionInterface,

  SingleAutoModelTitleInterface,
  PermissionsAutoModelInterface,
  PermissionsTabAutoInterface,

  ResponsibleForAutoInterface
}