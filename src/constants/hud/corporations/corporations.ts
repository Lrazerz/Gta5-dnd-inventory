let getCommonTitleRegex: (minLength: number, maxLength: number) => string;
getCommonTitleRegex = (minLength, maxLength) => {
  return `^(\\w|_|[а-я]|[А-Я]){${minLength},${maxLength}}$`;
};

const commonTitleRegexWithoutLength = `^(\\w|_|[а-я]|[А-Я])*$`;

const commonTitleRegexWithSpaces = `^(\\w|_|[а-я]|[А-Я]|\\s)*$`;

enum CorporationsTooltipTypeEnum {
  success,
  neutral,
  warning,
  error,
}

export { getCommonTitleRegex, commonTitleRegexWithoutLength, commonTitleRegexWithSpaces, CorporationsTooltipTypeEnum };
