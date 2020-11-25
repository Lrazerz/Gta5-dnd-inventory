import React from 'react';
import classes from '../../../styles/hud/components/PlayerInfo/PlayerIndicators.module.scss';

import ArmorImg from '../../../assets/hud/images/components/PlayerInfo/indicators/Armor.svg';
import HealthImage from '../../../assets/hud/images/components/PlayerInfo/indicators/Health.svg';
import FoodImage from '../../../assets/hud/images/components/PlayerInfo/indicators/FoodState.svg';

interface Props {
  firstIndicator: number;
  secondIndicator: number;
  thirdIndicator: number;
}

const PlayerIndicators: React.FC<Props> = React.memo(({firstIndicator,
                                                      secondIndicator, thirdIndicator}) => {

  let getIndicatorBackground: (indicatorPosition: number, indicatorPercentage) => {background: string, width: string};
  getIndicatorBackground = (indicatorPosition, indicatorPercentage) => {
    let fromColor = '#A8BBC1';
    let toColor = '#FCFCFD';

    if (indicatorPosition === 2) {
      fromColor = '#DF1515';
      toColor = '#FA5D5E';
    }
    return {
      background: `linear-gradient(90deg, ${fromColor} 0%, ${toColor} 100%)`,
      width: `${indicatorPercentage+'%'}`
    };
  }

  const firstIndicatorBackground = getIndicatorBackground(1, firstIndicator);
  const secondIndicatorBackground = getIndicatorBackground(2, secondIndicator);
  const thirdIndicatorBackground = getIndicatorBackground(3, thirdIndicator);

  return (
    <div className={classes.PlayerIndicators}>
      <div className={classes.IndicatorsIconsWrapper}>
        <div className={classes.ShiftedIndicatorsIconsWrapper}>
          <div className={classes.SingleIndicatorIconWrapper}>
            <img src={FoodImage}/>
          </div>
          <div className={classes.SingleIndicatorIconWrapper}>
            <img src={HealthImage}/>
          </div>
          <div className={classes.SingleIndicatorIconWrapper}>
            <img src={ArmorImg}/>
          </div>
        </div>

      </div>

      <div className={classes.IndicatorsWrapper}>
        <div className={classes.ShiftedIndicatorsWrapper}>
          <div className={classes.SingleIndicatorWrapper}>
            <div className={classes.SingleIndicator} style={firstIndicatorBackground}>
            </div>
          </div>
          <div className={classes.SingleIndicatorWrapper}>
            <div className={classes.SingleIndicator} style={secondIndicatorBackground}>
            </div>
          </div>
          <div className={classes.SingleIndicatorWrapper}>
            <div className={classes.SingleIndicator} style={thirdIndicatorBackground}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
})

export default PlayerIndicators;