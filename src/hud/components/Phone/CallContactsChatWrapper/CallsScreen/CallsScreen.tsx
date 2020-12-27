import React from 'react';
import {useSelector} from 'react-redux';
import classes from '../../../../../styles/hud/components/Phone/CallContactsChatWrapper/CallsScreen/CallsScreen.module.scss';
import SingleCall from "./SingleCall";
import {ThemesEnum} from "../../../../models/Phone/enums";

const CallsScreen = React.memo(() => {

  const {calls, theme} = useSelector(({hud: {phone}}) => ({calls: phone.calls, theme: phone.settings.cosmetics.theme}));

  // можно по клику вешать onMouseMove и пробоват менять scrollTop (имитация тач скролла)
  // const ref = useRef();
  // useEffect(() => {
  //   if(ref.current) {
  //     // @ts-ignore
  //     ref.current.scrollTop = 50;
  //   }
  // },[ref.current]);

  const scrollWrapperStyles = {
    boxShadow: `inset 0 -3rem ${theme === ThemesEnum.black ? 'rgba(0, 0, 0, 0.8)' : 'rgba(245, 246, 252, 0.8)'}`,
  }

  const blurredBottomBlockStyles = {
    background: `linear-gradient(180deg, ${theme === ThemesEnum.black ? '#000, #011' : '#F5F6FC, #D6D6DC'})`,
  }

  const callsBlock = calls.map(call => {
    return (
      <div key={call.id} className={classes.SingleCallWrapper}>
        <SingleCall call={call} theme={theme}/>
      </div>
    )
  });

  return (
    <div className={classes.CallsScreen}>
      <div className={classes.ScrollWrapper} style={scrollWrapperStyles}>
        {callsBlock}
      </div>
      <div className={classes.BlurredBottomBlock} style={blurredBottomBlockStyles}/>
    </div>
  );
});

export default CallsScreen;