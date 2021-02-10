import React, {CSSProperties} from 'react';
import classes from '../../../../../styles/hud/components/Corporations/TasksTab/NewTaskTab/NewTaskTitle.module.scss';
import CorporationsText from "../../CorporationsText";

interface Props {

}

const NewTaskTitle: React.FC<Props> = React.memo(() => {

  const titleTextStyles: CSSProperties = {
    lineHeight: '1.79rem',
    fontSize: '1.47rem',
    fontWeight: 600,
    color: '#fff',
    marginLeft: '1.05%',
  }

  return (
    <div className={classes.NewTaskTitle}>
      <div className={classes.NewTaskImg}/>
      <CorporationsText styles={titleTextStyles}>
        Новая задача
      </CorporationsText>
    </div>
  );
});

export default NewTaskTitle;