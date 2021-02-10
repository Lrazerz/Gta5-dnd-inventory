import React, {CSSProperties} from 'react';
import classes from '../../../../../styles/hud/components/Corporations/TasksTab/NewTaskTab/ExecutorsDropdownItem.module.scss';
import CorporationsText from "../../CorporationsText";

interface Props {
  item: string;
}

const ExecutorsDropdownItem: React.FC<Props> = React.memo((Props) => {
  const textStyles: CSSProperties = {
    lineHeight: '0.9324rem',
    fontSize: '0.7647rem',
    fontWeight: 550,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }

  return (
    <div className={classes.ExecutorsDropdownItem}>
      <CorporationsText styles={textStyles}>
        {Props.item}
      </CorporationsText>
    </div>
  );
});

export default ExecutorsDropdownItem;