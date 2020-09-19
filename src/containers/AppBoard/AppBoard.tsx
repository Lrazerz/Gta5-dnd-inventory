import React from 'react';
import BoardSquare from "../BoardSquare/BoardSquare";
import {yMax, yMin, xMax, xMin} from "../../constants/boardDimensions";
import {useSelector} from "react-redux";
import SquareCommonItem from "../SquareCommonItem/SquareCommonItem";
import Board from "../../components/board/Board";
import classes from '../../styles/board/AppBoard.module.scss';
import BoardInfo from "../../components/board/BoardInfo";

const AppBoard = () => {
  const squares = [];
  const {board: boardItems} = useSelector(({board}) => board);

  const renderSquare = (y: number, x: number) => {
    if (!boardItems) {
      return null;
    }
    let squareContent = null;
    // Check if filled
    const item = boardItems[y][x];
    if (item) {
      squareContent = <SquareCommonItem coords={[x, y]} item={item}/>;
    }
    return (
      <BoardSquare key={x * 30 + y} coords={[x, y]}>
        {squareContent}
      </BoardSquare>
    );
  }

  for (let y = yMin; y <= yMax; y++) {
    for (let x = xMin; x <= xMax; x++) {
      squares.push(renderSquare(y, x));
    }
  }

  return (
    <div className={classes.AppBoard}>
      <Board>
        {squares}
      </Board>
      <BoardInfo cash={'50.000'}/>
    </div>
  )
};

export default AppBoard;