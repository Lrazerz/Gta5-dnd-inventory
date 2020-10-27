import React, {CSSProperties, useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
// @ts-ignore
import classes from '../../styles/board/ExternalBoard.module.scss';

interface Props {
  children: any;
  rowsCount: number;
}

const ExternalBoard: React.FC<Props> = React.memo(function ExternalBoard({children, rowsCount}) {
  // proportional to width (16x6)
  const [boardHeight, setBoardHeight] = useState(null);
  const [boardWidth, setBoardWidth] = useState(null);

  const boardSquareSize = useSelector(state => state.board.boardSquareSize);

  useEffect(() => {

    setBoardHeight(boardSquareSize * Number(rowsCount));
    setBoardWidth(boardSquareSize * 16);
  }, []);

  const additionalStyles: CSSProperties = {
    gridTemplateRows: `repeat(${rowsCount}, 1fr)`,
    minWidth: `${boardWidth}px`,
    width: `${boardWidth}px`,
    maxWidth: `${boardWidth}px`,
    height: `${boardHeight}px`,
  }

  const wrapperStyles: CSSProperties = {
    maxHeight: `${boardHeight / rowsCount * 5}px`,
    width: rowsCount < 7 ? `${boardWidth}px` : `${boardWidth + 4}px`,
    marginLeft: rowsCount < 7 ? 0 : '2px',
    background: 'rgba(96, 99, 110, 0.6)',
  }

  return (
    <div style={wrapperStyles} className={classes.ExternalBoardWrapper}>
      <div style={additionalStyles} className={classes.ExternalBoard}
           onMouseUp={e => {e.persist();e.stopPropagation();}}>
        {children}
      </div>
    </div>
  )
});

export default ExternalBoard;