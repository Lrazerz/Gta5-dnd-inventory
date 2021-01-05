import React, {CSSProperties} from 'react';
import classes from '../../../styles/hud/components/Corporations/CorporationsText.module.scss';

interface Props {
  styles?: CSSProperties;
  children: any;
}

const CorporationsText: React.FC<Props> = React.memo(({styles, children}) => {
  return (
    <div style={styles} className={classes.CorporationsText}>
      {children}
    </div>
  );
});

export default CorporationsText;