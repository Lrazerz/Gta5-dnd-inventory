import React from 'react';
import {useDispatch} from 'react-redux';
import classes from '../../../styles/components/Phone/MainScreen/MainScreen.module.scss';
import phoneButton from '../../../../assets/hud/images/components/Phone/components/MainScreen/phoneButton.svg';
import browserButton from '../../../../assets/hud/images/components/Phone/components/MainScreen/browserButton.svg';
import chatButton from '../../../../assets/hud/images/components/Phone/components/MainScreen/chatButton.svg';
import settingsButton from '../../../../assets/hud/images/components/Phone/components/MainScreen/settingsButton.svg';
import {openScreen} from "../../../../redux/actions/hud/phone";
import {OpenedScreenEnum} from "../models/interfaces/enums";

const MainScreen = React.memo(() => {

  const dispatch = useDispatch();

  return (
    <div className={classes.MainScreen}>
      <div className={classes.ButtonsWrapper}>
        <img src={phoneButton} className={classes.SingleButton} onClick={() => dispatch(openScreen(OpenedScreenEnum.phoneTyping))}/>
        <img src={browserButton} className={classes.SingleButton}/>
        <img src={chatButton} className={classes.SingleButton} onClick={() => dispatch(openScreen(OpenedScreenEnum.chats))}/>
        <img src={settingsButton} className={classes.SingleButton} onClick={() => dispatch(openScreen(OpenedScreenEnum.settings))}/>
      </div>
    </div>
  );
});

export default MainScreen;