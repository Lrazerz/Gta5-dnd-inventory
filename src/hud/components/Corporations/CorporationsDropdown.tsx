import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import classes from '../../../styles/hud/components/Corporations/CorporationsDropdown.module.scss';
import CorporationsText from './CorporationsText';
import HorizontalLine from './HorizontalLine';
import { corporationsTheme } from '../../../constants/hud/corporations/corporationsTheme';

interface Props {
  selectedItem: string;
  list: string[];
  onSelect: any;
  styles?: CSSProperties;
  // if disabled - can't be opened
  isDisabled?: boolean;
}

const CorporationsDropdown: React.FC<Props> = (props) => {
  // to create horizontal padding
  const containerRef = useRef();

  const [isOpened, setIsOpened]: [boolean, any] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      // @ts-ignore
      if (containerRef.current.childNodes[1]) {
        const widthNumber =
          // @ts-ignore
          +window.getComputedStyle(containerRef.current.childNodes[1]).width.match(/(\.|\d)+/)[0] * 1.3 + 'px';
        // @ts-ignore
        containerRef.current.childNodes[1].style.width = widthNumber;
      }
    }
  }, [containerRef.current, isOpened]);

  const openDropdownHandler = () => {
    if (props.isDisabled) {
      console.warn('[forb] dropdown disabled right now');
      return;
    }
    setIsOpened(true);
  };

  const selectedTextStyles: CSSProperties = {
    fontSize: '0.7058rem',
    lineHeight: '0.8824rem',
    color: corporationsTheme.bg_orange_picked2,
  };

  const pickedItemClickHandler = (e) => {
    e.stopPropagation();
    setIsOpened(false);
  };

  const pickItemHandler = (listItem: string, e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpened(false);
    props.onSelect(listItem);
  };

  const pickedItemTextStyles: CSSProperties = {
    color: corporationsTheme.bg_orange_picked2,
    textAlign: 'center',
    fontSize: '0.7058rem',
    lineHeight: '0.8824rem',
  };

  const listTextStyles: CSSProperties = {
    fontSize: '0.7058rem',
    lineHeight: '0.8824rem',
    // lineHeight: '1.3824rem',
    textAlign: 'center',
  };

  const horizontalLineStyles: CSSProperties = {
    backgroundColor: corporationsTheme.bg_pickledBlueWood,
  };

  const listBlock: JSX.Element[] = [<HorizontalLine styles={horizontalLineStyles} key={'horizontalLine'} />];

  listBlock.push(
    ...props.list.map((listItem) => {
      return (
        <div key={listItem} className={classes.ListItemWrapper} onClick={(e) => pickItemHandler(listItem, e)}>
          <CorporationsText styles={listTextStyles}>{listItem}</CorporationsText>
        </div>
      );
    }),
  );

  return (
    <div style={props.styles} className={classes.SelectedItem} ref={containerRef} onClick={openDropdownHandler}>
      <CorporationsText styles={selectedTextStyles}>{props.selectedItem}</CorporationsText>
      {isOpened && (
        <div className={classes.CorporationsDropdown}>
          <div className={classes.ListItemWrapper} onClick={pickedItemClickHandler}>
            <CorporationsText styles={pickedItemTextStyles}>{props.selectedItem}</CorporationsText>
          </div>
          <div className={classes.ItemsList}>{listBlock}</div>
        </div>
      )}
    </div>
  );
};

export default CorporationsDropdown;
