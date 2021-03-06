import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from '../../../styles/hud/components/Corporations/CorporationsHeader.module.scss';
import {
  CorporationsDisplayedTabsRussian,
  CorporationsTabsDict,
  CorporationsTabsEnum,
} from '../../../models/hud/corporations/enums';
import CorporationsHeaderTab from './CorporationsHeaderTab';
import { corporationsTabOpen } from '../../../redux/actions/hud/corporations/corporations';
import { mpTrigger_corporations_openTab } from '../../../utils/mpTriggers/hud/corporations/corporationsTriggers';
import CorporationsText from './CorporationsText';
import { CorporationsTasksTabsEnumEng } from '../../../models/hud/corporations/tabs/tasks/tasksEnums';
import { corporationsTasksOpenTabAction } from '../../../redux/actions/hud/corporations/tabs/tasks/tasks';
import { CorporationsStaffTabsEnumEng } from '../../../models/hud/corporations/tabs/staff/staffEnums';
import { corporationsStaffOpenTabAction } from '../../../redux/actions/hud/corporations/tabs/staff/staff';

interface Props {
  openedTab: CorporationsTabsEnum;
  isFromPermissionsTab?: boolean;
}

const CorporationsHeader: React.FC<Props> = React.memo((props) => {
  const dispatch = useDispatch();

  const openedTab: CorporationsTabsEnum = useSelector((state) => state.hud.corporations.corporations.openedTab);
  const openedTasksTab: CorporationsTasksTabsEnumEng = useSelector(
    (state) => state.hud.corporations.tabs.tasks.tasks.openedTab,
  );
  const openedStaffTab: CorporationsStaffTabsEnumEng = useSelector(
    (state) => state.hud.corporations.tabs.staff.staff.openedTab,
  );

  const isTasksTabWithBackButtonOpened =
    openedTab === CorporationsTabsEnum.tasks &&
    (openedTasksTab === CorporationsTasksTabsEnumEng.newTask ||
      openedTasksTab === CorporationsTasksTabsEnumEng.archiveTasks);

  const isPersonalWithBackButtonOpened =
    openedTab === CorporationsTabsEnum.staff && openedStaffTab === CorporationsStaffTabsEnumEng.invite;

  const isBackButtonDisplayed = isTasksTabWithBackButtonOpened || isPersonalWithBackButtonOpened;

  const [backButtonWidth, setBackButtonWidth]: [string, (string) => void] = useState();

  const containerRef: React.Ref<HTMLDivElement> = useRef();

  useEffect(() => {
    if (containerRef.current) {
      const height: string = window.getComputedStyle(containerRef.current).height;
      setBackButtonWidth(height);
    }
  }, [containerRef.current]);

  console.log('[CorpHeader] isBackButtonDisplayed,', isBackButtonDisplayed);
  const backButtonClickHandler = () => {
    if (!isBackButtonDisplayed) return;
    if (openedTab === CorporationsTabsEnum.tasks) {
      dispatch(corporationsTasksOpenTabAction(CorporationsTasksTabsEnumEng.currentTasks));
    } else if (openedTab === CorporationsTabsEnum.staff) {
      dispatch(corporationsStaffOpenTabAction(CorporationsStaffTabsEnumEng.staff));
    }
  };

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
  };

  const openBoostHandler = () => {
    dispatch(corporationsTabOpen(CorporationsTabsEnum.boost));
    mpTrigger_corporations_openTab(CorporationsTabsDict.boost);
  };

  const tabsBlock = CorporationsDisplayedTabsRussian.map((tab) => {
    let isActive = false;
    if (CorporationsTabsDict[CorporationsTabsEnum[props.openedTab]]) {
      isActive =
        CorporationsTabsDict[CorporationsTabsEnum[props.openedTab]].trim().toLowerCase() === tab.trim().toLowerCase();
    }
    return (
      <CorporationsHeaderTab
        key={tab}
        title={tab}
        isActive={isActive}
        onClick={() => selectTabHandler(tab, isActive)}
      />
    );
  });

  const boostImageStyles: CSSProperties = {
    width: props.isFromPermissionsTab ? '16%' : '13%',
  };

  const boostTextStyles: CSSProperties = {
    fontSize: '0.7647rem',
    lineHeight: '0.9324rem',
    fontWeight: 700,
  };

  return (
    <div ref={containerRef} className={classes.CorporationsHeader}>
      <div className={`${classes.TabsWrapper} ${isBackButtonDisplayed && classes.NoPaddingLeft}`}>
        {isBackButtonDisplayed && (
          <div
            style={{ width: backButtonWidth }}
            className={classes.BackButtonWrapper}
            onClick={backButtonClickHandler}
          >
            <div className={classes.BackButton} />
          </div>
        )}
        {tabsBlock}
      </div>
      <div style={boostImageStyles} className={classes.AdditionalButtonWrapper} onClick={openBoostHandler}>
        {/*<img className={classes.Image} src={boostButtonImg} width="100%" height="100%" onClick={openBoostHandler}/>*/}
        <CorporationsText styles={boostTextStyles}>Буст статус</CorporationsText>
      </div>
    </div>
  );
});

export default CorporationsHeader;
