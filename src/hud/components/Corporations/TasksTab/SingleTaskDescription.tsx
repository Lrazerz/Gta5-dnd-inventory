import React, {CSSProperties, useState} from 'react';
import classes from
    '../../../../styles/hud/components/Corporations/TasksTab/SingleTaskDescription.module.scss';
import CorporationsText from "../CorporationsText";
import HorizontalLine from "../HorizontalLine";
import TreasuryButton from "../TreasuryTab/TreasuryButton";
import OpenCloseArrowButton from "./OpenCloseArrowButton";

interface Props {
  doneButtonHeight: string;
  moneySignDimensions: string;
  description: string;
  sum: number;
  onComplete: (boolean) => void;
  isArchive: boolean;
}

const SingleTaskDescription: React.FC<Props> = React.memo((Props) => {

  const [isFailButtonDisplay, setIsFailButtonDisplay]: [boolean, any] = useState(false);

  const changeIsFailButtonDisplayHandler = (e) => {
    e.stopPropagation();
    setIsFailButtonDisplay(prevState => !prevState);
  }

  const onDonePressHandler = () => {
    Props.onComplete(true);
  }

  const onFailPressHandler = () => {
    Props.onComplete(false);
  }

  const horizontalLineStyles: CSSProperties = {
    backgroundColor: '#424655'
  }

  const defaultTextStyles: CSSProperties = {
    fontSize: '0.7647rem',
    lineHeight: '0.9324rem',
  }

  const descriptionTextStyles: CSSProperties = {
    ...defaultTextStyles,
    fontWeight: 500,
    marginBottom: '2.12%',
  }

  const sumTextStyles: CSSProperties = {
    ...defaultTextStyles,
    color: '#FFD232',
    fontWeight: 700,
    whiteSpace: 'nowrap'
  }

  const moneySignStyles: CSSProperties = {
    marginLeft: '0.4118rem',
    width: Props.moneySignDimensions,
    paddingBottom: Props.moneySignDimensions
  }

  const doneButtonTextStyles: CSSProperties = {
    ...defaultTextStyles,
    fontWeight: 700,
    marginLeft: '13.91%',
  }

  const doneFailButtonStyles: CSSProperties = {
    height: Props.doneButtonHeight
  }

  return (
    <>
      <HorizontalLine styles={horizontalLineStyles}/>
      <div className={classes.SingleCurrentTaskDescription} onClick={e => e.stopPropagation()}>
        <CorporationsText styles={descriptionTextStyles}>
          {Props.description}
        </CorporationsText>
        <HorizontalLine styles={horizontalLineStyles}/>
        <div className={classes.PayAndButtonsContainer}>
          <div className={classes.PaySumWrapper}>
            <CorporationsText styles={sumTextStyles}>
              {`Выплата: ${Props.sum}`}
            </CorporationsText>
            <div style={moneySignStyles} className={classes.MoneySign}/>
          </div>
          {
            !Props.isArchive && (
              <div className={classes.DoneFailButtonsContainer}>
                <div style={doneFailButtonStyles} className={classes.DoneButton} onClick={onDonePressHandler}>
                  <CorporationsText styles={doneButtonTextStyles}>
                    Задание выполнено
                  </CorporationsText>
                  <div className={classes.OpenCloseArrowButtonContainer} onClick={changeIsFailButtonDisplayHandler}>
                    <div className={classes.OpenCloseArrowButtonWrapper}>
                      <OpenCloseArrowButton isOpened={isFailButtonDisplay} />
                    </div>
                  </div>
                </div>
                {
                  isFailButtonDisplay && (
                    <div style={doneFailButtonStyles} className={classes.FailButtonWrapper}>
                      <TreasuryButton onClick={onFailPressHandler} color={'#FF5C00'}>
                        Задание провалено
                      </TreasuryButton>
                    </div>
                  )
                }
              </div>
            )
          }
        </div>
      </div>
    </>
  );
});

export default SingleTaskDescription;