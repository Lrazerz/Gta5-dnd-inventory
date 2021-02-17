import React, { CSSProperties } from 'react';
import classes from '../../../styles/hud/components/PlayerInfo/Buffs.module.scss';
import SingleBuff from './SingleBuff';
import { BuffInterface } from '../../../models/hud/hudInterfaces';

interface Props {
  buffs: BuffInterface[];
}

const Buffs: React.FC<Props> = React.memo(function Buffs({ buffs }) {
  const buffsBlock = buffs.map((buff, i) => <SingleBuff key={i} buff={buff} />);

  const buffsWrapperStyles: CSSProperties = {
    padding: buffs.length === 0 ? 0 : '0.34rem',
  };

  return (
    <div className={classes.Buffs}>
      <div className={classes.BorderedBuffsWrapper} style={buffsWrapperStyles}>
        {buffsBlock}
      </div>
    </div>
  );
});

export default Buffs;
