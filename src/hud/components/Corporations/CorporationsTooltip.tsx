import React, {CSSProperties} from 'react';
import classes from '../../../styles/hud/components/Corporations/CorporationsTooltip.module.scss';
import {CorporationsTooltipTypeEnum} from "../../../constants/hud/corporations/corporations";
import CorporationsText from "./CorporationsText";
import {corporationsTheme} from "../../../constants/hud/corporations/corporationsTheme";

interface Props {
  type: CorporationsTooltipTypeEnum;
  message: string;
  width?: string;
  height?: string;
}

const CorporationsTooltip: React.FC<Props> = React.memo((Props) => {

  const getContainerBackground = (color: string) => {
    return `linear-gradient(180deg, ${color} 0% , ${color} 18% ,transparent 18% ,transparent 100%)`;
  }

  let background: string;

  switch(Props.type) {
    case CorporationsTooltipTypeEnum.success: {
      background = corporationsTheme.bg_green
      break;
    }
    case CorporationsTooltipTypeEnum.neutral: {
      background = '#3772F9';
      break;
    }
    case CorporationsTooltipTypeEnum.warning: {
      background = corporationsTheme.bg_orange_picked2
      break;
    }
    case CorporationsTooltipTypeEnum.error: {
      background = corporationsTheme.red
      break;
    }
  }

  const containerStyles: CSSProperties = {
    width: Props.width,
    height: Props.height,
    background: getContainerBackground(background)
  }

  const innerBlockStyles: CSSProperties = {
    backgroundColor: background
  }

  const textStyles: CSSProperties = {
    fontSize: '0.7058rem',
    lineHeight: '0.8824rem',
  }

  return (
    <div style={containerStyles} className={classes.CorporationsTooltip}>
      <div style={innerBlockStyles} className={classes.CorporationsTooltipContent}>
        <CorporationsText styles={textStyles}>
          {Props.message}
        </CorporationsText>
      </div>
    </div>
  );
});

export default CorporationsTooltip;