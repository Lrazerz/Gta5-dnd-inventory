import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classes from '../../../../styles/hud/components/Phone/MainScreen/MainScreen.module.scss';
import phoneButton from '../../../../assets/hud/images/components/Phone/components/MainScreen/phoneButton.svg';
import browserButton from '../../../../assets/hud/images/components/Phone/components/MainScreen/browserButton.svg';
import chatButton from '../../../../assets/hud/images/components/Phone/components/MainScreen/chatButton.svg';
import settingsButton from '../../../../assets/hud/images/components/Phone/components/MainScreen/settingsButton.svg';
import {openScreen} from "../../../../redux/actions/hud/phone";
import {OpenedScreenEnum} from "../models/interfaces/enums";
import LastMessage from "./LastMessage";
import {preventImageDrag} from "../../../../utils/utils";

const MainScreen = React.memo(() => {

  const dispatch = useDispatch();

  const {lastMessages, theme} = useSelector((state) => {
    return {lastMessages: state.hud.phone.lastMessages, theme: state.hud.phone.theme}
  });

  const lastMessagesBlock = lastMessages.map(message => {
    return (
      <div className={classes.LastMessageWrapper} key={message.id}>
        <LastMessage messageInfo={message} theme={theme}/>
      </div>
    );
  });

  return (
    <div className={classes.MainScreen}>
      <div className={classes.LastMessages}>
        {lastMessagesBlock}
      </div>
      <div className={classes.ButtonsWrapper}>
        <img src={phoneButton} className={classes.SingleButton}
             onClick={() => dispatch(openScreen(OpenedScreenEnum.phoneTyping))} onDragStart={preventImageDrag}/>
        <img src={browserButton} className={classes.SingleButton}
             onDragStart={preventImageDrag}/>
        <img src={chatButton} className={classes.SingleButton}
             onClick={() => dispatch(openScreen(OpenedScreenEnum.chats))} onDragStart={preventImageDrag}/>
        <img src={settingsButton} className={classes.SingleButton}
             onClick={() => dispatch(openScreen(OpenedScreenEnum.settings))} onDragStart={preventImageDrag}/>
      </div>
    </div>
  );
});

export default MainScreen;