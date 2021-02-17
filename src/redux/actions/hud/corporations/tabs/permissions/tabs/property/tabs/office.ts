import { PERMISSIONS_PROPERTY_OFFICE_CHANGE_OPTION, PERMISSIONS_PROPERTY_OFFICE_SET_OPTIONS } from './officeTypes';

const permissionsPropertyOfficeSetOptions = ({ options }) => {
  return { type: PERMISSIONS_PROPERTY_OFFICE_SET_OPTIONS, options };
};

const permissionsPropertyOfficeChangeOption = (optionTitle, optionValue) => {
  return {
    type: PERMISSIONS_PROPERTY_OFFICE_CHANGE_OPTION,
    title: optionTitle,
    value: optionValue,
  };
};

export { permissionsPropertyOfficeSetOptions, permissionsPropertyOfficeChangeOption };
