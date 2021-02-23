import React, { useCallback, useState } from 'react';
import { SingleStaffWorkerInterface } from '../../../../../models/hud/corporations/tabs/staff/tabs/staffInterfaces';
import StaffTabListItemStateless from './StaffTabListItemStateless';
import { StaffListItemDimensionsInterface } from './StaffTabList';

interface Props {
  staffWorker: SingleStaffWorkerInterface;
  containerRef: React.Ref<HTMLDivElement>;
  dimensions: StaffListItemDimensionsInterface;
  isOptionsOpened: boolean;
  onOptionsIsOpenedChangeState: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const StaffTabListItem: React.FC<Props> = (props) => {
  const [isDescriptionOpened, setIsDescriptionOpened]: [boolean, (boolean) => void] = useState(false);

  const descriptionChangeStateHandler = useCallback(() => {
    setIsDescriptionOpened((prev) => !prev);
  }, []);

  return (
    <StaffTabListItemStateless
      staffWorker={props.staffWorker}
      containerRef={props.containerRef}
      dimensions={props.dimensions}
      isDescriptionOpened={isDescriptionOpened}
      onDescriptionStateChange={descriptionChangeStateHandler}
      isOptionsOpened={props.isOptionsOpened}
      onOptionsStateChange={props.onOptionsIsOpenedChangeState}
    />
  );
};

export default StaffTabListItem;
