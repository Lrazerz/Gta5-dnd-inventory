import React, {CSSProperties} from 'react';
import classes from '../../../styles/components/Phone/SelectedChatScreen/ChatMessage.module.scss';
import {ChatMessageInterface, DateObjectInterface, ThemesEnum} from "../models/interfaces/reducerInterfaces";
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

  const chatMessageStyles: CSSProperties = {
    display: 'flex',
    flexDirection: direction === 'in' ? 'row' : 'row-reverse',
  }

  const dateTextStyles = {
    fontSize: '0.39rem',
    color: theme === ThemesEnum.white ? phoneTheme.lightPurpleText : phoneTheme.darkGray,
  }

  return (
    <div className={classes.ChatMessage} style={chatMessageStyles}>
      <div className={classes.ImageContainer}>
        <div className={classes.ImageWrapper}>
          <img src={playerImage} className={classes.Image}/>
        </div>

      </div>
      <div className={classes.DateMessageContainer}>
        <div className={classes.DateWrapper}>
          <LeadText styles={dateTextStyles}>
            {date.hours + ':' + date.minutes + ' ' + date.day + '/' + date.month + '/' + date.year}
          </LeadText>
        </div>
        <div className={classes.MessageWrapper}>
          <LeadText>

          </LeadText>
        </div>
      </div>
    </div>
  );
});

export default ChatMessage;