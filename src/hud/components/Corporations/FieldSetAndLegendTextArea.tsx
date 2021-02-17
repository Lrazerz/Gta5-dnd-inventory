import React from 'react';
import FieldSetAndLegendTextAreaStateless from './FieldSetAndLegendTextAreaStateless';

interface Props {
  legend: string;
  contentString: string;
  onChange: (string) => void;
  placeholder?: string;
}

const FieldSetAndLegendTextArea: React.FC<Props> = React.memo((props) => {
  const textChangeHandler = (value: string) => {
    props.onChange(value);
  };

  return (
    <FieldSetAndLegendTextAreaStateless
      legend={props.legend}
      contentText={props.contentString}
      onChange={textChangeHandler}
      placeholder={props.placeholder}
    />
  );
});

export default FieldSetAndLegendTextArea;
