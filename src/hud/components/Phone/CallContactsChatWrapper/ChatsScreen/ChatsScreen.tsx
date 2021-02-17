import React from 'react';
import { useSelector } from 'react-redux';
import classes from '../../../../../styles/hud/components/Phone/CallContactsChatWrapper/ChatsScreen/ChatsScreen.module.scss';
import SingleChat from './SingleChat';
import { ThemesEnum } from '../../../../../models/hud/phone/enums';

const ChatsScreen = React.memo(() => {
  const chats = useSelector((state) => state.hud.phone.chatsDemo);
  const theme = useSelector((state) => state.hud.phone.settings.cosmetics.theme);

  const blurredBottomBlockStyles = {
    background: `linear-gradient(180deg, ${theme === ThemesEnum.black ? '#000, #011' : '#F5F6FC, #D6D6DC'})`,
  };

  const contactsBlock = chats.map((chat) => {
    return (
      <div className={classes.SingleChatWrapper} key={chat.id}>
        <SingleChat chat={chat} theme={theme} />
      </div>
    );
  });

  return (
    <div className={classes.ChatsScreen}>
      <div className={classes.ScrollWrapper}>{contactsBlock}</div>
      <div className={classes.BlurredBottomBlock} style={blurredBottomBlockStyles} />
    </div>
  );
});

export default ChatsScreen;
