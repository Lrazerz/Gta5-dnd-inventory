import React, {CSSProperties} from 'react';
import {useSelector} from 'react-redux';
import classes from '../../styles/equippedClosingInventory/Octagon.module.scss';

interface Props {
  width?: string;
  coords: number;
}

const Octagon: React.FC<Props> = React.memo(function Octagon({children, coords}) {

  const {hoveredSquare} = useSelector(({draggedItem}) => draggedItem);

  // to keep dragged item at the top of the screen
  const transparentHoverEl: CSSProperties = {
    zIndex: hoveredSquare === coords ? 'auto' : 200,
  }

  return (
    <>
      <div className={classes.Octagon}>
        <div className={classes.TopBorder}/>
        <div className={classes.BottomBorder}/>
      </div>
      <div className={classes.TransparentHoveEl} style={transparentHoverEl} onMouseOver={e => e.stopPropagation()}>
        {children}
      </div>
    </>
  );
});

export default Octagon;