import React, {CSSProperties} from 'react';
import classes from '../../../styles/hud/components/Corporations/CorporationsInput.module.scss';

interface Props {
  value: string;
  onChange: any;
  styles?: CSSProperties;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
}

const CorporationsInput: React.FC<Props> = React.memo((Props) => {

  let minLength: number = Props.minLength;
  let maxLength: number = Props.maxLength;

  if(!minLength) {
    minLength = 0;
  }
  if(!maxLength) {
    maxLength = 1000;
  }

  return (
    <input style={Props.styles} className={classes.CorporationsInput} value={Props.value}
           onChange={(e) => Props.onChange(e.target.value)}
           minLength={minLength} maxLength={maxLength} placeholder={Props.placeholder}/>
  );
});

export default CorporationsInput;