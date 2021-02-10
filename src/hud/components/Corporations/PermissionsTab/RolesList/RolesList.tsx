import React, {useState, useRef, useEffect, CSSProperties} from 'react';
import {useSelector} from 'react-redux';
import classes from '../../../../../styles/hud/components/Corporations/PermissionsTab/RolesList/RolesList.module.scss';
import RolesListHeader from "./RolesListHeader";
import CorporationsInput from "../../CorporationsInput";
import HorizontalLine from "../../HorizontalLine";
import RolesListContent from "./RolesListContent";
import {
  permissionsRemoveRoleAction,
  permissionsSelectRoleAction
} from "../../../../../redux/actions/hud/corporations/tabs/permissions/permissions";
import {SingleRoleInterface} from "../../../../models/corporations/interfaces";
import {maxRoleTitleLength, roleTitleRegex} from "../../../../../constants/hud/corporations/permissions/permissions";
import LoadingIndicator from "../../../common/LoadingIndicator/LoadingIndicator";

const RolesList = React.memo(() => {

  const containerRef = useRef();

  const [searchText, setSearchText]: [string, any] = useState("");
  const [roleHeight, setRoleHeight]: [number, any] = useState(0);
  const [filteredRoles, setFilteredRoles]: [SingleRoleInterface[], any] = useState();

  const roles = useSelector(state => state.hud.corporations.tabs.permissions.permissions.roles);
  const selectedRole = useSelector(state => state.hud.corporations.tabs.permissions.permissions.selectedRole);

  useEffect(() => {
    if(searchText.length > 0) {
      setFilteredRoles(roles.filter(role => role.title.toLowerCase().includes(searchText.toLowerCase())));
    } else {
      setFilteredRoles(roles);
    }
   }, [searchText, roles]);

  useEffect(() => {
    if(containerRef.current) {
      const width: string = window.getComputedStyle(containerRef.current).width;
      const widthNumber: number = +width.match(/(\d|\.)+/)[0];
      const singleRoleHeight: number = 0.2342 * widthNumber;
      setRoleHeight(singleRoleHeight);
    }
  }, [containerRef.current]);

  const setSearchTextHandler = (value) => {
    if(!roleTitleRegex.test(value)) {
      console.warn('[forb] role title search text does not match regex');
      return;
    }
    setSearchText(value);
  }

  const searchTextStyles: CSSProperties = {
    fontSize: '0.75rem',
    padding: '0 7%',
    fontWeight: 600
  }

  const rolesListContentBlock: JSX.Element = roleHeight ? (<RolesListContent
    roles={filteredRoles} selectedRole={selectedRole}
    onSelectRole={permissionsSelectRoleAction}
    onRemoveRole={permissionsRemoveRoleAction}
    roleHeight={roleHeight}/>) : null;

  if(!roles) {
    return (
      <div ref={containerRef} className={classes.RolesList}>
        <div className={classes.RolesListHeader}>
          <RolesListHeader />
        </div>
        <HorizontalLine />
        <div className={classes.LoadingWrapper}>
          <LoadingIndicator />
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className={classes.RolesList}>
      <div className={classes.RolesListHeader}>
        <RolesListHeader />
      </div>
      <HorizontalLine />
      <div className={classes.RolesSearchWrapper}>
        <CorporationsInput value={searchText} onChange={setSearchTextHandler} maxLength={maxRoleTitleLength}
        styles={searchTextStyles} placeholder={'Название роли...'}/>
      </div>
      <HorizontalLine />
      <div className={classes.RolesListContent}>
        {/*{roleHeight ? (<RolesListContent*/}
        {/*  roles={filteredRoles} selectedRole={selectedRole}*/}
        {/*  onSelectRole={permissionsSelectRoleAction}*/}
        {/*  onRemoveRole={permissionsRemoveRoleAction}*/}
        {/*  roleHeight={roleHeight}/>) : null}*/}
        {rolesListContentBlock}
      </div>
    </div>
  );
});

export default RolesList;