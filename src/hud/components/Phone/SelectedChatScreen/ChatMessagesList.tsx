import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import classes from '../../../styles/components/Phone/SelectedChatScreen/ChatMessagesList.module.scss';
import ChatMessage from "./ChatMessage";
import {ThemesEnum} from "../models/interfaces/enums";

const ChatMessagesList = React.memo(() => {

  const [importedPlayerAvatarImg, setImportedPlayerAvatarImg] = useState();
  const [importedInterlocutorAvatarImg, setImportedInterlocutorAvatarImg] = useState();

  const {playerAvatar, interlocutorAvatar, messages,theme} = useSelector(({phone}) =>
    (
      {
        playerAvatar: phone.playerAvatar,
        interlocutorAvatar: phone.selectedChat.avatarName,
        theme: phone.settings.cosmetics.theme,
        messages: phone.selectedChat.messages,
      }
      ));

  useEffect(() => {
    const loadPlayerAvatarImage = async () => {
      if (playerAvatar) {
        let importedImage;
        try {
          importedImage = await import(`../../../../assets/images/components/Phone/avatars/${playerAvatar}.svg`);
          setImportedPlayerAvatarImg(importedImage.default);
        } catch (e) {
          if(e.message.startsWith('Cannot find')) {
            console.error(`Call avatar "${playerAvatar}" import error, using default avatar`);
            let defaultAvatarName = theme === ThemesEnum.white ? 'default-avatar' : 'default-avatar-white';
            importedImage = await import(`../../../../assets/images/components/Phone/avatars/${defaultAvatarName}.svg`);
            setImportedPlayerAvatarImg(importedImage.default);
          }
        }
      }
    }
    const loadInterlocutorAvatarImage = async () => {
      if (interlocutorAvatar) {
        let importedImage;
        try {
          importedImage = await import(`../../../../assets/images/components/Phone/avatars/${interlocutorAvatar}.svg`);
          setImportedInterlocutorAvatarImg(importedImage.default);
        } catch (e) {
          if(e.message.startsWith('Cannot find')) {
            console.error(`Call avatar "${interlocutorAvatar}" import error, using default avatar`);
            let defaultAvatarName = theme === ThemesEnum.white ? 'default-avatar' : 'default-avatar-white';
            importedImage = await import(`../../../../assets/images/components/Phone/avatars/${defaultAvatarName}.svg`);
            setImportedInterlocutorAvatarImg(importedImage.default);
          }
        }
      }
    }
    loadPlayerAvatarImage();
    loadInterlocutorAvatarImage();
  }, [playerAvatar, interlocutorAvatar]);

  const messagesBlock = messages.map(message => {
    return (
      <ChatMessage direction={message.direction} date={message.date} message={message.message} theme={theme}
                   playerImage={message.direction === 'in' ? importedInterlocutorAvatarImg : importedPlayerAvatarImg}/>
    )
  });

  return (
    <div className={classes.MessagesList}>
      {messagesBlock}
    </div>
  );
});

export default ChatMessagesList;