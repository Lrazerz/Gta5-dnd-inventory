import { DateObjectInterface } from '../../models/hud/phone/reducerInterfaces';

// 25.08.2021@14:16
const transformDateFromString = (dateString: string): DateObjectInterface => {
  if (!dateString) {
    console.log('[forb] no dateString provided');
    const newDate = new Date();
    return {
      minutes: newDate.getMinutes().toString().padStart(2, '0'),
      hours: newDate.getHours().toString().padStart(2, '0'),
      day: newDate.getDate().toString().padStart(2, '0'),
      month: (newDate.getMonth() + 1).toString().padStart(2, '0'),
      year: newDate.getFullYear().toString(),
    };
  }
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
