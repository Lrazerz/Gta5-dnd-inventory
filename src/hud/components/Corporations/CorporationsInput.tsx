import React, {CSSProperties} from 'react';
import classes from '../../../styles/hud/components/Corporations/CorporationsInput.module.scss';

interface Props {
  value: string;
  onChange: (textFilter: string) => any;
  placeholder?: string;
  styles?: CSSProperties;
  textInputStyles?: CSSProperties;
  // text input styles?
  maxLength?: number;
  isDisabled?: boolean;
}

const CorporationsInput: React.FC<Props>
  = React.memo(({value, onChange, placeholder = 'Search', styles, maxLength, textInputStyles, isDisabled}) => {

  const changeTextHandler = (newText: string) => {
    if(newText === ' ' || isDisabled) {
      return;
    } else onChange(newText);
  }

  return (
    <div style={styles} className={classes.CorporationsInput}>
      <input style={textInputStyles} className={classes.TextInput} placeholder={placeholder} type="text" value={value} maxLength={maxLength}
      onChange={e => changeTextHandler(e.target.value)} />
    </div>
  );
});

export default CorporationsInput;