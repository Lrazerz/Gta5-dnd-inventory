let openCar: (data: string) => Object;
openCar = (data) => {
  const parsedData = JSON.parse(data);

  const { IsCarRunning: isCarRunning, IsDoorsOpen: isDoorsOpen, Speed: speed, Fuel: fuel } = parsedData;

  return { isCarRunning, isDoorsOpen, speed, fuel };
};

let setSpeed: (speed: number) => number;
setSpeed = (speed) => {
  return speed;
};

let setFuel: (fuel: number) => number;
setFuel = (fuel) => {
  return fuel;
};

export { openCar, setSpeed, setFuel };
