import React, {CSSProperties, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classes from '../../../../styles/hud/components/Corporations/TreasuryTab/TreasuryTab.module.scss';
import CorporationsText from "../CorporationsText";
import HalfGearWithMoney from "./HalfGearWithMoney";
import TreasuryButton from "./TreasuryButton";
import {corporationsTheme} from "../consts/corporationsTheme";
import {
  TreasuryInitialStateInterfaceWithLoading
} from "../../../models/corporations/tabs/treasury/treasuryInterfaces";
import FieldSetAndLegendNumber from "./FieldSetAndLegendNumber";
import FieldSetAndLegendString from "./FieldSetAndLegendString";
import {treasuryMinAmountToTransfer} from "../../../../constants/hud/corporations/treasury/treasuryConstants";
import {maxNicknameLength, minNicknameLength, nicknameRegex} from "../../../../constants/commonConstants";
import {
  mpTrigger_corporations_treasury_changeAvailableAmount, mpTrigger_corporations_treasury_transfer
} from "../../../../utils/mpTriggers/hud/corporations/tabs/treasury/treasuryTriggers";
import {corporationsTreasuryChangeAvailableAmount} from "../../../../redux/actions/hud/corporations/tabs/treasury/treasury";
import LoadingIndicator from "../../common/LoadingIndicator/LoadingIndicator";
import TreasuryWithdrawMenu from "./TreasuryWithdrawMenu";

interface Props {

}

const TreasuryTab: React.FC<Props> = React.memo(() => {

  const dispatch = useDispatch();

  const treasuryTabRedux: TreasuryInitialStateInterfaceWithLoading = useSelector(state => state.hud.corporations.tabs.treasury);

  //region Input states
  // to change before send to redux & server
  const [availableAmountToday, setAvailableAmountToday]: [number, (number) => void] = useState(treasuryTabRedux.withdrawAvailableToday);
  const [nicknameToTransfer, setNicknameToTransfer]: [string, (string) => void] = useState('');
  const [amountToTransfer, setAmountToTransfer]: [number, (number) => void] = useState(1);
  //endregion

  //region
  const [isWithdrawMenuOpened, setIsWithdrawMenuOpened]: [boolean, (boolean) => void] = useState(false);
  const [isPutMenuOpened, setIsPutMenuOpened]: [boolean, (boolean) => void] = useState(false);
  //endregion


  // const maxWithdrawToday = 929765;

  // maybe on enter press
  const changeAvailableAmountTodayHandler = (amount: string) => {
    setAvailableAmountToday(amount)
  }

  const changeNicknameToTransferHandler = (nickname: string) => {
    setNicknameToTransfer(nickname);
  }

  const changeAmountToTransferHandler = (amount: string) => {
    setAmountToTransfer(amount);
  }

  //
  const openWithdrawMenuHandler = () => {
    setIsWithdrawMenuOpened(true);
  }

  const closeWithdrawMenuHandler = () => {
    setIsWithdrawMenuOpened(false);
  }

  // handle change available amount

  const changeAvailableAmount = () => {
    if(+availableAmountToday === treasuryTabRedux.withdrawAvailableToday) {
      return;
    }
    dispatch(corporationsTreasuryChangeAvailableAmount(+availableAmountToday));
    mpTrigger_corporations_treasury_changeAvailableAmount(availableAmountToday);
  }

  const keyDownHandler = (e) => {
    if(e.key.toLowerCase() === 'enter') {
      changeAvailableAmount();
    }
  }

  const transferHandler = () => {
    if(!nicknameRegex.test(nicknameToTransfer)) {
      console.log('bad nickname');
      return;
    }
    mpTrigger_corporations_treasury_transfer(nicknameToTransfer, amountToTransfer);
  }

  const titleTextStyles: CSSProperties = {
    lineHeight: '1.79rem',
    fontSize: '1.47rem',
    marginTop: '3.1%'
  }

  const todayAmountDollarBlock: JSX.Element = (
    <div className={`${classes.DollarSign} ${classes.TodayAmountDollarSign}`} />
  )

  const transferSimDollarBlock: JSX.Element = (
    <div className={classes.DollarSign}/>
  )

  if(treasuryTabRedux.isLoading) {
    return (
      <div className={classes.TreasuryTab}>
        <LoadingIndicator/>
      </div>
    )
  }

  return (
    <div className={classes.TreasuryTab}>
      <CorporationsText styles={titleTextStyles}>
        Управление казной
      </CorporationsText>
      <div className={classes.HalfGearWithMoneyWrapper}>
        <HalfGearWithMoney amount={treasuryTabRedux.treasuryAmount}/>
      </div>
      <div className={classes.WithdrawPutButtonsContainer} >
        <div className={classes.WithdrawButtonWrapper}>
          <TreasuryButton onClick={openWithdrawMenuHandler}>
            Получить из казны
          </TreasuryButton>
        </div>
        <div className={classes.PutButtonWrapper}>
          <TreasuryButton onClick={() => console.log('todo')} color={corporationsTheme.button_Blue}>
            Положить в казну
          </TreasuryButton>
        </div>
      </div>
      <div className={classes.WithdrawTodayWrapper} onBlur={changeAvailableAmount} onKeyDown={keyDownHandler}>
        <FieldSetAndLegendNumber legend={'Сегодня можно снять'}
                                    contentNumber={availableAmountToday}
                                 min={0} max={treasuryTabRedux.treasuryAmount}
        onChange={changeAvailableAmountTodayHandler} rightContent={todayAmountDollarBlock}/>
      </div>
      <CorporationsText styles={titleTextStyles}>
        Отправить деньги
      </CorporationsText>
      <div className={classes.NicknameAndSumBlock}>
        <div className={classes.InputWrapper}>
          <FieldSetAndLegendString legend={'Введите ник'} contentString={nicknameToTransfer}
            onChange={changeNicknameToTransferHandler} minLength={minNicknameLength} maxLength={maxNicknameLength}/>
        </div>
        <div className={classes.InputWrapper}>
          <FieldSetAndLegendNumber legend={'Сумма перевода'} contentNumber={amountToTransfer}
                                   onChange={changeAmountToTransferHandler}
          min={treasuryMinAmountToTransfer} max={treasuryTabRedux.withdrawAvailableToday}
          rightContent={transferSimDollarBlock}/>
        </div>
      </div>
      <div className={classes.TransferButtonWrapper}>
        <TreasuryButton onClick={transferHandler}>
          Перевести
        </TreasuryButton>
      </div>
      {isWithdrawMenuOpened &&
        (
          <div className={classes.WithdrawMenuTabWrapper} onClick={closeWithdrawMenuHandler}>
            <div className={classes.WithdrawMenuWrapper}>
              <TreasuryWithdrawMenu />
            </div>
          </div>
        )
      }
    </div>
  );
});

export default TreasuryTab;