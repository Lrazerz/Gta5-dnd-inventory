import React, {CSSProperties, useEffect, useRef, useState} from 'react';
import classes from '../../../styles/hud/components/Corporations/CorporationsDropdown.module.scss';
import CorporationsText from "./CorporationsText";
import HorizontalLine from "./HorizontalLine";
import {corporationsTheme} from "./consts/corporationsTheme";
import CorporationsGraySquare from "./CorporationsGraySquare";
import {permissionsAutoChangeResponsibleAction} from "../../../redux/actions/hud/corporations/tabs/permissions/tabs/auto";
import {ResponsibleForAutoInterface} from "../../models/corporations/interfaces";

interface SingleItemInterface {
  id: string;
  title: string;
}

interface Props {
  selectedItem: SingleItemInterface;
  list: SingleItemInterface[];
  onSelect: any;
}

const CorporationsDropdown: React.FC<Props> = (Props) => {

  // to create horizontal padding
  const containerRef = useRef();

  const [isOpened, setIsOpened]: [boolean, any] = useState(false);

  useEffect(() => {
    console.log('dropdown useeffect', containerRef.current);
    if(containerRef.current) {

      // @ts-ignore
      if(containerRef.current.childNodes[1]) {
        // @ts-ignore
        const widthNumber = +window.getComputedStyle(containerRef.current.childNodes[1]).width.match(/(\.|\d)+/)[0] * 1.3 + 'px';

        console.log('set width number');
        // @ts-ignore
        containerRef.current.childNodes[1].style.width = widthNumber;
      }
    }
  }, [containerRef.current, isOpened])

  const openDropdownHandler = () => {
    setIsOpened(true);
  }

  const selectedTextStyles: CSSProperties = {
    fontSize: '0.7058rem',
    lineHeight: '0.8824rem',
    color: corporationsTheme.bg_orange_picked2,
  }

  const pickItemHandler = (listItem: ResponsibleForAutoInterface, e: any) => {
    e.stopPropagation();
    setIsOpened(false);
    Props.onSelect(listItem);
  }

  const pickedItemTextStyles: CSSProperties = {
    color: corporationsTheme.bg_orange_picked2,
    textAlign: 'center',
    fontSize: '0.7058rem',
    lineHeight: '0.8824rem',
  }

  const listTextStyles: CSSProperties = {
    fontSize: '0.7058rem',
    lineHeight: '0.8824rem',
    // lineHeight: '1.3824rem',
    textAlign: 'center',
  }

  const horizontalLineStyles: CSSProperties = {
    backgroundColor: corporationsTheme.bg_pickledBlueWood,
  }

  const listBlock: JSX.Element[] = [<HorizontalLine styles={horizontalLineStyles} key={'horizontalLine'}/>];

  listBlock.push(...Props.list.map(listItem => {
    return (
      <div key={listItem.id} className={classes.ListItemWrapper} onClick={(e) => pickItemHandler(listItem, e)}>
        <CorporationsText styles={listTextStyles}>
          {listItem.title}
        </CorporationsText>
      </div>
    );
  }));

  return (
    <div className={classes.SelectedItem} ref={containerRef} onClick={openDropdownHandler}>
      <CorporationsText styles={selectedTextStyles}>
        {Props.selectedItem.title}
      </CorporationsText>
      { isOpened && (<div className={classes.CorporationsDropdown}>
        <div className={classes.ListItemWrapper}>
          <CorporationsText styles={pickedItemTextStyles}>
            {Props.selectedItem.title}
          </CorporationsText>
        </div>
        {listBlock}
      </div>)}
    </div>
  );
}

export default CorporationsDropdown;