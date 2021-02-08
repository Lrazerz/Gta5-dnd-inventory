import React, {CSSProperties} from 'react';
import classes from '../../../../../styles/hud/components/Corporations/TasksTab/ArchiveTasksTab/ArchiveTasksTitleSearch.module.scss';
import CorporationsText from "../../CorporationsText";

interface Props {

}

const ArchiveTasksTitleSearch: React.FC<Props> = React.memo(() => {

  const titleTextStyles: CSSProperties = {
    lineHeight: '1.79rem',
    fontSize: '1.47rem',
    fontWeight: 600,
    color: '#fff',
    marginLeft: '1.05%',
  }

  return (
    <div className={classes.ArchiveTasksTitleSearch}>
      <div className={classes.ArchiveImg}/>
      <CorporationsText styles={titleTextStyles}>
        Архив задач
      </CorporationsText>
    </div>
  );
});

export default ArchiveTasksTitleSearch;