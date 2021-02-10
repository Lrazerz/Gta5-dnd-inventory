import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  TreasuryInitialStateInterfaceWithLoading
} from "../../../models/corporations/tabs/treasury/treasuryInterfaces";
import {
  treasuryMinAmountToTransfer,
  treasuryMinAmountToWithdrawSet
} from "../../../../constants/hud/corporations/treasury/treasury";
import {maxNicknameLength, minNicknameLength, nicknameRegex} from "../../../../constants/commonConstants";
import {mpTrigger_corporations_treasury_transfer}
from "../../../../utils/mpTriggers/hud/corporations/tabs/treasury/treasuryTriggers";
import {corporationsTreasuryChangeAvailableAmount} from "../../../../redux/actions/hud/corporations/tabs/treasury/treasury";
import TreasuryTabStateless from "./TreasuryTabStateless";

interface Props {

}

type AvailableAmountTodayType = number | '';

const TreasuryTab: React.FC<Props> = React.memo(() => {

  const dispatch = useDispatch();

  const treasuryTabRedux: TreasuryInitialStateInterfaceWithLoading
    = useSelector(state => state.hud.corporations.tabs.treasury);

  const [availableAmountToday, setAvailableAmountToday]: [AvailableAmountTodayType, (AvailableAmountTodayType) => void] =
    useState(treasuryTabRedux.withdrawAvailableToday);
  const [nicknameToTransfer, setNicknameToTransfer]: [string, (string) => void] = useState('');
  const [amountToTransfer, setAmountToTransfer]: [number, (number) => void] = useState(1);


  const [isWithdrawMenuOpened, setIsWithdrawMenuOpened]: [boolean, (boolean) => void] = useState(false);
  const [isPutMenuOpened, setIsPutMenuOpened]: [boolean, (boolean) => void] = useState(false);

  useEffect(() => {
    setAvailableAmountToday(treasuryTabRedux.withdrawAvailableToday);
  }, [treasuryTabRedux]);

  const changeAvailableAmountTodayHandler = (amount: string) => {
    if(!amount) {
      setAvailableAmountToday('');
      return;
    }
    setAvailableAmountToday(+amount)
  }

  const changeNicknameToTransferHandler = (nickname: string) => {
    setNicknameToTransfer(nickname);
  }

  const changeAmountToTransferHandler = (amount: string) => {
    if(!amount) {
      setAmountToTransfer('');
      return;
    }
    setAmountToTransfer(+amount);
  }

  const openWithdrawMenuHandler = () => {
    setIsWithdrawMenuOpened(true);
  }

  const openPutMenuHandler = () => {
    setIsPutMenuOpened(true);
  }

  const closeWithdrawMenuHandler = () => {
    setIsWithdrawMenuOpened(false);
  }

  const closePutMenuHandler = () => {
    setIsPutMenuOpened(false);
  }

  const changeAvailableAmountRedux = () => {
    if(typeof availableAmountToday === 'string') {
      setAvailableAmountToday(treasuryMinAmountToWithdrawSet);
      return;
    }
    if(availableAmountToday === treasuryTabRedux.withdrawAvailableToday) {
      return;
    }
    if(availableAmountToday < treasuryMinAmountToWithdrawSet) {
      setAvailableAmountToday(treasuryMinAmountToWithdrawSet);
      return;
    }
    if(availableAmountToday > treasuryTabRedux.treasuryAmount) {
      setAvailableAmountToday(treasuryTabRedux.treasuryAmount);
      return;
    }
    dispatch(corporationsTreasuryChangeAvailableAmount(+availableAmountToday));
  }

  const keyDownHandler = (e: KeyboardEvent) => {
    if(e.key.toLowerCase() === 'enter') {
      changeAvailableAmountRedux();
    }
  }

  const amountToTransferBlurHandler = () => {
    if(typeof amountToTransfer === 'string') {
      setAmountToTransfer(treasuryMinAmountToTransfer);
    }
  }

  const transferHandler = () => {
    if(!nicknameRegex.test(nicknameToTransfer)) {
      return;
    }
    if(amountToTransfer < treasuryMinAmountToTransfer) {
      setAmountToTransfer(treasuryMinAmountToTransfer);
      return;
    }
    mpTrigger_corporations_treasury_transfer(nicknameToTransfer, amountToTransfer);
  }

  return <TreasuryTabStateless treasuryTabData={treasuryTabRedux} isWithdrawMenuOpened={isWithdrawMenuOpened}
                               onWithdrawMenuOpen={openWithdrawMenuHandler}
                               onWithdrawMenuClose={closeWithdrawMenuHandler} isPutMenuOpened={isPutMenuOpened}
                               onPutMenuOpen={openPutMenuHandler} onPutMenuClose={closePutMenuHandler}
                               onTransfer={transferHandler} availableAmountToday={availableAmountToday}
                               onAvailableAmountChange={changeAvailableAmountTodayHandler}
                               onAvailableAmountKeyDown={keyDownHandler}
                               onAvailableAmountChangeRedux={changeAvailableAmountRedux}
                               onAvailableAmountBlur={changeAvailableAmountRedux} nicknameToTransfer={nicknameToTransfer}
                               onNicknameToTransferChange={changeNicknameToTransferHandler}
                               amountToTransfer={amountToTransfer} onAmountToTransferChange={changeAmountToTransferHandler}
                               onAmountToTransferBlur={amountToTransferBlurHandler} />
});

export default TreasuryTab;