const openHud = async (data) => {
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
  } = parsedData.$values;

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

const setPlayerRank = (data) => {
  const parsedData = JSON.parse(data);

  const {PlayerRank: rank} = parsedData.$values;

  return rank;
}

const setPlayerAvatar = (data) => {
  const parsedData = JSON.parse(data);

  const {PlayerAvatar: avatar} = parsedData.$values;

  return avatar;
}

const setPlayerBuffs = (data) => {
  const parsedData = JSON.parse(data);

  const {Buffs: buffs} = parsedData.$values;

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

const setPlayerIndicators = (data) => {
  const parsedData = JSON.parse(data);

  const {
    PlayerStateIndicators: {
      First: firstIndicator,
      Second: secondIndicator,
      Third: thirdIndicator
    }
  } = parsedData.$values;

  return {firstIndicator, secondIndicator, thirdIndicator};
}



export {openHud, setPlayerRank, setPlayerAvatar, setPlayerBuffs, setPlayerIndicators}