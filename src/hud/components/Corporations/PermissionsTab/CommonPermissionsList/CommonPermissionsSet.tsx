import React, {CSSProperties} from 'react';
import classes
  from '../../../../../styles/hud/components/Corporations/PermissionsTab/CommonPermissionsList/CommonPermissionsSet.module.scss';
import CorporationsText from "../../CorporationsText";
import {PermissionInterface} from "../../../../models/corporations/interfaces";
import permissions from "../../../../../redux/reducers/hud/corporations/tabs/permissions";
import TitleAndSwitchRow from "../../TitleAndSwitchRow";

interface Props {
  title: string;
  permissions: PermissionInterface[];
}

const CommonPermissionsSet: React.FC<Props> = React.memo((Props) => {

  const titleTextStyles: CSSProperties = {
    fontWeight: 700,
    fontSize: '0.83rem',
    lineHeight: '1rem'
  }

  const permissionsBlock = Props.permissions.map(permission => {
    return (
      <div className={classes.PermissionWithSwitch} key={permission.id}>
        <TitleAndSwitchRow title={permission.title} value={permission.value} onChange={() => {}}/>
      </div>
    );
  });

  return (
    <div className={classes.CommonPermissionsSet}>
      <div className={classes.TitleWrapper}>
        <CorporationsText styles={titleTextStyles}>
          {Props.title}
        </CorporationsText>
      </div>
      {permissions && permissionsBlock}
    </div>
  );
})

export default CommonPermissionsSet;