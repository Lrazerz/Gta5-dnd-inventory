import React, { CSSProperties, useEffect } from 'react';
import classes from '../../../styles/hud/components/Corporations/CorporationsTextArea.module.scss';

interface Props {
  value: string;
  onChange: (string) => void;
  styles?: CSSProperties;
  maxLength?: number;
  placeholder?: string;
}

const CorporationsTextArea: React.FC<Props> = React.memo((props) => {
  return (
    <textarea
      className={classes.CorporationsTextArea}
      value={props.value}
      style={props.styles}
      onChange={(e) => props.onChange(e.target.value)}
      maxLength={props.maxLength}
      rows={4}
      placeholder={props.placeholder}
    />
  );
});

export default CorporationsTextArea;
