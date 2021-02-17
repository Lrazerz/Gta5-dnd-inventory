import React, { CSSProperties } from 'react';
import classes from '../../../styles/hud/components/Phone/SettingsScreen/ScreenTitleWrapper.module.scss';
import { ThemesEnum } from '../../../models/hud/phone/enums';
import leftArrowImg from '../../../assets/hud/images/components/Phone/components/left-arrow.svg';
import LeadText from './Text/LeadText';

interface Props {
  theme: ThemesEnum;
  titleText: string;
  onBackButtonPress: () => any;
}

const ScreenTitleWrapper: React.FC<Props> = React.memo(({ theme, titleText, onBackButtonPress }) => {
  const titleTextStyles: CSSProperties = {
    fontSize: '0.62rem',
    color: theme === ThemesEnum.black ? '#fff' : '#251152',
  };

  const horizontalLineStyles: CSSProperties = {
    backgroundColor: theme === ThemesEnum.black ? '#5422b0' : '#DAD8E6',
  };

  return (
    <>
      <div className={classes.ScreenTitleWrapper}>
        <div className={classes.BackArrowWrapper} onClick={onBackButtonPress}>
          <img src={leftArrowImg} width="100%" height="100%" />
        </div>
        <LeadText styles={titleTextStyles} onClick={onBackButtonPress}>
          {titleText}
        </LeadText>
      </div>
      <div className={classes.HorizontalLine} style={horizontalLineStyles} />
    </>
  );
});

export default ScreenTitleWrapper;
