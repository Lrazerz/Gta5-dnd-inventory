import React, { CSSProperties, useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from '../../../../styles/hud/components/Corporations/TasksTab/SingleTask.module.scss';
import CorporationsText from '../CorporationsText';
import { TasksSingleTaskInterface } from '../../../../models/hud/corporations/tabs/tasks/tabs/currentTasksInterfaces';
import SingleTaskDescription from './SingleTaskDescription';
import { CalculatedCurrentTasksDimensionsInterface } from './CurrentTasks/CurrentTasksList';
import OpenCloseArrowButton from './OpenCloseArrowButton';
import {
  tasksCurrentTasksCompleteAction,
  tasksCurrentTasksRemoveAction,
} from '../../../../redux/actions/hud/corporations/tabs/tasks/tabs/currentTasks';
import removeImg from '../../../../assets/hud/images/components/Corporations/removeRole.svg';
import { corporationsTheme } from '../../../../constants/hud/corporations/corporationsTheme';
import { TasksDoneTaskInterface } from '../../../../models/hud/corporations/tabs/tasks/tabs/archiveTasksInterfaces';
import { tasksArchiveTasksRemoveTaskAction } from '../../../../redux/actions/hud/corporations/tabs/tasks/tabs/archiveTasks';

interface Props {
  task: TasksSingleTaskInterface | TasksDoneTaskInterface;
  dimensions: CalculatedCurrentTasksDimensionsInterface;
  isArchive: boolean;
  // only when isArchive
  isSuccessful?: boolean;
}

const SingleTask: React.FC<Props> = React.memo((props) => {
  const dispatch = useDispatch();

  const [isDescriptionOpened, setIsDescriptionOpened]: [boolean, (boolean) => void] = useState(false);

  const changeDescriptionOpenHandler = () => {
    setIsDescriptionOpened((prevDescriptionState) => !prevDescriptionState);
  };

  const taskCompleteHandler = (isDone: boolean) => {
    dispatch(tasksCurrentTasksCompleteAction(props.task.id, isDone));
  };

  const removeTaskHandler = (e) => {
    e.stopPropagation();
    if (props.isArchive) {
      dispatch(tasksArchiveTasksRemoveTaskAction(props.task.id));
    } else {
      dispatch(tasksCurrentTasksRemoveAction(props.task.id));
    }
  };

  const singleTaskStyles: CSSProperties = {
    padding: isDescriptionOpened ? 'calc((100% + 0.941rem) * 0.0147)px 0' : '1.47% 0',
    borderRadius: isDescriptionOpened ? '0.2941rem 0.2941rem 0 0' : '0.2941rem',
  };

  const openDescriptionButtonStyles: CSSProperties = {
    width: props.dimensions.descriptionButton.width,
    height: props.dimensions.descriptionButton.height,
    marginRight: isDescriptionOpened
      ? +props.dimensions.descriptionButton.width.match(/(\d|\.)+/)[0] * 2.1 + 'px'
      : +props.dimensions.descriptionButton.width.match(/(\d|\.)+/)[0] * 2.5 + 'px',
  };

  const removeTaskButtonStyles: CSSProperties = {
    width: +props.dimensions.descriptionButton.width.match(/(\d|\.)+/)[0] * 1.1607 + 'px',
    height: +props.dimensions.descriptionButton.height.match(/(\d|\.)+/)[0] * 2.3438 + 'px',
    marginRight: +props.dimensions.descriptionButton.width.match(/(\d|\.)+/)[0] * 2.5 + 'px',
    backgroundImage: `url(${removeImg})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  const commonTextStyles: CSSProperties = {
    fontSize: '0.7647rem',
    lineHeight: '0.9324rem',
    fontWeight: 600,
    color: '#7A8192',
  };

  const idTextStyles: CSSProperties = {
    ...commonTextStyles,
    fontWeight: 700,
    color: '#696F7F',
    marginLeft: '3.46%',
    whiteSpace: 'nowrap',
    maxWidth: '13%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const titleTextStyles: CSSProperties = {
    ...commonTextStyles,
    fontWeight: 700,
    color: '#fff',
    whiteSpace: 'nowrap',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const dateTextStyles: CSSProperties = {
    ...commonTextStyles,
    fontWeight: 500,
  };

  const appointerDefinitionTextStyles: CSSProperties = {
    ...commonTextStyles,
    color: '#7A8192',
    marginLeft: '4.83%',
  };

  const executorDefinitionTextStyles: CSSProperties = {
    ...commonTextStyles,
    color: '#7A8192',
  };

  const appointerTextStyles: CSSProperties = {
    ...commonTextStyles,
    whiteSpace: 'nowrap',
    maxWidth: '19%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const executorTextStyles: CSSProperties = {
    ...commonTextStyles,
    whiteSpace: 'nowrap',
    maxWidth: '19%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  // only when isArchive
  const taskDoneTextStyles: CSSProperties = {
    ...commonTextStyles,
    fontWeight: 700,
    marginRight: +props.dimensions.descriptionButton.width.match(/(\d|\.)+/)[0] * 2.2857 + 'px',
    color: corporationsTheme.bg_orange_picked2,
  };

  const taskFailTextStyles: CSSProperties = {
    ...commonTextStyles,
    fontWeight: 700,
    color: '#E85959',
    marginRight: +props.dimensions.descriptionButton.width.match(/(\d|\.)+/)[0] * 2.2857 + 'px',
  };

  return (
    <div className={classes.CurrentTasksSingleTaskWrapper} onClick={changeDescriptionOpenHandler}>
      <div style={singleTaskStyles} className={classes.CurrentTasksSingleTask}>
        <div className={classes.TaskRowWrapper}>
          <CorporationsText styles={idTextStyles}>{'#' + props.task.id}</CorporationsText>
          <div className={classes.TaskTitleAndDate}>
            <CorporationsText styles={titleTextStyles}>{props.task.title}</CorporationsText>
            <CorporationsText styles={dateTextStyles}>
              {`${props.task.date.day}.${props.task.date.month}.${props.task.date.year}`}
            </CorporationsText>
          </div>
          <CorporationsText styles={appointerDefinitionTextStyles}>{'Выдал:'}&nbsp;</CorporationsText>
          <CorporationsText styles={appointerTextStyles}>{props.task.appointer}</CorporationsText>
          <CorporationsText styles={executorDefinitionTextStyles}>
            &nbsp;&nbsp;{'>'}&nbsp;&nbsp;{'Кому:'}&nbsp;
          </CorporationsText>
          <CorporationsText styles={executorTextStyles}>{props.task.executor}</CorporationsText>
        </div>
        <div className={classes.OpenDescriptionButtonContainer}>
          {props.isArchive && (
            <CorporationsText styles={props.isSuccessful ? taskDoneTextStyles : taskFailTextStyles}>
              {props.isSuccessful ? 'Выполнено' : 'Провалено'}
            </CorporationsText>
          )}
          <div style={openDescriptionButtonStyles}>
            <OpenCloseArrowButton isOpened={isDescriptionOpened} />
          </div>
          {isDescriptionOpened && (
            <div className={classes.RemoveButton}>
              <div style={removeTaskButtonStyles} onClick={removeTaskHandler} />
            </div>
          )}
        </div>
      </div>
      {isDescriptionOpened && (
        <SingleTaskDescription
          description={props.task.description}
          sum={props.task.sum}
          doneButtonHeight={props.dimensions.doneButtonHeight}
          moneySignDimensions={props.dimensions.moneySign}
          onComplete={taskCompleteHandler}
          isArchive={props.isArchive}
        />
      )}
    </div>
  );
});

export default SingleTask;
