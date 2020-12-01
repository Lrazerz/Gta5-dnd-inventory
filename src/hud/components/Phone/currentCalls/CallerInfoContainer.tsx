import React, {CSSProperties, useEffect, useState} from 'react';
import classes from '../../../../styles/hud/components/Phone/currentCalls/CallerInfoContainer.module.scss';
import LeadText from "../Text/LeadText";
import {preventImageDrag} from "../../../../utils/utils";

interface Props {
  imageName: string;
  name: string;
  phoneNumber: string;
}

const CallerInfoContainer: React.FC<Props> = React.memo(({imageName, name, phoneNumber}) => {

  const [image, setImage] = useState();

  useEffect(() => {
    const loadImage = async () => {
      let loadedImage;
      try {
        loadedImage = await import(`../../../../assets/avatars/${imageName}.svg`);
        setImage(loadedImage.default);
      } catch (e) {
        console.log('Phone caller info container image import error', e);
      }
    }
    if(imageName) {
      loadImage();
    }
  }, [imageName]);

  const imageElement = image ? <img className={classes.Image} src={image} onDragStart={preventImageDrag}/> : null;

  const nameTextStyles: CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 800,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  }
  const phoneNumberTextStyles: CSSProperties = {
    textAlign: 'center',
    fontSize: '0.62rem',
    color: '#fff',
    fontWeight: 400,
  }

  return (
    <div className={classes.CallerInfoContainer}>
      <div className={classes.AvatarContainer}>
        <div className={classes.AvatarWrapper}>
          {imageElement}
        </div>
      </div>
      <div className={classes.Name}>
        <LeadText styles={nameTextStyles}>
          {name}
        </LeadText>
      </div>
      <div className={classes.PhoneNumber}>
        <LeadText styles={phoneNumberTextStyles}>
          {phoneNumber}
        </LeadText>
      </div>
    </div>
  );
});

export default CallerInfoContainer;