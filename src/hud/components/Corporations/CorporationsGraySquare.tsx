import React, {CSSProperties, useEffect, useRef} from 'react';
import classes from '../../../styles/hud/components/Corporations/CorporationsGraySquare.module.scss';
import CorporationsText from "./CorporationsText";
import {corporationsTheme} from "./consts/corporationsTheme";

interface Props {
  styles?: CSSProperties;
  textStyles?: CSSProperties;
  title: string;
}

const CorporationsGraySquare: React.FC<Props> = React.memo((Props) => {

  // const containerRef = useRef();
  //
  // useEffect(() => {
  //   if(containerRef.current) {
  //     const width: string = window.getComputedStyle(containerRef.current).width;
  //     const widthNumber: number = +width.match(/(\d|\.)+/)[0];
  //     console.log('styles', widthNumber);
  //   }
  // }, [containerRef.current])

  const textStyles: CSSProperties = {
    fontSize: '0.7058rem',
    lineHeight: '0.8824rem',
    color: corporationsTheme.bg_orange_picked2,
  }

  return (
    <div style={Props.styles} className={classes.CorporationsGraySquare}>
        <CorporationsText styles={{...textStyles, ...Props.textStyles}}>
          {Props.title}
        </CorporationsText>
    </div>
  );
});

export default CorporationsGraySquare;