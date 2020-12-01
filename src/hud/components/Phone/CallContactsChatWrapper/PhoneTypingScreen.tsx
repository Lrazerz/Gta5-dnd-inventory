import React, {CSSProperties, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classes from '../../../../styles/hud/components/Phone/CallContactsChatWrapper/PhoneTypingScreen.module.scss';
import LeadText from "../Text/LeadText";
import makeCallImg
  from '../../../../assets/hud/images/components/Phone/components/CallContactsChatWrapper/make-call.svg';
import clearButtonImg
  from '../../../../assets/hud/images/components/Phone/components/CallContactsChatWrapper/clear-button.svg';
import {OpenedScreenEnum, ThemesEnum} from "../models/interfaces/enums";
import {preventImageDrag} from "../../../../utils/utils";
import {openOutComingCall, openScreen} from "../../../../redux/actions/hud/phone";

const maxPhoneLength = 11;

const buttons = ['1','2','3','4','5','6','7','8','9','*','0','#'];

const PhoneTypingScreen = React.memo(() => {

  const [phoneNumber, setPhoneNumber]: [string, any] = useState('88005553535');

  const dispatch = useDispatch();
  const theme = useSelector(({hud: {phone}}) => phone.settings.cosmetics.theme);

  const crossSignRef = useRef();

  useEffect(() => {
    if(crossSignRef.current) {
      const width = window.getComputedStyle(crossSignRef.current).width;
      //@ts-ignore
      crossSignRef.current.style.height = width;
    }
  }, [crossSignRef.current]);

  const keyDownHandler = (e) => {
    if(buttons.includes(e.key)) {
      typingHandler(e.key);
    }
  }

  const typingHandler = (value) => {
    const newNumber = phoneNumber + value;
    if(newNumber.length <= maxPhoneLength) {
      setPhoneNumber(newNumber);
    }
  }

  const makeCallHandler = () => {
    if(phoneNumber.length !== maxPhoneLength) return;
    dispatch(openOutComingCall(`+${phoneNumber}`));
  }

  const removeLastChar = () => {
    if(phoneNumber.length > 0) {
      setPhoneNumber(prevNumber => prevNumber.slice(0, prevNumber.length - 1));
    }
  }

  const addNumberClickHandler = () => {
    dispatch(openScreen(OpenedScreenEnum.addNewContact));
  }

  const textStyles: CSSProperties = {
    textAlign: 'center',
  }

  const phoneNumberStyles: CSSProperties = {
    color: theme === ThemesEnum.black ? '\n' +
      '    letterSpacing: \'0.025rem\',#fff' : '#000',
    fontSize: '1.35rem',
  }

  const addNumberStyles: CSSProperties = {
    color: '#6328E9',
    fontSize: '0.75rem',
  }

  const keyboardButtonTextStyles: CSSProperties = {
    color: '#000',
    fontSize: '1.05rem'
  }

  const keyboardButtonsBlock = buttons.map(buttonText => {
    return (
      <div className={classes.KeyboardButton} onClick={() => typingHandler(buttonText)} key={buttonText}>
        <LeadText styles={keyboardButtonTextStyles}>{buttonText}</LeadText>
      </div>
    );
  });

  return (
    <div className={classes.PhoneTyping} onKeyDown={keyDownHandler} tabIndex={0}>
      <div className={classes.ScreenContent}>
        <div className={classes.PhoneNumberWrapper}>
          <LeadText styles={{...textStyles, ...phoneNumberStyles}}>
            {phoneNumber}
          </LeadText>
        </div>
        <div className={classes.AddNumberWrapper}>
          <div className={classes.AddNumber} onClick={addNumberClickHandler}>
            <LeadText styles={{...textStyles, ...addNumberStyles}}>Добавить номер</LeadText>
          </div>
        </div>
        {/*Button styles*/}
        <div className={classes.KeyboardWrapper}>
          {keyboardButtonsBlock}
        </div>
        <div className={classes.CallCleanButtonsWrapper}>
          <div className={classes.CallButton}>
            <img src={makeCallImg} style={{marginTop: '-33%'}}
                 onDragStart={preventImageDrag}/>
            <div className={classes.ClickableMakeCall} onClick={makeCallHandler}/>
          </div>
          <div className={classes.ClearButtonContainer}>
            <div className={classes.ClearButtonWrapper} onClick={removeLastChar}>
              <img src={clearButtonImg} onMouseDown={keyDownHandler} onDragStart={preventImageDrag}/>
              <div className={classes.CrossWrapper} ref={crossSignRef}>
                <div className={classes.FirstLine}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
//@ts-ignore
export default PhoneTypingScreen;