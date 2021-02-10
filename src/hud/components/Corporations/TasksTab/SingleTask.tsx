import React, {CSSProperties, useState} from 'react';
import {useDispatch} from 'react-redux';
import classes
  from '../../../../styles/hud/components/Corporations/TasksTab/SingleTask.module.scss';
import CorporationsText from "../CorporationsText";
import {TasksSingleTaskInterface} from "../../../models/corporations/tabs/tasks/tabs/currentTasksInterfaces";
import SingleTaskDescription from "./SingleTaskDescription";
import {CalculatedCurrentTasksDimensionsInterface} from "./CurrentTasks/CurrentTasksList";
import OpenCloseArrowButton from "./OpenCloseArrowButton";
import {
  tasksCurrentTasksCompleteAction,
  tasksCurrentTasksRemoveAction
} from "../../../../redux/actions/hud/corporations/tabs/tasks/tabs/currentTasks";
import removeImg from '../../../../assets/hud/images/components/Corporations/removeRole.svg';
import {corporationsTheme} from "../../../../constants/hud/corporations/corporationsTheme";
import {TasksDoneTaskInterface} from "../../../models/corporations/tabs/tasks/tabs/archiveTasksInterfaces";
import {tasksArchiveTasksRemoveTaskAction} from "../../../../redux/actions/hud/corporations/tabs/tasks/tabs/archiveTasks";

interface Props {
  task: TasksSingleTaskInterface | TasksDoneTaskInterface;
  dimensions: CalculatedCurrentTasksDimensionsInterface;
  isArchive: boolean;
  // only when isArchive
  isSuccessful?: boolean;
}

const SingleTask: React.FC<Props> = React.memo((Props) => {

  const dispatch = useDispatch();

  const [isDescriptionOpened, setIsDescriptionOpened]: [boolean, (boolean) => void] = useState(false);

  const changeDescriptionOpenHandler = () => {
    setIsDescriptionOpened(prevDescriptionState => !prevDescriptionState);
  }

  const taskCompleteHandler = (isDone: boolean) => {
    dispatch(tasksCurrentTasksCompleteAction(Props.task.id, isDone));
  }

  const removeTaskHandler = (e) => {
    e.stopPropagation();
    if(Props.isArchive) {
      dispatch(tasksArchiveTasksRemoveTaskAction(Props.task.id));
    } else {
      dispatch(tasksCurrentTasksRemoveAction(Props.task.id));
    }
  }

  const singleTaskStyles: CSSProperties = {
    padding: isDescriptionOpened ? 'calc((100% + 0.941rem) * 0.0147)px 0' : '1.47% 0',
    borderRadius: isDescriptionOpened ? '0.2941rem 0.2941rem 0 0' : '0.2941rem'
  }

  const openDescriptionButtonStyles: CSSProperties = {
    width: Props.dimensions.descriptionButton.width,
    height: Props.dimensions.descriptionButton.height,
    marginRight: isDescriptionOpened ? +Props.dimensions.descriptionButton.width.match(/(\d|\.)+/)[0] * 2.1 + 'px'
      : +Props.dimensions.descriptionButton.width.match(/(\d|\.)+/)[0] * 2.5 + 'px',
  }

  const removeTaskButtonStyles: CSSProperties = {
    width: +Props.dimensions.descriptionButton.width.match(/(\d|\.)+/)[0] * 1.1607 + 'px',
    height: +Props.dimensions.descriptionButton.height.match(/(\d|\.)+/)[0] * 2.3438 + 'px',
    marginRight: +Props.dimensions.descriptionButton.width.match(/(\d|\.)+/)[0] * 2.5 + 'px',
    backgroundImage: `url(${removeImg})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }

  const commonTextStyles: CSSProperties = {
    fontSize: '0.7647rem',
    lineHeight: '0.9324rem',
    fontWeight: 600,
    color: '#7A8192'
  }

  const idTextStyles: CSSProperties = {
    ...commonTextStyles,
    fontWeight: 700,
    color: '#696F7F',
    marginLeft: '3.46%'
  }

  const titleTextStyles: CSSProperties = {
    ...commonTextStyles,
    fontWeight: 700,
    color: '#fff'
  }

  const dateTextStyles: CSSProperties = {
    ...commonTextStyles,
    fontWeight: 500,
  }

  const appointerDefinitionTextStyles: CSSProperties = {
    ...commonTextStyles,
    color: '#7A8192',
    marginLeft: '4.83%'
  }

  const executorDefinitionTextStyles: CSSProperties = {
    ...commonTextStyles,
    color: '#7A8192'
  }

  const appointerTextStyles: CSSProperties = {
    ...commonTextStyles,
  }

  const executorTextStyles: CSSProperties = {
    ...commonTextStyles,
  }

  // only when isArchive
  const taskDoneTextStyles: CSSProperties = {
    ...commonTextStyles,
    fontWeight: 700,
    marginRight: +Props.dimensions.descriptionButton.width.match(/(\d|\.)+/)[0] * 2.2857 + 'px',
    color: corporationsTheme.bg_orange_picked2
  }

  const taskFailTextStyles: CSSProperties = {
    ...commonTextStyles,
    fontWeight: 700,
    color: '#E85959',
    marginRight: +Props.dimensions.descriptionButton.width.match(/(\d|\.)+/)[0] * 2.2857 + 'px',
  }

  return (
    <div className={classes.CurrentTasksSingleTaskWrapper} onClick={changeDescriptionOpenHandler}>
      <div style={singleTaskStyles} className={classes.CurrentTasksSingleTask}>
        <div className={classes.TaskRowWrapper}>
          <CorporationsText styles={idTextStyles}>
            {'#' + Props.task.id}
          </CorporationsText>
          <div className={classes.TaskTitleAndDate}>
            <CorporationsText styles={titleTextStyles}>
              {Props.task.title}
            </CorporationsText>
            <CorporationsText styles={dateTextStyles}>
              {`${Props.task.date.day}.${Props.task.date.month}.${Props.task.date.year}`}
            </CorporationsText>
          </div>
          <CorporationsText styles={appointerDefinitionTextStyles}>
            {'Выдал:'}&nbsp;
          </CorporationsText>
          <CorporationsText styles={appointerTextStyles}>
            {Props.task.appointer}
          </CorporationsText>
          <CorporationsText styles={executorDefinitionTextStyles}>
            &nbsp;&nbsp;{'>'}&nbsp;&nbsp;{'Кому:'}&nbsp;
          </CorporationsText>
          <CorporationsText styles={executorTextStyles}>
            {Props.task.executor}
          </CorporationsText>
        </div>
        <div className={classes.OpenDescriptionButtonContainer}>
          {
            Props.isArchive &&  (
              <CorporationsText styles={Props.isSuccessful ? taskDoneTextStyles : taskFailTextStyles}>
                {Props.isSuccessful ? 'Выполнено' : 'Провалено'}
              </CorporationsText>
            )
          }
          <div style={openDescriptionButtonStyles}>
            <OpenCloseArrowButton isOpened={isDescriptionOpened}/>
          </div>
          {
            isDescriptionOpened && (
              <div style={removeTaskButtonStyles} onClick={removeTaskHandler}/>
            )
          }
        </div>
      </div>
      {isDescriptionOpened && <SingleTaskDescription description={Props.task.description} sum={Props.task.sum}
                                                     doneButtonHeight={Props.dimensions.doneButtonHeight}
                                                     moneySignDimensions={Props.dimensions.moneySign}
                                                     onComplete={taskCompleteHandler} isArchive={Props.isArchive}/>}
    </div>
  );
});

export default SingleTask;