import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import classes from '../../../../../styles/hud/components/Corporations/TasksTab/CurrentTasksTab/CurrentTasksList.module.scss';
import { TasksSingleTaskInterface } from '../../../../../models/hud/corporations/tabs/tasks/tabs/currentTasksInterfaces';
import SingleTask from '../SingleTask';
//
export interface CalculatedCurrentTasksDimensionsInterface {
  descriptionButton: {
    width: string;
    height: string;
  };
  doneButtonHeight: string;
  moneySign: string;
}

const initialDimensions = {
  descriptionButton: {
    width: '0px',
    height: '0px',
  },
  doneButtonHeight: '0px',
  moneySign: '0px',
};

interface Props {}

const CurrentTasksList: React.FC<Props> = React.memo(() => {
  const currentTasks: TasksSingleTaskInterface[] = useSelector(
    (state) => state.hud.corporations.tabs.tasks.tabs.current.tasks,
  );

  const [dimensions, setDimensions]: [CalculatedCurrentTasksDimensionsInterface, (any) => void] = useState(
    initialDimensions,
  );

  const containerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (containerRef.current) {
      const width: string = window.getComputedStyle(containerRef.current).width;

      const widthNumber: number = +width.match(/(\d|\.)+/)[0];

      const newDimensions: CalculatedCurrentTasksDimensionsInterface = {
        descriptionButton: {
          width: widthNumber * 0.0148 + 'px',
          height: widthNumber * 0.0084 + 'px',
        },
        doneButtonHeight: widthNumber * 0.0474 + 'px',
        moneySign: widthNumber * 0.0295 + 'px',
      };
      setDimensions(newDimensions);
    }
  }, [containerRef.current]);

  const currentTasksBlock: JSX.Element[] = currentTasks.map((task) => {
    return (
      <div className={classes.SingleTaskWrapper} key={task.id}>
        <SingleTask task={task} dimensions={dimensions} isArchive={false} />
      </div>
    );
  });

  return (
    <div ref={containerRef} className={classes.TasksList}>
      {currentTasksBlock}
    </div>
  );
});

export default CurrentTasksList;
