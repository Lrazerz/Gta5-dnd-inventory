import React, {CSSProperties} from 'react';
import classes from '../../../styles/hud/components/Corporations/FieldSetAndLegendStateless.module.scss';
import CorporationsText from "./CorporationsText";
import {corporationsTheme} from "../../../constants/hud/corporations/corporationsTheme";
import CorporationsInput from "./CorporationsInput";

interface Props {
  legend: string;
  contentText: string;
  onChange: any;
  rightContent?: JSX.Element;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
}

const FieldSetAndLegendStateless: React.FC<Props> = React.memo((Props) => {

  const legendTextStyles: CSSProperties = {
    lineHeight: '0.9324rem',
    fontSize: '0.7647rem',
    fontWeight: 500,
    color: corporationsTheme.text_gray2
  }

  const contentTextStyles: CSSProperties = {
    lineHeight: '1rem',
    fontSize: '0.8235rem'
  }

  return (
    <fieldset className={classes.FieldSetAndLegend}>
      <legend className={classes.Legend}>
        <CorporationsText styles={legendTextStyles}>
          {Props.legend}
        </CorporationsText>
      </legend>
      <div className={classes.Content}>
        <CorporationsInput value={Props.contentText} onChange={Props.onChange} styles={contentTextStyles} minLength={Props.minLength}
                           maxLength={Props.maxLength} placeholder={Props.placeholder}/>
        {Props.rightContent}
      </div>
    </fieldset>
  );
});

export default FieldSetAndLegendStateless;