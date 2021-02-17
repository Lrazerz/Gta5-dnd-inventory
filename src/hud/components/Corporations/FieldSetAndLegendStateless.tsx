import React, { CSSProperties } from 'react';
import classes from '../../../styles/hud/components/Corporations/FieldSetAndLegendStateless.module.scss';
import CorporationsText from './CorporationsText';
import { corporationsTheme } from '../../../constants/hud/corporations/corporationsTheme';
import CorporationsInput from './CorporationsInput';

interface Props {
  legend: string;
  contentText: string;
  onChange: any;
  rightContent?: JSX.Element;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
}

const FieldSetAndLegendStateless: React.FC<Props> = React.memo((props) => {
  const legendTextStyles: CSSProperties = {
    lineHeight: '0.9324rem',
    fontSize: '0.7647rem',
    fontWeight: 500,
    color: corporationsTheme.text_gray2,
  };

  const contentTextStyles: CSSProperties = {
    lineHeight: '1rem',
    fontSize: '0.8235rem',
  };

  return (
    <fieldset className={classes.FieldSetAndLegend}>
      <legend className={classes.Legend}>
        <CorporationsText styles={legendTextStyles}>{props.legend}</CorporationsText>
      </legend>
      <div className={classes.Content}>
        <CorporationsInput
          value={props.contentText}
          onChange={props.onChange}
          styles={contentTextStyles}
          minLength={props.minLength}
          maxLength={props.maxLength}
          placeholder={props.placeholder}
        />
        {props.rightContent}
      </div>
    </fieldset>
  );
});

export default FieldSetAndLegendStateless;
