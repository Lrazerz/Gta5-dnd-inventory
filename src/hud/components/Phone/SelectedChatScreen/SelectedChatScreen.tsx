import React, {CSSProperties} from 'react';
import {useSelector} from 'react-redux';
import classes from '../../../styles/components/Phone/SelectedChatScreen/SelectedChatScreen.module.scss';
import {ThemesEnum} from "../models/interfaces/enums";
import LeadText from "../Text/LeadText";
import backButton from '../../../assets/images/components/Phone/components/SelectedChatScreen/back.svg';
import removeChat from '../../../assets/images/components/Phone/components/SelectedChatScreen/remove-chat.svg';

const SelectedChatScreen = React.memo(() => {

  const {selectedChat, theme} = useSelector(({phone}) =>
    ({selectedChat: phone.selectedChat, theme: phone.settings.cosmetics.theme}));

  const horizontalLineStyles: CSSProperties = {
    backgroundColor: theme === ThemesEnum.black ? '#5422b0' : '#DAD8E6',
  }

  const nameTextStyles: CSSProperties = {
    fontSize: '0.47rem',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  }

  return (
    <div className={classes.SelectedChatScreen}>
      {/*Header*/}
      <div className={classes.ScreenTitleWrapper}>
        <div className={classes.BackTitleRemoveContainer}>

          <div className={classes.ArrowNameContainer}>
            <div className={classes.ArrowButton}>
              <img src={backButton} className={classes.BackButton}/>
            </div>
            <div className={classes.NameWrapper}>
              <LeadText styles={nameTextStyles}>
                {selectedChat.name}
              </LeadText>
            </div>
          </div>
          <div className={classes.RemoveButtonWrapper}>
            <img src={removeChat} className={classes.RemoveButton} />
          </div>
        </div>
      </div>
      <div className={classes.HorizontalLine} style={horizontalLineStyles}/>
      {/*End of the header*/}
      
    </div>
  );
});

export default SelectedChatScreen;