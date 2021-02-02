import React, {CSSProperties} from 'react';
import classes from '../../../../styles/hud/components/common/Pagination/Pagination.module.scss';
import CorporationsText from "../../Corporations/CorporationsText";

type _PaginationPieceType = { type: 'previous', pageNumber: number, isDisabled: boolean }
  | { type: 'next', pageNumber: number, isDisabled: boolean }
  | { type: 'page-number', pageNumber: number }
  | { type: 'ellipsis' }

interface _PaginationOptionsInterface {
  activePage: number;
  isFirst: boolean;
  isLast: boolean;
  hasPrevious: boolean;
  hasNext: boolean;
  visiblePieces: _PaginationPieceType[];
  onGoToPage: (pageNumber: number) => void;
}

interface Props {
  options: _PaginationOptionsInterface;
}

const Pagination: React.FC<Props> = React.memo((Props) => {

  const buttonTextStyles: CSSProperties = {
    lineHeight: '1rem',
    fontSize: '0.9rem'
  }

  const buttonsBlock: JSX.Element[] = Props.options.visiblePieces.map((piece: _PaginationPieceType, i) => {

    let contentBlock: JSX.Element;

    switch(piece.type) {
      case 'previous': {
        if(piece.isDisabled) {
          return null;
        }
        contentBlock = (
          <div className={classes.SingleButton}
               onClick={() => Props.options.onGoToPage(Props.options.activePage - 1)}>
            <CorporationsText styles={buttonTextStyles}>
              {'<'}
            </CorporationsText>
          </div>
        );
        break;
      }
      case 'next': {
        if(piece.isDisabled) {
          return null;
        }
        contentBlock = (
          <div className={classes.SingleButton} onClick={() => Props.options.onGoToPage(Props.options.activePage + 1)}>
            <CorporationsText styles={buttonTextStyles}>
              {'>'}
            </CorporationsText>
          </div>
        );
        break;
      }
      case 'ellipsis': {
        contentBlock = (
          <div className={classes.EllipsisButton}>
            <CorporationsText styles={buttonTextStyles}>
              {'...'}
            </CorporationsText>
          </div>
        );
        break;
      }
      case 'page-number': {
        const activePageStyles: CSSProperties = piece.pageNumber === Props.options.activePage ?
          {
            filter: 'brightness(150%)',
          } : null;

        contentBlock = (
          <div style={activePageStyles} className={classes.SingleButton}
               onClick={() => Props.options.onGoToPage(piece.pageNumber)}>
            <CorporationsText styles={buttonTextStyles}>
              {piece.pageNumber}
            </CorporationsText>
          </div>
        );
        break;
      }
      default: {
        return null;
      }
    }

    return (
      <div className={classes.SingleButtonWrapper} key={i}>
        {contentBlock}
      </div>
    )
  })

  return (
    <div className={classes.Pagination}>
      {buttonsBlock}
    </div>
  );
});

export default Pagination;