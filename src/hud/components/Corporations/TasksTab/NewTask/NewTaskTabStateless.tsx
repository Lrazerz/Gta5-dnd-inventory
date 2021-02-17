import React from 'react';
import classes from '../../../../../styles/hud/components/Corporations/TasksTab/NewTaskTab/NewTaskTabStateless.module.scss';
import NewTaskTitle from './NewTaskTitle';
import LoadingIndicator from '../../../common/LoadingIndicator/LoadingIndicator';
import FieldSetAndLegendString from '../../FieldSetAndLegendString';
import FieldSetAndLegendNumber from '../../FieldSetAndLegendNumber';
import { TasksExecutorTypeEnum } from '../../../../../models/hud/corporations/tabs/tasks/tabs/currentTasksEnums';
import FieldSetAndLegendTextArea from '../../FieldSetAndLegendTextArea';
import TreasuryButton from '../../TreasuryTab/TreasuryButton';
import ExecutorsDropdown from './ExecutorsDropdown';
import { TasksPotentialExecutorInterface } from '../../../../../models/hud/corporations/tabs/tasks/tabs/newTaskInterfaces';
import CorporationsTooltip from '../../CorporationsTooltip';
import { CorporationsTooltipTypeEnum } from '../../../../../constants/hud/corporations/corporations';

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

const NewTaskTabStateless: React.FC<Props> = React.memo((props) => {
  const dollarSignBlock: JSX.Element = <div className={classes.DollarSign} />;

  if (props.isLoading) {
    return (
      <div className={classes.NewTaskTabStateless}>
        <div className={classes.NewTaskTabContent}>
          <div className={classes.TitleWrapper}>
            <NewTaskTitle />
          </div>
          <div className={classes.LoadingContainer}>
            <LoadingIndicator />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.NewTaskTabStateless} onClick={props.onContainerClick}>
      <div className={classes.NewTaskTabContent}>
        <div className={classes.TitleWrapper}>
          <NewTaskTitle />
        </div>
        <div className={classes.TaskTitleAndSumContainer}>
          <div className={classes.TaskTitleWrapper}>
            <FieldSetAndLegendString
              legend={'Название'}
              contentString={props.taskTitle}
              onChange={props.onTaskTitleChange}
              placeholder={'Название...'}
            />
          </div>
          <div className={classes.TaskTitleWrapper} onBlur={props.onTaskSumBlur}>
            <FieldSetAndLegendNumber
              legend={'Сумма'}
              contentNumber={props.taskSum}
              onChange={props.onTaskSumChange}
              placeholder={'Сумма...'}
              rightContent={dollarSignBlock}
            />
            {props.taskExecutorType === TasksExecutorTypeEnum.role && (
              <div className={classes.RoleSumTooltipWrapper}>
                <CorporationsTooltip
                  type={CorporationsTooltipTypeEnum.neutral}
                  message={'Сумма будет перечислена вам'}
                />
              </div>
            )}
          </div>
        </div>
        <div
          className={classes.ExecutorWrapper}
          onFocus={props.onTaskExecutorFocus}
          onClick={(e) => e.stopPropagation()}
        >
          <FieldSetAndLegendString
            contentString={props.taskExecutor}
            onChange={props.onTaskExecutorChange}
            placeholder={'Никнейм...'}
            legend={props.taskExecutorType === TasksExecutorTypeEnum.nickname ? 'Никнейм' : 'Роль'}
          />
          {props.isExecutorDropdownOpened && (
            <ExecutorsDropdown list={props.filteredPotentialExecutors} onPick={props.onExecutorPick} />
          )}
        </div>
        <div className={classes.TaskDescriptionWrapper}>
          <FieldSetAndLegendTextArea
            contentString={props.taskDescription}
            onChange={props.onTaskDescriptionChange}
            legend={'Задача'}
            placeholder={'Задача...'}
          />
        </div>
        <div className={classes.SendButtonWrapper}>
          <TreasuryButton onClick={props.onTaskCreate}>Подтвердить</TreasuryButton>
        </div>
      </div>
    </div>
  );
});

export default NewTaskTabStateless;
