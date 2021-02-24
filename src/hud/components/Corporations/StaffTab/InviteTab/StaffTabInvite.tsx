import React, { CSSProperties, useState } from 'react';
import classes from '../../../../../styles/hud/components/Corporations/StaffTab/InviteTab/StaffTabInvite.module.scss';
import CorporationsText from '../../CorporationsText';
import CorporationsInput from '../../CorporationsInput';
import { maxNicknameLength, minNicknameLength, nicknameRegex } from '../../../../../constants/commonConstants';
import HorizontalLine from '../../HorizontalLine';
import TreasuryButton from '../../TreasuryTab/TreasuryButton';
import { mpTrigger_corporations_staff_invitePlayer } from '../../../../../utils/mpTriggers/hud/corporations/tabs/staff/tabs/inviteTriggers';

const StaffTabInvite: React.FC = React.memo(() => {
  const [nickname, setNickname]: [string, (string) => void] = useState('');

  const invitePlayerHandler = () => {
    if (nickname.length < minNicknameLength) {
      console.log(`[forb] nickname length < minNicknameLength`);
      return;
    }
    if (nickname.length > maxNicknameLength) {
      console.log(`[forb] nickname length > maxNicknameLength`);
      return;
    }
    if (!nicknameRegex.test(nickname)) {
      console.log(`[forb] nickname does not match regex`);
      return;
    }
    mpTrigger_corporations_staff_invitePlayer(nickname);
    setNickname('');
  };

  const titleTextStyles: CSSProperties = {
    fontWeight: 600,
    fontSize: '1.47rem',
    lineHeight: '1.79rem',
  };

  const inputTextStyles: CSSProperties = {
    fontSize: '0.8823rem',
    lineHeight: '1.0759rem',
    color: '#fff',
  };

  const horizontalLineStyles: CSSProperties = {
    marginTop: '2.04%',
    backgroundColor: '#7D808D',
  };

  return (
    <div className={classes.StaffTabInvite}>
      <div className={classes.Content}>
        <CorporationsText styles={titleTextStyles}>Пригласить игрока</CorporationsText>
        <div className={classes.NicknameInputWrapper}>
          <CorporationsInput
            value={nickname}
            onChange={setNickname}
            placeholder={'Введите никнейм игрока'}
            styles={inputTextStyles}
            maxLength={maxNicknameLength}
          />
        </div>
        <HorizontalLine styles={horizontalLineStyles} />
        <div className={classes.InviteButtonWrapper}>
          <TreasuryButton onClick={invitePlayerHandler}>Пригласить</TreasuryButton>
        </div>
      </div>
    </div>
  );
});

export default StaffTabInvite;
