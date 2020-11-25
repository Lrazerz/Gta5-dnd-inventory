import React, {CSSProperties, useEffect, useState} from 'react';
import classes from '../../../../../styles/hud/components/Phone/CallContactsChatWrapper/ContactsScreen/SingleContact.module.scss';
import {CallsInterface, ThemesEnum} from "../../models/interfaces/reducerInterfaces";
import phoneTheme from '../../consts/phoneTheme';
import LeadText from "../../Text/LeadText";

interface Props {
  contact: CallsInterface;
  theme: ThemesEnum;
}

const SingleContact: React.FC<Props> = React.memo(({contact, theme}) => {

  const [importedAvatarImg, setImportedAvatarImg] = useState();

  useEffect(() => {
    const loadThemeImage = async () => {
      if (contact.imageName) {
        let importedThemeImage;
        try {
          importedThemeImage = await import(`../../../../../assets/hud/images/components/Phone/avatars/${contact.imageName}.svg`);
          setImportedAvatarImg(importedThemeImage.default);
        } catch (e) {
          if(e.message.startsWith('Cannot find')) {
            console.error(`Contact avatar "${contact.imageName}" import error, using default avatar`);
            let defaultAvatarName = theme === ThemesEnum.white ? 'default-avatar' : 'default-avatar-white';
            importedThemeImage = await import(`../../../../../assets/hud/images/components/Phone/avatars/${defaultAvatarName}.svg`);
            setImportedAvatarImg(importedThemeImage.default);
          }
        }
      }
    }
    loadThemeImage();
  }, [contact.imageName]);

  const nameStyles: CSSProperties = {
    color: theme === ThemesEnum.black ? phoneTheme.white : phoneTheme.darkPurple,
    fontSize: '0.57rem',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  }

  return (
    <div className={classes.SingleContact}>
      <div className={classes.ImageContainer}>
        <div className={classes.ImageWrapper}>
          <img className={classes.Image} src={importedAvatarImg}/>
        </div>
      </div>
      <div className={classes.InfoWrapper}>
        <div className={classes.NameWrapper}>
          <LeadText styles={nameStyles}>
            {contact.name}
          </LeadText>
        </div>
      </div>
    </div>
  );
});

export default SingleContact;