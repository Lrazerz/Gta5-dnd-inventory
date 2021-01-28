// for treasury tab, tasks mb
// "12345" => "12 345"
let splitStringDigits: (number) => string;
splitStringDigits = (incNumber: number) => {
  const numberStr = incNumber.toString();

  if(numberStr.length < 4) {
    return numberStr;
  }
  let resNumber: string = '';

  let iteration = 0;
  for(let i = numberStr.length - 1; i > -1; i--) {
    iteration++;
    resNumber = numberStr[i] + resNumber;
    if(iteration !== 0 && iteration % 3 === 0 && i !== 0) {
      resNumber = ' ' + resNumber;
    }
  }
  return resNumber;
}

export {
  splitStringDigits
}