import React from 'react';
import FieldSetAndLegendStateless from "./FieldSetAndLegendStateless";
import {splitStringDigits} from "../../../utils/common/splitStringDigits";
import {joinSplitedDigits} from "../../../utils/common/joinSplittedDigits";

interface Props {
  legend: string;
  contentNumber: number | null;
  // more like onConfirm, only when enter pressed
  onChange: (string) => void;
  max?: number;
  rightContent?: JSX.Element;
  placeholder?: string;
}

// returns number or '' if nothing typed
const FieldSetAndLegendNumber: React.FC<Props> = React.memo((Props) => {

  const onNumberChange = (numberStr: string) => {
    if(numberStr === '') {
      Props.onChange('');
      return;
    }
    const numberWithoutSpacesStr: string = joinSplitedDigits(numberStr);
    const numberWithoutSpaces: number = +numberWithoutSpacesStr;
    if(isNaN(numberWithoutSpaces)) {
      console.warn('[forb] number input is not a number');
      return;
    }
    if(Props.max && numberWithoutSpaces > Props.max) {
      console.warn('[forb] number input > max available');
      return;
    }
    Props.onChange(numberWithoutSpaces.toString());
  }

  return (
    <FieldSetAndLegendStateless legend={Props.legend} contentText={splitStringDigits(Props.contentNumber)}
                                onChange={onNumberChange} rightContent={Props.rightContent}
                                placeholder={Props.placeholder}/>
  );
});

export default FieldSetAndLegendNumber;