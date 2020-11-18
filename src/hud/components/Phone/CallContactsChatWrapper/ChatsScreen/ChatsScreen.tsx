import React from 'react';
import {useSelector} from 'react-redux';
import classes from '../../../../styles/components/Phone/CallContactsChatWrapper/ChatsScreen/ChatsScreen.module.scss';
import SingleChat from "./SingleChat";
import {ThemesEnum} from "../../models/interfaces/enums";

const ChatsScreen = React.memo(() => {

  const {chats, theme} = useSelector(({phone}) => ({chats: phone.chatsDemo, theme: phone.settings.cosmetics.theme}));

  const blurredBottomBlockStyles = {
    background: `linear-gradient(180deg, ${theme === ThemesEnum.white ? '#F5F6FC, #D6D6DC' : '#000, #011'})`,
  }

  const contactsBlock = chats.map(chat => {
    return (
      <div className={classes.SingleChatWrapper}>
        <SingleChat key={chat.id} chat={chat} theme={theme}/>
      </div>
    )
  });

  return (
    <div className={classes.ChatsScreen}>
      <div className={classes.ScrollWrapper}>
        {contactsBlock}
      </div>
      <div className={classes.BlurredBottomBlock} style={blurredBottomBlockStyles}/>
    </div>
  );
});

export default ChatsScreen;