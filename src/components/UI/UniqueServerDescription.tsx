import React from 'react';
import classes from "../../styles/UI/UniqueServerDescription.module.scss";
import serverLogo from '../../assets/images/serverLogo/logo.png';
import LeadText from "../../components/layout/LeadText";
import SecondaryText from "../../components/layout/SecondaryText";

const UniqueServerDescription = () => {
  return (
    <div className={classes.UniqueServerDescriptionContainer}>
      <div className={classes.UniqueServerDescription}>
        <div className={classes.LogoContainer}>
          <div className={classes.ImageWrapper}>
            <img className={classes.Image} src={serverLogo}/>
          </div>
        </div>
        <div className={classes.TextContainer}>
          <LeadText styles={{color: '#c4c5c7'}}>
            EVION ROLEPLAY
          </LeadText>
          <SecondaryText styles={{whiteSpace: 'normal'}}>
            <div className={classes.ServerDescriptionText}>
              {'Пример текста\n' +
              'уникального сервера'}
            </div>
          </SecondaryText>
        </div>
      </div>
    </div>
  );
};

export default UniqueServerDescription;