import React, {CSSProperties} from 'react';
import classes from '../../../styles/hud/components/Corporations/CorporationsInput.module.scss';

interface Props {
  value: string;
  onChange: (textFilter: string) => any;
  placeholder?: string;
  styles?: CSSProperties;
}

const CorporationsInput: React.FC<Props> = React.memo(({value, onChange, placeholder = 'Search', styles}) => {

  const changeTextHandler = (newText: string) => {
    if(newText === ' ') {
      return;
    } else onChange(newText);
  }

  return (
    <div style={styles} className={classes.CorporationsInput}>
      <input className={classes.TextInput} placeholder={placeholder} type="text" value={value}
      onChange={e => changeTextHandler(e.target.value)}/>
    </div>
  );
});

export default CorporationsInput;