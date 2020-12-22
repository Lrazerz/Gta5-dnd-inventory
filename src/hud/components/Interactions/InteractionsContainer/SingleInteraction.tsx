import React, {useEffect, CSSProperties, useRef, useState} from 'react';
// @ts-ignore
import classes from '../../../../styles/hud/components/Interactions/SingleInteraction.module.scss';

// should receive name (photos pull up by name), enabled to display grayed

// also should receive isReversed (for 2-column grid). 3-column grid has no reverse

// footer and header should be centered.

// when central column of the 3-column grid, should be stretched horizontally

// paddings should be relative to the full container, not in %

interface Dimensions {
  textBlockPadding: string;
  imageContainerWidth: string;
}

interface Props {
  name: string;
  // if false - left picture, right name (text) (only for 2-column grid)
  isReversed: boolean;
  // if true - stretch item horizontaly
  isCentral: boolean;
  Enabled: boolean;
  isAlignedRight?: boolean;

  onPickInteraction: (name: string) => void;
}

const SingleInteraction: React.FC<Props> = React.memo(({name, isReversed, isCentral, Enabled, isAlignedRight = false, onPickInteraction}) => {

  const fullContainerRef = useRef();

  const [dimensions, setDimensions]: [Dimensions, any] = useState();

  useEffect(() => {
    if(fullContainerRef.current) {
      const width: string = window.getComputedStyle(fullContainerRef.current).width;
      // @ts-ignore
      const widthNumber: number = parseFloat(width.match(/^(\d|\.)+/)[0]);

      const textBlockPadding = widthNumber * 0.03;
      // const imageContainerWidth = widthNumber * 0.1626;
      const imageContainerWidth = widthNumber * 0.1326;

      setDimensions({textBlockPadding: textBlockPadding + 'px',
        imageContainerWidth: imageContainerWidth + 'px'});

    }
  }, [fullContainerRef.current]);

  const InteractionNameImageContainerStyles: CSSProperties = {
    flexDirection: isReversed ? 'row-reverse' : 'row',
  }

  //region -------------------- Click handlers --------------------
  const pickInteractionHandler = () => {
    onPickInteraction(name);
  }

  // make different bg
  const hoverInterationHandler = (e) => {
    e.currentTarget.style.backgroundColor = '#ECB958';
    // console.log('e.target style', e.target);
    // e.target.style.backgroundColor = '#ECB958';
    // for(const a in e.target) {
    //   console.log(`${a} : ${e.target[a]}`)
    // }
  }

  const mouseLeaveInteractionHandler = (e) => {
    e.currentTarget.style.backgroundColor = Enabled ? '#fff' : '#aba8a8';
  }
  //endregion

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
      <div style={interactionContentStyles} className={classes.InteractionContent} onClick={pickInteractionHandler}
      onMouseOver={hoverInterationHandler} onMouseLeave={mouseLeaveInteractionHandler}>
        <div style={InteractionNameImageContainerStyles} className={classes.InteractionNameImageContainer}>
          <div style={textWrapperStyles} className={classes.TextContainer}>
            <div className={classes.TextWrapper}>
              {name}
            </div>
          </div>
          <div style={imageContainerStyles} className={classes.ImageContainer}>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SingleInteraction;