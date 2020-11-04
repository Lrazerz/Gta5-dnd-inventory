const openCar = (data) => {
  const parsedData = JSON.parse(data);

  const {IsCarRunning: isCarRunning, IsDoorsOpen: isDoorsOpen,
  Speed: speed, Fuel: fuel} = parsedData.$values;

  return {isCarRunning, isDoorsOpen, speed, fuel};
}

const setSpeed = (data) => {
  const parsedData = JSON.parse(data);

  const {Speed: speed} = parsedData.$values;

  return speed;
}

const setFuel = (data) => {
  const parsedData = JSON.parse(data);

  const {Fuel: fuel} = parsedData.$values;

  return fuel;
}

export {openCar, setSpeed, setFuel};