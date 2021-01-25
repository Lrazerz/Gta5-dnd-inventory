import React, {CSSProperties} from 'react';
import {useDispatch} from 'react-redux';
import classes from '../../../styles/hud/components/Corporations/CorporationsHeader.module.scss';
import {
  CorporationsTabsDict,
  CorporationsTabsEnum,
  CorporationsDisplayedTabsRussian
} from "../../models/corporations/enums";
import CorporationsHeaderTab from "./CorporationsHeaderTab";
import {corporationsTabOpen} from "../../../redux/actions/hud/corporations/corporations";
import {mpTrigger_corporations_openTab} from "../../../utils/mpTriggers/hud/corporations/corporationsTriggers";
import CorporationsText from "./CorporationsText";

interface Props {
  openedTab: CorporationsTabsEnum;
  isFromPermissionsTab?: boolean;
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
    mpTrigger_corporations_openTab(tabRus);
  }

  const openBoostHandler = () => {
    dispatch(corporationsTabOpen(CorporationsTabsEnum.boost));
    mpTrigger_corporations_openTab(CorporationsTabsDict.boost);
  }

  const tabsBlock = CorporationsDisplayedTabsRussian.map(tab => {
    let isActive: boolean = false;
    if(CorporationsTabsDict[CorporationsTabsEnum[Props.openedTab]]) {
      isActive = CorporationsTabsDict[CorporationsTabsEnum[Props.openedTab]].toLowerCase() === tab.toLowerCase();
    }
    return (
      <CorporationsHeaderTab key={tab} title={tab}
                             isActive={isActive}
      onClick={() => selectTabHandler(tab, isActive)}/>
    )
  });

  const boostImageStyles: CSSProperties = {
    width: Props.isFromPermissionsTab ? '16%' : '13%'
  }

  const boostTextStyles: CSSProperties = {
    fontSize: '0.7647rem',
    lineHeight: '0.9324rem',
    fontWeight: 700
  }

  return (
    <div className={classes.CorporationsHeader}>
      <div className={classes.TabsWrapper}>
        {tabsBlock}
      </div>
      <div style={boostImageStyles} className={classes.AdditionalButtonWrapper} onClick={openBoostHandler}>
        {/*<img className={classes.Image} src={boostButtonImg} width="100%" height="100%" onClick={openBoostHandler}/>*/}
        <CorporationsText styles={boostTextStyles}>
          Буст статус
        </CorporationsText>
      </div>
    </div>
  );
});

export default CorporationsHeader;