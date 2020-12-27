import React, {useEffect} from 'react';
import classes from '../../styles/hud/components/CarInfo.module.scss';
import ProgressBar from 'progressbar.js'

// images
import DoorsLockedImg from '../../assets/hud/images/components/CarInfo/doorsClosedLight.svg';
import DoorsOpenedImg from '../../assets/hud/images/components/CarInfo/doorsOpened.svg';
import FullFuelCanisterImg from '../../assets/hud/images/components/CarInfo/FullFuel.svg';
import EmptyCanisterImg from '../../assets/hud/images/components/CarInfo/OutOfFuel.svg';
import KeyImg from '../../assets/hud/images/components/CarInfo/key.svg';

interface Props {
  // keys light or transparent
  isCarRunning: boolean;
  // 2 distinct icons
  isDoorsOpened: boolean;
  // any number
  speed: number;
  // from 1 to 100
  fuel: number;
}

const CarInfo: React.FC<Props> = React.memo(({isCarRunning, isDoorsOpened, speed, fuel}) => {


  const keyStyles = isCarRunning ? null : {opacity: 0.45};
  const doorsLockedStyles = isDoorsOpened ? {opacity: 0.45} : null;
  const doorsOpenedStyles = isDoorsOpened ? null : {opacity: 0.45};

  // draw progress bar (fuel)
  useEffect(() => {
    let fuelSvgWrapper = document.getElementById('fuel-svg-container');
    for(let i = 0; i < fuelSvgWrapper.childNodes.length; i++) {
      // @ts-ignore
      if (fuelSvgWrapper.childNodes[i].tagName.toLowerCase() === 'svg') {
        // @ts-ignore
        fuelSvgWrapper.childNodes[i].remove();
      }
    }

    let bar = new ProgressBar.Circle('#fuel-svg-container', {
      trailColor: 'rgba(188, 207, 193,0.3)',
      trailWidth: 4,
      easing: 'easeInOut',
      strokeWidth: 4,
      svgStyle: {
        display: 'block',
        width: '100%'
      },
      from: {color: '#fff', a: 1},
      to: {color: '#fff', a: 1},
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
      }
    });
    // displayed area
    const oneCellRelational = (89 - 11) / 100;
    const fuelCount = 11 + oneCellRelational * fuel;

    bar.set(fuelCount / 100);

    fuelSvgWrapper = document.getElementById('fuel-svg-container');

    for(let i = 0; i < fuelSvgWrapper.childNodes.length; i++) {
      // @ts-ignore
      if (fuelSvgWrapper.childNodes[i].tagName.toLowerCase() === 'svg') {
        // @ts-ignore
        fuelSvgWrapper.childNodes[i].style.transform = 'rotate(-180deg)';
      }
    }

  }, [fuel]);

  const fuelConditionalImg = fuel > 0 ? FullFuelCanisterImg : EmptyCanisterImg;

  return (
    <div className={classes.CarInfo}>
      <div className={classes.SpeedAndFuelWrapper}>
        <div className={classes.SpeedContainer}>
          <div className={classes.SpeedText}>
            {speed + ' KM/H'}
          </div>
        </div>
        <div className={classes.FuelContainer}>
          <div className={classes.FuelWrapper}>
            <div id='fuel-svg-container'>
              <img src={fuelConditionalImg} className={classes.FuelCanisterWrapper}/>
            </div>
          </div>
        </div>
        <div className={classes.DecorativeBorder}/>
      </div>
      <div className={classes.CarStateWrapper}>
        <div className={classes.BorderedGrayBlock}>
          <div className={classes.KeyWrapper}>
            <img src={KeyImg} className={classes.KeyImage} style={keyStyles}/>
          </div>
          <div className={classes.DoorsStateWrapper}>
            <img src={DoorsLockedImg} className={classes.DoorImage} style={doorsLockedStyles}/>
            <img src={DoorsOpenedImg} className={classes.DoorImage} style={doorsOpenedStyles}/>
          </div>
        </div>
      </div>
    </div>
  );
});
//@ts-ignore
export default CarInfo;