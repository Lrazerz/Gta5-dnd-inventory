import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import classes from '../../../../../styles/hud/components/Corporations/TasksTab/ArchiveTasksTab/ArchiveTasksList.module.scss';
import { TasksDoneTaskInterface } from '../../../../../models/hud/corporations/tabs/tasks/tabs/archiveTasksInterfaces';
import SingleTask from '../SingleTask';

export interface CalculatedArchiveTasksDimensionsInterface {
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

const ArchiveTasksList: React.FC = React.memo(() => {
  const tasks: TasksDoneTaskInterface[] = useSelector((state) => state.hud.corporations.tabs.tasks.tabs.archive.tasks);

  const [dimensions, setDimensions]: [CalculatedArchiveTasksDimensionsInterface, (any) => void] = useState(
    initialDimensions,
  );

  const containerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (containerRef.current) {
      const width: string = window.getComputedStyle(containerRef.current).width;

      const widthNumber: number = +width.match(/(\d|\.)+/)[0];

      const newDimensions: CalculatedArchiveTasksDimensionsInterface = {
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

  const tasksBlock: JSX.Element[] = tasks.map((task) => {
    return (
      <div className={classes.SingleTaskWrapper} key={task.id}>
        <SingleTask task={task} dimensions={dimensions} isArchive={true} isSuccessful={task.isSuccessful} />
      </div>
    );
  });

  return (
    <div
      ref={containerRef}
      className={classes.TasksList}
      onScroll={() => {
        console.log('on scr capture');
      }}
    >
      {tasksBlock}
    </div>
  );
});

export default ArchiveTasksList;
