import React, { CSSProperties } from 'react';
import classes from '../../../../../styles/hud/components/Corporations/StaffTab/StaffTab/StaffTabListItem.module.scss';
import { SingleStaffWorkerInterface } from '../../../../../models/hud/corporations/tabs/staff/tabs/staffInterfaces';
import CorporationsText from '../../CorporationsText';
import CorporationsButton from '../../CorporationsButton';
import StaffTabListItemStateless from './StaffTabListItemStateless';

interface Props {
  staffWorker: SingleStaffWorkerInterface;
}

const StaffTabListItem: React.FC<Props> = (props) => {
  return <StaffTabListItemStateless staffWorker={props.staffWorker} />;
};

export default StaffTabListItem;
