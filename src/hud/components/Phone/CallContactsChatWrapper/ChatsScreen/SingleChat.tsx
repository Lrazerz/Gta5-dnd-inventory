import React, {CSSProperties, useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import classes
  from '../../../../../styles/hud/components/Phone/CallContactsChatWrapper/ChatsScreen/SingleChat.module.scss';
import {ChatsDemoInterface, ThemesEnum} from "../../models/interfaces/reducerInterfaces";
import phoneTheme from '../../consts/phoneTheme';
import LeadText from "../../Text/LeadText";
import {preventImageDrag} from "../../../../../utils/utils";
import {openScreen, setSelectedChat} from "../../../../../redux/actions/hud/phone";
import {OpenedScreenEnum} from "../../models/interfaces/enums";

interface Props {
  chat: ChatsDemoInterface;
  theme: ThemesEnum;
}

const SingleChat: React.FC<Props> = React.memo(({chat, theme}) => {

  const [importedAvatarImg, setImportedAvatarImg] = useState();

  const dispatch = useDispatch();

  const unreadMessagesRef = useRef();

  useEffect(() => {
    if(unreadMessagesRef.current) {
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
          if(e.message.startsWith('Cannot find')) {
            console.log(`Chat avatar "${chat.imageName}" import error, using default avatar`);
            let defaultAvatarName = theme === ThemesEnum.white ? 'default-avatar' : 'default-avatar-white';
            importedThemeImage = await import(`../../../../../assets/avatars/${defaultAvatarName}.svg`);
            setImportedAvatarImg(importedThemeImage.default);
          }
        }
      }
    }
    loadThemeImage();
  }, [chat.imageName]);

  const selectChatHandler = () => {
    dispatch(openScreen(OpenedScreenEnum.selectedChat, chat.id));
    dispatch(setSelectedChat({id: chat.id, name: chat.name,imageName: chat.imageName,messages: []}))
  }

  const nameStyles: CSSProperties = {
    color: theme === ThemesEnum.black ? phoneTheme.lightPurpleText : phoneTheme.darkPurple,
    fontSize: '0.57rem',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    marginBottom: '2%',
    marginTop: 'auto',
  }

  // for time and number too
  let TimeStyles: CSSProperties = {
    color: theme === ThemesEnum.black ? phoneTheme.white: phoneTheme.lightPurpleText,
    fontSize: '0.495rem',
    fontWeight: 400,
    marginBottom: '8%',
    marginTop: 'auto',
  }

  let TextStyles: CSSProperties = {
    color: theme === ThemesEnum.black ? phoneTheme.white: phoneTheme.lightPurpleText,
    fontSize: '0.495rem',
    fontWeight: 400,
    marginTop: 'auto',
  }

  let textBlockStyles: CSSProperties = {
    borderBottom: `0.045rem solid ${theme === ThemesEnum.white ? phoneTheme.lightPurpleBorder : phoneTheme.darkPurple}`,
  }

  let nameTimeTextBlock = (
    <>
      <div className={classes.NameTimeWrapper}>
        <div className={classes.NameWrapper}>
          <LeadText styles={nameStyles}>
            {chat.name}
          </LeadText>
        </div>
        <div className={classes.TimeWrapper}>
          <LeadText styles={TimeStyles}>
            {chat.lastMessageDate.hours + ':' + chat.lastMessageDate.minutes}
          </LeadText>
        </div>
      </div>
      <div className={classes.TextWrapper} style={textBlockStyles}>
        <div className={classes.Text} style={TextStyles}>
          {chat.lastMessage}
        </div>
      </div>
    </>
  )

  return (
    <div className={classes.SingleChat} onClick={selectChatHandler}>
      <div className={classes.ImageContainer}>
        <div className={classes.ImageWrapper}>
          <img className={classes.Image} src={importedAvatarImg} onDragStart={preventImageDrag}/>
          {chat.unreadMessages > 0 && (<div className={classes.UnreadMessages} ref={unreadMessagesRef}>
            <div className={classes.UnreadMessagesText}>
              {chat.unreadMessages > 9 ? '9+' : chat.unreadMessages}
            </div>
          </div>)}
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