import React, {CSSProperties} from 'react';
import {useSelector} from 'react-redux';
import classes from '../../styles/equippedClosingInventory/Octagon.module.scss';

interface Props {
  width?: string;
  coords: number;
}

const Octagon: React.FC<Props> = React.memo(function Octagon({children, width='26%', coords}) {

  const {hoveredSquare} = useSelector(({draggedItem}) => draggedItem);

  // to keep dragged item at the top of the screen
  const octagonStyles: CSSProperties = {
    width: width,
    zIndex: hoveredSquare === coords ? 'auto' : 200,
  }

  return (
    <div className={classes.Octagon} style={octagonStyles} onMouseOver={e => e.stopPropagation()}>
      {children}
      <div className={classes.TopBorder}/>
      <div className={classes.BottomBorder}/>
    </div>
  );
});

export default Octagon;