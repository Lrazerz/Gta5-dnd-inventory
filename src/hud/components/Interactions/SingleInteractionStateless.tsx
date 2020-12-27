import React, {CSSProperties, Ref} from 'react';
// @ts-ignore
import classes from '../../../styles/hud/components/Interactions/SingleInteraction.module.scss';
import {DimensionsInterface} from "./SingleInteraction";

interface Props {
  // if true - stretch item horizontaly
  isCentral: boolean;
  Enabled: boolean;
  isAlignedRight?: boolean;
  onPickInteraction: (name: string) => void;

  dimensions: DimensionsInterface;
  // if false - left picture, right name (text) (only for 2-column grid)
  isReversed: boolean;

  interactionName: string;
  interactionImage: string;

  onClick: () => void;
  onMouseOver: (e: any) => void;
  onMouseLeave: (e: any) => void;

  fullContainerRef: Ref<any>;
}

const SingleInteractionStateless: React.FC<Props> = React.memo(({isCentral, Enabled, isAlignedRight = false,
                                        onPickInteraction, dimensions, isReversed, interactionName,
                                        interactionImage, onClick, onMouseOver, onMouseLeave,
                                                                  fullContainerRef}) => {

  const InteractionNameImageContainerStyles: CSSProperties = {
    flexDirection: isReversed ? 'row-reverse' : 'row',
  }

  //region -------------------- Styles --------------------
  const fullContainerStyles: CSSProperties = dimensions && {
    justifyContent: isAlignedRight ? 'flex-end' : 'flex-start',
  }

  const interactionContentStyles: CSSProperties = dimensions && {
    width: isCentral ? '100%' : 'auto',
    justifyContent: 'center',
    backgroundColor: Enabled ? '#fff' : '#aba8a8',
  }

  const imageContainerStyles: CSSProperties = dimensions && {
    width: dimensions.imageContainerWidth,
    minWidth: dimensions.imageContainerWidth,
    maxWidth: dimensions.imageContainerWidth,
  }

  const textWrapperStyles: CSSProperties = dimensions && {
    padding: dimensions.textBlockPadding,
  }
  //endregion

  return (
    <div style={fullContainerStyles} className={classes.SingleInteraction} ref={fullContainerRef}>
      <div style={interactionContentStyles} className={classes.InteractionContent} onClick={onClick}
           onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
        <div style={InteractionNameImageContainerStyles} className={classes.InteractionNameImageContainer}>
          <div style={textWrapperStyles} className={classes.TextContainer}>
            <div className={classes.TextWrapper}>
              {interactionName}
            </div>
          </div>
          <div style={imageContainerStyles} className={classes.ImageContainer}>
            <img width='100%' height='100%' src={interactionImage}/>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SingleInteractionStateless;