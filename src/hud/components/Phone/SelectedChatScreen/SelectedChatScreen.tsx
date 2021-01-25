import React, {CSSProperties, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useSwipeable} from "react-swipeable";
import classes from '../../../../styles/hud/components/Phone/SelectedChatScreen/SelectedChatScreen.module.scss';
import {OpenedScreenEnum, ThemesEnum} from "../../../models/phone/enums";
import LeadText from "../Text/LeadText";
import backButton from '../../../../assets/hud/images/components/Phone/components/left-arrow.svg';
import removeChat from '../../../../assets/hud/images/components/Phone/components/SelectedChatScreen/remove-chat.svg';
import ChatMessagesList from "./ChatMessagesList";

import sendMessageImg from '../../../../assets/hud/images/components/Phone/components/SelectedChatScreen/send-message.svg';
import phoneTheme from "../consts/phoneTheme";
import {
  openScreen,
  removeSelectedChat,
  setLastOutcomingMessage
} from "../../../../redux/actions/hud/phone";
import {maxMessageTextLength, maxMessageTextRows, minMessageTextLength} from "../../../../constants/hud/phone/phoneConstants";

const maxDisplayedRows = 6;

const SelectedChatScreen = React.memo(() => {

  const dispatch = useDispatch();

  const [messageText, setMessageText] = useState();
  // rows count of the textarea
  const [rowsCount, setRowsCount] = useState(1);
  const [additionalRowsCount, setAdditionalRowsCount] = useState(0);

  const scrollWrapperRef = useRef();
  const textAreaRef = useRef();

  const selectedChat = useSelector(state => state.hud.phone.selectedChat);
  const theme = useSelector(state => state.hud.phone.settings.cosmetics.theme);

  useEffect(() => {
    setFocusOnTextArea();
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToTheLastEl();
    }, 500);

    return () =>  clearTimeout(timer);
  }, [scrollWrapperRef.current, selectedChat]);

  const scrollToTheLastEl = () => {
    // @ts-ignore
    // lastMessageRef.current.scrollIntoView({behavior: "smooth"});
    scrollWrapperRef.current.scrollTop = 99999;
  }

  const swipeUpHandler = () => {
    dispatch(openScreen(OpenedScreenEnum.mainScreen));
  }

  // to external lib
  const handlers = useSwipeable({
    // onSwipedLeft: () => swipeHandler(true),
    // onSwipedRight: () => openChatsScreen(),
    onSwipedUp: () => swipeUpHandler(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  //endregion

  const openChatsScreen = () => {
    dispatch(openScreen(OpenedScreenEnum.chats));
  }

  const setFocusOnTextArea = () => {
    // @ts-ignore
    textAreaRef.current.focus();
  }

  const removeChatHandler = () => {
    dispatch(removeSelectedChat(selectedChat.id));
  }

  const setTextHandler = (e) => {
    let targetValue = e.target.value;
    if(targetValue.length === 0) {
      setRowsCount(0);
      setAdditionalRowsCount(0);
      // @ts-ignore
      setMessageText("");
      return;
    }
    targetValue = targetValue.replace('\n', ' ');
    console.log(`before reaplce "${targetValue}"`);
    targetValue = targetValue.replace(/\s\s+/, ' ');
    console.log(`after reaplce "${targetValue}"`);
    targetValue = targetValue.slice(0, maxMessageTextLength);

    let splittedByNewLineRows = targetValue.split('\n');

    // let newRows = [...splittedByNewLineRows];

    // if length of every row < maxLength
    // let isRowsValid = false;
    // while(!isRowsValid) {
    //   // drop to the next row if size > columns
    //   splittedByNewLineRows.forEach((row,i) => {
    //     if(row.length > maxDisplayedColumns) {
    //       // need to split full row, maybe > 90 symbols
    //       const newRow = row.slice(0, maxDisplayedColumns - 1) + '\n';
    //       const newRowRest = row.slice(maxDisplayedColumns - 1);
    //
    //       newRows.splice(i, 1, [newRow, newRowRest]);
    //     } else if(i === splittedByNewLineRows.length - 1) {
    //       isRowsValid = true;
    //     }
    //   })
    //   splittedByNewLineRows = [...newRows];
    // }

    let resRowsCount = splittedByNewLineRows.length;
    // const resStr = splittedByNewLineRows.join('\n');

    if(resRowsCount > maxMessageTextRows) {
      return;
    }
    setRowsCount(maxDisplayedRows);
    setMessageText(targetValue);
  }

  const sendMessageHandler = () => {
    // @ts-ignore
    if(messageText && messageText.length >= minMessageTextLength) {
      // @ts-ignore
      dispatch(setLastOutcomingMessage(selectedChat.id, messageText.trim()));
    }
    // todo send message
  }

  const horizontalLineStyles: CSSProperties = {
    backgroundColor: theme === ThemesEnum.black ? '#5422b0' : '#DAD8E6',
  }

  const nameTextStyles: CSSProperties = {
    fontSize: '0.7rem',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  }

  const sendMessageContainerStyles: CSSProperties = {
    minHeight: 0.675 * (rowsCount + additionalRowsCount) + 1 + 'rem',
    // maxHeight: 0.45 * rowsCount + 1 + 'rem',
    backgroundColor: theme === ThemesEnum.black ? phoneTheme.lightBlack : '#fff',
    borderTop: `0.015rem solid ${theme === ThemesEnum.black ? '#5422b0' : '#DAD8E6'}`,
  }

  const sendButtonContainerStyles: CSSProperties = {
    borderLeft: `0.015rem solid ${theme === ThemesEnum.black ? '#5422b0' : '#DAD8E6'}`,
  }

  const textTypingStyles = {
    fontSize: '0.57rem',
    backgroundColor: 'transparent',
    color: theme === ThemesEnum.black ? phoneTheme.white : phoneTheme.darkGray,
  }

  return (
    <div className={classes.SelectedChatScreen} {...handlers}>
      {/*Header*/}
      <div className={classes.ScreenTitleWrapper}>
        <div className={classes.BackTitleRemoveContainer}>
          <div className={classes.ArrowNameContainer} onClick={openChatsScreen}>
            <div className={classes.ArrowButton}>
              <img src={backButton} className={classes.Button}/>
            </div>
            <div className={classes.NameWrapper}>
              <LeadText styles={nameTextStyles}>
                {selectedChat.name}
              </LeadText>
            </div>
          </div>
          <div className={classes.RemoveButtonWrapper} onClick={removeChatHandler}>
            <img src={removeChat} className={classes.RemoveButton}/>
          </div>
        </div>
      </div>
      <div className={classes.HorizontalLine} style={horizontalLineStyles}/>
      {/*End of the header*/}
      <div ref={scrollWrapperRef} className={classes.MessagesListWrapper} onClick={() => setFocusOnTextArea()}>
        <ChatMessagesList/>
      </div>
      <div className={classes.SendMessageContainer} style={sendMessageContainerStyles}
           onClick={() => setFocusOnTextArea()}>
        <div className={classes.TypeTextContainer}>
          {/*<input type={"text"} className={classes.TextContainer}*/}
          {/*       onChange={setTextHandler}/>*/}
          <textarea className={classes.TextArea} style={textTypingStyles} id="story" ref={textAreaRef}
                    name="story" rows={rowsCount + additionalRowsCount}
          placeholder={"Когда зайдешь в игру уже ?"} maxLength={100} onChange={setTextHandler} value={messageText}/>
        </div>
        <div className={classes.SendButtonContainer} style={sendButtonContainerStyles} onClick={sendMessageHandler}>
          <div className={classes.SendButtonWrapper}>
            <img src={sendMessageImg} className={classes.Button}/>
          </div>
        </div>

      </div>
    </div>
  );
});

export default SelectedChatScreen;