import React, {CSSProperties, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classes from '../../../styles/hud/components/Corporations/CorporationsHeader.module.scss';
import {
  CorporationsDisplayedTabsRussian,
  CorporationsTabsDict,
  CorporationsTabsEnum
} from "../../models/corporations/enums";
import CorporationsHeaderTab from "./CorporationsHeaderTab";
import {corporationsTabOpen} from "../../../redux/actions/hud/corporations/corporations";
import {mpTrigger_corporations_openTab} from "../../../utils/mpTriggers/hud/corporations/corporationsTriggers";
import CorporationsText from "./CorporationsText";
import {CorporationsTasksTabsEnumEng} from "../../models/corporations/tabs/tasks/tasksEnums";
import {corporationsTasksOpenTabAction} from "../../../redux/actions/hud/corporations/tabs/tasks/tasks";

interface Props {
  openedTab: CorporationsTabsEnum;
  isFromPermissionsTab?: boolean;
}

const CorporationsHeader: React.FC<Props> = React.memo((Props) => {

  const dispatch = useDispatch();

  const openedTab: CorporationsTabsEnum = useSelector(state => state.hud.corporations.corporations.openedTab);
  const openedTasksTab: CorporationsTasksTabsEnumEng = useSelector(state => state.hud.corporations.tabs.tasks.tasks.openedTab);

  const isTasksTabWithBackButtonOpened = openedTasksTab === CorporationsTasksTabsEnumEng.newTask
    || openedTasksTab === CorporationsTasksTabsEnumEng.archiveTasks;

  const isBackButtonDisplayed = openedTab === CorporationsTabsEnum.tasks && isTasksTabWithBackButtonOpened

  const [backButtonWidth, setBackButtonWidth]: [string, (string) => void] = useState();

  const containerRef: React.Ref<HTMLDivElement> = useRef();

  useEffect(() => {
    if(containerRef.current) {
      const height: string = window.getComputedStyle(containerRef.current).height;
      setBackButtonWidth(height);
    }
  }, [containerRef.current]);

  console.log('[CorpHeader] isBackButtonDisplayed,',isBackButtonDisplayed)
  const backButtonClickHandler = () => {
    if(!isBackButtonDisplayed) return;
    if(openedTab === CorporationsTabsEnum.tasks) {
      dispatch(corporationsTasksOpenTabAction(CorporationsTasksTabsEnumEng.currentTasks));
    }
  }

  const selectTabHandler = (tabRus: string, isActive: boolean) => {
    if (isActive) return;
    let tabEng: string;

    for (const key in CorporationsTabsDict) {
      if (CorporationsTabsDict[key].toLowerCase() === tabRus.toLowerCase()) {
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
    if (CorporationsTabsDict[CorporationsTabsEnum[Props.openedTab]]) {
      isActive = CorporationsTabsDict[CorporationsTabsEnum[Props.openedTab]].trim().toLowerCase() === tab.trim().toLowerCase();
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
    <div ref={containerRef} className={classes.CorporationsHeader}>
      <div className={`${classes.TabsWrapper} ${isBackButtonDisplayed && classes.NoPaddingLeft}`}>
        {isBackButtonDisplayed &&
        (
          <div style={{width: backButtonWidth}} className={classes.BackButtonWrapper} onClick={backButtonClickHandler}>
            <div className={classes.BackButton}/>
          </div>
        )}
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