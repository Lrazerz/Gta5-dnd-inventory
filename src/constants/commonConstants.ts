const minNicknameLength = 2;
const maxNicknameLength = 20;
// treasury, new task
const _nickNameRegex = `^(\\w|_|[а-я]|[А-Я]){${minNicknameLength},${maxNicknameLength}}$`;
const nicknameRegex = new RegExp(_nickNameRegex);

export { minNicknameLength, maxNicknameLength, nicknameRegex };
