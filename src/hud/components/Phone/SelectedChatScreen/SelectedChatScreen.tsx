import React, {CSSProperties, useState, useRef, useEffect} from 'react';
import {useSelector} from 'react-redux';
import classes from '../../../styles/components/Phone/SelectedChatScreen/SelectedChatScreen.module.scss';
import {ThemesEnum} from "../models/interfaces/enums";
import LeadText from "../Text/LeadText";
import backButton from '../../../assets/images/components/Phone/components/SelectedChatScreen/back.svg';
import removeChat from '../../../assets/images/components/Phone/components/SelectedChatScreen/remove-chat.svg';
import ChatMessagesList from "./ChatMessagesList";

import sendMessageImg from '../../../assets/images/components/Phone/components/SelectedChatScreen/send-message.svg';
import phoneTheme from "../consts/phoneTheme";

const SelectedChatScreen = React.memo(() => {

  const textAreaRef = useRef();

  const [messageText, setMessageText] = useState();
  // rows count of the textarea
  const [rowsCount, setRowsCount] = useState(1);

  // const [prevTarget, setPrevTarget] = useState();

  const {selectedChat, theme} = useSelector(({phone}) =>
    ({selectedChat: phone.selectedChat, theme: phone.settings.cosmetics.theme}));

  useEffect(() => {
    setFocusOnTextArea();
  }, [])

  const setFocusOnTextArea = () => {
    // @ts-ignore
    textAreaRef.current.focus();
  }

  const setTextHandler = (e) => {
    const newRowsCount = e.target.value.split('\n').length;

    // макс кол-во строк
    // считаем newRowsCount, если > 20 например то ничего не пишем

    // для тест 1,2,3
    if(newRowsCount > 10) {
      return;
    }
    if(newRowsCount < 6) {
      setRowsCount(newRowsCount);
    }
    setMessageText(e.target.value);
  }

  const screenStyles: CSSProperties = {

  }

  const horizontalLineStyles: CSSProperties = {
    backgroundColor: theme === ThemesEnum.black ? '#5422b0' : '#DAD8E6',
  }

  const nameTextStyles: CSSProperties = {
    fontSize: '0.47rem',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  }

  const SendMessageContainerStyles: CSSProperties = {
    backgroundColor: theme === ThemesEnum.white ? '#fff' : phoneTheme.lightPurple,
  }

  const textTypingStyles = {
    color: theme === ThemesEnum.white ? phoneTheme.darkGray : phoneTheme.white,

  }

  return (
    <div className={classes.SelectedChatScreen}>
      {/*Header*/}
      <div className={classes.ScreenTitleWrapper}>
        <div className={classes.BackTitleRemoveContainer}>
          <div className={classes.ArrowNameContainer}>
            <div className={classes.ArrowButton}>
              <img src={backButton} className={classes.Button}/>
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
      <div className={classes.MessagesListWrapper}
           onClick={() => setFocusOnTextArea()}>
        <ChatMessagesList/>
      </div>
      <div className={classes.SendMessageContainer} style={SendMessageContainerStyles}
           onClick={() => setFocusOnTextArea()}>
        <div className={classes.TypeTextContainer}>
          {/*<input type={"text"} className={classes.TextContainer}*/}
          {/*       onChange={setTextHandler}/>*/}
          <textarea className={classes.TextArea} style={textTypingStyles} id="story" ref={textAreaRef}
                    name="story" rows={rowsCount} cols={33}
          placeholder={"Когда зайдешь в игру уже ?"} maxLength={100} onChange={setTextHandler} value={messageText}/>
        </div>
        <div className={classes.SendButtonContainer}>
          <div className={classes.SendButtonWrapper}>
            <img src={sendMessageImg} className={classes.Button}/>
          </div>
        </div>

      </div>
    </div>
  );
});

export default SelectedChatScreen;