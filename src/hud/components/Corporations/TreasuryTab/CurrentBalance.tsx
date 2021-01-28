import React, {CSSProperties} from 'react';
import classes from '../../../../styles/hud/components/Corporations/TreasuryTab/CurrentBalance.module.scss';
import CorporationsText from "../CorporationsText";
import {corporationsTheme} from "../consts/corporationsTheme";

interface Props {
  balance: string;
  // rightContent?: JSX.Element;
}

const CurrentBalance: React.FC<Props> = React.memo((Props) => {

  const titleTextStyles: CSSProperties = {
    lineHeight: '0.9324rem',
    fontSize: '0.7647rem',
    fontWeight: 600,
    color: corporationsTheme.text_gray2
  }

  const valueTextStyles: CSSProperties = {
    marginLeft: '13.36%',
    lineHeight: '1rem',
    fontSize: '0.8235rem',
    color: '#fff'
  }

  return (
    <div className={classes.CurrentBalance}>
      <CorporationsText styles={titleTextStyles}>
        Баланс
      </CorporationsText>
      <div className={classes.BalanceValueBlock}>
        <CorporationsText styles={valueTextStyles}>
          {Props.balance}
        </CorporationsText>
        <div className={classes.DollarSignWrapper} />
      </div>
    </div>
  );
});

export default CurrentBalance;