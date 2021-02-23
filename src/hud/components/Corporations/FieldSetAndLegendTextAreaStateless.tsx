import React, { CSSProperties } from 'react';
import classes from '../../../styles/hud/components/Corporations/FieldSetAndLegendTextAreaStateless.module.scss';
import CorporationsText from './CorporationsText';
import { corporationsTheme } from '../../../constants/hud/corporations/corporationsTheme';
import CorporationsTextArea from './CorporationsTextArea';

interface Props {
  legend: string;
  contentText: string;
  onChange: (string) => void;
  maxLength?: number;
  placeholder?: string;
}

const FieldSetAndLegendTextAreaStateless: React.FC<Props> = React.memo((props) => {
  const legendTextStyles: CSSProperties = {
    lineHeight: '0.9324rem',
    fontSize: '0.7647rem',
    fontWeight: 500,
    color: corporationsTheme.text_gray2,
  };

  return (
    <fieldset className={classes.FieldSetAndLegendTextArea}>
      <legend className={classes.Legend}>
        <CorporationsText styles={legendTextStyles}>{props.legend}</CorporationsText>
      </legend>
      <div className={classes.Content}>
        <CorporationsTextArea
          value={props.contentText}
          onChange={props.onChange}
          maxLength={props.maxLength}
          placeholder={props.placeholder}
        />
      </div>
    </fieldset>
  );
});

export default FieldSetAndLegendTextAreaStateless;
