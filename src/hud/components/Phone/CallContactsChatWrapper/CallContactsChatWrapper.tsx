import React, {ReactElement} from 'react';
import {useDispatch} from 'react-redux';
import classes from '../../../styles/components/Phone/CallContactsChatWrapper/CallContactsChatWrapper.module.scss';
import Tabs from "./Tabs";
import {useSwipeable} from "react-swipeable";
import {OpenedScreenEnum} from "../models/interfaces/enums";
import {openScreen} from "../../../../redux/actions/hud/phone";
import PhoneTypingScreen from "./PhoneTypingScreen";
import CallsScreen from "./CallsScreen/CallsScreen";
import ContactsScreen from "./ContactsScreen/ContactsScreen";
import ChatsScreen from "./ChatsScreen/ChatsScreen";

interface Props {
  openedScreen: OpenedScreenEnum;
}

const CallContactsChatWrapper: React.FC<Props> = React.memo(({openedScreen}) => {

  const dispatch = useDispatch();

  //region ------------------------------ Swipe handlers ------------------------------
  const swipeHandler = (toLeft: boolean) => {
    console.log(toLeft ? 'left' : 'right');

    if(toLeft) {
      if(openedScreen === OpenedScreenEnum.chats) {
        return;
      }
      dispatch(openScreen(openedScreen + 1));
    }
    else {
      if(openedScreen === OpenedScreenEnum.phoneTyping) {
        dispatch(openScreen(OpenedScreenEnum.mainScreen));
        return;
      }
      dispatch(openScreen(openedScreen - 1));
    }
  }
  // to external lib
  const handlers = useSwipeable({
    onSwipedLeft: () => swipeHandler(true),
    onSwipedRight: () => swipeHandler(false),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  //endregion

  const changeTabHandler = (openedScreen) => {
    dispatch(openScreen(openedScreen));
  }
  // todo switch-case openedScreen to dispaly content

  let screenContent: ReactElement;
  switch (openedScreen) {
    case OpenedScreenEnum.phoneTyping: {
      screenContent = <PhoneTypingScreen/>
      break;
    }
    case OpenedScreenEnum.calls: {
      screenContent = <CallsScreen/>
      break;
    }
    case OpenedScreenEnum.contacts: {
      screenContent = <ContactsScreen/>
      break;
    }
    case OpenedScreenEnum.chats: {
      screenContent = <ChatsScreen/>
      break;
    }
    default: {
      screenContent = null;
    }
  }

  return (
    <div className={classes.CallContactsChatWrapper} {...handlers}>
      <div className={classes.TabsWrapper}>
        <Tabs openedScreen={openedScreen} onChange={changeTabHandler}/>
      </div>
      <div className={classes.ContentWrapper}>
        {screenContent}
      </div>
    </div>
  );
});

export default CallContactsChatWrapper;