import React from 'react';
import classes
  from '../../../../../styles/hud/components/Corporations/TasksTab/NewTaskTab/NewTaskTabStateless.module.scss';
import NewTaskTitle from "./NewTaskTitle";
import LoadingIndicator from "../../../common/LoadingIndicator/LoadingIndicator";
import FieldSetAndLegendString from "../../FieldSetAndLegendString";
import FieldSetAndLegendNumber from "../../FieldSetAndLegendNumber";
import {TasksExecutorTypeEnum} from "../../../../models/corporations/tabs/tasks/tabs/currentTasksEnums";
import FieldSetAndLegendTextArea from "../../FieldSetAndLegendTextArea";
import TreasuryButton from "../../TreasuryTab/TreasuryButton";
import ExecutorsDropdown from "./ExecutorsDropdown";
import {TasksPotentialExecutorInterface} from "../../../../models/corporations/tabs/tasks/tabs/newTaskInterfaces";

interface Props {
  onContainerClick: () => void;
  isLoading: boolean;

  taskTitle: string;
  onTaskTitleChange: (string) => void;

  taskSum: number;
  onTaskSumChange: (string) => void;
  onTaskSumBlur: () => void;

  taskExecutor: string;
  filteredPotentialExecutors: TasksPotentialExecutorInterface[];
  // text change
  onTaskExecutorChange: (string) => void;
  onTaskExecutorFocus: () => void;
  isExecutorDropdownOpened: boolean;
  // pick from dropdown
  onExecutorPick: (string) => void;

  taskExecutorType: TasksExecutorTypeEnum;

  taskDescription: string;
  onTaskDescriptionChange: (string) => void;

  onTaskCreate: () => void;
}

const NewTaskTabStateless: React.FC<Props> = React.memo((Props) => {

  const dollarSignBlock: JSX.Element = (
    <div className={classes.DollarSign}/>
  )

  if (Props.isLoading) {
    return (
      <div className={classes.NewTaskTabStateless}>
        <div className={classes.NewTaskTabContent}>
          <div className={classes.TitleWrapper}>
            <NewTaskTitle/>
          </div>
          <div className={classes.LoadingContainer}>
            <LoadingIndicator/>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.NewTaskTabStateless} onClick={Props.onContainerClick}>
      <div className={classes.NewTaskTabContent}>
        <div className={classes.TitleWrapper}>
          <NewTaskTitle/>
        </div>
        <div className={classes.TaskTitleAndSumContainer}>
          <div className={classes.TaskTitleWrapper}>
            <FieldSetAndLegendString legend={'Название'} contentString={Props.taskTitle}
                                     onChange={Props.onTaskTitleChange} placeholder={'Название...'}/>
          </div>
          <div className={classes.TaskTitleWrapper} onBlur={Props.onTaskSumBlur}>
            <FieldSetAndLegendNumber legend={'Сумма'} contentNumber={Props.taskSum}
                                     onChange={Props.onTaskSumChange} placeholder={'Сумма...'}
                                     rightContent={dollarSignBlock}/>
          </div>
        </div>
        <div className={classes.ExecutorWrapper} onFocus={Props.onTaskExecutorFocus}
             onClick={(e) => e.stopPropagation()}>
          <FieldSetAndLegendString contentString={Props.taskExecutor}
                                   onChange={Props.onTaskExecutorChange} placeholder={'Никнейм...'}
                                   legend={Props.taskExecutorType === TasksExecutorTypeEnum.nickname
                                     ? 'Никнейм' : 'Роль'}/>
          {Props.isExecutorDropdownOpened && <ExecutorsDropdown list={Props.filteredPotentialExecutors}
                                                                onPick={Props.onExecutorPick}/>}
        </div>
        <div className={classes.TaskDescriptionWrapper}>
          <FieldSetAndLegendTextArea contentString={Props.taskDescription}
                                     onChange={Props.onTaskDescriptionChange} legend={'Задача'}
                                     placeholder={'Задача...'}/>
        </div>
        <div className={classes.SendButtonWrapper}>
          <TreasuryButton onClick={Props.onTaskCreate}>
            Подтвердить
          </TreasuryButton>
        </div>
      </div>
    </div>
  );
});

export default NewTaskTabStateless;