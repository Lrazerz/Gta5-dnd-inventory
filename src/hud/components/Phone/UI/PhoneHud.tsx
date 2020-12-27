import React, {CSSProperties, ReactElement} from 'react';
import {useSelector} from 'react-redux';
import classes from '../../../../styles/hud/components/Phone/UI/PhoneHud.module.scss';

import extWifiImg from '../../../../assets/hud/images/components/Phone/components/PhoneHud/wifi.svg';
import networkImg from '../../../../assets/hud/images/components/Phone/components/PhoneHud/network.svg';
import batteryImg from '../../../../assets/hud/images/components/Phone/components/PhoneHud/battery.svg';
import LeadText from "../Text/LeadText";
import {OpenedScreenEnum, ThemesEnum} from "../../../models/Phone/enums";

interface Props {
  children: any;
}

const PhoneHud: React.FC<Props> = React.memo(function PhoneHud({children}) {

  const {
    theme,
    hudData: {
      time,
      network,
      wifi,
      battery
    },
    openedScreen
  } = useSelector(({hud: {phone}}) => ({theme: phone.settings.cosmetics.theme, hudData: phone.hudData, openedScreen: phone.openedScreen}));

  //надо брать тему и цвета time network, battery и wifi в зависимости от темы
  // можно батарею клип-пасом, тогда проще задавать цвета и значение
  // и вайфай также (будут добавляться новые полоски в зависимости от уровня сигнала

  const isOnScreenWithImage = openedScreen === OpenedScreenEnum.mainScreen || openedScreen === OpenedScreenEnum.incomingCall ||
    openedScreen === OpenedScreenEnum.currentCall;

  // if on screen without image
  const colorOnScreenWithoutImage = theme === ThemesEnum.black ? '#fff' : '#251152';
  const color = isOnScreenWithImage ? '#fff' : colorOnScreenWithoutImage;

  // wifi - есть функция куда бросаем сигнал и тему для определения цвета
  const wifiImg = getWifiSvg(wifi, color);
  const networkImg = getNetworkSvg(network, color);
  const batteryImg = getBatterySvg(battery, color);

  const timeStyles: CSSProperties = {
    // always white on screens with theme image
    color: color,
    // color: '#fff',
    fontSize: '0.72rem',
    fontWeight: 400,
  }

  return (
    <div className={classes.PhoneHud}>
      <div className={classes.IndicatorsAndTimeWrapper}>
        <div className={classes.IndicatorsAndTime}>
          <LeadText styles={timeStyles}>
            {time}
          </LeadText>
          <div className={classes.IndicatorsWrapper}>
            {networkImg}
            {wifiImg}
            {batteryImg}
          </div>
        </div>
      </div>
      <div className={classes.PhoneContent}>
        {children}
      </div>
    </div>
  );
});

//region Utils to generate hood indicators
let getWifiSvg: (wifiSignal: number, color: string) => ReactElement;
getWifiSvg = (wifiSignal, color) => {

  let svgContent;

  switch (true) {
    case wifiSignal > 66: {
      svgContent = (
        <>
          <path id="Path_6" data-name="Path 6" d="M16.762,69.629a.183.183,0,0,0-.022-.026,11.8,11.8,0,0,0-16.686,0,.184.184,0,0,0,0,.261l1.22,1.22a.184.184,0,0,0,.26,0,9.694,9.694,0,0,1,13.725,0,.184.184,0,0,0,.26,0l1.22-1.22a.184.184,0,0,0,.022-.234Z" transform="translate(0 -66.147)" fill={color}/>
          <path id="Path_7" data-name="Path 7" d="M68.11,153.719a8.515,8.515,0,0,0-6.059,2.514.184.184,0,0,0,0,.261l1.216,1.216a.184.184,0,0,0,.26,0,6.473,6.473,0,0,1,9.165,0,.184.184,0,0,0,.261,0l1.216-1.216a.184.184,0,0,0,0-.261A8.515,8.515,0,0,0,68.11,153.719Z" transform="translate(-59.713 -150.493)" fill={color}/>
        </>
      )
      break;
    }
    case wifiSignal > 33: {
      svgContent = <path id="Path_7" data-name="Path 7" d="M68.11,153.719a8.515,8.515,0,0,0-6.059,2.514.184.184,0,0,0,0,.261l1.216,1.216a.184.184,0,0,0,.26,0,6.473,6.473,0,0,1,9.165,0,.184.184,0,0,0,.261,0l1.216-1.216a.184.184,0,0,0,0-.261A8.515,8.515,0,0,0,68.11,153.719Z" transform="translate(-59.713 -150.493)" fill={color}/>
      break;
    }
    default: {
      svgContent = null;
    }
  }

  const finalSvg: ReactElement = (
    <svg id="Group_2" data-name="Group 2" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16.794 11.92" className={classes.Image}>
      {svgContent}
      <path id="Path_8" data-name="Path 8" d="M127.723,241.292a5.31,5.31,0,0,0-3.779,1.568.184.184,0,0,0,0,.261l1.216,1.216a.184.184,0,0,0,.26,0,3.252,3.252,0,0,1,4.6,0,.184.184,0,0,0,.26,0l1.216-1.216a.184.184,0,0,0,0-.26A5.31,5.31,0,0,0,127.723,241.292Z" transform="translate(-119.326 -234.839)" fill={color}/>
      <path id="Path_9" data-name="Path 9" d="M192.043,334.083a1.852,1.852,0,0,0-1.318.546.184.184,0,0,0,0,.26l1.188,1.188a.184.184,0,0,0,.26,0l1.188-1.188a.184.184,0,0,0,0-.26A1.852,1.852,0,0,0,192.043,334.083Z" transform="translate(-183.646 -324.212)" fill={color}/>
    </svg>
    );

  return finalSvg;
}

// value from 1 to 100
let getNetworkSvg: (networkValue: number, color: string) => ReactElement
getNetworkSvg = (networkValue, color) => {

  let svgContent;

  switch (true) {
    case networkValue > 75: {
      svgContent = (
        <>
          <rect id="Rectangle_9" data-name="Rectangle 9" width="3" height="7" transform="translate(-1129 -13.623)" fill={color}/>
          <rect id="Rectangle_10" data-name="Rectangle 10" width="3" height="9" transform="translate(-1125 -15.623)" fill={color}/>
          <rect id="Rectangle_11" data-name="Rectangle 11" width="3" height="12.377" transform="translate(-1121 -19)" fill={color}/>
        </>
      );
      break;
    }
    case networkValue > 50: {
      svgContent = (
        <>
          <rect id="Rectangle_9" data-name="Rectangle 9" width="3" height="7" transform="translate(-1129 -13.623)" fill={color}/>
          <rect id="Rectangle_10" data-name="Rectangle 10" width="3" height="9" transform="translate(-1125 -15.623)" fill={color}/>
        </>
      );
      break;
    }
    case networkValue > 25: {
      svgContent = (
        <>
          <rect id="Rectangle_9" data-name="Rectangle 9" width="3" height="7" transform="translate(-1129 -13.623)" fill={color}/>
        </>
      );
      break;
    }
    default: {
      svgContent = null;
    }
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 15 12.377" className={classes.Image}>
      <g id="Group_3" data-name="Group 3" transform="translate(1133 19)">
        <rect id="Rectangle_8" data-name="Rectangle 8" width="3" height="5" transform="translate(-1133 -11.623)" fill={color}/>
        {svgContent}
      </g>
    </svg>
  );
}

// value from 1 to 100
let getBatterySvg: (batteryValue: number, color: string) => ReactElement
getBatterySvg = (batteryValue, color) => {

  // let svgContent;

  //transform value to proper display
  const displayedValue = batteryValue * 78/100;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22.62 11.816" className={classes.BatteryImage}>
      <path id="battery" d="M24.536,1.508H22.123V0H17.692V1.508H15.279A1.294,1.294,0,0,0,14,2.814v18.5a1.294,1.294,0,0,0,1.279,1.306h9.257a1.294,1.294,0,0,0,1.279-1.306V2.814A1.294,1.294,0,0,0,24.536,1.508ZM18.431.754h2.954v.754H18.431Zm6.646,20.56a.547.547,0,0,1-.541.552H15.279a.547.547,0,0,1-.541-.552V2.814a.547.547,0,0,1,.541-.552h9.257a.547.547,0,0,1,.541.552Z" transform="translate(22.62 -14) rotate(90)" fill={color}/>

      <rect id="Rectangle_7" data-name="Rectangle 7" width={displayedValue + '%'} height="70%" fill={color} x="8%" y="15%"/>
    </svg>
  );
}





//endregion

export default PhoneHud;