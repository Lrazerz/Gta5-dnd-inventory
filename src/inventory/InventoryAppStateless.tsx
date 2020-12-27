import React, {CSSProperties} from 'react';
import AppBoard from "./components/AppBoard/AppBoard";
// @ts-ignore
import classes from '../styles/inventory/InventoryApp.module.scss';
import EquippedClosingContainer
  from "./components/SideContainers/EquippedClothingContainer/EquippedClosingContainer";
import EquippedWeaponsContainer from "./components/SideContainers/EquippedWeaponsContainer/EquippedWeaponsContainer";
import SecondaryText from "./components/layout/SecondaryText";
// @ts-ignore
import leftSparksSvg from "../assets/inventory/images/UI/left-sparks.svg";
// @ts-ignore
import rightSparksSvg from "../assets/inventory/images/UI/right-sparks.svg";
import RangeComponent from "./components/UI/RangeComponent";
import ContextMenu from "./components/UI/ContextMenu";

interface Props {
  contextMenu: any;
  tooltipStyles: CSSProperties;

  onTooltipMouseOver: (e: any) => void;
  onContainersMouseOver: () => void;
}

const InventoryAppStateless: React.FC<Props> = React.memo(
  function InventoryAppStateless({contextMenu, tooltipStyles, onTooltipMouseOver, onContainersMouseOver}) {

  return (
    <>
      {/*<div className={classes.BgWrapper}/>*/}
      {/*<div className={classes.BlurredWrapper}/>*/}
      <div className={classes.AppContainer}>
        <div className={classes.TopTooltip} style={tooltipStyles} onMouseOver={onTooltipMouseOver}>
          <SecondaryText styles={{fontWeight: 600, color: '#fcfdff', width: 'auto'}}>
            Нажмите I для выхода
          </SecondaryText>
        </div>
        <div className={classes.App}>
          <EquippedClosingContainer onMouseOver={onContainersMouseOver}/>
          <AppBoard onMouseOver={onContainersMouseOver}/>
          <EquippedWeaponsContainer onMouseOver={onContainersMouseOver}/>
        </div>
        <object type="image/svg+xml" data={leftSparksSvg} className={classes.LeftSparksSvgContainer}/>
        <object type="image/svg+xml" data={rightSparksSvg} className={classes.RightSparksSvgContainer}/>
        {contextMenu.contextItem && !contextMenu.splitMenuOpen && (<ContextMenu contextItem={contextMenu.contextItem}
                                                                                leftOffset={contextMenu.leftOffset}
                                                                                topOffset={contextMenu.topOffset}
                                                                                hoveredArea={contextMenu.hoveredArea}
        />)}
        <RangeComponent leftOffset={contextMenu.leftOffset}
                        topOffset={contextMenu.topOffsetTopContext}
                        contextItem={contextMenu.contextItem}
                        hoveredArea={contextMenu.hoveredArea}
                        splitMenuOpen={contextMenu.splitMenuOpen}/>)
      </div>
    </>
  );
});

export default InventoryAppStateless;
