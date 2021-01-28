import React, {CSSProperties} from 'react';
import classes from '../../../../styles/hud/components/Corporations/TreasuryTab/HalfGearWithMoney.module.scss';
import CorporationsText from "../CorporationsText";
import {splitStringDigits} from "../../../../utils/common/splitStringDigits";

interface Props {
  amount: number;
}

const HalfGearWithMoney: React.FC<Props> = React.memo((Props) => {

  const moneyTextStyles: CSSProperties = {
    lineHeight: '1.43rem',
    fontSize: '1.18rem',
    fontWeight: 700,
    textAlign: 'center',
  }

  return (
    <div className={classes.HalfGearWithMoney}>
      <CorporationsText styles={moneyTextStyles}>
        {splitStringDigits(Props.amount)}
      </CorporationsText>
      <div className={classes.DollarSignWrapper}/>
    </div>
  );
});

export default HalfGearWithMoney;