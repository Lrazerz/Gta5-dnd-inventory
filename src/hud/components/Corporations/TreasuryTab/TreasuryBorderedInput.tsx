import React from 'react';
import classes from '../../../../styles/hud/components/Corporations/TreasuryTab/TreasuryBorderedInput.module.scss';
import CorporationsInput from '../CorporationsInput';

interface Props {
  value: string;
  onChange: (any) => void;
}

const TreasuryBorderedInput: React.FC<Props> = React.memo((props) => {
  return (
    <div className={classes.TreasuryBorderedInput}>
      <CorporationsInput value={props.value} onChange={props.onChange} />
      <div className={classes.DollarSign} />
    </div>
  );
});

export default TreasuryBorderedInput;
