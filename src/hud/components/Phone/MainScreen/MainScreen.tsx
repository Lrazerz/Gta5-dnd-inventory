import React from 'react';
import {useDispatch} from 'react-redux';
import classes from '../../../styles/components/Phone/MainScreen/MainScreen.module.scss';
import phoneButton from '../../../assets/images/components/Phone/components/MainScreen/phoneButton.svg';
import browserButton from '../../../assets/images/components/Phone/components/MainScreen/browserButton.svg';
import chatButton from '../../../assets/images/components/Phone/components/MainScreen/chatButton.svg';
import settingsButton from '../../../assets/images/components/Phone/components/MainScreen/settingsButton.svg';
import {openScreen} from "../../../redux/actions/phone";
import {OpenedScreenEnum} from "../models/interfaces/enums";

interface Props {
  lastNotifications?: any[],
}

const MainScreen: React.FC<Props> = React.memo(({lastNotifications}) => {

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