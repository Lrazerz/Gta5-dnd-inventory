import React, {CSSProperties, Dispatch, ReactElement} from 'react';
import classes from '../../../styles/components/Phone/CallContactsChatWrapper/Tabs.module.scss';
import LeadText from "../Text/LeadText";
import { useSwipeable } from "react-swipeable";
import {OpenedScreenEnum} from "../../../../redux/reducers/hud/phone";
import {translateToRussianOpenedScreen} from "../utils/translateToRussianOpenedScreen";

interface Props {
  // value - Вызовы/Последние/...
  openedScreen: number;
  onChange: Dispatch<(prevState: undefined) => undefined>;
}

const Tabs: React.FC<Props> = React.memo(({openedScreen, onChange}) => {


  //region ------------------------------ Set active tab border ------------------------------
  const borderStyle = '0.1rem solid #6328E9';

  const callTypingStyles: CSSProperties = {
    borderBottom: openedScreen === OpenedScreenEnum.phoneTyping ? borderStyle : "none",
  }
  const recentStyles: CSSProperties = {
    borderBottom: openedScreen === OpenedScreenEnum.calls ? borderStyle : "none",
  }
  const contactsStyles: CSSProperties = {
    borderBottom: openedScreen === OpenedScreenEnum.contacts ? borderStyle : "none",
  }
  const chatsStyles: CSSProperties = {
    borderBottom: openedScreen === OpenedScreenEnum.chats ? borderStyle : "none",
  }
  //endregion

  const tabClickHandler = (tabIdx) => {
    // @ts-ignore
    onChange(tabIdx);
  }

  //region ------------------------------ Display different ui depend on value ------------------------------
  const callRecentContacts = (
    <>
      <div className={`${classes.CallTyping} ${classes.Tab}`} style={callTypingStyles}
           onClick={() => tabClickHandler(OpenedScreenEnum.phoneTyping)}>
        <LeadText styles={{fontSize: '0.41rem'}}>
          {translateToRussianOpenedScreen(OpenedScreenEnum.phoneTyping)}
        </LeadText>
      </div>
      <div className={`${classes.Recent} ${classes.Tab}`} style={recentStyles}
           onClick={() => tabClickHandler(OpenedScreenEnum.calls)}>
        <LeadText styles={{fontSize: '0.41rem'}}>
          {translateToRussianOpenedScreen(OpenedScreenEnum.calls)}
        </LeadText>
      </div>
      <div className={`${classes.Contacts} ${classes.Tab}`}
           onClick={() => tabClickHandler(OpenedScreenEnum.contacts)}>
        <LeadText styles={{fontSize: '0.41rem'}}>
          {translateToRussianOpenedScreen(OpenedScreenEnum.contacts)}
        </LeadText>
      </div>
    </>
  )

  const contactsChats = (
    <>
      <div className={`${classes.SecondRecent} ${classes.Tab}`} style={recentStyles}
           onClick={() => tabClickHandler(OpenedScreenEnum.calls)}>
        <LeadText styles={{fontSize: '0.41rem'}}>
          {translateToRussianOpenedScreen(OpenedScreenEnum.calls)}
        </LeadText>
      </div>
      <div className={`${classes.SecondContacts} ${classes.Tab}`} style={contactsStyles}
           onClick={() => tabClickHandler(OpenedScreenEnum.contacts)}>
        <LeadText styles={{fontSize: '0.41rem'}}>
          {translateToRussianOpenedScreen(OpenedScreenEnum.contacts)}
        </LeadText>
      </div>
      <div className={`${classes.Chats} ${classes.Tab}`} style={chatsStyles}
           onClick={() => tabClickHandler(OpenedScreenEnum.chats)}>
        <LeadText styles={{fontSize: '0.41rem'}}>
          {translateToRussianOpenedScreen(OpenedScreenEnum.chats)}
        </LeadText>
      </div>
    </>
  )
  //endregion

  const displayedBlock: ReactElement = (openedScreen === OpenedScreenEnum.phoneTyping || openedScreen === OpenedScreenEnum.calls)
    ? callRecentContacts : contactsChats;

  return (
    <div className={classes.Tabs}>
      {displayedBlock}
      <div className={classes.TabsBorder}/>
    </div>
  );
});
//@ts-ignore
export default Tabs;