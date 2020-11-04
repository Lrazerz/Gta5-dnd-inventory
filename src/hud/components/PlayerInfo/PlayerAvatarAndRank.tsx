import React, {useState, useRef, useEffect} from 'react';
import classes from '../../styles/components/PlayerInfo/PlayerAvatarAndRank.module.scss';

interface Props {
  avatarName: string;
  rankTitle: string;
}

const PlayerAvatarAndRank: React.FC<Props> = React.memo(({avatarName, rankTitle}) => {
  const [importedAvatarImage, setImportedAvatarImage] = useState();
  const [importedRankImage, setImportedRankImage] = useState();

  const imageContainerRef = useRef();

  // dynamic import rank and avatar images
  useEffect(() => {
    const getRankImage = async () => {
      if(rankTitle) {
        let rankImage;
        try {
          rankImage = await import(`../../assets/images/components/PlayerInfo/levels/${rankTitle}.svg`);
          setImportedRankImage(rankImage.default);
        } catch (e) {
          console.error('Rank import error', e);
        }
      }
      if(avatarName) {
        let avatarImage;
        try {
          avatarImage = await import(`../../assets/images/components/PlayerInfo/avatars/${avatarName}.svg`);
          setImportedAvatarImage(avatarImage.default);
        } catch (e) {
          console.error('Avatar import error', e);
        }
      }
    }
    getRankImage();

  },[avatarName, rankTitle]);

  // force imageContainer to be square
  useEffect(() => {
    if(imageContainerRef.current) {
      //@ts-ignore
      const width = window.getComputedStyle(imageContainerRef.current).width;
      //@ts-ignore
      imageContainerRef.current.style.height = width;
    }
  }, [imageContainerRef.current]);

  const playerRankBlock = importedRankImage ?
    (<img src={importedRankImage}/>) : null;
  const playerAvatarBlock = importedAvatarImage ?
    (<img src={importedAvatarImage}/>) : null;

  return (
    <div className={classes.PlayerAvatarAndRank}>
      <div className={classes.PlayerAvatarWrapper} ref={imageContainerRef}>
        {playerAvatarBlock}
        <div className={classes.PlayerAvatarRoundedBorder}/>
      </div>
      <div className={classes.PlayerRankWrapper}>
        <div className={classes.PlayerRank}>
          {playerRankBlock}
        </div>
      </div>
    </div>
  );
});

export default PlayerAvatarAndRank;