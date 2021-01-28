import React from 'react';
import FieldSetAndLegendStateless from "./FieldSetAndLegendStateless";

interface Props {
  legend: string;
  contentString: string;
  onChange: any;
  rightContent?: JSX.Element;
  minLength?: number;
  maxLength?: number;
}

const FieldSetAndLegendString: React.FC<Props> = React.memo((Props) => {
  // todo restr

  const onContentChange = (content: string) => {
    Props.onChange(content);
  }

  return (
    <FieldSetAndLegendStateless legend={Props.legend} contentText={Props.contentString} onChange={onContentChange}
    minLength={Props.minLength} maxLength={Props.maxLength}/>
  );
});

export default FieldSetAndLegendString;