import React from 'react'
import classes from '../../styles/board/Square.module.scss';

interface Props {
  children: any;
}

const Square: React.FC<Props> = ({children}) => {
  return (
    <div className={classes.Square}>
      {children}
    </div>
  )
}

export default Square;