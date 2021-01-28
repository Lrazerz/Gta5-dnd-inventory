import React from 'react';
import classes from '../../../../styles/hud/components/Corporations/TreasuryTab/TreasuryBorderedInput.module.scss';
import TreasuryInput from "./TreasuryInput";

interface Props {
  value: string;
  onChange: (any) => void
}

const TreasuryBorderedInput: React.FC<Props> = React.memo((Props) => {

  return (
    <div className={classes.TreasuryBorderedInput}>
      <TreasuryInput value={Props.value} onChange={Props.onChange} />
      <div className={classes.DollarSign}/>
    </div>
  );
});

export default TreasuryBorderedInput;