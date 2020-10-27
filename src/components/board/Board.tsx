import React, {CSSProperties, useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import classes from '../../styles/board/Board.module.scss';

const Board = React.memo(function Board({children}) {
  // proportional to width (16x6)
  const [boardHeight, setBoardHeight] = useState(null);
  const [boardWidth, setBoardWidth] = useState(null);

  const boardSquareSize = useSelector(state => state.board.boardSquareSize);

  useEffect(() => {
    setBoardHeight(boardSquareSize * 6);
    setBoardWidth(boardSquareSize * 16);
  }, []);

  const additionalStyles: CSSProperties = {
    minWidth: `${boardWidth}px`,
    width: `${boardWidth}px`,
    maxWidth: `${boardWidth}px`,
    minHeight: `${boardHeight}px`,
    height: `${boardHeight}px`,
    maxHeight: `${boardHeight}px`
  }

  return (
    <div style={additionalStyles} className={classes.Board}
    onMouseUp={e => {e.persist();e.stopPropagation();}}>
      {children}
    </div>
  )
});

export default Board;