import React from 'react';
import FieldSetAndLegendStateless from './FieldSetAndLegendStateless';

interface Props {
  legend: string;
  contentString: string;
  onChange: (string) => void;
  rightContent?: JSX.Element;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
}

const FieldSetAndLegendString: React.FC<Props> = React.memo((props) => {
  // todo restr

  const onContentChange = (content: string) => {
    props.onChange(content);
  };

  return (
    <FieldSetAndLegendStateless
      legend={props.legend}
      contentText={props.contentString}
      onChange={onContentChange}
      minLength={props.minLength}
      maxLength={props.maxLength}
      placeholder={props.placeholder}
    />
  );
});

export default FieldSetAndLegendString;
