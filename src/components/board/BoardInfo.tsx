import React from 'react';
// @ts-ignore
import classes from '../../styles/board/BoardInfo.module.scss';
// @ts-ignore
import capacityImage from '../../assets/images/board/capacity.png';
// @ts-ignore
import cashImage from '../../assets/images/board/cash.png';
import SecondaryText from "../../components/layout/SecondaryText";

const BoardInfo = ({cash}) => {
  return (
    <div className={classes.BoardInfo}>
        <img src={cashImage}/>
        <SecondaryText styles={{width: 'auto'}}>
          &nbsp;Наличные:{' '}
          <span className={classes.CurrentCashText}>
            ${cash}
          </span>
        </SecondaryText>
    </div>
  );
};

export default BoardInfo;