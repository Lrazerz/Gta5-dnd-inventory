import React, {CSSProperties, useEffect, useState} from 'react';
import classes from '../../../../../styles/hud/components/Phone/CallContactsChatWrapper/CallsScreen/SingleCall.module.scss';
import {CallsInterface, ThemesEnum} from "../../models/interfaces/reducerInterfaces";
import phoneTheme from '../../consts/phoneTheme';
import LeadText from "../../Text/LeadText";

interface Props {
  call: CallsInterface;
  theme: ThemesEnum;
}

const SingleCall: React.FC<Props> = React.memo(({call, theme}) => {

  const [importedAvatarImg, setImportedAvatarImg] = useState();

  useEffect(() => {
    let isCanceled = false;

    const loadThemeImage = async () => {
      if (call.imageName) {
        let importedThemeImage;
        try {
          importedThemeImage = await import(`../../../../../assets/hud/images/components/Phone/avatars/${call.imageName}.svg`);
          if(!isCanceled) {
            console.log('!canc')
            setImportedAvatarImg(importedThemeImage.default);
          } else {
            console.log('canc')
          }
        } catch (e) {
          if(e.message.startsWith('Cannot find')) {
            console.error(`Call avatar "${call.imageName}" import error, using default avatar`);
            let defaultAvatarName = theme === ThemesEnum.white ? 'default-avatar' : 'default-avatar-white';
            importedThemeImage = await import(`../../../../../assets/hud/images/components/Phone/avatars/${defaultAvatarName}.svg`);
            if(!isCanceled) {
              setImportedAvatarImg(importedThemeImage.default);
            }
          }
        }
      }
    }
    loadThemeImage();

    return () => {
      isCanceled = true;
    };

  }, [call.imageName]);

  const nameStyles: CSSProperties = {
    color: theme === ThemesEnum.black ? phoneTheme.white : phoneTheme.darkPurple,
    fontSize: '0.57rem',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  }

  // for time and number too
  let statusStyles = {
    color: theme === ThemesEnum.black ? phoneTheme.white: phoneTheme.lightPurpleText,
    fontSize: '0.495rem',
  }

  const timeNumberStyles = {...statusStyles};

  if(call.status === 'Пропущенный') {
    statusStyles.color = phoneTheme.red;
  }

  let StatusTimeNumberBlock = (
    <>
      <div className={classes.StatusWrapper}>
      <LeadText styles={statusStyles}>
        {call.status}
      </LeadText>
      </div>
      <div className={classes.TimeWrapper}>
        <LeadText styles={timeNumberStyles}>
          {call.date.hours + ':' + call.date.minutes}
        </LeadText>
      </div>
      <div className={classes.NumberWrapper}>
      <LeadText styles={timeNumberStyles}>
        {call.phoneNumber}
      </LeadText>
    </div>
    </>
  )

  return (
    <div className={classes.SingleCall}>
      <div className={classes.ImageContainer}>
        <div className={classes.ImageWrapper}>
          <img className={classes.Image} src={importedAvatarImg}/>
        </div>
      </div>
      <div className={classes.InfoWrapper}>
        <div className={classes.NameWrapper}>
          <LeadText styles={nameStyles}>{call.name}</LeadText>
        </div>
        <div className={classes.StatusTimeNumberContainer}>
          {StatusTimeNumberBlock}
        </div>
      </div>
    </div>
  );
});

export default SingleCall;