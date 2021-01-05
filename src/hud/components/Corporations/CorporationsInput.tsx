import React from 'react';
import classes from '../../../styles/hud/components/Corporations/CorporationsInput.module.scss';

interface Props {
  value: string;
  onChange: () => any;
  placeholder?: string;
}

const CorporationsInput: React.FC<Props> = React.memo(({value, onChange, placeholder = 'Search'}) => {
  return (
    <div className={classes.CorporationsInput}>
      <input className={classes.TextInput} placeholder={placeholder} type="text"/>
    </div>
  );
});

export default CorporationsInput;