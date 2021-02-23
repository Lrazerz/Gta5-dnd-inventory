import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import classes from '../../../../../styles/hud/components/Corporations/StaffTab/StaffTab/CurrentRoleButton.module.scss';
import CorporationsText from '../../CorporationsText';

interface DimensionsInterface {
  buttonDimensions: string;
  textLeftPadding: string;
  paddingLeft: string;
  paddingRight: string;
}

const initialDimensions = {
  buttonDimensions: '0px',
  textLeftPadding: '0px',
  paddingLeft: '0px',
  paddingRight: '0px',
};

interface Props {
  onRemoveClick: (e: any) => void;
}

const CurrentRoleButton: React.FC<Props> = (props) => {
  const [dimensions, setDimensions]: [DimensionsInterface, (DimensionsInterface) => void] = useState(initialDimensions);

  const containerRef: React.Ref<HTMLDivElement> = useRef();

  useEffect(() => {
    if (containerRef.current) {
      const height: string = window.getComputedStyle(containerRef.current).height;

      const heightNumber: number = +height.match(/(\d|\.)+/)[0];

      const newDimensions: DimensionsInterface = {
        buttonDimensions: heightNumber * 0.5719 + 'px',
        textLeftPadding: heightNumber * 0.2511 + 'px',
        paddingLeft: heightNumber * 0.214 + 'px',
        paddingRight: heightNumber * 0.4815 + 'px',
      };

      setDimensions(newDimensions);
    }
  }, [containerRef.current]);

  const containerStyles: CSSProperties = {
    paddingLeft: dimensions.paddingLeft,
    paddingRight: dimensions.paddingRight,
  };

  const removeButtonStyles: CSSProperties = {
    width: dimensions.buttonDimensions,
    height: dimensions.buttonDimensions,
  };

  const titleStyles: CSSProperties = {
    paddingLeft: dimensions.textLeftPadding,
    fontWeight: 600,
    fontSize: '0.647rem',
    lineHeight: '0.7888rem',
  };

  return (
    <div ref={containerRef} style={containerStyles} className={classes.CurrentRoleButton}>
      <div style={removeButtonStyles} className={classes.RemoveButton} onClick={props.onRemoveClick} />
      <CorporationsText styles={titleStyles}>Новая роль</CorporationsText>
    </div>
  );
};

export default CurrentRoleButton;
