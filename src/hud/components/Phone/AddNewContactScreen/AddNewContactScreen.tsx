import React, {useEffect, useState} from 'react';
import {useSwipeable} from "react-swipeable";
import {useSelector, useDispatch} from 'react-redux';
import {OpenedScreenEnum, PlayerAvatarsArray} from "../../../models/phone/enums";
import {addNewContactAction, openPrevScreen, openScreen} from "../../../../redux/actions/hud/phone";
import defaultAvatar from '../../../../assets/avatars/avatar1.svg';
import {
  minContactLength,
  phoneLengthWithoutPlus,
  phoneNumberWithPlusRegex
} from "../../../../constants/hud/phone/phone";
import AddNewContactScreenStateless from "./AddNewContactScreenStateless";

export interface ImportedImageInterface {
  title: string;
  image: string;
}

const AddNewContactScreen = () => {
  const [isDropDownOpened, setIsDropDownOpened]: [boolean, any] = useState(false);

  const theme = useSelector(state => state.hud.phone.settings.cosmetics.theme);
  const phoneNumber = useSelector(state => state.hud.phone.addNewContactPhoneNumber);

  const [selectedImage, setSelectedImage]: [ImportedImageInterface, any] =
    useState({title: 'avatar1', image:defaultAvatar});
  // array of images
  const [allImportedImages, setAllImportedImages]: [ImportedImageInterface[],any] = useState([]);

  const [nameText, setNameText]: [string, any] = useState("");
  const [phoneText, setPhoneText]: [string, any] = useState(phoneNumber);

  const dispatch = useDispatch();

  useEffect(() => {
    const importImage = async (imageName) => {
      try {
        const importedImage = await import(`../../../../assets/avatars/${imageName}.svg`);
        // @ts-ignore
        setAllImportedImages(prevArray => {
          return [...prevArray,{title: imageName, image: importedImage.default}];
        });
      } catch (e) {
        if(e.message.startsWith('Cannot find')) {
          console.log(`New contact avatar "${imageName}" import error.`);
        }
      }
    }

    PlayerAvatarsArray.forEach(playerAvatarName => {
      importImage(playerAvatarName);
    });

  }, []);

  const openMainScreen = () => {
    dispatch(openScreen(OpenedScreenEnum.mainScreen));
  }
  // to external lib
  const handlers = useSwipeable({
    onSwipedUp: () => openMainScreen(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const dropDownOpenHandler = (e) => {
    e.stopPropagation();
    setIsDropDownOpened(true);
  }

  const dropDownCloseHandler = () => {
    setIsDropDownOpened(false)
  }

  const nameTextChangeHandler = (e) => {
    setNameText(e.target.value);
  }

  const phoneTextChangeHandler = (e) => {
    setPhoneText(e.target.value);
  }

  const addContactClickHandler = (e) => {
    e.stopPropagation();
    if(!phoneNumberWithPlusRegex.test(phoneText)) {
      console.warn('[forb] phone text does not match regex')
      return;
    }

    if(phoneText.length !== (phoneLengthWithoutPlus + 1)) {

      return;
    }

    if(nameText.length < minContactLength) {
      console.warn('[forb] name length < min length')
      return;
    }
    // get imageName
    dispatch(addNewContactAction({id: '9999', name: nameText, imageName: selectedImage.title, phoneNumber: phoneText}));
    dispatch(openPrevScreen());
  }

  return <AddNewContactScreenStateless allImportedImages={allImportedImages} isDropDownOpened={isDropDownOpened}
                                       selectedImage={selectedImage} nameText={nameText} phoneText={phoneText}
                                       theme={theme} onDropDownOpen={dropDownOpenHandler}
                                       onDropDownClose={dropDownCloseHandler}
                                       onSetSelectedImage={setSelectedImage} onNameTextChange={nameTextChangeHandler}
                                       onPhoneTextChange={phoneTextChangeHandler} onAddContact={addContactClickHandler}
                                       onOpenMainScreen={openMainScreen} handlers={handlers} />
};

export default AddNewContactScreen;