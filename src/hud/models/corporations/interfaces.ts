// permissions tab
interface CommonPermissionsSetInterface {
  title: string;
  permissions: PermissionInterface[];
}

interface PermissionInterface {
  id: string;
  title: string;
  value: boolean;
}

// auto sub tab
interface ResponsibleForAuto {
  id: string;
  title: string;
}

interface PermissionsAutoModelInterface {
  id: string;
  title: string;
  availableInventorySlots: number;
  responsible: ResponsibleForAuto
  potentialResponsible: ResponsibleForAuto[];
  availableGaragePlaces: number;
  permissions: PermissionInterface[];
}

interface SingleAutoModelTitle {
  id: string;
  title: string;
}

interface PermissionsTabAutoInterface {
  models: SingleAutoModelTitle[];
  selectedModelInfo: PermissionsAutoModelInterface;
}


export {
  CommonPermissionsSetInterface,
  PermissionInterface,

  SingleAutoModelTitle,
  PermissionsAutoModelInterface,
  PermissionsTabAutoInterface
}