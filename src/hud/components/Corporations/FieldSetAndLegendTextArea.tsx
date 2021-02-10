import React from 'react';
import FieldSetAndLegendTextAreaStateless from "./FieldSetAndLegendTextAreaStateless";

interface Props {
  legend: string;
  contentString: string;
  onChange: (string) => void;
  placeholder?: string;
}

const FieldSetAndLegendTextArea: React.FC<Props> = React.memo((Props) => {

  const textChangeHandler = (value: string) => {
    Props.onChange(value);
  }

  return (
    <FieldSetAndLegendTextAreaStateless legend={Props.legend} contentText={Props.contentString}
                                        onChange={textChangeHandler} placeholder={Props.placeholder}/>
  );
});

export default FieldSetAndLegendTextArea;