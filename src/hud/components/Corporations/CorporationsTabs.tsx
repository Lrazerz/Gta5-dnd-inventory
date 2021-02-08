import React, {CSSProperties} from 'react';
import classes from '../../../styles/hud/components/Corporations/CorporationsTabs.module.scss';
import {CorporationsTabsEnum} from "../../models/corporations/enums";
import CorporationsHeader from "./CorporationsHeader";
import TreasuryTab from "./TreasuryTab/TreasuryTab";
import LogsTab from "./LogsTab/LogsTab";
import TasksTab from "./TasksTab/TasksTab";

interface Props {
  dimensions: {
    width: number;
    height: number;
    topGap: number;
    leftGap: number;
  }
  openedTab: CorporationsTabsEnum;
}

const CorporationsTabs: React.FC<Props> = React.memo((Props) => {

  // в зависимости от openedTab возвращать разный хедэр (отдельный комп)
  // и разный контент скрина

  const containerStyles: CSSProperties = {
    width: Props.dimensions.width,
    height: Props.dimensions.height,
    top: Props.dimensions.topGap,
    left: Props.dimensions.leftGap,
  }

  let tabBlock: JSX.Element;

  switch(Props.openedTab) {
    case CorporationsTabsEnum.staff: {
      tabBlock = <></>;
      break;
    }
    case CorporationsTabsEnum.treasury: {
      tabBlock = <TreasuryTab/>;
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
        <CorporationsHeader openedTab={Props.openedTab}/>
      </div>
      <div className={classes.TabContentWrapper}>
        {tabBlock}
      </div>
    </div>
  );
});

export default CorporationsTabs;