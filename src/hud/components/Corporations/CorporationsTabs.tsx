import React, {CSSProperties} from 'react';
import classes from '../../../styles/hud/components/Corporations/CorporationsTabs.module.scss';
import {CorporationsTabsEnum} from "../../models/corporations/enums";
import CorporationsHeader from "./CorporationsHeader";

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

  return (
    <div style={containerStyles} className={classes.CorporationsTabs}>
      <div className={classes.HeaderWrapper}>
        <CorporationsHeader openedTab={Props.openedTab}/>
      </div>
    </div>
  );
});

export default CorporationsTabs;