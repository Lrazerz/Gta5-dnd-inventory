import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from '../../../../../styles/hud/components/Phone/CallContactsChatWrapper/ChatsScreen/SingleChat.module.scss';
import { ChatsDemoInterface, ThemesEnum } from '../../../../../models/hud/phone/reducerInterfaces';
import phoneTheme from '../../consts/phoneTheme';
import LeadText from '../../Text/LeadText';
import { openScreen, setSelectedChat } from '../../../../../redux/actions/hud/phone';
import { OpenedScreenEnum } from '../../../../../models/hud/phone/enums';

interface Props {
  chat: ChatsDemoInterface;
  theme: ThemesEnum;
}

const SingleChat: React.FC<Props> = React.memo(({ chat, theme }) => {
  const [importedAvatarImg, setImportedAvatarImg] = useState();

  const dispatch = useDispatch();

  const unreadMessagesRef = useRef();

  useEffect(() => {
    if (unreadMessagesRef.current) {
      const width = window.getComputedStyle(unreadMessagesRef.current).width;
      //@ts-ignore
      unreadMessagesRef.current.style.height = width;
    }
  }, [unreadMessagesRef.current]);

  useEffect(() => {
    const loadThemeImage = async () => {
      if (chat.imageName) {
        let importedThemeImage;
        try {
          importedThemeImage = await import(`../../../../../assets/avatars/${chat.imageName}.svg`);
          setImportedAvatarImg(importedThemeImage.default);
        } catch (e) {
          if (e.message.startsWith('Cannot find')) {
            console.log(`Chat avatar "${chat.imageName}" import error, using default avatar`);
            const defaultAvatarName = theme === ThemesEnum.white ? 'default-avatar' : 'default-avatar-white';
            importedThemeImage = await import(`../../../../../assets/avatars/${defaultAvatarName}.svg`);
            setImportedAvatarImg(importedThemeImage.default);
          }
        }
      }
    };
    loadThemeImage();
  }, [chat.imageName]);

  const selectChatHandler = () => {
    dispatch(openScreen(OpenedScreenEnum.selectedChat, chat.id));
    dispatch(
      setSelectedChat({
        id: chat.id,
        name: chat.name,
        imageName: chat.imageName,
        messages: [],
      }),
    );
  };

  const nameStyles: CSSProperties = {
    color: theme === ThemesEnum.black ? phoneTheme.lightPurpleText : phoneTheme.darkPurple,
    fontSize: '0.57rem',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    marginBottom: '2%',
    marginTop: 'auto',
  };

  // for time and number too
  const TimeStyles: CSSProperties = {
    color: theme === ThemesEnum.black ? phoneTheme.white : phoneTheme.lightPurpleText,
    fontSize: '0.495rem',
    fontWeight: 400,
    marginBottom: '8%',
    marginTop: 'auto',
  };

  const TextStyles: CSSProperties = {
    color: theme === ThemesEnum.black ? phoneTheme.white : phoneTheme.lightPurpleText,
    fontSize: '0.495rem',
    fontWeight: 400,
    marginTop: 'auto',
  };

  const textBlockStyles: CSSProperties = {
    borderBottom: `0.045rem solid ${theme === ThemesEnum.white ? phoneTheme.lightPurpleBorder : phoneTheme.darkPurple}`,
  };

  const nameTimeTextBlock = (
    <>
      <div className={classes.NameTimeWrapper}>
        <div className={classes.NameWrapper}>
          <LeadText styles={nameStyles}>{chat.name}</LeadText>
        </div>
        {chat.lastMessage && (
          <div className={classes.TimeWrapper}>
            <LeadText styles={TimeStyles}>{chat.lastMessageDate.hours + ':' + chat.lastMessageDate.minutes}</LeadText>
          </div>
        )}
      </div>
      {chat.lastMessage && (
        <div className={classes.TextWrapper} style={textBlockStyles}>
          <div className={classes.Text} style={TextStyles}>
            {chat.lastMessage}
          </div>
        </div>
      )}
    </>
  );

  return (
    <div className={classes.SingleChat} onClick={selectChatHandler}>
      <div className={classes.ImageContainer}>
        <div className={classes.ImageWrapper}>
          <img className={classes.Image} src={importedAvatarImg} />
          {chat.unreadMessages > 0 && (
            <div className={classes.UnreadMessages} ref={unreadMessagesRef}>
              <div className={classes.UnreadMessagesText}>{chat.unreadMessages > 9 ? '9+' : chat.unreadMessages}</div>
            </div>
          )}
        </div>
      </div>
      <div className={classes.InfoWrapper}>
        {/*<div className={classes.NameWrapper}>*/}
        {/*  <LeadText styles={nameStyles}>{call.name}</LeadText>*/}
        {/*</div>*/}
        {nameTimeTextBlock}
      </div>
    </div>
  );
});

export default SingleChat;
