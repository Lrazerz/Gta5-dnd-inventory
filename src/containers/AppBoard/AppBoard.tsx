import React from 'react';
import BoardSquare from "../BoardSquare/BoardSquare";
import {yMax, yMin, xMax, xMin} from "../../constants/boardDimensions";
import {useSelector} from "react-redux";
import SquareCommonItem from "../SquareCommonItem/SquareCommonItem";
import Board from "../../components/board/Board";
import classes from '../../styles/board/AppBoard.module.scss';
import BoardInfo from "../../components/board/BoardInfo";
import ExternalBoard from "../../components/board/ExternalBoard";
import BackDrop from "../../components/layout/BackDrop";
import {dummyExternalItems} from "../../constants/dummy/dummyExternalItems";

const AppBoard = React.memo(function AppBoard() {
  const squares = [];
  const externalInventorySquares = [];
  const {board: {board: boardItems}, draggedItem: {allHoveredSquares}} = useSelector((state) => state);

  //region ------------------------------ Render squares from player's inventory ------------------------------
  const renderSquare = (y: number, x: number) => {
    if (!boardItems) {
      return null;
    }
    let squareContent = null;
    // Check if filled
    const item = boardItems[y][x];
    if (item && item.mainCell[0] === x && item.mainCell[1] === y) {
      squareContent = <SquareCommonItem coords={[x, y]} item={item}/>;
    }
    const isHovered = allHoveredSquares.findIndex(sq => sq[0] === x && sq[1] === y) !== -1;

    return (
      <BoardSquare key={x * 30 + y} coords={[x, y]} isHovered={isHovered} isPartOfItem={Boolean(item)}>
        {squareContent}
      </BoardSquare>
    );
  };

  for (let y = yMin; y <= yMax; y++) {
    for (let x = xMin; x <= xMax; x++) {
      squares.push(renderSquare(y, x));
    }
  }
  //endregion

  //region ------------------------------ Render squares from player's inventory ------------------------------
  const renderExternalInventorySquare = (y: number, x: number) => {
    if (!dummyExternalItems.items) {
      return null;
    }
    let squareContent = null;
    // Check if filled
    const item = dummyExternalItems.items[y][x];
    if (item && item.mainCell[0] === x && item.mainCell[1] === y) {
      // @ts-ignore
      squareContent = <SquareCommonItem coords={[x, y]} item={item}/>;
    }
    const isHovered = allHoveredSquares.findIndex(sq => sq[0] === x && sq[1] === y) !== -1;

    return (
      <BoardSquare key={x * 30 + y} coords={[x, y]} isHovered={isHovered} isPartOfItem={Boolean(item)}>
        {squareContent}
      </BoardSquare>
    );
  };

  for (let y = 0; y <= 8; y++) {
    for (let x = 0; x <= xMax; x++) {
      externalInventorySquares.push(renderExternalInventorySquare(y, x));
    }
  }
  //endregion

  return (
    <div className={classes.AppBoard}>
      <div style={{flexGrow: 1}}>
        <BackDrop/>
      </div>
      <Board>
        {squares}
      </Board>
      <BoardInfo cash={'50.000'}/>
      <ExternalBoard rowsCount={7}>
        {externalInventorySquares}
      </ExternalBoard>
      <div style={{flexGrow: 1}}>
        <BackDrop/>
      </div>
    </div>
  )
});

export default AppBoard;