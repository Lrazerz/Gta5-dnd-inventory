import React, {CSSProperties} from 'react';
import classes from '../../styles/layout/LeadText.module.scss';

interface Props {
  styles?: CSSProperties;
}

const LeadText: React.FC<Props> = React.memo(function LeadText({children, styles={}}) {
  return (
    <div className={classes.LeadText} style={styles}>
      {children}
    </div>
  );
});

export default LeadText;