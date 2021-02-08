import React, {CSSProperties} from 'react';
import classes from '../../../styles/hud/components/Corporations/CorporationsButton.module.scss';
import CorporationsText from "./CorporationsText";

interface Props {
  onClick: () => any;
  title: string;
  imageUrl: string;
  styles?: CSSProperties;
  imageWidth?: string;
  titleTextStyles?: CSSProperties;
}

const CorporationsButton: React.FC<Props> =
  ({onClick, title, styles, imageUrl, imageWidth, titleTextStyles}) => {

  const titleTextStylesLocal: CSSProperties = {
    lineHeight: '0.95rem',
    fontSize: '0.8rem',
    whiteSpace: 'nowrap',
    marginLeft: '9.33%'
  }

  const imageStyles: CSSProperties = {
    width: imageWidth || '15%',
    paddingBottom: imageWidth || '15%',
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div style={styles} className={classes.CorporationsButton} onClick={onClick}>
        <div style={imageStyles} />
      <div className={classes.TitleTextWrapper}>
        <CorporationsText styles={{...titleTextStylesLocal, ...titleTextStyles}}>
          {title}
        </CorporationsText>
      </div>
    </div>
  );
};

export default CorporationsButton;