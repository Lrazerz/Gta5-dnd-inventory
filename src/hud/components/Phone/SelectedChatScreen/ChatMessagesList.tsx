import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import classes from '../../../../styles/hud/components/Phone/SelectedChatScreen/ChatMessagesList.module.scss';
import ChatMessage from './ChatMessage';
import { ThemesEnum } from '../../../../models/hud/phone/enums';

const ChatMessagesList = React.memo(() => {
  const [importedPlayerAvatarImg, setImportedPlayerAvatarImg] = useState();
  const [importedInterlocutorAvatarImg, setImportedInterlocutorAvatarImg] = useState();

  const playerAvatar = useSelector((state) => state.hud.phone.playerAvatar);
  const interlocutorAvatar = useSelector((state) => state.hud.phone.selectedChat.avatarName);
  const theme = useSelector((state) => state.hud.phone.settings.cosmetics.theme);
  const messages = useSelector((state) => state.hud.phone.selectedChat.messages);

  useEffect(() => {
    const loadPlayerAvatarImage = async () => {
      if (playerAvatar) {
        let importedImage;
        try {
          importedImage = await import(`../../../../assets/avatars/${playerAvatar}.svg`);
          setImportedPlayerAvatarImg(importedImage.default);
        } catch (e) {
          if (e.message.startsWith('Cannot find')) {
            console.log(`Call avatar "${playerAvatar}" import error, using default avatar`);
            const defaultAvatarName = theme === ThemesEnum.white ? 'default-avatar' : 'default-avatar-white';
            importedImage = await import(`../../../../assets/avatars/${defaultAvatarName}.svg`);
            setImportedPlayerAvatarImg(importedImage.default);
          }
        }
      }
    };
    const loadInterlocutorAvatarImage = async () => {
      if (interlocutorAvatar) {
        let importedImage;
        try {
          importedImage = await import(`../../../../assets/avatars/${interlocutorAvatar}.svg`);
          setImportedInterlocutorAvatarImg(importedImage.default);
        } catch (e) {
          if (e.message.startsWith('Cannot find')) {
            console.log(`Call avatar "${interlocutorAvatar}" import error, using default avatar`);
            const defaultAvatarName = theme === ThemesEnum.white ? 'default-avatar' : 'default-avatar-white';
            importedImage = await import(`../../../../assets/avatars/${defaultAvatarName}.svg`);
            setImportedInterlocutorAvatarImg(importedImage.default);
          }
        }
      }
    };
    loadPlayerAvatarImage();
    loadInterlocutorAvatarImage();
  }, [playerAvatar, interlocutorAvatar]);

  const messagesBlock =
    messages &&
    messages.map((message, i) => {
      return (
        <ChatMessage
          key={message.id}
          direction={message.direction}
          date={message.date}
          message={message.message}
          theme={theme}
          playerImage={message.direction === 'in' ? importedInterlocutorAvatarImg : importedPlayerAvatarImg}
        />
      );
    });

  return (
    <div className={classes.MessagesList}>
      {messagesBlock}
      {/*<div ref={lastMessageRef}/>*/}
    </div>
  );
});

export default ChatMessagesList;
