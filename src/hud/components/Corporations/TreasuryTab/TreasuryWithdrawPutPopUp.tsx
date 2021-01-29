import React, {CSSProperties} from 'react';
import classes from '../../../../styles/hud/components/Corporations/TreasuryTab/TreasuryWithdrawPutPopUp.module.scss';
import CorporationsText from "../CorporationsText";
import HorizontalLine from "../HorizontalLine";
import TreasuryBorderedInput from "./TreasuryBorderedInput";
import TreasuryButton from "./TreasuryButton";

interface Props {
  title: string;
  tipTitle: string;
  tipNumber: string | number;
  inputNumber: string;
  onInputChange: (any) => void;
  // to give opportunity enter ""
  onInputBlur: (any) => void;
  onButtonClick: (any) => void;
}

const TreasuryWithdrawPutPopUp: React.FC<Props> = React.memo((Props) => {

  const containerClickHandler = (e) => {
    e.stopPropagation();
  }

  const titleTextStyles: CSSProperties = {
    paddingTop: '5.83%',
    fontSize: '0.8824rem',
    lineHeight: '1.08rem',
    fontWeight: 700,
    textAlign: 'center',
  }

  const withdrawAvailableTodayTitleStyles: CSSProperties = {
    fontSize: '0.7647rem',
    lineHeight: '0.9324rem',
    fontWeight: 700,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '91%',
  }

  const delimiterStyles: CSSProperties = {
    backgroundColor: '#868789',
  }

  return (
    <div className={classes.TreasuryWithdrawMenu} onClick={containerClickHandler}>
      <CorporationsText styles={titleTextStyles}>
        Введите сумму
      </CorporationsText>
      <div className={classes.TodayAvailableWithdrawContainer}>
        <div className={classes.HorizontalLineWrapper}>
          <HorizontalLine styles={delimiterStyles}/>
        </div>
        <div className={classes.TextAndDollarSignWrapper}>
          <CorporationsText styles={withdrawAvailableTodayTitleStyles}>
            {`${Props.tipTitle}: ${Props.tipNumber}`}
          </CorporationsText>
          <div className={classes.DollarSign} />
        </div>
        <div className={classes.HorizontalLineWrapper}>
          <HorizontalLine styles={delimiterStyles}/>
        </div>
      </div>
      <div className={classes.TreasuryBorderedInputWrapper} onBlur={Props.onInputBlur}>
        <TreasuryBorderedInput value={Props.inputNumber}
                               onChange={Props.onInputChange}/>
      </div>
      <div className={classes.WithdrawButtonWrapper}>
        <TreasuryButton onClick={Props.onButtonClick}>
          Получить из казны
        </TreasuryButton>
      </div>
    </div>
  );
});

export default TreasuryWithdrawPutPopUp;