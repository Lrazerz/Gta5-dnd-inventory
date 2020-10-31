import React, {CSSProperties} from 'react';
import classes from '../../styles/equippedClosingInventory/ClosingTypeContainer.module.scss';
import ClosingWeaponSquare from "../../components/equippedClosingInventory/ClosingWeaponSquare";
import Octagon from "../../components/equippedClosingInventory/Octagon";
import LeadText from "../../components/layout/LeadText";
import SquareEquippedItem from "./SquareEquippedItem";

interface Props {
  typeTitle: string;
  typeImage: string;
  cells: any[];
  // adjust image of the type
  typeImageWidth? : number;
}

const ClosingTypeContainer: React.FC<Props> =
    React.memo(function ClosingTypeContainer({typeTitle, typeImage, cells, typeImageWidth}) {

  const squaresContent = cells.map(({id,cell}) => {
    let squareContent = null;

    if(cell.item) {
      squareContent = <SquareEquippedItem item={cell.item}/>
    }

    return (
      <div key={id} style={{width: '26%', position: 'relative'}}>
        <Octagon coords={id}>
          <ClosingWeaponSquare coords={id}>
            {squareContent}
          </ClosingWeaponSquare>
        </Octagon>
      </div>
    )
  });

  const imageStyles: CSSProperties = typeImageWidth ? {width: typeImageWidth + '%'} : null;

  const leadTextStyles: CSSProperties = typeTitle.toLowerCase() === 'низ' ? {marginLeft: '-1.5%'} : null;

  return (
    <div className={classes.ClosingTypeContainer}>
      <div className={classes.TitleAndImageContainer}>
        <div className={classes.ImageContainer}>
          <img style={imageStyles} className={classes.Image} src={typeImage}/>
        </div>
        <LeadText styles={leadTextStyles}>
          &nbsp;{typeTitle.toUpperCase()}
        </LeadText>
      </div>
      <div className={classes.Borders}/>
      <div className={classes.SquaresContainer}>
        {squaresContent}
        <div className={classes.Arrow}/>
      </div>
    </div>
  );
});

export default ClosingTypeContainer;