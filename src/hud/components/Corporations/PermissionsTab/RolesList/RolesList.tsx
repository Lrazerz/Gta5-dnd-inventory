import React, {useState, useRef, useEffect} from 'react';
import {useSelector} from 'react-redux';
import classes from '../../../../../styles/hud/components/Corporations/PermissionsTab/RolesList/RolesList.module.scss';
import RolesListHeader from "./RolesListHeader";
import CorporationsInput from "../../CorporationsInput";
import HorizontalLine from "../../HorizontalLine";
import RolesListContent from "./RolesListContent";
import {
  permissionsRemoveRoleAction,
  permissionsSelectRoleAction
} from "../../../../../redux/actions/hud/corporations/tabs/permissions";

const RolesList = React.memo(() => {

  const containerRef = useRef();

  const [searchText, setSearchText]: [string, any] = useState("");
  const [roleHeight, setRoleHeight]: [number, any] = useState(0);

  const {roles, selectedRole} = useSelector(({hud}) => {
    return {
      roles: hud.corporations.tabs.permissions.roles,
      selectedRole: hud.corporations.tabs.permissions.selectedRole
    }
  })

  useEffect(() => {
    if(containerRef.current) {
      const width: string = window.getComputedStyle(containerRef.current).width;
      const widthNumber: number = +width.match(/(\d|\.)+/)[0];
      const singleRoleHeight: number = 0.2342 * widthNumber;
      setRoleHeight(singleRoleHeight);
    }
  }, [containerRef.current])

  return (
    <div ref={containerRef} className={classes.RolesList}>
      <div className={classes.RolesListHeader}>
        <RolesListHeader />
      </div>
      <HorizontalLine />
      <div className={classes.RolesSearchWrapper}>
        <CorporationsInput value={searchText} onChange={setSearchText}/>
      </div>
      <HorizontalLine />
      <div className={classes.RolesListContent}>
        {roleHeight ? (<RolesListContent
          roles={roles} selectedRole={selectedRole}
          onSelectRole={permissionsSelectRoleAction}
          onRemoveRole={permissionsRemoveRoleAction}
          roleHeight={roleHeight}/>) : null}
      </div>
    </div>
  );
});

export default RolesList;