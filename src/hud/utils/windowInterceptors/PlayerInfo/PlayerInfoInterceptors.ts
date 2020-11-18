let openHud: (data: string) => Object;
openHud = async (data) => {
  const parsedData = JSON.parse(data);
  const {
    // must have
    PlayerAvatar: playerAvatarName,
    PlayerRank: playerRankTitle,
    PlayerStateIndicators: {
      First: firstIndicator,
      Second: secondIndicator,
      Third: thirdIndicator
    },
    // maybe only in another functions
    Network: network,
    Time: time,
    Buffs: buffs
  } = parsedData;

  const transformedBuffs = buffs.map(buff => {
    const newBuff = {};
    //@ts-ignore
    newBuff.title = buff.Title;
    //@ts-ignore
    newBuff.timeLeft = buff.TimeLeft;
    return newBuff;
  });

  return {
    playerAvatarName,
    playerRankTitle,
    stateIndicators: {
      firstIndicator,
      secondIndicator,
      thirdIndicator
    },
    network,
    time,
    buffs: transformedBuffs
  }
}

let setPlayerRank: (data: string) => string;
setPlayerRank = (data) => {
  return data;
}

let setPlayerAvatar: (data: string) => string
setPlayerAvatar = (data) => {
  return data;
}

let setPlayerBuffs: (data: string) => any[];
setPlayerBuffs = (data) => {
  const parsedData = JSON.parse(data);

  const buffs: [] = parsedData.$values;

  const transformedBuffs = buffs.map(buff => {
    const newBuff = {};
    //@ts-ignore
    newBuff.title = buff.Title;
    //@ts-ignore
    newBuff.timeLeft = buff.TimeLeft;
    return newBuff;
  });
  return transformedBuffs;
}

let setPlayerIndicators: (data: string) => {firstIndicator: number, secondIndicator: number, thirdIndicator: number};
setPlayerIndicators = (data) => {
  const parsedData = JSON.parse(data);

  const {
    First: firstIndicator,
    Second: secondIndicator,
    Third: thirdIndicator
  } = parsedData;

  return {firstIndicator, secondIndicator, thirdIndicator};
}

let setTime: (data: string) => string;
setTime = (data) => {
  return data;
}

let setNetwork: (quality: number) => number;
setNetwork = (quality) => {
  return quality;
}


export {openHud, setPlayerRank, setPlayerAvatar, setPlayerBuffs, setPlayerIndicators,
setTime, setNetwork}