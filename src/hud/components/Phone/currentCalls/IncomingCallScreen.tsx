import React, { CSSProperties } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from '../../../../styles/hud/components/Phone/currentCalls/IncomingCallScreen.module.scss';
import LeadText from '../Text/LeadText';
import { IncomingCallInterface } from '../../../../redux/reducers/hud/phone';
import declineCallImg from '../../../../assets/hud/images/components/Phone/components/currentCalls/decline-call.svg';
import acceptCallImg from '../../../../assets/hud/images/components/Phone/components/currentCalls/accept-call.svg';
import CallerInfoContainer from './CallerInfoContainer';
import { acceptCall, declineCall } from '../../../../redux/actions/hud/phone';

const IncomingCallScreen = () => {
  const dispatch = useDispatch();

  const incomingCallData: IncomingCallInterface = useSelector(({ hud: { phone } }) => phone.incomingCall);

  const acceptCallHandler = () => {
    dispatch(acceptCall(incomingCallData.name, incomingCallData.imageName, incomingCallData.phoneNumber));
  };

  const declineCallHandler = () => {
    dispatch(declineCall(incomingCallData.phoneNumber));
  };

  const textOverflowThreeDotsStyles: CSSProperties = {
    fontSize: '0.78rem',
    color: '#fff',
    fontWeight: 800,
    textAlign: 'center',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  };

  return (
    <div className={classes.IncomingCallScreen}>
      <div className={classes.CallerInfoWrapper}>
        <CallerInfoContainer
          imageName={incomingCallData.imageName}
          name={incomingCallData.name}
          phoneNumber={incomingCallData.phoneNumber}
        />
      </div>
      <div className={classes.ButtonsAndTextContainer}>
        <div className={classes.ButtonsAndTextWrapper}>
          <div className={classes.ButtonAndText} onClick={declineCallHandler}>
            <img className={classes.Button} src={declineCallImg} />
            <div className={classes.Text}>
              <LeadText styles={textOverflowThreeDotsStyles}>Decline</LeadText>
            </div>
          </div>
          <div className={classes.ButtonAndText} onClick={acceptCallHandler}>
            <img className={classes.Button} src={acceptCallImg} />
            <div className={classes.Text}>
              <LeadText styles={textOverflowThreeDotsStyles}>Accept</LeadText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomingCallScreen;
