import React from 'react';
import FieldSetAndLegendStateless from './FieldSetAndLegendStateless';
import { splitStringDigits } from '../../../utils/common/splitStringDigits';
import { joinSplitedDigits } from '../../../utils/common/joinSplittedDigits';

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
const FieldSetAndLegendNumber: React.FC<Props> = React.memo((props) => {
  const onNumberChange = (numberStr: string) => {
    if (numberStr === '') {
      props.onChange('');
      return;
    }
    const numberWithoutSpacesStr: string = joinSplitedDigits(numberStr);
    const numberWithoutSpaces: number = +numberWithoutSpacesStr;
    if (isNaN(numberWithoutSpaces)) {
      console.warn('[forb] number input is not a number');
      return;
    }
    if (props.max && numberWithoutSpaces > props.max) {
      console.warn('[forb] number input > max available');
      return;
    }
    props.onChange(numberWithoutSpaces.toString());
  };

  return (
    <FieldSetAndLegendStateless
      legend={props.legend}
      contentText={splitStringDigits(props.contentNumber)}
      onChange={onNumberChange}
      rightContent={props.rightContent}
      placeholder={props.placeholder}
    />
  );
});

export default FieldSetAndLegendNumber;
