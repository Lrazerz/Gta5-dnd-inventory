import React from 'react';
import classes from '../../../styles/hud/components/Corporations/CorporationsHeader.module.scss';
import {
  CorporationsTabsDict,
  CorporationsTabsEnum,
  CorporationsTabsRussian
} from "../../models/corporations/enums";
import boostButtonImg from '../../../assets/hud/images/components/Corporations/boostButton.svg';
import CorporationsHeaderTab from "./CorporationsHeaderTab";

interface Props {
  openedTab: CorporationsTabsEnum;
  onTabClick: any;
}

const CorporationsHeader: React.FC<Props> = React.memo((Props) => {

  console.log(CorporationsTabsRussian, CorporationsTabsEnum[Props.openedTab]);
  const tabsBlock = CorporationsTabsRussian.map(tab => {
    return (
      <CorporationsHeaderTab key={tab} title={tab}
                             isActive={CorporationsTabsDict[CorporationsTabsEnum[Props.openedTab]].toLowerCase() === tab.toLowerCase()} />
    )
  });

  return (
    <div className={classes.CorporationsHeader}>
      <div className={classes.TabsWrapper}>
        {tabsBlock}
      </div>
      <div className={classes.AdditionalButtonWrapper}>
        <img src={boostButtonImg} width="100%" height="100%" />
      </div>
    </div>
  );
});

export default CorporationsHeader;