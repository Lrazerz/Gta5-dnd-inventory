import { DateObjectInterface } from '../../models/hud/phone/reducerInterfaces';

// 25.08.2021@14:16
let transformDateFromString: (string) => DateObjectInterface;
transformDateFromString = (dateString: string) => {
  const dateArr = dateString.match(/\d+/g);
  return {
    minutes: dateArr[4],
    hours: dateArr[3],
    day: dateArr[0],
    month: dateArr[1],
    year: dateArr[2],
  };
};

let transformDateFromObject: (DateObjectInterface) => string;
transformDateFromObject = (dateObj: DateObjectInterface) => {
  return `${dateObj.day}.${dateObj.month}.${dateObj.year}@${dateObj.hours}.${dateObj.minutes}`;
};

export { transformDateFromString, transformDateFromObject };
