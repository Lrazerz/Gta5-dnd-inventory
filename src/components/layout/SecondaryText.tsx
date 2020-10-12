import React, {CSSProperties} from 'react';
import classes from '../../styles/layout/SecondaryText.module.scss';

interface Props {
  styles?: CSSProperties;
}

const SecondaryText: React.FC<Props> = React.memo(function SecondaryText({children, styles={}}) {
  return (
    <div className={classes.SecondaryText} style={styles}>
      {children}
    </div>
  );
});

export default SecondaryText;