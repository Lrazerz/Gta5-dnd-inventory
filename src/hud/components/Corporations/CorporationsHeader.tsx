import React from 'react';
import {useDispatch} from 'react-redux';
import classes from '../../../styles/hud/components/Corporations/CorporationsHeader.module.scss';
import {
  CorporationsTabsDict,
  CorporationsTabsEnum,
  CorporationsTabsRussian
} from "../../models/corporations/enums";
import boostButtonImg from '../../../assets/hud/images/components/Corporations/boostButton.svg';
import CorporationsHeaderTab from "./CorporationsHeaderTab";
import {corporationsTabOpen} from "../../../redux/actions/hud/corporations/corporations";
import {mpTrigger_corporations_openTab} from "../../../utils/mpTriggers/hud/hudMpTriggers";

interface Props {
  openedTab: CorporationsTabsEnum;
}

const CorporationsHeader: React.FC<Props> = React.memo((Props) => {

  const dispatch = useDispatch();

  const selectTabHandler = (tabRus: string, isActive: boolean) => {
    if(isActive) return;
    let tabEng: string;

    for(const key in CorporationsTabsDict) {
      if(CorporationsTabsDict[key].toLowerCase() === tabRus.toLowerCase()) {
        tabEng = key;
      }
    }
    dispatch(corporationsTabOpen(CorporationsTabsEnum[tabEng]));
    mpTrigger_corporations_openTab(CorporationsTabsEnum[tabEng]);
  }

  const tabsBlock = CorporationsTabsRussian.map(tab => {
    const isActive: boolean = CorporationsTabsDict[CorporationsTabsEnum[Props.openedTab]].toLowerCase() === tab.toLowerCase();
    return (
      <CorporationsHeaderTab key={tab} title={tab}
                             isActive={isActive}
      onClick={() => selectTabHandler(tab, isActive)}
      />
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