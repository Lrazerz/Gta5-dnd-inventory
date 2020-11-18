import React from 'react';
import {useSelector} from 'react-redux';
import classes from '../../../../styles/components/Phone/CallContactsChatWrapper/CallsScreen/CallsScreen.module.scss';
import SingleCall from "./SingleCall";
import {ThemesEnum} from "../../models/interfaces/enums";

const CallsScreen = React.memo(() => {

  const {calls, theme} = useSelector(({phone}) => ({calls: phone.calls, theme: phone.settings.cosmetics.theme}));

  // можно по клику вешать onMouseMove и пробоват менять scrollTop (имитация тач скролла)
  // const ref = useRef();
  // useEffect(() => {
  //   if(ref.current) {
  //     // @ts-ignore
  //     ref.current.scrollTop = 50;
  //   }
  // },[ref.current]);

  const scrollWrapperStyles = {
    boxShadow: `inset 0 -2rem ${theme === ThemesEnum.white ? 'rgba(245, 246, 252, 0.8)' : 'rgba(0, 0, 0, 0.8)'}`,
  }

  const blurredBottomBlockStyles = {
    background: `linear-gradient(180deg, ${theme === ThemesEnum.white ? '#F5F6FC, #D6D6DC' : '#000, #011'})`,
  }

  const callsBlock = calls.map(call => {
    return (
      <div className={classes.SingleCallWrapper}>
        <SingleCall key={call.id} call={call} theme={theme}/>
      </div>
    )
  });

  return (
    <div className={classes.CallsScreen}>
      <div className={classes.ScrollWrapper} style={scrollWrapperStyles}>
        {callsBlock}
      </div>
      <div className={classes.BlurredBottomBlock} style={blurredBottomBlockStyles}>

      </div>
    </div>
  );
});

export default CallsScreen;