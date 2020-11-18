import React from 'react';
import classes from '../../styles/components/PlayerInfo/NetworkAndTime.module.scss';

interface Props {
  time: string;
  network: number;
}

const NetworkAndTime: React.FC<Props> = React.memo(({time, network}) => {

  return (
    <div className={classes.NetworkAndTime}>
      <div className={classes.ShifterNetworkAndTime}>
        <div className={classes.TimeContainer}>
          {time}
        </div>
        <div className={classes.NetworkContainer}>
            <div className={classes.ShiftedNetworkContainer}>
              <div className={classes.FirstStrip}/>
              {network > 33 && <div className={classes.SecondStrip}/>}
              {network > 66 && <div className={classes.ThirdStrip}/>}
          </div>
        </div>
      </div>
    </div>
  );
});
//@ts-ignore
export default NetworkAndTime;