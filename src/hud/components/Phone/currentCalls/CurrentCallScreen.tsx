import React, {CSSProperties} from 'react';
import {useSelector} from 'react-redux';
import classes from '../../../styles/components/Phone/currentCalls/CurrentCallScreen.module.scss';
import CallerInfoContainer from "./CallerInfoContainer";
import {CurrentCallInterface} from "../../../../redux/reducers/hud/phone";
import LeadText from "../Text/LeadText";
import declineCallImg from '../../../../assets/hud/images/components/Phone/components/currentCalls/current-call-decline.svg';

// options
import addCallOnImg from '../../../../assets/hud/images/components/Phone/components/currentCalls/options/add-call-on.svg';
import addCallOffImg from '../../../../assets/hud/images/components/Phone/components/currentCalls/options/add-call-off.svg';
import muteOnImg from '../../../../assets/hud/images/components/Phone/components/currentCalls/options/mute-on.svg';
import muteOffImg from '../../../../assets/hud/images/components/Phone/components/currentCalls/options/mute-off.svg';
import addNoteOnImg from '../../../../assets/hud/images/components/Phone/components/currentCalls/options/add-note-on.svg';
import addNoteOffImg from '../../../../assets/hud/images/components/Phone/components/currentCalls/options/add-note-off.svg';
import speakerOnImg from '../../../../assets/hud/images/components/Phone/components/currentCalls/options/speaker-on.svg';
import speakerOffImg from '../../../../assets/hud/images/components/Phone/components/currentCalls/options/speaker-off.svg';
import keyboardOnImg from '../../../../assets/hud/images/components/Phone/components/currentCalls/options/keyboard-on.svg';
import keyboardOffImg from '../../../../assets/hud/images/components/Phone/components/currentCalls/options/keyboard-off.svg';
import recordOnImg from '../../../../assets/hud/images/components/Phone/components/currentCalls/options/record-on.svg';
import recordOffImg from '../../../../assets/hud/images/components/Phone/components/currentCalls/options/record-off.svg';

const CurrentCallScreen = () => {

  const currentCallData: CurrentCallInterface = useSelector(({hud: {phone}}) => phone.currentCall);
  const {name, imageName, phoneNumber, isConference, isMuted, isNoted, speaker,
  keyboard, isRecording} = currentCallData;

  //region ------------------------------ Options images ------------------------------
  const addCallImage = isConference ? addCallOffImg : addCallOnImg;
  const muteImage = isMuted ? muteOffImg : muteOnImg;
  const addNoteImage = isNoted ? addNoteOffImg : addNoteOnImg;
  const speakerImage = speaker ? speakerOffImg : speakerOnImg;
  const keyboardImage = keyboard ? keyboardOffImg : keyboardOnImg;
  const recordImage = isRecording ? recordOffImg : recordOnImg;
  //endregion

  //region ------------------------------
  const optionTextStyles: CSSProperties = {
    color: '#fff',
    textAlign: 'center',
    fontSize: '0.4rem'
  }
  //endregion

  return (
    <div className={classes.CurrentCallScreen}>
      <div className={classes.CallerInfoWrapper}>
        <CallerInfoContainer imageName={imageName} name={name} phoneNumber={phoneNumber}/>
      </div>
      <div className={classes.CallIndicatorsAndDeclineButtonContainer}>
        <div className={classes.CallIndicatorsContainer}>
          <div className={classes.CallIndicatorsWrapper}>
            <div className={classes.Option}>
              <img className={classes.Image} src={addCallImage}/>
              <div className={classes.OptionText}>
                <LeadText styles={optionTextStyles}>
                  Добавить вызов
                </LeadText>
              </div>
            </div>
            <div className={classes.Option}>
              <img className={classes.Image} src={muteImage}/>
              <div className={classes.OptionText}>
                <LeadText styles={optionTextStyles}>
                  Без звука
                </LeadText>
              </div>
            </div>
            <div className={classes.Option}>
              <img className={classes.Image} src={addNoteImage}/>
              <div className={classes.OptionText}>
                <LeadText styles={optionTextStyles}>
                  Добавить в заметки
                </LeadText>
              </div>
            </div>
            <div className={classes.Option}>
              <img className={classes.Image} src={speakerImage}/>
              <div className={classes.OptionText}>
                <LeadText styles={optionTextStyles}>
                  Динамик
                </LeadText>
              </div>
            </div>
            <div className={classes.Option}>
              <img className={classes.Image} src={keyboardImage}/>
              <div className={classes.OptionText}>
                <LeadText styles={optionTextStyles}>
                  Клавиатура
                </LeadText>
              </div>
            </div>
            <div className={classes.Option}>
              <img className={classes.Image} src={recordImage}/>
              <div className={classes.OptionText}>
                <LeadText styles={optionTextStyles}>
                  Запись
                </LeadText>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.DeclineButtonWrapper}>
          <div className={classes.DeclineButton}>
            <img src={declineCallImg}/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CurrentCallScreen;