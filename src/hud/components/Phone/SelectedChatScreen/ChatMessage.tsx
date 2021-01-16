import React, {CSSProperties, Ref} from 'react';
import classes from '../../../../styles/hud/components/Phone/SelectedChatScreen/ChatMessage.module.scss';
import {ChatMessageInterface, DateObjectInterface, ThemesEnum} from "../../../models/phone/reducerInterfaces";
import LeadText from "../Text/LeadText";
import phoneTheme from "../consts/phoneTheme";

interface Props {
  direction: 'in' | 'out',
  date: DateObjectInterface,
  message: ChatMessageInterface,
  playerImage: any,

  theme: ThemesEnum,
}

const ChatMessage: React.FC<Props> = React.memo(({direction, date, message, playerImage, theme}) => {

  const additionalAvatarWrapperStyles: CSSProperties = {
    marginLeft: direction === 'in' ? 'auto' : '13%',
    marginRight: direction === 'in' ? '13%' : 'auto',
  }

  const chatMessageStyles: CSSProperties = {
    display: 'flex',
    flexDirection: direction === 'in' ? 'row' : 'row-reverse',
    alignItems: 'flex-end',
  }

  const dateTextStyles: CSSProperties = {
    fontSize: '0.59rem',
    lineHeight: '1.2rem',
    color: theme === ThemesEnum.black ? phoneTheme.white : phoneTheme.lightPurpleText,
  }

  const _messageTextStyles = direction === 'in' ?
    theme === ThemesEnum.black ? phoneTheme.white : phoneTheme.darkPurple
      // ?
      : phoneTheme.white;
      // : theme === ThemesEnum.white ? phoneTheme.white : phoneTheme.white;

  const messageTextStyles: CSSProperties = {
    fontSize: '0.59rem',
    lineHeight: '0.75rem',
    color: _messageTextStyles,
  }

  const _messageBgStyles = direction === 'in' ?
    theme === ThemesEnum.black ? phoneTheme.superLightBlack : '#fff'
    : theme === ThemesEnum.black ? phoneTheme.darkPurple : phoneTheme.chatMessageLightPurpleBg;


  const additionalMessageBgStyles: CSSProperties = {
    backgroundColor: _messageBgStyles,
    borderBottomLeftRadius: direction === 'out' ? '0.75rem' : 'none',
    borderBottomRightRadius: direction === 'in' ? '0.75rem' : 'none',
  }

  return (
    <div className={classes.ChatMessage} style={chatMessageStyles}>
      <div className={classes.ImageContainer}>
        <div className={classes.ImageWrapper} style={additionalAvatarWrapperStyles}>
          <img src={playerImage} className={classes.Image}/>
        </div>
      </div>
      <div className={classes.DateMessageContainer}>
        <div className={classes.DateWrapper}>
          <LeadText styles={dateTextStyles}>
            {date.hours + ':' + date.minutes + ' ' + date.day + '/' + date.month + '/' + date.year}
          </LeadText>
        </div>
        <div className={classes.MessageWrapper} style={additionalMessageBgStyles}>
          <div className={classes.MessageTextWrapper}>
            <div className={classes.Message} style={messageTextStyles}>
              {message}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ChatMessage;