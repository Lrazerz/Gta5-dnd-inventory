import React, {useEffect, useRef, useState} from 'react';
// @ts-ignore
import classes from '../../styles/board/Board.module.scss';

const Board = ({children}) => {
  // proportional to width (17x6)
  const [boardHeight, setBoardHeight] = useState(null);

  const boardEl:React.MutableRefObject<null> | null = useRef(null);

  // Make element proportional no matter where it placed
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      const current: HTMLElement | null = boardEl.current;


      // const width = current.clientWidth;
      //
      const CSSStyleDeclaration = window.getComputedStyle(current);
      let widthString = CSSStyleDeclaration.getPropertyValue('width');
      const regex = /^((\d|\.)+)/;
      const widthNumber : number = parseFloat(widthString.match(regex)[0]);


      setBoardHeight(widthNumber * 0.376);
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return (
    <div ref={boardEl} style={{height: `${boardHeight+0}px`}} className={classes.Board}>
      {children}
    </div>
  )
}

export default Board;