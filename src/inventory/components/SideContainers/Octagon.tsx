import React, { CSSProperties } from 'react';
import { useSelector } from 'react-redux';
import classes from '../../../styles/inventory/equippedClosingInventory/Octagon.module.scss';

interface Props {
  width?: string;
  coords: number;
}

const Octagon: React.FC<Props> = React.memo(function Octagon({ children, coords }) {
  return (
    <>
      <div className={classes.Octagon}>
        <div className={classes.TopBorder} />
        <div className={classes.BottomBorder} />
      </div>
      <div className={classes.TransparentHoveEl} onMouseOver={(e) => e.stopPropagation()}>
        {children}
      </div>
    </>
  );
});

export default Octagon;
