import React, { CSSProperties, useEffect, useState } from 'react';
import classes from '../../../../styles/hud/components/Phone/MainScreen/LastMessage.module.scss';
import { LastMessageInterface, ThemesEnum } from '../../../../models/hud/phone/reducerInterfaces';
import LeadText from '../Text/LeadText';
import phoneTheme from '../consts/phoneTheme';

interface Props {
  messageInfo: LastMessageInterface;
  theme: ThemesEnum;
}

const LastMessage: React.FC<Props> = React.memo(({ messageInfo, theme }) => {
  //region ------------------------------ Import image ------------------------------
  const [importedAvatarImg, setImportedAvatarImg] = useState();
  useEffect(() => {
    const loadThemeImage = async () => {
      if (messageInfo.imageName) {
        let importedThemeImage;
        try {
          importedThemeImage = await import(`../../../../assets/avatars/${messageInfo.imageName}.svg`);
          setImportedAvatarImg(importedThemeImage.default);
        } catch (e) {
          if (e.message.startsWith('Cannot find')) {
            console.log(`Player avatar "${messageInfo.imageName}" import error, using default avatar`);
            const defaultAvatarName = theme === ThemesEnum.white ? 'default-avatar' : 'default-avatar-white';
            importedThemeImage = await import(`../../../../assets/avatars/${defaultAvatarName}.svg`);
            setImportedAvatarImg(importedThemeImage.default);
          }
        }
      }
    };
    loadThemeImage();
  }, [messageInfo.imageName]);
  //endregion

  const lastMessageStyles: CSSProperties = {
    width: '100%',
    height: '100%',
    borderRadius: '0.5rem',
    backgroundColor: 'rgba(247,240,240,0.6)',
  };

  const nameStyles: CSSProperties = {
    color: theme === ThemesEnum.black ? phoneTheme.lightPurpleText : phoneTheme.darkPurple,
    fontSize: '0.57rem',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    marginBottom: '2%',
    marginTop: 'auto',
    width: '100%',
  };

  // for time and number too
  const TimeStyles: CSSProperties = {
    color: theme === ThemesEnum.black ? phoneTheme.white : '#000',
    fontSize: '0.495rem',
    fontWeight: 500,
    marginBottom: '8%',
    marginTop: 'auto',
  };

  const TextStyles: CSSProperties = {
    color: theme === ThemesEnum.black ? phoneTheme.white : phoneTheme.lightBlack,
    fontSize: '0.495rem',
    fontWeight: 400,
    marginTop: 'auto',
  };

  const nameTimeTextBlock = (
    <>
      <div className={classes.NameTimeWrapper}>
        <div className={classes.NameWrapper}>
          <LeadText styles={nameStyles}>{messageInfo.name}</LeadText>
        </div>
        <div className={classes.TimeWrapper}>
          <LeadText styles={TimeStyles}>{messageInfo.date.hours + ':' + messageInfo.date.minutes}</LeadText>
        </div>
      </div>
      <div className={classes.TextWrapper}>
        <div className={classes.Text} style={TextStyles}>
          {messageInfo.message}
        </div>
      </div>
    </>
  );

  return (
    <div style={lastMessageStyles}>
      <div className={classes.LastMessage}>
        <div className={classes.ImageContainer}>
          <div className={classes.ImageWrapper}>
            <img className={classes.Image} src={importedAvatarImg} />
          </div>
        </div>
        <div className={classes.InfoWrapper}>{nameTimeTextBlock}</div>
      </div>
    </div>
  );
});

export default LastMessage;
