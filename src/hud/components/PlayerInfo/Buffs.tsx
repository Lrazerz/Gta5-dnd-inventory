import React from 'react';
import classes from '../../styles/components/PlayerInfo/Buffs.module.scss';
import {BuffInterface} from "../../models/Buff";
import SingleBuff from "./SingleBuff";

interface Props {
  buffs: BuffInterface[];
}

const Buffs: React.FC<Props> = React.memo(function Buffs({buffs}) {

  const buffsBlock = buffs.map((buff,i) => (
    <SingleBuff key={i} buff={buff}/>
  ))

  return (
    <div className={classes.Buffs}>
      <div className={classes.BorderedBuffsWrapper}>
        {buffsBlock}
      </div>
    </div>
  );
});

export default Buffs;