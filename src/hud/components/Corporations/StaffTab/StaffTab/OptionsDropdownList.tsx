import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import classes from '../../../../../styles/hud/components/Corporations/StaffTab/StaffTab/OptionsDropdownList.module.scss';
import CorporationsText from '../../CorporationsText';
import HorizontalLine from '../../HorizontalLine';

interface Props {
  roles: string[];
  onSelect: (string) => void;
}

const OptionsDropdownList: React.FC<Props> = React.memo((props) => {
  const containerRef: React.Ref<HTMLDivElement> = useRef();
  const [isContainerDimensionsSetted, setIsContainerDimensionsSetted] = useState(false);

  // change container width (can't set paddings directly, wrong react.js calculation)
  useEffect(() => {
    if (containerRef.current && !isContainerDimensionsSetted) {
      const width: string = window.getComputedStyle(containerRef.current).width;

      const widthNumber: number = +width.match(/(\.|\d)+/)[0];

      containerRef.current.style.width = widthNumber * 1.5 + 'px';

      setIsContainerDimensionsSetted(true);
    }
  }, [containerRef.current]);

  const roleTitleStyles: CSSProperties = {
    fontWeight: 600,
    fontSize: '0.7059rem',
    lineHeight: '0.8606rem',
    marginTop: '0.4353rem',
    marginBottom: '0.4353rem',
    textAlign: 'center',
  };

  const horizontalLineStyles: CSSProperties = {
    backgroundColor: '#4F5462',
  };

  const rolesBlock: JSX.Element[] = props.roles.map((role, i) => (
    <div className={classes.OptionWrapper} onClick={() => props.onSelect(role)} key={role}>
      <CorporationsText styles={roleTitleStyles}>{role}</CorporationsText>
      {i !== props.roles.length - 1 && <HorizontalLine styles={horizontalLineStyles} />}
    </div>
  ));

  return (
    <div ref={containerRef} className={classes.OptionsDropdownList}>
      {rolesBlock}
    </div>
  );
});

export default OptionsDropdownList;
