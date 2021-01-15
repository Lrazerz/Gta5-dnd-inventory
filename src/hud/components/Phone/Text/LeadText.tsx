import React, {CSSProperties} from 'react';
import {useSelector} from 'react-redux';
import classes from '../../../../styles/hud/components/Phone/Text/LeadText.module.scss';
import {ThemesEnum} from "../../../models/phone/enums";

interface Props {
  children: any;
  styles?: CSSProperties;
  onClick?: (any) => any;
}

const LeadText: React.FC<Props> = React.memo(({styles, children, onClick}) => {

  const theme = useSelector(({hud: {phone}}) => phone.settings.cosmetics.theme);

  const innerStyles: CSSProperties = {
    color: theme === ThemesEnum.black ? '#fff' : '#251152',
  }

  return (
    <div className={classes.LeadText} style={{...innerStyles, ...styles}} onClick={onClick}>
      {children}
    </div>
  );
});

export default LeadText;