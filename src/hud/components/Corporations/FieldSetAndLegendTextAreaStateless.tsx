import React, {CSSProperties} from 'react';
import classes from '../../../styles/hud/components/Corporations/FieldSetAndLegendTextAreaStateless.module.scss';
import CorporationsText from "./CorporationsText";
import CorporationsInput from "./CorporationsInput";
import {corporationsTheme} from "../../../constants/hud/corporations/corporationsTheme";
import CorporationsTextArea from "./CorporationsTextArea";

interface Props {
  legend: string;
  contentText: string;
  onChange: any;
  maxLength?: number;
  placeholder?: string;
}

const FieldSetAndLegendTextAreaStateless: React.FC<Props> = React.memo((Props) => {

  const legendTextStyles: CSSProperties = {
    lineHeight: '0.9324rem',
    fontSize: '0.7647rem',
    fontWeight: 500,
    color: corporationsTheme.text_gray2
  }

  return (
    <fieldset className={classes.FieldSetAndLegendTextArea}>
      <legend className={classes.Legend}>
        <CorporationsText styles={legendTextStyles}>
          {Props.legend}
        </CorporationsText>
      </legend>
      <div className={classes.Content}>
        <CorporationsTextArea value={Props.contentText} onChange={Props.onChange}
                           maxLength={Props.maxLength} placeholder={Props.placeholder}/>
      </div>
    </fieldset>
  );
});

export default FieldSetAndLegendTextAreaStateless;