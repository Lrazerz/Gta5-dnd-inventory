import React from 'react';
import classes from '../../../../styles/hud/components/Corporations/TreasuryTab/TreasuryBorderedInput.module.scss';
import CorporationsInput from "../CorporationsInput";

interface Props {
  value: string;
  onChange: (any) => void
}

const TreasuryBorderedInput: React.FC<Props> = React.memo((Props) => {

  return (
    <div className={classes.TreasuryBorderedInput}>
      <CorporationsInput value={Props.value} onChange={Props.onChange} />
      <div className={classes.DollarSign}/>
    </div>
  );
});

export default TreasuryBorderedInput;