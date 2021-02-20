import React, { CSSProperties, useState } from 'react';
import classes from '../../../../../styles/hud/components/Corporations/StaffTab/StaffTab/StaffTabHeader.module.scss';
import CorporationsText from '../../CorporationsText';
import HorizontalLine from '../../HorizontalLine';
import { corporationsTheme } from '../../../../../constants/hud/corporations/corporationsTheme';
import CorporationsInput from '../../CorporationsInput';
import CorporationsButton from '../../CorporationsButton';
import InvitePlayerImg from '../../../../../assets/hud/images/components/Corporations/invitePlayer.svg';

interface Props {
  onInviteTabOpen: () => void;
  searchText: string;
  onSearchTextChange: (string) => void;
  onSearchKeyDown: (e: any) => void;
  onSearchBlur: () => void;
}

const StaffTabHeaderStateless: React.FC<Props> = React.memo((props) => {
  const titleTextStyles: CSSProperties = {
    marginLeft: '18.02%',
    fontWeight: 600,
    fontSize: '1.47rem',
    lineHeight: '1.79rem',
  };

  const buttonStyles: CSSProperties = {
    padding: '0 14%',
  };

  const searchTextInputStyles: CSSProperties = {
    lineHeight: '0.86rem',
    fontSize: '0.7rem',
    fontWeight: 600,
    color: '#fff',
  };

  const horizontalLineStyles: CSSProperties = {
    backgroundColor: corporationsTheme.delimiter_darkGray,
  };

  return (
    <div className={classes.StaffTabHeader} onKeyDown={props.onSearchKeyDown} onBlur={props.onSearchBlur}>
      <div className={classes.InviteButtonWrapper}>
        <CorporationsButton
          styles={buttonStyles}
          imageWidth={'12.7%'}
          onClick={props.onInviteTabOpen}
          title={'Пригласить игрока'}
          imageUrl={InvitePlayerImg}
        />
      </div>
      <CorporationsText styles={titleTextStyles}>Персонал</CorporationsText>
      <div className={classes.SearchWrapper}>
        <CorporationsInput
          value={props.searchText}
          onChange={props.onSearchTextChange}
          styles={searchTextInputStyles}
          placeholder={'Поиск'}
        />
        <HorizontalLine styles={horizontalLineStyles} />
      </div>
    </div>
  );
});

export default StaffTabHeaderStateless;
