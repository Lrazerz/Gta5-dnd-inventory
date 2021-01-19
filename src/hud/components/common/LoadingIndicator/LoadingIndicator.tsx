import React, {CSSProperties} from 'react';
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

  const animationDelay = Props.animationDelay || '0.1s';
  const animationDuration = Props.animationDuration || '1s';
  const animationIterationCount = Props.animationIterationCount || 'infinite';

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