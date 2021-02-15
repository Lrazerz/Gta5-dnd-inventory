interface BuffInterface {
  title: string;
  timeLeft: number;
}

interface DefaultHudDataInterface {
  playerAvatarName: string;
  playerRankTitle: string;
  stateIndicators: {
    firstIndicator: number;
    secondIndicator: number;
    thirdIndicator: number;
  },
  network: number;
  time: string,
  buffs: BuffInterface[],
}

export {
  BuffInterface,
  DefaultHudDataInterface,
}