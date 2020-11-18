import React from 'react';
import {useSelector} from 'react-redux';
import classes from '../../../../styles/components/Phone/CallContactsChatWrapper/ContactsScreen/ContactsScreen.module.scss';
import SingleContact from "./SingleContact";
import {ThemesEnum} from "../../models/interfaces/enums";

const ContactsScreen = React.memo(() => {

  const {contacts, theme} = useSelector(({phone}) => ({contacts: phone.contacts, theme: phone.settings.cosmetics.theme}));

  const blurredBottomBlockStyles = {
    background: `linear-gradient(180deg, ${theme === ThemesEnum.white ? '#F5F6FC, #D6D6DC' : '#000, #011'})`,
  }

  const contactsBlock = contacts.map(contact => {
    return (
      <div className={classes.SingleContactWrapper}>
        <SingleContact key={contact.id} contact={contact} theme={theme}/>
      </div>
    )
  });

  return (
    <div className={classes.ContactsScreen}>
      <div className={classes.ScrollWrapper}>
        {contactsBlock}
      </div>
      <div className={classes.BlurredBottomBlock} style={blurredBottomBlockStyles}/>
    </div>
  );
});

export default ContactsScreen;