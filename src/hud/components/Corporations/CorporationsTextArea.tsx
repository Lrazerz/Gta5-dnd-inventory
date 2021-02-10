import React, {CSSProperties, useEffect} from 'react';
import classes from '../../../styles/hud/components/Corporations/CorporationsTextArea.module.scss';

interface Props {
  value: string;
  onChange: (string) => void;
  styles?: CSSProperties;
  maxLength?: number;
  placeholder?: string;
}

const CorporationsTextArea: React.FC<Props> = React.memo((Props) => {

  return (
    <textarea className={classes.CorporationsTextArea} value={Props.value} style={Props.styles}
              onChange={e => Props.onChange(e.target.value)} maxLength={Props.maxLength} rows={4}
              placeholder={Props.placeholder}/>
  );
});

export default CorporationsTextArea;