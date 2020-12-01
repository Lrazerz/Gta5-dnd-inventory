import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
// @ts-ignore
import classes from '../../../../styles/hud/components/Phone/AddNewContactScreen/AddNewContactScreen.module.scss';
import {PlayerAvatarsArray, ThemesEnum} from "../models/interfaces/enums";

const AddNewContactScreen = () => {
  const [selectedImage, setSelectedImage] = useState();
  // array of images
  const [allImportedImages, setAllImportedImages] = useState();

  const theme = useSelector(({hud: {phone}}) => phone.settings.cosmetics.theme);

  useEffect(() => {
    const importImage = async (imageName) => {
      try {
        const importedThemeImage = await import(`../../../../assets/avatars/${imageName}.svg`);
        // @ts-ignore
        setAllImportedImages(prevArray => prevArray.push(importedThemeImage.default));
      } catch (e) {
        if(e.message.startsWith('Cannot find')) {
          console.log(`New contact avatar "${imageName}" import error.`);
        }
      }
    }

    // for(const key in PlayerAvatarsEnum) {
    //   console.log('key',key, typeof key);
    // }
  }, []);

  return (
    <div className={classes.AddNewContactScreen}>

    </div>
  );
};

export default AddNewContactScreen;