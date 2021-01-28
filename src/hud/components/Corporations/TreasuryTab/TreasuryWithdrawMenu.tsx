import React, {CSSProperties, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classes from '../../../../styles/hud/components/Corporations/TreasuryTab/TreasuryWithdrawMenu.module.scss';
import CorporationsText from "../CorporationsText";
import HorizontalLine from "../HorizontalLine";
import TreasuryBorderedInput from "./TreasuryBorderedInput";
import {splitStringDigits} from "../../../../utils/common/splitStringDigits";
import {joinSplitedDigits} from "../../../../utils/common/joinSplittedDigits";
import {treasuryMinAmountToWithdraw} from "../../../../constants/hud/corporations/treasury/treasuryConstants";
import TreasuryButton from "./TreasuryButton";
import {mpTrigger_corporations_treasury_withdraw} from "../../../../utils/mpTriggers/hud/corporations/tabs/treasury/treasuryTriggers";
import {corporationsTreasuryWithdrawMoneyAction} from "../../../../redux/actions/hud/corporations/tabs/treasury/treasury";

interface Props {

}

const TreasuryWithdrawMenu: React.FC<Props> = React.memo(() => {

  const dispatch = useDispatch();

  const [withdrawAmount, setWithdrawAmount] = useState(treasuryMinAmountToWithdraw);

  const withdrawAvailableTodayRedux =
    useSelector(state => state.hud.corporations.tabs.treasury.withdrawAvailableToday);

  const containerClickHandler = (e) => {
    e.stopPropagation();
  }

  const changeWithdrawAmountHandler = (amount: string) => {
    console.log('change amount', amount);
    const formattedAmount: number = +joinSplitedDigits(amount);
    if(formattedAmount < treasuryMinAmountToWithdraw) {
      console.log('<change amount', amount);
      setWithdrawAmount(treasuryMinAmountToWithdraw);
      return;
    }
    if(formattedAmount > withdrawAvailableTodayRedux) {
      console.log('>change amount', amount);
      return;
    }
    setWithdrawAmount(formattedAmount);
  }

  const withdrawMoneyHandler = () => {
    dispatch(corporationsTreasuryWithdrawMoneyAction(withdrawAmount));
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
            {`Возможно взять из казны сегодня: ${withdrawAvailableTodayRedux}`}
          </CorporationsText>
          <div className={classes.DollarSign} />
        </div>
        <div className={classes.HorizontalLineWrapper}>
          <HorizontalLine styles={delimiterStyles}/>
        </div>
      </div>
      <div className={classes.TreasuryBorderedInputWrapper}>
        <TreasuryBorderedInput value={splitStringDigits(+withdrawAmount)}
        onChange={changeWithdrawAmountHandler}/>
      </div>
      <div className={classes.WithdrawButtonWrapper}>
        <TreasuryButton onClick={withdrawMoneyHandler}>
          Получить из казны
        </TreasuryButton>
      </div>
    </div>
  );
});

export default TreasuryWithdrawMenu;