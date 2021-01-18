import React, {CSSProperties} from 'react';
// @ts-ignore
import classes from '../../../../styles/hud/components/Phone/AddNewContactScreen/AddNewContactScreen.module.scss';
import {ThemesEnum} from "../../../models/phone/enums";
import LeadText from "../Text/LeadText";
import phoneTheme from "../consts/phoneTheme";
import {maxContactLength} from "../../../../constants/hud/phone/phoneConstants";
import ScreenTitleWrapper from "../ScreenTitleWrapper";

interface ImportedImageInterface {
  title: string;
  image: string;
}

interface Props {
  allImportedImages: ImportedImageInterface[];
  isDropDownOpened: boolean;
  selectedImage: ImportedImageInterface;
  nameText: string;
  phoneText: string;
  theme: ThemesEnum;

  onDropDownOpen: (e: any) => void;
  onDropDownClose: () => void;
  onSetSelectedImage: (image: ImportedImageInterface) => void;
  onNameTextChange: (e: any) => void;
  onPhoneTextChange: (e: any) => void;
  onAddContact: (e: any) => void;
  onOpenMainScreen: () => void;

  // to external library
  handlers: any;
}

const AddNewContactScreenStateless: React.FC<Props> = React.memo(
  function AddNewContactScreenStateless ({allImportedImages, isDropDownOpened, selectedImage, nameText,
                                           phoneText, theme, onDropDownOpen, onDropDownClose, onSetSelectedImage,
                                           onNameTextChange, onPhoneTextChange, onAddContact, onOpenMainScreen,
                                           handlers}) {

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
    background: theme === ThemesEnum.black ? _dropDownBlackTheme : _dropDownWhiteTheme,
    borderRadius: '0.5rem',
    filter: 'none',
    // backdropFilter: 'blur(0.5rem)'
  }

  const previewImageStyles: CSSProperties = {
    border:selectedImage ? `0.1rem solid 
    ${theme === ThemesEnum.black ? phoneTheme.lightPurple : 'rgba(148, 150, 157, 0.5)'}` : 'none',
  }

  const addContactTextStyles: CSSProperties = {
    fontSize: '0.7rem',
    color: theme === ThemesEnum.black ? '#fff' : '#251152',
  }

  const nameTextInputStyles: CSSProperties = {
    // backgroundColor: theme === ThemesEnum.white ? 'rgba(134, 132, 138, 0.2)' : 'rgba(134, 132, 138, 0.2)',
    backgroundColor: 'transparent',
    color: theme === ThemesEnum.black ? '#fff' : phoneTheme.darkPurple,
  }

  const avatarChooseButtonBlock = (
    <div className={classes.AvatarChooseButtonWrapper} onClick={onDropDownOpen}>
      <LeadText styles={chooseAvatarTextStyles}>
        Выбрать аватар
      </LeadText>
    </div>
  )

  const imagesBlock = allImportedImages.map((image,i) => {
    return (
      <div className={classes.ImageWrapper} onClick={() => onSetSelectedImage(image)} key={i}>
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

  return (
    <div className={classes.AddNewContactScreen} {...handlers} onClick={onDropDownClose}>
      <div style={blurScreenStyles}/>
      {/*<div className={classes.ScreenTitleWrapper}>*/}
      {/*  <LeadText styles={screenTitleTextStyles}>*/}
      {/*    Добавить контакт*/}
      {/*  </LeadText>*/}
      {/*</div>*/}
      {/*<div className={classes.HorizontalLine} style={horizontalLineStyles}/>*/}
      <ScreenTitleWrapper theme={theme} titleText={"Добавить контакт"} onBackButtonPress={onOpenMainScreen} />
      <div className={classes.AvatarPreviewContainer}>
        <div className={classes.AvatarPreviewWrapper}>
          <img src={selectedImage.image} className={classes.PreviewImage} style={previewImageStyles}
               onClick={onDropDownOpen} onMouseDown={(e) => e.stopPropagation()}/>
        </div>
      </div>
      <div className={classes.AvatarChooseButtonContainer}>
        {avatarChooseBlock}
      </div>
      <div className={classes.HorizontalLine} style={horizontalLineStyles}/>
      <div className={classes.NameContainer}>
        <input type={"text"} value={nameText} onChange={onNameTextChange}
               maxLength={maxContactLength} style={nameTextInputStyles}
               className={classes.NameText} size={30} placeholder={"Имя"}/>
      </div>
      <div className={classes.HorizontalLine} style={horizontalLineStyles}/>
      <div className={classes.PhoneNumberContainer}>
        <input type={"text"} value={phoneText} onChange={onPhoneTextChange}
               maxLength={12} size={30} style={nameTextInputStyles}
               className={classes.PhoneText} placeholder={"Номер телефона"}/>
      </div>
      <div className={classes.HorizontalLine} style={horizontalLineStyles}/>
      <div className={classes.AddContactButtonContainer}>
        <div className={classes.AddContactButton} onClick={onAddContact}>
          <LeadText styles={addContactTextStyles}>
            Добавить контакт
          </LeadText>
        </div>
      </div>
    </div>
  );
});

export default AddNewContactScreenStateless;