import React, {CSSProperties} from 'react';
import classes from '../../../../../styles/hud/components/Corporations/TasksTab/CurrentTasksTab/CurrentTasksTitleSearch.module.scss';
import CorporationsText from "../../CorporationsText";

interface Props {
}

const CurrentTasksTitleSearch: React.FC<Props> = React.memo(() => {

  const titleTextStyles: CSSProperties = {
    lineHeight: '1.79rem',
    fontSize: '1.47rem',
    fontWeight: 600,
    color: '#fff',
    marginRight: '2.41%',
  }

  return (
    <div className={classes.TasksTitleSearch}>
      <CorporationsText styles={titleTextStyles}>
        Текущие задачи
      </CorporationsText>
    </div>
  );
});

export default CurrentTasksTitleSearch;