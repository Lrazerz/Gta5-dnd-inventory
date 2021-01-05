import React, {CSSProperties} from 'react';
import classes from '../../../styles/hud/components/Corporations/CorporationsButton.module.scss';
import newRoleImg from '../../../assets/hud/images/components/Corporations/newRole.svg';
import CorporationsText from "./CorporationsText";

interface Props {
  onClick: () => any;
  title: string;
  styles?: CSSProperties;
  imageUrl: string;
}

const CorporationsButton: React.FC<Props> =
  ({onClick, title, styles, imageUrl}) => {

  const titleTextStyles: CSSProperties = {
    lineHeight: '0.95rem',
    fontSize: '0.8rem',
    whiteSpace: 'nowrap'
  }

  return (
    <div style={styles} className={classes.CorporationsButton} onClick={onClick}>
      <div className={classes.ImageWrapper}>
        <img src={newRoleImg} className={classes.Image} width="100%" height="100%"/>
      </div>
      <div className={classes.TitleTextWrapper}>
        <CorporationsText styles={titleTextStyles}>
          {title}
        </CorporationsText>
      </div>
    </div>
  );
};

export default CorporationsButton;