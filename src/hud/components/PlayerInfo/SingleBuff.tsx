import React, {useState, useEffect, useRef} from 'react';
import classes from '../../../styles/hud/components/PlayerInfo/SingleBuff.module.scss';
import {BuffInterface} from "../../models/hudInterfaces";

interface Props {
  buff: BuffInterface;
}

const SingleBuff: React.FC<Props> = React.memo(function Buff({buff}) {
  const [importedImage,setImportedImage] = useState();

  const imageContainerRef = useRef();


  useEffect(() => {
    const getBuffImage = async () => {
      if(buff) {
        let buffImage;
        try {
          buffImage = await import(`../../../assets/hud/images/components/PlayerInfo/buffs/${buff.title}.svg`);
          setImportedImage(buffImage.default);
        } catch (e) {
          console.error('Buff image import error', e);
        }
      }
    }
    getBuffImage();
  }, [buff]);

  // force imageContainer to be square
  useEffect(() => {
    if(imageContainerRef.current) {
      //@ts-ignore
      const width = window.getComputedStyle(imageContainerRef.current).width;
      //@ts-ignore
      imageContainerRef.current.style.height = width;
    }
  }, [imageContainerRef.current]);

  const playerRankBlock = importedImage ?
    (<img src={importedImage} style={{width: '100%', height: '100%'}}/>) : null;

  return (
    <div className={classes.SingleBuff}>
      <div className={classes.BuffImageWrapper} ref={imageContainerRef}>
        {playerRankBlock}
      </div>
      <div className={classes.TimeLeftWrapper}>
        {buff.timeLeft + ' мин'}
      </div>
    </div>
  );
});

export default SingleBuff;