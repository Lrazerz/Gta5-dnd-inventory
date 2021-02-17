import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  TasksNewTaskInterface,
  TasksPotentialExecutorInterface,
} from '../../../../../models/hud/corporations/tabs/tasks/tabs/newTaskInterfaces';
import { TasksExecutorTypeEnum } from '../../../../../models/hud/corporations/tabs/tasks/tabs/currentTasksEnums';
import {
  maxTaskDescriptionLength,
  maxTaskDescriptionLengthMessage,
  maxTaskSum,
  maxTaskSumMessage,
  maxTaskTitleLength,
  maxTaskTitleLengthMessage,
  minTaskDescriptionLength,
  minTaskDescriptionLengthMessage,
  minTaskSum,
  minTaskSumMessage,
  minTaskTitleLength,
  minTaskTitleLengthMessage,
  noTaskExecutorMessage,
  noTypedTaskExecutorMessage,
  taskDescriptionRegex,
  taskDescriptionRegexMessage,
  taskTitleRegex,
  taskTitleRegexMessage,
} from '../../../../../constants/hud/corporations/tasks/tasks';
import { tasksNewTaskAddTaskAction } from '../../../../../redux/actions/hud/corporations/tabs/tasks/tabs/newTask';
import NewTaskTabStateless from './NewTaskTabStateless';

enum StateFieldsEnum {
  title,
  sum,
  executor,
  executorType,
  description,
}

const CHANGE_VALUE = 'CHANGE_VALUE';
const CHANGE_IS_VALID = 'CHANGE_IS_VALID';
const CHANGE_EXECUTOR_DROPDOWN_IS_OPENED = 'CHANGE_EXECUTOR_DROPDOWN_IS_OPENED';
const PICK_EXECUTOR = 'PICK_EXECUTOR';

const changeValueAction = (field: StateFieldsEnum, value: string | number | boolean) => {
  return { type: CHANGE_VALUE, field, value };
};

const changeIsValidAction = (field: StateFieldsEnum, isValid: boolean, errorMessage = '') => {
  return { type: CHANGE_IS_VALID, isValid, errorMessage };
};

const changeExecutorDropdownIsOpened = (isOpened) => {
  return { type: CHANGE_EXECUTOR_DROPDOWN_IS_OPENED, isOpened };
};

const pickExecutor = (executor: TasksPotentialExecutorInterface) => {
  return {
    type: PICK_EXECUTOR,
    executor: executor.executor,
    executorType: executor.executorType,
  };
};

interface initialStateInterface {
  inputValues: {
    [StateFieldsEnum.title]: string;
    [StateFieldsEnum.sum]: number;
    [StateFieldsEnum.executor]: '';
    [StateFieldsEnum.executorType]: TasksExecutorTypeEnum;
    [StateFieldsEnum.description]: string;
  };
  inputValidities: {
    [StateFieldsEnum.title]: boolean;
    [StateFieldsEnum.sum]: boolean;
    [StateFieldsEnum.executor]: boolean;
    [StateFieldsEnum.description]: boolean;
  };
  inputErrorMessages: {
    [StateFieldsEnum.title]: string;
    [StateFieldsEnum.sum]: string;
    [StateFieldsEnum.executor]: string;
  };
  // doesn't matter for now (all checks in button click)
  isFormValid: boolean;
  // executor type
  isExecutorsDropdownOpened: boolean;
}

const initialState: initialStateInterface = {
  inputValues: {
    [StateFieldsEnum.title]: '',
    [StateFieldsEnum.sum]: 0,
    [StateFieldsEnum.executor]: '',
    [StateFieldsEnum.executorType]: TasksExecutorTypeEnum.nickname,
    [StateFieldsEnum.description]: '',
  },
  inputValidities: {
    [StateFieldsEnum.title]: false,
    [StateFieldsEnum.sum]: false,
    [StateFieldsEnum.executor]: false,
    [StateFieldsEnum.description]: false,
  },
  inputErrorMessages: {
    [StateFieldsEnum.title]: '',
    [StateFieldsEnum.sum]: '',
    [StateFieldsEnum.executor]: '',
  },
  isFormValid: true,
  isExecutorsDropdownOpened: false,
};

const reactReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_VALUE: {
      let newDropdownState = state.isDropDownOpened;
      if (action.field === StateFieldsEnum.executor) {
        newDropdownState = true;
      }
      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          [action.field]: action.value,
        },
        isExecutorsDropdownOpened: newDropdownState,
      };
    }
    case CHANGE_IS_VALID: {
      const newInputValidities = {
        ...state.inputValidities,
        [action.field]: action.value,
      };

      let newIsFormValid = true;

      for (const key in newInputValidities) {
        newIsFormValid = newIsFormValid && newInputValidities[key];
      }

      return {
        ...state,
        inputValidities: newInputValidities,
        inputErrorMessages: {
          ...state.inputErrorMessages,
          [action.field]: action.errorMessage,
        },
        isFormValid: newIsFormValid,
      };
    }
    case CHANGE_EXECUTOR_DROPDOWN_IS_OPENED: {
      return {
        ...state,
        isExecutorsDropdownOpened: action.isOpened,
      };
    }
    case PICK_EXECUTOR: {
      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          [StateFieldsEnum.executor]: action.executor,
          [StateFieldsEnum.executorType]: action.executorType,
        },
        inputValidities: {
          ...state.inputValidities,
          [StateFieldsEnum.executor]: true,
        },
        isExecutorsDropdownOpened: false,
      };
    }
    default: {
      console.log('[forb] [NewTask] react reducer error');
      return state;
    }
  }
};

interface Props {}

const NewTaskTab: React.FC<Props> = React.memo(() => {
  const dispatch = useDispatch();

  const potentialExecutors: TasksPotentialExecutorInterface[] = useSelector(
    (state) => state.hud.corporations.tabs.tasks.tabs.new.potentialExecutors,
  );
  const isLoading: boolean = useSelector((state) => state.hud.corporations.tabs.tasks.tabs.new.isLoading);

  const [reactState, reactDispatch]: [initialStateInterface, any] = useReducer(reactReducer, initialState);
  // separate state, don't need to pass all list to reducer
  const [filteredPotentialExecutors, setFilteredPotentialExecutors]: [
    TasksPotentialExecutorInterface[],
    any,
  ] = useState();

  useEffect(() => {
    if (reactState.inputValues[StateFieldsEnum.executor] === '') {
      setFilteredPotentialExecutors(potentialExecutors);
    } else {
      setFilteredPotentialExecutors(
        potentialExecutors.filter((executor) =>
          executor.executor
            .trim()
            .toLowerCase()
            .includes(reactState.inputValues[StateFieldsEnum.executor].trim().toLowerCase()),
        ),
      );
    }
  }, [potentialExecutors, reactState.inputValues[StateFieldsEnum.executor]]);

  const changeTaskTitleHandler = (value: string) => {
    reactDispatch(changeValueAction(StateFieldsEnum.title, value));
    reactDispatch(changeIsValidAction(StateFieldsEnum.title, true));
  };

  const changeTaskSumHandler = (value: string) => {
    if (!value) {
      // value = 0;
      reactDispatch(changeValueAction(StateFieldsEnum.sum, value));
      reactDispatch(changeIsValidAction(StateFieldsEnum.sum, true));
      return;
    }
    const valueNumb: number = +value;
    if (valueNumb > maxTaskSum) {
      console.warn('[forb] > max task sum');
      reactDispatch(changeValueAction(StateFieldsEnum.sum, maxTaskSum));
      reactDispatch(changeIsValidAction(StateFieldsEnum.sum, true));
      return;
    }
    reactDispatch(changeValueAction(StateFieldsEnum.sum, valueNumb));
    reactDispatch(changeIsValidAction(StateFieldsEnum.sum, true));
  };

  const sumBlurHandler = () => {
    if (typeof reactState.inputValues[StateFieldsEnum.sum] === 'string') {
      reactDispatch(changeValueAction(StateFieldsEnum.sum, minTaskSum));
      reactDispatch(changeIsValidAction(StateFieldsEnum.sum, true));
    }
  };

  const executorFocusHandler = () => {
    reactDispatch(changeExecutorDropdownIsOpened(true));
  };

  const containerClickHandler = () => {
    reactDispatch(changeExecutorDropdownIsOpened(false));
  };

  const changeExecutorHandler = (value) => {
    reactDispatch(changeValueAction(StateFieldsEnum.executor, value));
    reactDispatch(changeIsValidAction(StateFieldsEnum.executor, false));
  };

  const pickExecutorHandler = (executorId: string) => {
    const selectedExecutor = filteredPotentialExecutors.find((executor) => executor.id === executorId);
    reactDispatch(pickExecutor(selectedExecutor));
  };

  const changeTaskDescriptionHandler = (value: string) => {
    reactDispatch(changeValueAction(StateFieldsEnum.description, value));
    reactDispatch(changeIsValidAction(StateFieldsEnum.description, true));
  };

  const createNewTaskHandler = () => {
    let isValid = true;

    // title checks
    if (reactState.inputValues[StateFieldsEnum.title].length < minTaskTitleLength) {
      console.warn('[forb] task title < minLength');
      isValid = false;
      reactDispatch(changeIsValidAction(StateFieldsEnum.title, false, minTaskTitleLengthMessage));
    } else if (reactState.inputValues[StateFieldsEnum.title].length > maxTaskTitleLength) {
      console.warn('[forb] task title > maxLength');
      isValid = false;
      reactDispatch(changeIsValidAction(StateFieldsEnum.title, false, maxTaskTitleLengthMessage));
    } else if (!taskTitleRegex.test(reactState.inputValues[StateFieldsEnum.title])) {
      console.warn('[forb] task title regex');
      isValid = false;
      reactDispatch(changeIsValidAction(StateFieldsEnum.title, false, taskTitleRegexMessage));
    }

    // sum checks
    if (reactState.inputValues[StateFieldsEnum.sum] < minTaskSum) {
      console.warn('[forb] task sum < min');
      isValid = false;
      reactDispatch(changeIsValidAction(StateFieldsEnum.sum, false, minTaskSumMessage));
    } else if (reactState.inputValues[StateFieldsEnum.sum] > maxTaskSum) {
      console.warn('[forb] task sum > max');
      isValid = false;
      reactDispatch(changeIsValidAction(StateFieldsEnum.sum, false, maxTaskSumMessage));
    }

    // nickname checks
    if (!reactState.inputValues[StateFieldsEnum.executor]) {
      isValid = false;
      console.warn('[forb] no executor provided');
      reactDispatch(changeIsValidAction(StateFieldsEnum.executor, false, noTaskExecutorMessage));
    } else {
      const selectedExecutor = potentialExecutors.find((executor) => {
        return (
          executor.executor === reactState.inputValues[StateFieldsEnum.executor] &&
          executor.executorType === reactState.inputValues[StateFieldsEnum.executorType]
        );
      });
      if (!selectedExecutor) {
        isValid = false;
        console.warn('[forb] executor not found');
        reactDispatch(changeIsValidAction(StateFieldsEnum.executor, false, noTypedTaskExecutorMessage));
      }
    }

    // description checks
    if (reactState.inputValues[StateFieldsEnum.description].length < minTaskDescriptionLength) {
      console.warn('[forb] task description < min');
      isValid = false;
      reactDispatch(changeIsValidAction(StateFieldsEnum.description, false, minTaskDescriptionLengthMessage));
    } else if (reactState.inputValues[StateFieldsEnum.description].length > maxTaskDescriptionLength) {
      console.warn('[forb] task description > max');
      isValid = false;
      reactDispatch(changeIsValidAction(StateFieldsEnum.description, false, maxTaskDescriptionLengthMessage));
    } else if (!taskDescriptionRegex.test(reactState.inputValues[StateFieldsEnum.description])) {
      console.warn('[forb] task description ! regex');
      isValid = false;
      reactDispatch(changeIsValidAction(StateFieldsEnum.description, false, taskDescriptionRegexMessage));
    }

    if (isValid) {
      const newTask: TasksNewTaskInterface = {
        title: reactState.inputValues[StateFieldsEnum.title],
        sum: reactState.inputValues[StateFieldsEnum.sum],
        executor: reactState.inputValues[StateFieldsEnum.executor],
        executorType: reactState.inputValues[StateFieldsEnum.executorType],
        description: reactState.inputValues[StateFieldsEnum.description],
      };
      dispatch(tasksNewTaskAddTaskAction(newTask));
    }
  };

  return (
    <NewTaskTabStateless
      onContainerClick={containerClickHandler}
      isLoading={isLoading}
      taskTitle={reactState.inputValues[StateFieldsEnum.title]}
      onTaskTitleChange={changeTaskTitleHandler}
      taskSum={reactState.inputValues[StateFieldsEnum.sum]}
      onTaskSumChange={changeTaskSumHandler}
      onTaskSumBlur={sumBlurHandler}
      taskExecutor={reactState.inputValues[StateFieldsEnum.executor]}
      filteredPotentialExecutors={filteredPotentialExecutors}
      onTaskExecutorChange={changeExecutorHandler}
      onTaskExecutorFocus={executorFocusHandler}
      onExecutorPick={pickExecutorHandler}
      isExecutorDropdownOpened={reactState.isExecutorsDropdownOpened}
      taskExecutorType={reactState.inputValues[StateFieldsEnum.executorType]}
      taskDescription={reactState.inputValues[StateFieldsEnum.description]}
      onTaskDescriptionChange={changeTaskDescriptionHandler}
      onTaskCreate={createNewTaskHandler}
    />
  );
});

export default NewTaskTab;
