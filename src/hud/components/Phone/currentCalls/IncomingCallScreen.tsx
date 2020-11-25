import React, {CSSProperties, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import classes from '../../../../styles/hud/components/Phone/currentCalls/IncomingCallScreen.module.scss';
import LeadText from "../Text/LeadText";
import {IncomingCallInterface} from "../../../../redux/reducers/hud/phone";
import declineCallImg from '../../../../assets/hud/images/components/Phone/components/currentCalls/decline-call.svg';
import acceptCallImg from '../../../../assets/hud/images/components/Phone/components/currentCalls/accept-call.svg';
import CallerInfoContainer from "./CallerInfoContainer";

const IncomingCallScreen = () => {

  const [avatarImage, setAvatarImage] = useState();

  const incomingCallData: IncomingCallInterface =
    useSelector(({hud: {phone}}) => phone.incomingCall);

  useEffect(() => {
    const loadImage = async () => {
      if(incomingCallData.imageName) {
        let image;
        try {
          image = await import(`../../../../assets/hud/images/components/Phone/avatars/${incomingCallData.imageName}.svg`);
          setAvatarImage(image.default);
        } catch (e) {
          console.error('Incoming call - avatar import error', e);
        }
      }
    }
    loadImage();
  }, [incomingCallData.imageName]);

  let imageComponent;

  if(avatarImage) {
    imageComponent = <img className={classes.Image} src={avatarImage} />
  }

  const textOverflowThreeDotsStyles: CSSProperties = {
    fontSize: '0.78rem',
    color: '#fff',
    fontWeight: 800,
    textAlign: 'center',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  }

  return (
    <div className={classes.IncomingCallScreen}>
      <div className={classes.CallerInfoWrapper}>
        <CallerInfoContainer imageName={incomingCallData.imageName} name={incomingCallData.name}
                             phoneNumber={incomingCallData.phoneNumber}/>
      </div>

      {/*<div className={classes.ImageContainer}>*/}
      {/*  <div className={classes.ImageWrapper}>*/}
      {/*    {imageComponent}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className={classes.NameWrapper}>*/}
      {/*  <LeadText styles={{fontWeight: 800, color: '#fff'}}>*/}
      {/*    {incomingCallData.name}*/}
      {/*  </LeadText>*/}
      {/*</div>*/}
      {/*<div className={classes.PhoneNumberWrapper}>*/}
      {/*  <LeadText styles={{fontSize: '0.42rem', color: '#fff'}}>*/}
      {/*    {incomingCallData.phoneNumber}*/}
      {/*  </LeadText>*/}
      {/*</div>*/}
      <div className={classes.ButtonsAndTextContainer}>
        <div className={classes.ButtonsAndTextWrapper}>
          <div className={classes.ButtonAndText}>
            <img className={classes.Button} src={declineCallImg}/>
            <div className={classes.Text}>
              <LeadText styles={textOverflowThreeDotsStyles}>
                Decline
              </LeadText>
            </div>
          </div>
          <div className={classes.ButtonAndText}>
            <img className={classes.Button} src={acceptCallImg}/>
            <div className={classes.Text}>
              <LeadText styles={textOverflowThreeDotsStyles}>
                Accept
              </LeadText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomingCallScreen;