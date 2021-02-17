import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from '../../../../styles/hud/components/Phone/CallContactsChatWrapper/PhoneTypingScreen.module.scss';
import LeadText from '../Text/LeadText';
import makeCallImg from '../../../../assets/hud/images/components/Phone/components/CallContactsChatWrapper/make-call.svg';
import { OpenedScreenEnum, ThemesEnum } from '../../../../models/hud/phone/enums';
import { openOutComingCall, openScreen, setAddNewContactPhoneNumber } from '../../../../redux/actions/hud/phone';
import phoneTheme from '../consts/phoneTheme';
import { phoneLengthWithoutPlus } from '../../../../constants/hud/phone/phone';

const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];

const PhoneTypingScreen = React.memo(() => {
  const [phoneNumber, setPhoneNumber]: [string, any] = useState('88005553535');

  const dispatch = useDispatch();
  const theme = useSelector(({ hud: { phone } }) => phone.settings.cosmetics.theme);

  const crossSignRef = useRef();

  useEffect(() => {
    if (crossSignRef.current) {
      const width = window.getComputedStyle(crossSignRef.current).width;
      //@ts-ignore
      crossSignRef.current.style.height = width;
    }
  }, [crossSignRef.current]);

  const keyDownHandler = (e) => {
    if (buttons.includes(e.key)) {
      typingHandler(e.key);
    } else if (e.key.toLowerCase() === 'backspace') {
      removeLastChar();
    }
  };

  const typingHandler = (value) => {
    const newNumber = phoneNumber + value;
    if (newNumber.length <= phoneLengthWithoutPlus) {
      setPhoneNumber(newNumber);
    }
  };

  const makeCallHandler = () => {
    if (phoneNumber.length !== phoneLengthWithoutPlus) {
      console.warn('[forb] phone length does not match');
      return;
    }

    dispatch(openOutComingCall(`+${phoneNumber}`));
  };

  const removeLastChar = () => {
    if (phoneNumber.length > 0) {
      setPhoneNumber((prevNumber) => prevNumber.slice(0, prevNumber.length - 1));
    }
  };

  const addNumberClickHandler = () => {
    dispatch(setAddNewContactPhoneNumber(`+${phoneNumber}`));
    dispatch(openScreen(OpenedScreenEnum.addNewContact));
  };

  const textStyles: CSSProperties = {
    textAlign: 'center',
  };

  const phoneNumberStyles: CSSProperties = {
    color: theme === ThemesEnum.black ? '#fff' : '#000',
    letterSpacing: '0.025rem',
    fontSize: '1.35rem',
  };

  const addNumberStyles: CSSProperties = {
    color: '#6328E9',
    fontSize: '0.75rem',
  };

  const keyboardButtonStyles: CSSProperties = {
    backgroundColor: theme === ThemesEnum.black ? phoneTheme.darkPurple : '#EBEDF8',
  };

  const keyboardButtonTextStyles: CSSProperties = {
    color: theme === ThemesEnum.black ? phoneTheme.white : phoneTheme.lightBlack,
    fontSize: '1.05rem',
  };

  const crossContainerStyles: CSSProperties = {
    backgroundColor: theme === ThemesEnum.black ? phoneTheme.darkPurple : '#EBEDF8',
  };

  const firstSecondCrossLinesStyles: CSSProperties = {
    backgroundColor: theme === ThemesEnum.black ? phoneTheme.white : phoneTheme.lightBlack,
  };

  const keyboardButtonsBlock = buttons.map((buttonText) => {
    return (
      <div
        className={classes.KeyboardButton}
        style={keyboardButtonStyles}
        onClick={() => typingHandler(buttonText)}
        key={buttonText}
      >
        <LeadText styles={keyboardButtonTextStyles}>{buttonText}</LeadText>
      </div>
    );
  });

  return (
    <div className={classes.PhoneTyping} onKeyDown={keyDownHandler} tabIndex={0}>
      <div className={classes.ScreenContent}>
        <div className={classes.PhoneNumberWrapper}>
          <LeadText styles={{ ...textStyles, ...phoneNumberStyles }}>{phoneNumber}</LeadText>
        </div>
        <div className={classes.AddNumberWrapper}>
          <div className={classes.AddNumber} onClick={addNumberClickHandler}>
            <LeadText styles={{ ...textStyles, ...addNumberStyles }}>Добавить номер</LeadText>
          </div>
        </div>
        {/*Button styles*/}
        <div className={classes.KeyboardWrapper}>{keyboardButtonsBlock}</div>
        <div className={classes.CallCleanButtonsWrapper}>
          <div className={classes.CallButton}>
            <img src={makeCallImg} style={{ marginTop: '-33%' }} />
            <div className={classes.ClickableMakeCall} onClick={makeCallHandler} />
          </div>
          <div className={classes.ClearButtonContainer}>
            <div className={classes.ClearButtonWrapper} onClick={removeLastChar}>
              <div className={classes.CrossContainer} style={crossContainerStyles} />
              <div className={classes.CrossWrapper} ref={crossSignRef}>
                <div className={classes.FirstLine} style={firstSecondCrossLinesStyles}>
                  <div className={classes.SecondLine} style={firstSecondCrossLinesStyles} />
                </div>
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
