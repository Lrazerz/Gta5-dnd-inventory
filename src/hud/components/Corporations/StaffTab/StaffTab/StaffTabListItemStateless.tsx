import React, { CSSProperties } from 'react';
import { useDispatch } from 'react-redux';
import classes from '../../../../../styles/hud/components/Corporations/StaffTab/StaffTab/StaffTabListItem.module.scss';
import { SingleStaffWorkerInterface } from '../../../../../models/hud/corporations/tabs/staff/tabs/staffInterfaces';
import CorporationsText from '../../CorporationsText';
import CorporationsButton from '../../CorporationsButton';
import newRoleImg from '../../../../../assets/hud/images/components/Corporations/newRole.svg';
import CurrentRoleButton from './CurrentRoleButton';
import {
  staffAddToRoleAction,
  staffKickAction,
  staffRemoveFromRoleAction,
} from '../../../../../redux/actions/hud/corporations/tabs/staff/tabs/staff';
import StaffListItemDescription from './StaffListItemDescription';
import { StaffListItemDimensionsInterface } from './StaffTabList';
import StaffTabOptionsDropdown from './StaffTabOptionsDropdown';

interface Props {
  staffWorker: SingleStaffWorkerInterface;
  containerRef: React.Ref<HTMLDivElement>;
  dimensions: StaffListItemDimensionsInterface;
  isDescriptionOpened: boolean;
  onDescriptionStateChange: () => void;
  isOptionsOpened: boolean;
  onOptionsStateChange: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const StaffTabListItemStateless: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const newRoleClickHandler = () => {
    console.log('todo');
  };

  const removeCurrentRoleClickHandler = (e) => {
    e.stopPropagation();
    dispatch(staffRemoveFromRoleAction(props.staffWorker.nickname, props.staffWorker.role));
  };

  const selectRoleHandler = (role: string) => {
    dispatch(staffAddToRoleAction(props.staffWorker.nickname, role));
  };

  const kickPlayerHandler = () => {
    dispatch(staffKickAction(props.staffWorker.nickname));
  };

  const containerStyles: CSSProperties = {
    height: props.isDescriptionOpened
      ? props.dimensions.heightWithDescription + 'px'
      : props.dimensions.heightWithoutDescription + 'px',
    marginTop: props.dimensions.marginTop + 'px',
  };

  const itemWithoutDescriptionStyles: CSSProperties = {
    height: props.dimensions.heightWithoutDescription + 'px',
  };

  const nicknameTextStyles: CSSProperties = {
    marginLeft: '2.85%',
    fontSize: '0.7647rem',
    lineHeight: '0.9324rem',
    fontWeight: 700,
  };

  const addRoleButtonStyles: CSSProperties = {
    padding: '0 13.42%',
  };

  const descriptionWrapperStyles: CSSProperties = {
    height: props.dimensions.heightWithDescription - props.dimensions.heightWithoutDescription + 'px',
  };

  const optionsWrapperStyles: CSSProperties = {
    top: props.dimensions.optionsPosition.top + 'px',
    left: props.dimensions.optionsPosition.left + 'px',
    // todo delete
    // height: props.dimensions.heightWithDescription * 0.2843 + 'px',
    // width: props.dimensions.heightWithDescription * 0.7151 + 'px',
    // backgroundColor: 'red',
  };

  const currentRoleButton: JSX.Element = (
    <div className={classes.CurrentRoleButtonWrapper}>
      <CurrentRoleButton role={props.staffWorker.role} onRemoveClick={removeCurrentRoleClickHandler} />
    </div>
  );

  const newRoleButton: JSX.Element = (
    <div className={classes.AddNewRoleButtonWrapper}>
      <CorporationsButton
        onClick={newRoleClickHandler}
        title={'Новая роль'}
        imageUrl={newRoleImg}
        styles={addRoleButtonStyles}
        imageWidth={'13.42%'}
      />
    </div>
  );

  const currentOrNewRoleBlock: JSX.Element = props.staffWorker.role ? currentRoleButton : newRoleButton;

  const descriptionKeyValuePairs = [
    { key: 'Средний онлайн в день', value: props.staffWorker.averageOnline },
    { key: 'Средний заработок за день', value: props.staffWorker.averageEarns },
    { key: 'Внес в казну', value: props.staffWorker.contributedToTreasury },
  ];

  return (
    <div ref={props.containerRef} style={containerStyles} className={classes.StaffTabListItem}>
      <div
        className={classes.TabWithoutDescription}
        onClick={props.onDescriptionStateChange}
        style={itemWithoutDescriptionStyles}
      >
        <CorporationsText styles={nicknameTextStyles}>{props.staffWorker.nickname}</CorporationsText>
        {currentOrNewRoleBlock}
        <div className={classes.ThreeDotsContainer} onClick={props.onOptionsStateChange}>
          <div className={classes.ThreeDotsWrapper}>
            <div className={classes.SingleDot} />
            <div className={classes.SingleDot} />
            <div className={classes.SingleDot} />
          </div>
        </div>
      </div>
      {props.isDescriptionOpened && (
        <div style={descriptionWrapperStyles} className={classes.DescriptionWrapper}>
          <StaffListItemDescription staffWorkerInfo={descriptionKeyValuePairs} />
        </div>
      )}
      {props.isOptionsOpened && (
        <div style={optionsWrapperStyles} className={classes.OptionsWrapper} onClick={props.onOptionsStateChange}>
          <StaffTabOptionsDropdown
            roles={props.staffWorker.potentialRoles}
            onKickPlayer={kickPlayerHandler}
            onSelectRole={selectRoleHandler}
          />
        </div>
      )}
    </div>
  );
};

export default StaffTabListItemStateless;
