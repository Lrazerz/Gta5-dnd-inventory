import React, {CSSProperties, useEffect, useState} from 'react';
import classes from '../../../../styles/hud/components/Phone/MainScreen/LastMessage.module.scss';
import {LastMessageInterface, ThemesEnum} from "../models/interfaces/reducerInterfaces";
import LeadText from "../Text/LeadText";
import phoneTheme from "../consts/phoneTheme";
import {preventImageDrag} from "../../../../utils/utils";

interface Props {
  messageInfo: LastMessageInterface,
  theme: ThemesEnum
}

const LastMessage: React.FC<Props> = React.memo(({messageInfo, theme}) => {

  //region ------------------------------ Import image ------------------------------
  const [importedAvatarImg, setImportedAvatarImg] = useState();
  useEffect(() => {
    const loadThemeImage = async () => {
      if (messageInfo.imageName) {
        let importedThemeImage;
        try {
          console.log('import image');
          importedThemeImage = await import(`../../../../assets/hud/images/components/Phone/avatars/${messageInfo.imageName}.svg`);
          setImportedAvatarImg(importedThemeImage.default);
        } catch (e) {
          if(e.message.startsWith('Cannot find')) {
            console.error(`Player avatar "${messageInfo.imageName}" import error, using default avatar`);
            let defaultAvatarName = theme === ThemesEnum.white ? 'default-avatar' : 'default-avatar-white';
            importedThemeImage = await import(`../../../../assets/hud/images/components/Phone/avatars/${defaultAvatarName}.svg`);
            setImportedAvatarImg(importedThemeImage.default);
          }
        }
      }
    }
    loadThemeImage();
  }, [messageInfo.imageName]);
  //endregion

  const lastMessageStyles: CSSProperties = {
    width: '100%',
    height: '100%',
    borderRadius: '0.5rem',
    backgroundColor: 'rgba(247,240,240,0.3)',
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
    color: theme === ThemesEnum.black ? phoneTheme.white: '#000',
    fontSize: '0.495rem',
    fontWeight: 500,
    marginBottom: '8%',
    marginTop: 'auto',
  }

  let TextStyles: CSSProperties = {
    color: theme === ThemesEnum.black ? phoneTheme.white: phoneTheme.lightBlack,
    fontSize: '0.495rem',
    fontWeight: 400,
    marginTop: 'auto',
  }

  let nameTimeTextBlock = (
    <>
      <div className={classes.NameTimeWrapper}>
        <div className={classes.NameWrapper}>
          <LeadText styles={nameStyles}>
            {messageInfo.name}
          </LeadText>
        </div>
        <div className={classes.TimeWrapper}>
          <LeadText styles={TimeStyles}>
            {messageInfo.date.hours + ':' + messageInfo.date.minutes}
          </LeadText>
        </div>
      </div>
      <div className={classes.TextWrapper}>
        <div className={classes.Text} style={TextStyles}>
          {messageInfo.message}
        </div>
      </div>
    </>
  )

  return (
    <div style={lastMessageStyles}>
      <div className={classes.LastMessage}>
        <div className={classes.ImageContainer}>
          <div className={classes.ImageWrapper}>
            <img className={classes.Image} src={importedAvatarImg} onDragStart={preventImageDrag}/>
          </div>
        </div>

        <div className={classes.InfoWrapper}>
          {nameTimeTextBlock}
        </div>
      </div>
    </div>
  );
});

export default LastMessage;