import React, {useEffect, useRef, useState} from 'react';
import SingleInteractionStateless from "./SingleInteractionStateless";

export interface DimensionsInterface {
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

  const [dimensions, setDimensions]: [DimensionsInterface, any] = useState();
  const [importedInteractionImage, setImportedInteractionImage] = useState();

  useEffect(() => {
    let isCanceled = false;

    const loadThemeImage = async () => {
      if (name) {
        let importedThemeImage;
        try {
          importedThemeImage = await import(`../../../assets/hud/images/components/Interactions/${name.toLowerCase()}.svg`);
          if(!isCanceled) {
            setImportedInteractionImage(importedThemeImage.default);
          }
        } catch (e) {
          if(e.message.startsWith('Cannot find')) {
            console.log(`Interaction image "${name}" import error, using default interaction image`);
            let defaultInteractionName = 'default-interaction';
            importedThemeImage = await import(`../../../assets/hud/images/components/Interactions/${defaultInteractionName}.svg`);
            if(!isCanceled) {
              setImportedInteractionImage(importedThemeImage.default);
            }
          }
        }
      }
    }
    loadThemeImage();

    return () => {
      isCanceled = true;
    };

  }, [name]);

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

  //region -------------------- Click handlers --------------------
  const pickInteractionHandler = () => {
    onPickInteraction(name);
  }

  // make different bg
  const hoverInterationHandler = (e) => {
    e.currentTarget.style.backgroundColor = '#ECB958';
  }

  const mouseLeaveInteractionHandler = (e) => {
    e.currentTarget.style.backgroundColor = Enabled ? '#fff' : '#aba8a8';
  }
  //endregion

  return <SingleInteractionStateless isCentral={isCentral} Enabled={Enabled} onPickInteraction={pickInteractionHandler}
                                     dimensions={dimensions} isReversed={isReversed} interactionName={name}
                                     interactionImage={importedInteractionImage} onClick={pickInteractionHandler}
                                     onMouseOver={hoverInterationHandler} onMouseLeave={mouseLeaveInteractionHandler}
                                     fullContainerRef={fullContainerRef} />
});

export default SingleInteraction;