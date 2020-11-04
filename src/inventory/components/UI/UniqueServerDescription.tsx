import React, {CSSProperties, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classes from "../../styles/UI/UniqueServerDescription.module.scss";
import serverLogo from '../../assets/images/serverLogo/logo.png';
import LeadText from "../../components/layout/LeadText";
import SecondaryText from "../../components/layout/SecondaryText";
import {setGoingToDrop} from "../../redux/actions/draggedItem";

const UniqueServerDescription = React.memo(function UniqueServerDescription() {
  const dispatch = useDispatch();
  const {goingToDrop, item: draggedItem} = useSelector(state => state.draggedItem);
  const goingToDropRef = useRef();
  const draggedItemRef = useRef();
  goingToDropRef.current = goingToDrop;
  draggedItemRef.current = draggedItem;

  const mouseOverHandler = e => {
    if (draggedItemRef.current && !goingToDropRef.current) {
      dispatch(setGoingToDrop(true));
      e.stopPropagation();
    }
  }

  // allow to be BackDrop
  const styles: CSSProperties = {
    pointerEvents: goingToDrop ? 'none' : 'inherit',
    zIndex: goingToDrop ? 'auto' : 200,
    // backgroundColor: goingToDrop ? 'red' : 'transparent',
  }

  return (
    <div className={classes.UniqueServerDescriptionContainer} style={styles} onMouseOver={mouseOverHandler}>
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
              {/*{'Пример текста\n' +*/}
              {/*'уникального сервера'}*/}
            </div>
          </SecondaryText>
        </div>
      </div>
    </div>
  );
});

export default UniqueServerDescription;