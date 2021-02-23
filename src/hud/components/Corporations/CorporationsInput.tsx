import React, { CSSProperties } from 'react';
import classes from '../../../styles/hud/components/Corporations/CorporationsInput.module.scss';

interface Props {
  value: string;
  onChange: (string) => void;
  styles?: CSSProperties;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
}

const CorporationsInput: React.FC<Props> = React.memo((props) => {
  let minLength: number = props.minLength;
  let maxLength: number = props.maxLength;

  if (!minLength) {
    minLength = 0;
  }
  if (!maxLength) {
    maxLength = 1000;
  }

  return (
    <input
      style={props.styles}
      className={classes.CorporationsInput}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      minLength={minLength}
      maxLength={maxLength}
      placeholder={props.placeholder}
    />
  );
});

export default CorporationsInput;
