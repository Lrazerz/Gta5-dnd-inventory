import React, { CSSProperties } from 'react';
import classes from '../../../styles/hud/components/Corporations/CorporationsTabs.module.scss';
import { CorporationsTabsEnum } from '../../../models/hud/corporations/enums';
import CorporationsHeader from './CorporationsHeader';
import TreasuryTab from './TreasuryTab/TreasuryTab';
import LogsTab from './LogsTab/LogsTab';
import TasksTab from './TasksTab/TasksTab';
import StaffTab from './StaffTab/StaffTab';

interface Props {
  dimensions: {
    width: number;
    height: number;
    topGap: number;
    leftGap: number;
  };
  openedTab: CorporationsTabsEnum;
}

const CorporationsTabs: React.FC<Props> = React.memo((props) => {
  // в зависимости от openedTab возвращать разный хедэр (отдельный комп)
  // и разный контент скрина

  const containerStyles: CSSProperties = {
    width: props.dimensions.width,
    height: props.dimensions.height,
    top: props.dimensions.topGap,
    left: props.dimensions.leftGap,
  };

  let tabBlock: JSX.Element;

  switch (props.openedTab) {
    case CorporationsTabsEnum.staff: {
      tabBlock = <StaffTab />;
      break;
    }
    case CorporationsTabsEnum.treasury: {
      tabBlock = <TreasuryTab />;
      break;
    }
    case CorporationsTabsEnum.property: {
      tabBlock = <></>;
      break;
    }
    case CorporationsTabsEnum.territory: {
      tabBlock = <></>;
      break;
    }
    case CorporationsTabsEnum.logs: {
      tabBlock = <LogsTab />;
      break;
    }
    case CorporationsTabsEnum.tasks: {
      tabBlock = <TasksTab />;
      break;
    }
    default: {
      tabBlock = null;
    }
  }

  return (
    <div style={containerStyles} className={classes.CorporationsTabs}>
      <div className={classes.HeaderWrapper}>
        <CorporationsHeader openedTab={props.openedTab} />
      </div>
      <div className={classes.TabContentWrapper}>{tabBlock}</div>
    </div>
  );
});

export default CorporationsTabs;
