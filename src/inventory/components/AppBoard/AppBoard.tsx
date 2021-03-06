import React, { ReactElement } from 'react';
import BoardSquare from './Board/BoardSquare';
import { yMax, yMin, xMax, xMin } from '../../constants/boardDimensions';
import { useSelector } from 'react-redux';
import SquareCommonItem from './Board/SquareCommonItem';
import ExternalBoardSquare from './ExternalBoard/ExternalBoardSquare';
import ExternalSquareCommonItem from './ExternalBoard/ExternalSquareCommonItem';
import AppBoardStateless from './AppBoardStateless';

interface Props {
  onMouseOver: () => void;
}

const AppBoard: React.FC<Props> = React.memo(function AppBoard({ onMouseOver: mouseOverHandler }) {
  const squares: ReactElement[] = [];
  const externalInventorySquares = [];

  const boardItems = useSelector((state) => state.inventory.board.board);
  const allHoveredSquares = useSelector((state) => state.inventory.draggedItem.allHoveredSquares);
  const hoveredArea = useSelector((state) => state.inventory.draggedItem.hoveredArea);

  const externalBoardItems = useSelector((state) => state.inventory.externalBoard.externalBoard);

  //region ------------------------------ Render squares from player's inventory ------------------------------
  const renderSquare = (y: number, x: number) => {
    if (!boardItems) {
      return null;
    }
    let squareContent = null;
    // Check if filled
    const item = boardItems[y][x];
    if (item && item.mainCell[0] === x && item.mainCell[1] === y) {
      squareContent = <SquareCommonItem coords={[x, y]} item={item} />;
    }
    const isHovered = hoveredArea === 1 && allHoveredSquares.findIndex((sq) => sq[0] === x && sq[1] === y) !== -1;

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

  //region ------------------------------ Render squares from external inventory ------------------------------
  const isShowExternalBoard = externalBoardItems.length > 0;

  if (isShowExternalBoard) {
    const renderExternalInventorySquare = (y: number, x: number) => {
      if (!externalBoardItems) {
        return null;
      }
      let squareContent = null;
      // Check if filled
      const item = externalBoardItems[y][x];
      if (item && item.mainCell[0] === x && item.mainCell[1] === y) {
        // @ts-ignore
        squareContent = <ExternalSquareCommonItem coords={[x, y]} item={item} />;
      }
      const isHovered = hoveredArea === 2 && allHoveredSquares.findIndex((sq) => sq[0] === x && sq[1] === y) !== -1;

      return (
        <ExternalBoardSquare key={x * 30 + y} coords={[x, y]} isHovered={isHovered} isPartOfItem={Boolean(item)}>
          {squareContent}
        </ExternalBoardSquare>
      );
    };

    for (let y = 0; y < externalBoardItems.length; y++) {
      for (let x = 0; x <= xMax; x++) {
        externalInventorySquares.push(renderExternalInventorySquare(y, x));
      }
    }
  }
  //endregion

  const topBackdropStyles = {
    flexGrow: isShowExternalBoard ? 1 : 0,
    height: isShowExternalBoard ? 'auto' : '15%',
    width: '100%',
  };

  return (
    <AppBoardStateless
      onMouseOver={mouseOverHandler}
      squares={squares}
      isShowExternalBoard={isShowExternalBoard}
      externalBoardRowsCount={externalBoardItems.length}
      externalInventorySquares={externalInventorySquares}
      topBackdropStyles={topBackdropStyles}
    />
  );
});

export default AppBoard;
