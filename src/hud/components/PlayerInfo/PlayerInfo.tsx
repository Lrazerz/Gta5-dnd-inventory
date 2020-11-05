import React from 'react';
import classes from '../../styles/components/PlayerInfo.module.scss';
import PlayerIndicators from "./PlayerIndicators";
import PlayerAvatarAndRank from "./PlayerAvatarAndRank";
import NetworkAndTime from "./NetworkAndTime";
import Buffs from "./Buffs";
import {BuffInterface} from "../../models/Buff";

interface Props {
  data: {
    playerAvatarName: string,
    playerRankTitle: string,
    stateIndicators: {
      firstIndicator: number,
      secondIndicator: number,
      thirdIndicator: number
    },
    network: number,
    time: string,
    buffs: BuffInterface[],
  }
}

const PlayerInfo: React.FC<Props> = React.memo(function PlayerInfo({data}) {
  const {
    playerAvatarName: avatarName,
    playerRankTitle: rankTitle,
    stateIndicators: {
      firstIndicator: firstInd,
      secondIndicator: secondInd,
      thirdIndicator: thirdInd
    },
    time,
    network,
    buffs
  } = data;

  return (
    <div className={classes.PlayerInfo}>
      <div className={classes.PlayerStats}>
        <div className={classes.PlayerAvatarAndRankWrapper}>
          {/*@ts-ignore*/}
          <PlayerAvatarAndRank rankTitle={rankTitle} avatarName={avatarName}/>
        </div>
        <div className={classes.PlayerIndicatorsAndNetwork}>
          <div className={classes.NetworkAndTime}>
            <NetworkAndTime time={time} network={network}/>
          </div>
          <div className={classes.PlayerIndicatorsWrapper}>
            <PlayerIndicators firstIndicator={firstInd} secondIndicator={secondInd} thirdIndicator={thirdInd}/>
          </div>
        </div>
      </div>
      <div className={classes.PlayerBuffsWrapper}>
        <Buffs buffs={buffs}/>
      </div>
    </div>
  );
});

export default PlayerInfo;