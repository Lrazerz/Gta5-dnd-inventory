//region -------------------- Auto models --------------------
import { commonTitleRegexWithSpaces } from '../../corporations';

const minModelLength = 2;
const maxModelLength = 18;

const _modelTitleRegex = commonTitleRegexWithSpaces;
const modelTitleRegex = new RegExp(_modelTitleRegex);
//endregion

export { minModelLength, maxModelLength, modelTitleRegex };
