import React, {CSSProperties, useEffect, useRef, useState} from 'react';
import classes from '../../../styles/hud/components/Corporations/CorporationsDropdown.module.scss';
import CorporationsText from "./CorporationsText";
import HorizontalLine from "./HorizontalLine";
import {corporationsTheme} from "./consts/corporationsTheme";
import CorporationsGraySquare from "./CorporationsGraySquare";

interface SingleItemInterface {
  id: string;
  title: string;
}

interface Props {
  selectedItem: SingleItemInterface;
  list: SingleItemInterface[];
  onSelect: any;
}

const CorporationsDropdown: React.FC<Props> = React.memo((Props) => {

  // to create horizontal padding
  const containerRef = useRef();

  const [isOpened, setIsOpened]: [boolean, any] = useState(false);

  useEffect(() => {
    if(containerRef.current) {
      // @ts-ignore
      containerRef.current.style.width = +window.getComputedStyle(containerRef.current).width.match(/(\.|\d)+/)[0] * 1.3 + 'px';
    }
  }, containerRef.current)


  const openDropdownHandler = () => {
    setIsOpened(true);
  }

  const selectedTextStyles: CSSProperties = {
    fontSize: '0.7058rem',
    lineHeight: '0.8824rem',
    color: corporationsTheme.bg_orange_picked2,
  }

  if(!isOpened) {
    return (
      <div className={classes.SelectedItem} onClick={openDropdownHandler}>
        <CorporationsText styles={selectedTextStyles}>
          {Props.selectedItem.title}
        </CorporationsText>
      </div>
    )
  }

  // return (
  //   <div className={classes.CorporationsDropdown}>
  //     <div className={classes.ListItemWrapper}>
  //       <CorporationsText styles={pickedItemTextStyles}>
  //         {Props.selectedItem.title}
  //       </CorporationsText>
  //     </div>
  //     {isOpened && listBlock}
  //   </div>
  // );

  const pickItemHandler = () => {
    setIsOpened(false);
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

  const listBlock: JSX.Element[] = [<HorizontalLine styles={horizontalLineStyles}/>];

  listBlock.push(...Props.list.map(listItem => {
    return (
      <div className={classes.ListItemWrapper} onClick={pickItemHandler}>
        <CorporationsText styles={listTextStyles}>
          {listItem.title}
        </CorporationsText>
      </div>
    );
  }));

  return (
    <div className={classes.SelectedItem}>
      <CorporationsText styles={selectedTextStyles}>
        {Props.selectedItem.title}
      </CorporationsText>
      <div className={classes.CorporationsDropdown} ref={containerRef}>
        <div className={classes.ListItemWrapper}>
          <CorporationsText styles={pickedItemTextStyles}>
            {Props.selectedItem.title}
          </CorporationsText>
        </div>
        {isOpened && listBlock}
      </div>
    </div>
  );
});

export default CorporationsDropdown;