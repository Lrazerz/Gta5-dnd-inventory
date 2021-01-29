import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {splitStringDigits} from "../../../../utils/common/splitStringDigits";
import {joinSplitedDigits} from "../../../../utils/common/joinSplittedDigits";
import {
  treasuryMinAmountToPut,
} from "../../../../constants/hud/corporations/treasury/treasuryConstants";
import {
  corporationsTreasuryPutMoneyAction,
  corporationsTreasuryWithdrawMoneyAction
} from "../../../../redux/actions/hud/corporations/tabs/treasury/treasury";
import TreasuryWithdrawPutPopUp from "./TreasuryWithdrawPutPopUp";

interface Props {
}

type PutAmountType = number | '';

const TreasuryPutMenu: React.FC<Props> = React.memo(() => {

  const dispatch = useDispatch();

  const [putAmount, setPutAmount]: [PutAmountType, (PutAmountType) => void] = useState(treasuryMinAmountToPut);

  const availableToPutToday = useSelector(state => state.hud.corporations.tabs.treasury.putAvailableToday);

  const changePutAmountHandler = (amount: string) => {
    if (!amount) {
      setPutAmount('');
      return;
    }
    const formattedAmount: number = +joinSplitedDigits(amount);
    if (formattedAmount < treasuryMinAmountToPut) {
      setPutAmount(treasuryMinAmountToPut);
      return;
    }
    if (formattedAmount > availableToPutToday) {
      return;
    }
    setPutAmount(formattedAmount);
  }

  const inputBlurHandler = () => {
    if(typeof putAmount === 'string') {
      setPutAmount(treasuryMinAmountToPut);
    }
  }

  const putMoneyHandler = () => {
    if (typeof putAmount === 'string') {
      console.log('TreasuryPutMenu click')
      setPutAmount(treasuryMinAmountToPut);
      return;
    }
    if (putAmount < treasuryMinAmountToPut) {
      return;
    }
    if (putAmount > availableToPutToday) {
      return;
    }
    // td
    dispatch(corporationsTreasuryPutMoneyAction(putAmount));
  }

  return (
    <TreasuryWithdrawPutPopUp title={'Введите сумму'} tipTitle={'Возможно положить в казну сегодня'}
                              tipNumber={availableToPutToday} inputNumber={splitStringDigits(putAmount)}
                              onInputChange={changePutAmountHandler} onButtonClick={putMoneyHandler}
                              onInputBlur={inputBlurHandler}/>
  );
});

export default TreasuryPutMenu;