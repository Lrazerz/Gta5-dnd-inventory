import React, {CSSProperties, ReactElement} from 'react';
import Board from "./Board/Board";
import classes from '../../../styles/inventory/board/AppBoard.module.scss';
import BoardInfo from "./Board/BoardInfo";
import ExternalBoard from "./ExternalBoard/ExternalBoard";
import BackDrop from "../layout/BackDrop";

interface Props {
  onMouseOver: () => void;

  squares: ReactElement[];
  isShowExternalBoard: boolean;
  externalBoardRowsCount: number;
  externalInventorySquares: ReactElement[] | [];

  topBackdropStyles: CSSProperties;
}

const AppBoardStateless: React.FC<Props> = React.memo(
  function AppBoard({onMouseOver, squares, isShowExternalBoard,
                    externalBoardRowsCount, externalInventorySquares, topBackdropStyles}) {

  return (
    <div className={classes.AppBoard} onMouseOver={onMouseOver}>
      <div style={topBackdropStyles}>
        <BackDrop/>
      </div>
      {isShowExternalBoard && (
        <>
          <ExternalBoard rowsCount={externalBoardRowsCount}>
            {externalInventorySquares}
          </ExternalBoard>
          <div className={classes.MiddleBackDropStyles}>
            <BackDrop/>
          </div>
        </>
      )}
      <Board>
        {squares}
      </Board>
      <BoardInfo cash={'50.000'}/>
      <div style={{flexGrow: 1, width: '100%'}}>
        <BackDrop/>
      </div>
    </div>
  )
});

export default AppBoardStateless;