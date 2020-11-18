import React, {CSSProperties, useState} from 'react';
import {useSelector} from 'react-redux';
import classes from '../../../styles/components/Phone/CallContactsChatWrapper/PhoneTypingScreen.module.scss';
import LeadText from "../Text/LeadText";
import makeCallImg from '../../../assets/images/components/Phone/components/CallContactsChatWrapper/make-call.svg';
import clearButtonImg from '../../../assets/images/components/Phone/components/CallContactsChatWrapper/clear-button.svg';
import {ThemesEnum} from "../models/interfaces/enums";

const PhoneTypingScreen = React.memo(() => {

  const [phoneNumber, setPhoneNumber] = useState('88005553535');

  const theme = useSelector(({phone}) => phone.settings.cosmetics.theme);

  const textStyles: CSSProperties = {
    textAlign: 'center',
  }

  const phoneNumberStyles: CSSProperties = {
    color: theme === ThemesEnum.black ? '#fff' : '#000',
    fontSize: '0.9rem',
    letterSpacing: '0.025rem',
  }

  const addNumberStyles: CSSProperties = {
    color: '#6328E9',
    fontSize: '0.5rem',
  }

  const keyboardButtonTextStyles: CSSProperties = {
    color: '#000',
    fontSize: '0.7rem'
  }

  const keyboardButtonsBlock = ['1','2','3','4','5','6','7','8','9','*','0','#'].map(buttonText => {
    return (
      <div className={classes.KeyboardButton}>
        <LeadText styles={keyboardButtonTextStyles}>{buttonText}</LeadText>
      </div>
    );
  })

  return (
    <div className={classes.PhoneTyping}>
      <div className={classes.ScreenContent}>
        <div className={classes.PhoneNumberWrapper}>
          <LeadText styles={{...textStyles, ...phoneNumberStyles}}>
            {phoneNumber}
          </LeadText>
        </div>
        <div className={classes.AddNumberWrapper}>
          <LeadText styles={{...textStyles, ...addNumberStyles}}>Добавить номер</LeadText>
        </div>
        {/*Button styles*/}
        <div className={classes.KeyboardWrapper}>
          {keyboardButtonsBlock}
        </div>
        <div className={classes.CallCleanButtonsWrapper}>
          <div className={classes.CallButton}>
            <img src={makeCallImg} style={{marginTop: '-33%'}}/>
          </div>
          <div className={classes.ClearButtonContainer}>
            <div className={classes.ClearButtonWrapper}>
              <img src={clearButtonImg}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
//@ts-ignore
export default PhoneTypingScreen;