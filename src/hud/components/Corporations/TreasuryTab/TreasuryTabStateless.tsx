import React, {CSSProperties} from 'react';
import classes from '../../../../styles/hud/components/Corporations/TreasuryTab/TreasuryTabStateless.module.scss';
import CorporationsText from "../CorporationsText";
import HalfGearWithMoney from "./HalfGearWithMoney";
import TreasuryButton from "./TreasuryButton";
import {corporationsTheme} from "../../../../constants/hud/corporations/corporationsTheme";
import FieldSetAndLegendNumber from "../FieldSetAndLegendNumber";
import FieldSetAndLegendString from "../FieldSetAndLegendString";
import {maxNicknameLength, minNicknameLength} from "../../../../constants/commonConstants";
import TreasuryWithdrawMenu from "./TreasuryWithdrawMenu";
import TreasuryPutMenu from "./TreasuryPutMenu";
import LoadingIndicator from "../../common/LoadingIndicator/LoadingIndicator";
import {TreasuryInitialStateInterfaceWithLoading} from "../../../models/corporations/tabs/treasury/treasuryInterfaces";

interface Props {
  treasuryTabData: TreasuryInitialStateInterfaceWithLoading;

  isWithdrawMenuOpened: boolean;
  onWithdrawMenuOpen: () => void;
  onWithdrawMenuClose: () => void;

  isPutMenuOpened: boolean;
  onPutMenuOpen: () => void;
  onPutMenuClose: () => void;

  onTransfer: () => void;

  availableAmountToday: number;
  onAvailableAmountChange: (string) => void;
  onAvailableAmountKeyDown: (KeyboardEvent) => void;
  onAvailableAmountChangeRedux: () => void;
  onAvailableAmountBlur: () => void;

  nicknameToTransfer: string;
  onNicknameToTransferChange: (string) => void;

  amountToTransfer: number;
  onAmountToTransferChange: (string) => void;
  onAmountToTransferBlur: () => void;
}

const TreasuryTabStateless: React.FC<Props> = React.memo((Props) => {

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

  if(Props.treasuryTabData.isLoading) {
    return (
      <div className={classes.TreasuryTabStateless}>
        <LoadingIndicator/>
      </div>
    )
  }

  return (
    <div className={classes.TreasuryTabStateless}>
      <CorporationsText styles={titleTextStyles}>Управление казной</CorporationsText>
      <div className={classes.HalfGearWithMoneyWrapper}>
        <HalfGearWithMoney amount={Props.treasuryTabData.treasuryAmount}/>
      </div>
      <div className={classes.WithdrawPutButtonsContainer} >
        <div className={classes.WithdrawButtonWrapper}>
          <TreasuryButton onClick={Props.onWithdrawMenuOpen}>
            Получить из казны
          </TreasuryButton>
        </div>
        <div className={classes.PutButtonWrapper}>
          <TreasuryButton onClick={Props.onPutMenuOpen} color={corporationsTheme.button_Blue}>
            Положить в казну
          </TreasuryButton>
        </div>
      </div>
      <div className={classes.WithdrawTodayWrapper} onBlur={Props.onAvailableAmountBlur}
           onKeyDown={Props.onAvailableAmountKeyDown}>
        <FieldSetAndLegendNumber legend={'Сегодня можно снять'}
                                 contentNumber={Props.availableAmountToday}
                                 max={Props.treasuryTabData.treasuryAmount}
                                 onChange={Props.onAvailableAmountChange} rightContent={todayAmountDollarBlock}/>
      </div>
      <CorporationsText styles={titleTextStyles}>
        Отправить деньги
      </CorporationsText>
      <div className={classes.NicknameAndSumBlock}>
        <div className={classes.InputWrapper}>
          <FieldSetAndLegendString legend={'Введите ник'} contentString={Props.nicknameToTransfer} placeholder={'Никнейм...'}
                                   onChange={Props.onNicknameToTransferChange} minLength={minNicknameLength}
                                   maxLength={maxNicknameLength}/>
        </div>
        <div className={classes.InputWrapper} onBlur={Props.onAmountToTransferBlur}>
          <FieldSetAndLegendNumber legend={'Сумма перевода'} contentNumber={Props.amountToTransfer}
                                   onChange={Props.onAmountToTransferChange} max={Props.treasuryTabData.withdrawAvailableToday}
                                   rightContent={transferSimDollarBlock}/>
        </div>
      </div>
      <div className={classes.TransferButtonWrapper}>
        <TreasuryButton onClick={Props.onTransfer}>
          Перевести
        </TreasuryButton>
      </div>
      {Props.isWithdrawMenuOpened &&
      (
        <div className={classes.BlurredMenuTabWrapper} onClick={Props.onWithdrawMenuClose}>
          <div className={classes.WithdrawMenuWrapper}>
            <TreasuryWithdrawMenu />
          </div>
        </div>
      )
      }
      {
        Props.isPutMenuOpened &&
        (
          <div className={classes.BlurredMenuTabWrapper} onClick={Props.onPutMenuClose}>
            <div className={classes.WithdrawMenuWrapper}>
              <TreasuryPutMenu />
            </div>
          </div>
        )
      }
    </div>
  );
});

export default TreasuryTabStateless;