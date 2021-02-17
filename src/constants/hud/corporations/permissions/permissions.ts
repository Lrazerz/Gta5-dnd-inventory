//region -------------------- Roles --------------------
import { commonTitleRegexWithSpaces } from '../corporations';

const minRoleTitleLength = 2;
const maxRoleTitleLength = 18;

const _roleTitleRegex = commonTitleRegexWithSpaces;
const roleTitleRegex = new RegExp(_roleTitleRegex);
//endregion

//region -------------------- Common permissions --------------------
const minCommonPermissionLength = 2;
const maxCommonPermissionLength = 18;

const _commonPermissionTitleRegex = commonTitleRegexWithSpaces;
const commonPermissionTitleRegex = new RegExp(_commonPermissionTitleRegex);
//endregion

export {
  minRoleTitleLength,
  maxRoleTitleLength,
  roleTitleRegex,
  minCommonPermissionLength,
  maxCommonPermissionLength,
  commonPermissionTitleRegex,
};
