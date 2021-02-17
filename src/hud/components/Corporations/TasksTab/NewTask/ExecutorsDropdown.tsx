import React, { useEffect, useRef, useState } from 'react';
import classes from '../../../../../styles/hud/components/Corporations/TasksTab/NewTaskTab/ExecutorsDropdown.module.scss';
import ExecutorsDropdownItem from './ExecutorsDropdownItem';
import { TasksPotentialExecutorInterface } from '../../../../../models/hud/corporations/tabs/tasks/tabs/newTaskInterfaces';
import { TasksExecutorTypeEnum } from '../../../../../models/hud/corporations/tabs/tasks/tabs/currentTasksEnums';

interface DimensionsInterface {
  height: string;
  maxHeight: string;
}

interface Props {
  list: TasksPotentialExecutorInterface[];
  onPick: (string) => void;
}

const ExecutorsDropdown: React.FC<Props> = React.memo((props) => {
  const [dimensions, setDimensions]: [DimensionsInterface, (DimensionsInterface) => void] = useState();

  const containerRef: React.Ref<HTMLDivElement> = useRef();

  const heightToWidth = 0.05;

  useEffect(() => {
    if (containerRef.current) {
      const width = +window.getComputedStyle(containerRef.current).width.match(/(\d|\.)+/)[0];
      const height = Math.round(width * heightToWidth * 1000) / 1000;
      // containerRef.current.style.height = height + 'px';
      setDimensions({ height: height + 'px', maxHeight: height * 4 + 'px' });
    }
  }, [containerRef.current]);

  const pickItemHandler = (e: any, item: string) => {
    e.stopPropagation();
    props.onPick(item);
  };

  const listBlock: JSX.Element[] = props.list.map((listItem: TasksPotentialExecutorInterface) => {
    return (
      <div
        key={listItem.id}
        style={{ height: dimensions && dimensions.height, width: '100%' }}
        onClick={(e) => pickItemHandler(e, listItem.id)}
      >
        <ExecutorsDropdownItem
          item={`${listItem.executor} (${listItem.executorType === TasksExecutorTypeEnum.role ? 'Роль' : 'Никнейм'})`}
        />
      </div>
    );
  });

  return (
    <div
      ref={containerRef}
      style={{ maxHeight: dimensions && dimensions.maxHeight }}
      className={classes.ExecutorsDropdown}
    >
      {listBlock}
    </div>
  );
});

export default ExecutorsDropdown;
