import React, { CSSProperties, ReactElement, Ref } from 'react';
// @ts-ignore
import classes from '../../../styles/hud/components/Interactions/InteractionsWrapper.module.scss';
import { SingleInteractionInterface } from '../../../models/hud/InteractionInterfaces';
import SingleInteraction from './SingleInteraction';

interface Props {
  crossRef: Ref<any>;
  onClose: () => void;
  onPickInteraction: (interaction: SingleInteractionInterface) => void;

  dimensions: {
    crossContainerHeight: number;

    singleInteractionHeight: number;
    interactionsContainerHeight: number;
    interactionsContainerMaxHeight: number;
    columnsCount: number;
    // new props
    fullContainerWidth: number;
    fullContainerLeft: number;
    fullContainerTop: number;
    fullContainerHeight: number;
    fullContainerMaxHeight: number;
  };

  interactionsArrays: {
    headerInteractions: SingleInteractionInterface[] | null;
    footerInteractions: SingleInteractionInterface[] | null;

    baseInteractions: SingleInteractionInterface[] | null;
  };
}

const InteractionsContainerStateless: React.FC<Props> = React.memo(
  ({ crossRef, onClose, onPickInteraction, dimensions, interactionsArrays }) => {
    console.log('interactionsArrays', interactionsArrays);
    // в зависимости от flexColumnsCount считать ширину айттемов внутри контейнера
    // header, base, footer
    // высота хэдера и футера либо 0 либо singleInteractionHeight

    //region -------------------- Styles --------------------
    const fullContainerStyles: CSSProperties = dimensions && {
      width: dimensions.fullContainerWidth,
      left: dimensions.fullContainerLeft,
      top: dimensions.fullContainerTop,
      height: dimensions.fullContainerHeight,
      maxHeight: dimensions.fullContainerMaxHeight,
    };

    const crossContainerStyles: CSSProperties = dimensions && {
      minHeight: dimensions.crossContainerHeight + 'px',
      height: dimensions.crossContainerHeight + 'px',
      maxHeight: dimensions.crossContainerHeight + 'px',
    };

    const scrollWrapperStyles: CSSProperties = dimensions && {
      maxHeight: dimensions.interactionsContainerMaxHeight,
      overflowY: 'auto',
    };

    const interactionsContainerStyles: CSSProperties = dimensions && {
      height: dimensions.interactionsContainerHeight + 'px',
    };

    const headerBlockStyles: CSSProperties = dimensions && {
      minHeight: dimensions.singleInteractionHeight + 'px',
      height: dimensions.singleInteractionHeight + 'px',
      maxHeight: dimensions.singleInteractionHeight + 'px',
    };

    const baseSingleInteractionStyles: CSSProperties = dimensions && {
      width: 100 / dimensions.columnsCount + '%',
      minHeight: dimensions.singleInteractionHeight + 'px',
      height: dimensions.singleInteractionHeight + 'px',
      maxHeight: dimensions.singleInteractionHeight + 'px',
    };

    const footerBlockStyles: CSSProperties = dimensions && {
      minHeight: dimensions.singleInteractionHeight + 'px',
      height: dimensions.singleInteractionHeight + 'px',
      maxHeight: dimensions.singleInteractionHeight + 'px',
    };
    //endregion

    //region -------------------- JSX Blocks --------------------
    const headerInteractionsBlock = dimensions && interactionsArrays.headerInteractions.length > 0 && (
      <div style={headerBlockStyles} className={classes.Header}>
        <div style={baseSingleInteractionStyles} className={classes.BaseSingleInteractionWrapper}>
          <SingleInteraction
            name={interactionsArrays.headerInteractions[0].name}
            isReversed={false}
            isCentral={true}
            onPickInteraction={onPickInteraction}
            Enabled={interactionsArrays.headerInteractions[0].enabled}
          />
        </div>
      </div>
    );

    // высота блока будет flex-grow: 1;
    const baseInteractionsBlock = dimensions && interactionsArrays.baseInteractions.length > 0 && (
      <div className={classes.Base}>
        {interactionsArrays.baseInteractions.map((interaction, i) => {
          const isElLastInTheRow: boolean = dimensions.columnsCount === 2 ? (i + 1) % 2 === 0 : false;
          const isCentral: boolean = dimensions.columnsCount === 3 ? (i + 1) % 3 === 2 : false;

          // only for 3-column grid
          const isAlignedRight: boolean = (i + 1) % dimensions.columnsCount === 1;
          console.log('alignedRIght', isAlignedRight);

          return (
            <div
              key={interaction.name}
              style={baseSingleInteractionStyles}
              className={classes.BaseSingleInteractionWrapper}
            >
              <SingleInteraction
                name={interaction.name}
                isCentral={isCentral}
                isAlignedRight={isAlignedRight}
                onPickInteraction={onPickInteraction}
                isReversed={isElLastInTheRow}
                Enabled={interaction.enabled}
              />
            </div>
          );
        })}
      </div>
    );

    const footerInteractionsBlock = dimensions && interactionsArrays.footerInteractions.length > 0 && (
      <div style={footerBlockStyles} className={classes.Footer}>
        <div style={baseSingleInteractionStyles} className={classes.BaseSingleInteractionWrapper}>
          <SingleInteraction
            name={interactionsArrays.footerInteractions[0].name}
            isReversed={false}
            isCentral={true}
            onPickInteraction={onPickInteraction}
            Enabled={interactionsArrays.footerInteractions[0].enabled}
          />
        </div>
      </div>
    );
    //endregion

    console.log('baseInteractionsBlock', baseInteractionsBlock, dimensions);
    return (
      <div style={fullContainerStyles} className={classes.Interactions} onClick={(e) => e.stopPropagation()}>
        <div className={classes.CrossContainer} style={crossContainerStyles}>
          <div ref={crossRef} className={classes.Cross} onClick={onClose}>
            <div className={classes.FirstLine}></div>
          </div>
        </div>
        <div style={scrollWrapperStyles} className={classes.ScrollWrapper}>
          <div style={interactionsContainerStyles} className={classes.InteractionsContainer}>
            {headerInteractionsBlock}
            {baseInteractionsBlock}
            {footerInteractionsBlock}
          </div>
        </div>
      </div>
    );
  },
);

export default InteractionsContainerStateless;
