import React, { useCallback, useEffect, useRef, useState } from 'react';
import classes from '../../../../../styles/hud/components/Corporations/StaffTab/StaffTab/StaffTabList.module.scss';
import { SingleStaffWorkerInterface } from '../../../../../models/hud/corporations/tabs/staff/tabs/staffInterfaces';
import StaffTabListItem from './StaffTabListItem';

export interface StaffListItemDimensionsInterface {
  heightWithoutDescription: number;
  heightWithDescription: number;
  marginTop: number;
  optionsPosition: {
    top: number;
    left: number;
  };
}

interface SingleWorkerIsOptionsOpenedInterface {
  staffWorkerNickname: string;
  isOpened: boolean;
}

type OptionsIsOpenedStatesInterface = SingleWorkerIsOptionsOpenedInterface[];

const initialDimensions: StaffListItemDimensionsInterface = {
  heightWithoutDescription: 0,
  heightWithDescription: 0,
  marginTop: 0,
  optionsPosition: {
    top: 0,
    left: 0,
  },
};

interface Props {
  staff: SingleStaffWorkerInterface[];
}

const StaffTabList: React.FC<Props> = (props) => {
  const [dimensions, setDimensions]: [
    StaffListItemDimensionsInterface | null,
    (StaffListItemDimensions) => void,
  ] = useState(initialDimensions);

  const [optionsIsOpenedStates, setOptionsIsOpenedStates]: [
    OptionsIsOpenedStatesInterface,
    (OptionsIsOpenedStatesInterface) => void,
  ] = useState(null);

  const containerRef: React.Ref<HTMLDivElement> = useRef();

  useEffect(() => {
    const newIsOpenedStates: OptionsIsOpenedStatesInterface = [];

    props.staff.map((singleWorker) => {
      const singleStaffWorker: SingleWorkerIsOptionsOpenedInterface = {
        staffWorkerNickname: singleWorker.nickname,
        isOpened: false,
      };
      newIsOpenedStates.push(singleStaffWorker);
    });

    setOptionsIsOpenedStates(newIsOpenedStates);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const width: string = window.getComputedStyle(containerRef.current).width;

      const widthNumber: number = +width.match(/(\d|\.)+/)[0];

      const newDimensions: StaffListItemDimensionsInterface = {
        heightWithDescription: widthNumber * 0.2476,
        heightWithoutDescription: widthNumber * 0.0664,
        marginTop: widthNumber * 0.00316,
        optionsPosition: {
          top: 0,
          left: 0,
        },
      };

      setDimensions(newDimensions);
    }
  }, [containerRef.current]);

  const optionsChangeStateHandler = useCallback((e: any, indexInOptionsArray: number) => {
    setDimensions((prev) => ({ ...prev, optionsPosition: { top: e.clientY, left: e.clientX } }));
    setOptionsIsOpenedStates((prev) => [
      ...prev
        .slice(0, indexInOptionsArray)
        .map((singleWorkerOptionsState) => ({ ...singleWorkerOptionsState, isOpened: false })),
      { ...prev[indexInOptionsArray], isOpened: !prev[indexInOptionsArray].isOpened },
      ...prev
        .slice(indexInOptionsArray + 1)
        .map((singleWorkerOptionsState) => ({ ...singleWorkerOptionsState, isOpened: false })),
    ]);
  }, []);

  const scrollHandler = () => {
    setOptionsIsOpenedStates((prev) =>
      prev.map((singleWorkerOptionsState) => ({ ...singleWorkerOptionsState, isOpened: false })),
    );
  };

  const contentBlock: JSX.Element[] = props.staff.map((staffWorker, i) => {
    const changeOptionsIsOpenedWrapper = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      optionsChangeStateHandler(e, i);
    };

    return (
      <StaffTabListItem
        staffWorker={staffWorker}
        containerRef={containerRef}
        dimensions={dimensions}
        isOptionsOpened={optionsIsOpenedStates && optionsIsOpenedStates[i].isOpened}
        onOptionsIsOpenedChangeState={changeOptionsIsOpenedWrapper}
        key={staffWorker.nickname}
      />
    );
  });

  return (
    <div className={classes.StaffTabList} onScroll={scrollHandler} onClick={scrollHandler}>
      {contentBlock}
    </div>
  );
};

export default StaffTabList;
