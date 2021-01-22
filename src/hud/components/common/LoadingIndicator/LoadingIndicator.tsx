import React, {CSSProperties, useEffect, useState} from 'react';
import classes from '../../../../styles/hud/components/common/LoadingIndicator.module.scss';
import evionLogo from '../../../../assets/common/evionLogo.svg';
import CorporationsText from "../../Corporations/CorporationsText";

interface Props {
  animationDelay?: string;
  animationDuration?: string;
  animationIterationCount?: string;

  loadingText?: string;
}

const LoadingIndicator: React.FC<Props> = React.memo((Props) => {

  // const [isVisible, setIsVisible] = useState(true);
  //
  // useEffect(() => {
  //   const timeout = setTimeout(() => setIsVisible(false), 2200);
  //   return () => {
  //     clearTimeout(timeout);
  //   }
  // }, [])

  const animationDelay = Props.animationDelay || '0.2s';
  const animationDuration = Props.animationDuration || '2s';
  const animationIterationCount = Props.animationIterationCount || '1';

  const loadingText = Props.loadingText || 'Загрузка данных';

  const imageStyles: CSSProperties = {
    animationDelay: animationDelay,
    animationDuration: animationDuration,
    animationIterationCount: animationIterationCount
  }

  const loadingTextStyles: CSSProperties = {
    fontSize: '0.7rem',
    lineHeight: '1rem',
    color: '#fff',
    marginTop: '1rem',
  }

  // if(!isVisible) {
  //   return null;
  // }

  return (
    <div className={classes.LoadingIndicator}>
      <img style={imageStyles} className={classes.IndicatorImage} src={evionLogo}/>
      <CorporationsText styles={loadingTextStyles}>
        {loadingText}
      </CorporationsText>
    </div>
  );
});

export default LoadingIndicator;