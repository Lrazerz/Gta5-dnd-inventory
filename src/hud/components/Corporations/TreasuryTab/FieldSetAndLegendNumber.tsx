import React from 'react';
import FieldSetAndLegendStateless from "./FieldSetAndLegendStateless";
import {splitStringDigits} from "../../../../utils/common/splitStringDigits";
import {joinSplitedDigits} from "../../../../utils/common/joinSplittedDigits";

interface Props {
  legend: string;
  contentNumber: number;
  min: number;
  max: number;
  // more like onConfirm, only when enter pressed
  onChange: any;
  rightContent?: JSX.Element;
}

const FieldSetAndLegendNumber: React.FC<Props> = React.memo((Props) => {
  // todo restr

  const onNumberChange = (numberStr: string) => {
    const numberWithoutSpacesStr: string = joinSplitedDigits(numberStr);
    const numberWithoutSpaces: number = +numberWithoutSpacesStr;
    if(isNaN(numberWithoutSpaces)) {
      return;
    }
    if(numberWithoutSpaces < Props.min) {
      return;
    }
    if(numberWithoutSpaces > Props.max) {
      return;
    }
    Props.onChange(numberWithoutSpaces.toString());
  }

  return (
    <FieldSetAndLegendStateless legend={Props.legend} contentText={splitStringDigits(Props.contentNumber)}
                                onChange={onNumberChange} rightContent={Props.rightContent}/>
  );
});

export default FieldSetAndLegendNumber;