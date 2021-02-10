import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {splitStringDigits} from "../../../../utils/common/splitStringDigits";
import {joinSplitedDigits} from "../../../../utils/common/joinSplittedDigits";
import {
  treasuryMinAmountToWithdraw
} from "../../../../constants/hud/corporations/treasury/treasury";
import {corporationsTreasuryWithdrawMoneyAction} from "../../../../redux/actions/hud/corporations/tabs/treasury/treasury";
import TreasuryWithdrawPutPopUp from "./TreasuryWithdrawPutPopUp";

interface Props {
}

type WithdrawAmountType = number | '';

const TreasuryWithdrawMenu: React.FC<Props> = React.memo(() => {

  const dispatch = useDispatch();

  const [withdrawAmount, setWithdrawAmount]: [WithdrawAmountType, (WithdrawAmountType) => void] = useState(treasuryMinAmountToWithdraw);

  const withdrawAvailableTodayRedux =
    useSelector(state => state.hud.corporations.tabs.treasury.withdrawAvailableToday);

  const changeWithdrawAmountHandler = (amount: string) => {
    if(amount === '') {
      setWithdrawAmount('');
      return;
    }
    const formattedAmount: number = +joinSplitedDigits(amount);
    if(formattedAmount > withdrawAvailableTodayRedux) {
      return;
    }
    setWithdrawAmount(formattedAmount);
  }

  const inputBlurHandler = () => {
    if(typeof withdrawAmount === 'string') {
      setWithdrawAmount(treasuryMinAmountToWithdraw);
    }
  }

  const withdrawMoneyHandler = () => {
    if(typeof withdrawAmount === 'string') {
      setWithdrawAmount(treasuryMinAmountToWithdraw);
      return;
    }
    if(withdrawAmount < treasuryMinAmountToWithdraw) {
      return;
    }
    if(withdrawAmount > withdrawAvailableTodayRedux) {
      return;
    }
    dispatch(corporationsTreasuryWithdrawMoneyAction(withdrawAmount));
  }

  return (
    <TreasuryWithdrawPutPopUp title={'Введите сумму'} tipTitle={'Возможно взять из казны сегодня'}
                              tipNumber={withdrawAvailableTodayRedux} inputNumber={splitStringDigits(withdrawAmount)}
                              onInputChange={changeWithdrawAmountHandler} onButtonClick={withdrawMoneyHandler}
                              onInputBlur={inputBlurHandler}/>
  );
});

export default TreasuryWithdrawMenu;