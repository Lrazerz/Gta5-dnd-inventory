import React, {CSSProperties, useEffect, useState} from 'react';
import {useSwipeable} from "react-swipeable";
import {useSelector, useDispatch} from 'react-redux';
// @ts-ignore
import classes from '../../../../styles/hud/components/Phone/AddNewContactScreen/AddNewContactScreen.module.scss';
import {OpenedScreenEnum, PlayerAvatarsArray, ThemesEnum} from "../models/interfaces/enums";
import {addNewContactAction, openPrevScreen, openScreen} from "../../../../redux/actions/hud/phone";
import LeadText from "../Text/LeadText";
import phoneTheme from "../consts/phoneTheme";
import defaultAvatar from '../../../../assets/avatars/avatar1.svg';
import {maxContactLength, minContactLength} from "../../../../constants/hud/constants";

interface ImportedImageInterface {
  title: string;
  image: string;
}

const AddNewContactScreen = () => {
  const [isDropDownOpened, setIsDropDownOpened]: [boolean, any] = useState(false);

  const {theme, phoneNumber} = useSelector(({hud: {phone}}) =>
    ({theme:phone.settings.cosmetics.theme, phoneNumber: phone.addNewContactPhoneNumber}));

  const [selectedImage, setSelectedImage]: [ImportedImageInterface, any] =
    useState({title: 'avatar1', image:defaultAvatar});
  // array of images
  const [allImportedImages, setAllImportedImages]: [ImportedImageInterface[],any] = useState([]);

  const [nameText, setNameText] = useState("");
  const [phoneText, setPhoneText] = useState(phoneNumber);

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

    // for(const key in PlayerAvatarsEnum) {
    //   console.log('key',key, typeof key);
    // }
  }, []);

  //region -------------------- Swipe handlers --------------------
  const swipeHandler = () => {
    dispatch(openScreen(OpenedScreenEnum.mainScreen));
  }
  // to external lib
  const handlers = useSwipeable({
    onSwipedUp: () => swipeHandler(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  //endregion

  //region -------------------- Button click handlers--------------------
  const dropDownOpenHandler = (e) => {
    e.stopPropagation();
    setIsDropDownOpened(true);
  }

  const closeDropDownHandler = () => {
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
    const numberRegex = /^\+\d+$/;
    if(!numberRegex.test(phoneText)) return;
    if(phoneText.length !== 12) return;
    if(nameText.length < minContactLength) return;
    // get imageName
    dispatch(addNewContactAction({id: '9999', name: nameText, imageName: selectedImage.title, phoneNumber: phoneText}));
    dispatch(openPrevScreen());
  }
  //endregion

  //region ------------------------------ Styles ------------------------------
  // absolute positioned to blur
  const blurScreenStyles: CSSProperties = {
    display: isDropDownOpened ? 'block' : 'none',
    width: '100%',
    height: '100%',
    position: "absolute",
    // backgroundColor: isDropDownOpened ? 'rgba(255,255,255,0.1 )' : 'transparent',
    backdropFilter: isDropDownOpened ? 'blur(0.4rem)' : 'none',
  }

  const screenTitleTextStyles: CSSProperties = {
    fontSize: '0.7rem',
    color: theme === ThemesEnum.black ? '#fff' : '#251152',
  }

  const horizontalLineStyles: CSSProperties = {
    backgroundColor: theme === ThemesEnum.black ? '#5422b0' : '#DAD8E6',
  }

  const chooseAvatarTextStyles: CSSProperties = {
    fontSize: '0.6rem',
    color: theme === ThemesEnum.black ? '#fff' : '#251152',
  }

  const _dropDownWhiteTheme = 'linear-gradient(180deg, rgba(220, 220, 220,0.8), rgba(205, 205, 205,0.8))';

  const _dropDownBlackTheme = 'linear-gradient(180deg, rgba(81, 31, 194,0.8), rgba(54, 17, 138,0.8))';

  const dropDownContainerStyles: CSSProperties = {
    background: theme === ThemesEnum.white ? _dropDownWhiteTheme : _dropDownBlackTheme,
    borderRadius: '0.5rem',
    filter: 'none',
    // backdropFilter: 'blur(0.5rem)'
  }

  const previewImageStyles: CSSProperties = {
    border:selectedImage ? `0.1rem solid 
    ${theme === ThemesEnum.white ? 'rgba(148, 150, 157, 0.5)' : phoneTheme.lightPurple}` : 'none',
  }

  const addContactTextStyles: CSSProperties = {
    fontSize: '0.7rem',
    color: theme === ThemesEnum.black ? '#fff' : '#251152',
  }

  const nameTextInputStyles: CSSProperties = {
    // backgroundColor: theme === ThemesEnum.white ? 'rgba(134, 132, 138, 0.2)' : 'rgba(134, 132, 138, 0.2)',
    backgroundColor: 'transparent',
    color: theme === ThemesEnum.white ? phoneTheme.darkPurple : '#fff',
  }
  //endregion

  //region -------------------- JSX blocks --------------------
  const avatarChooseButtonBlock = (
    <div className={classes.AvatarChooseButtonWrapper} onClick={dropDownOpenHandler}>
      <LeadText styles={chooseAvatarTextStyles}>
        Выбрать аватар
      </LeadText>
    </div>
  )

  const imagesBlock = allImportedImages.map((image,i) => {
    return (
      <div className={classes.ImageWrapper} onClick={() => setSelectedImage(image)} key={i}>
        <img src={image.image} className={classes.Image}/>
      </div>
    )
  })

  const dropDownBlock = (
    <div className={classes.DropDownContainer} style={dropDownContainerStyles}>
      <div className={classes.ImagesGridWrapper}>
        {imagesBlock}
      </div>
    </div>
  )

  const avatarChooseBlock = isDropDownOpened ?
    dropDownBlock
    : avatarChooseButtonBlock;
  //endregion

  return (
    <div className={classes.AddNewContactScreen} {...handlers} onClick={closeDropDownHandler}>
      <div style={blurScreenStyles}/>
      <div className={classes.ScreenTitleWrapper}>
        <LeadText styles={screenTitleTextStyles}>
          Добавить контакт
        </LeadText>
      </div>
      <div className={classes.HorizontalLine} style={horizontalLineStyles}/>
      <div className={classes.AvatarPreviewContainer}>
        <div className={classes.AvatarPreviewWrapper}>
          <img src={selectedImage.image} className={classes.PreviewImage} style={previewImageStyles}
          onClick={dropDownOpenHandler} onDragStart={e => e.preventDefault()} onMouseDown={(e) => e.stopPropagation()}/>
        </div>
      </div>
      <div className={classes.AvatarChooseButtonContainer}>
        {avatarChooseBlock}
      </div>
      <div className={classes.HorizontalLine} style={horizontalLineStyles}/>
      <div className={classes.NameContainer}>
        <input type={"text"} value={nameText} onChange={nameTextChangeHandler}
        maxLength={maxContactLength} style={nameTextInputStyles}
               className={classes.NameText} size={30} placeholder={"Имя"}/>
      </div>
      <div className={classes.HorizontalLine} style={horizontalLineStyles}/>
      <div className={classes.PhoneNumberContainer}>
        <input type={"text"} value={phoneText} onChange={phoneTextChangeHandler}
               maxLength={12} size={30} style={nameTextInputStyles}
               className={classes.PhoneText} placeholder={"Номер телефона"}/>
      </div>
      <div className={classes.HorizontalLine} style={horizontalLineStyles}/>
      <div className={classes.AddContactButtonContainer}>
        <div className={classes.AddContactButton} onClick={addContactClickHandler}>
          <LeadText styles={addContactTextStyles}>
            Добавить контакт
          </LeadText>
        </div>
      </div>
    </div>
  );
};

export default AddNewContactScreen;