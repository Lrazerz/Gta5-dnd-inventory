import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import InteractionsContainerStateless from './InteractionsContainerStateless';
import { SingleInteractionInterface } from '../../../models/hud/InteractionInterfaces';
import {
  mpTrigger_interactions_closeInteractions,
  mpTrigger_interactions_openInteraction,
} from '../../../utils/mpTriggers/hud/interactions/interactionsTriggers';

interface SortedInteractionsInterface {
  headerInteractions: SingleInteractionInterface[] | null;
  baseInteractions: SingleInteractionInterface[] | null;
  footerInteractions: SingleInteractionInterface[] | null;
}

interface DimensionsInterface {
  crossContainerHeight: number;
  singleInteractionHeight: number;
  interactionsContainerHeight: number;
  interactionsContainerMaxHeight: number;
  columnsCount: number;
  fullContainerWidth: number;
  fullContainerLeft: number;
  fullContainerTop: number;
  // new
  fullContainerHeight: number;
  fullContainerMaxHeight: number;
}

const InteractionsContainer = React.memo(() => {
  const [dimensions, setDimensions]: [DimensionsInterface, any] = useState();

  const [sortedInteractions, setSortedInteractions]: [SortedInteractionsInterface, any] = useState();

  const crossRef = useRef();

  const interactions = useSelector((state) => state.hud.interactionsinteractions);

  //region -------------------- Set up dimensions --------------------
  // will be invoked from func which sort to header,base,footer
  let _getDimensions: (
    headerIntPiecesHeight: number,
    baseIntPiecesHeight: number,
    footerIntPiecesHeight: number,
    columnsCount: number,
  ) => {
    intContHeight: number;
    intContMaxHeight: number;
    singleInteractionHeight: number;
    crossContainerHeight: number;
    fullContainerWidth: number;
    fullContainerLeft: number;
    fullContainerTop: number;
    fullContainerHeight: number;
    fullContainerMaxHeight: number;
  };
  _getDimensions = (headerIntPiecesHeight, baseIntPiecesHeight, footerIntPiecesHeight, columnsCount) => {
    // const fullContainerWidth: number = columnsCount === 3 ?
    //   window.innerWidth * 0.495 : window.innerWidth * 0.33;
    const fullContainerWidth: number = columnsCount === 3 ? window.innerWidth * 0.425 : window.innerWidth * 0.29;

    const intContWidthNumber = fullContainerWidth;

    // height to calc height of the full container
    // const singleInteractionHeight: number = intContWidthNumber * 0.1356;
    // const singleInteractionHeight: number = intContWidthNumber * 0.1156;
    const singleInteractionHeight: number = (intContWidthNumber / columnsCount) * 0.25;
    const headerIntHeight: number = singleInteractionHeight * headerIntPiecesHeight;
    const baseIntHeight: number = singleInteractionHeight * baseIntPiecesHeight;
    const footerIntHeight: number = singleInteractionHeight * footerIntPiecesHeight;
    const crossContainerHeight: number = 0.0798 * intContWidthNumber;

    const intContNewHeight: number = headerIntHeight + baseIntHeight + footerIntHeight;

    const intContMaxHeight: number = singleInteractionHeight * 7;

    const fullContainerHeight: number = headerIntHeight + baseIntHeight + footerIntHeight + crossContainerHeight;

    const fullContainerMaxHeight: number = singleInteractionHeight * 7 + crossContainerHeight;

    const fullContainerLeft: number = window.innerWidth / 2 - fullContainerWidth / 2;

    const fullContainerTop: number = window.innerHeight / 2 - Math.min(fullContainerHeight, fullContainerMaxHeight) / 2;

    return {
      intContHeight: intContNewHeight,
      intContMaxHeight: intContMaxHeight,
      singleInteractionHeight,
      crossContainerHeight,
      //new
      fullContainerWidth,
      fullContainerLeft,
      fullContainerTop,
      fullContainerHeight,
      fullContainerMaxHeight,
    };
  };

  // make cross circle square
  useEffect(() => {
    if (crossRef.current) {
      const width = window.getComputedStyle(crossRef.current).width;
      // @ts-ignore
      crossRef.current.style.height = width;
    }
  }, [crossRef.current]);
  //endregion

  //region -------------------- Sort array and set up dimensions --------------------
  useEffect(() => {
    const interactionsCount = interactions.length;

    if (interactions.length === 0) {
      return;
    }

    //region -------------------- Functions to sort interactions to header, base, footer --------------------
    let _sortInteractions: (interactions: SingleInteractionInterface[]) => SingleInteractionInterface[];
    _sortInteractions = (interactions) => {
      const compareFunction = (a, b) => {
        let result: number;
        if (a.name.length > b.name.length) {
          result = -1;
        } else {
          result = 1;
        }
        return result;
      };
      const newInteractions = [...interactions];

      return newInteractions.sort(compareFunction);
    };

    let _getInteractionsFor2Columns: () => {
      headerInteractions: SingleInteractionInterface[] | [];
      baseInteractions: SingleInteractionInterface[];
      footerInteractions: SingleInteractionInterface[] | [];
    };
    _getInteractionsFor2Columns = () => {
      const headerInteractions = [];
      const baseInteractions = [];
      const footerInteractions = [];

      const sortedInteractions = _sortInteractions(interactions);

      if (interactionsCount <= 2) {
        // only base elements
        const baseElements: SingleInteractionInterface[] | [] = [];

        for (let i = interactionsCount; i > -1; i--) {
          // @ts-ignore
          baseElements.push(sortedInteractions[i]);
        }
        return {
          headerInteractions,
          baseInteractions: baseElements,
          footerInteractions,
        };
      }

      if (!(interactionsCount % 2)) {
        // if even
        if (interactionsCount === 4 || interactionsCount === 8) {
          // if last element - header
          headerInteractions.push(sortedInteractions.pop());
          footerInteractions.push(sortedInteractions.pop());
        } else {
          // if last element - footer
          footerInteractions.push(sortedInteractions.pop());
          headerInteractions.push(sortedInteractions.pop());
        }
      } else {
        // if odd
        if (interactionsCount === 5 || interactionsCount === 9) {
          headerInteractions.push(sortedInteractions.pop());
        } else {
          footerInteractions.push(sortedInteractions.pop());
        }
      }

      //region -------------------- Fill the base --------------------

      const pairsReversedArray = [[]];

      const bElLength = 2;
      let bCurrElLength = 0;

      for (let i = 0; i < sortedInteractions.length; i++) {
        if (bCurrElLength === bElLength) {
          pairsReversedArray.push([sortedInteractions[i]]);
          bCurrElLength = 1;
        } else {
          pairsReversedArray[pairsReversedArray.length - 1].unshift(sortedInteractions[i]);
          bCurrElLength++;
        }
      }

      const newBaseInteractions = [];

      let isAppend = true; // append of prepend next pair
      newBaseInteractions.push(...pairsReversedArray[0]);

      for (let i = 1; i < pairsReversedArray.length; i++) {
        if (isAppend) {
          newBaseInteractions.push(...pairsReversedArray[i]);
          isAppend = false;
        } else {
          newBaseInteractions.unshift(...pairsReversedArray[i]);
          isAppend = true;
        }
      }

      baseInteractions.push(...newBaseInteractions);
      //endregion

      return { headerInteractions, baseInteractions, footerInteractions };
    };

    let _getInteractionsFor3Columns: () => {
      headerInteractions: SingleInteractionInterface[] | [];
      baseInteractions: SingleInteractionInterface[];
      footerInteractions: SingleInteractionInterface[] | [];
    };
    _getInteractionsFor3Columns = () => {
      const headerInteractions = [];
      const baseInteractions = [];
      const footerInteractions = [];

      const sortedInteractions: SingleInteractionInterface[] = _sortInteractions(interactions);

      const basePiecesHeight: number = Math.floor(interactionsCount / 3);

      //region -------------------- Fill up header and footer --------------------
      const remainder: number = interactionsCount % 3;

      switch (remainder) {
        case 2: {
          // header and footer has 1 elements
          if (basePiecesHeight % 2 === 1) {
            // last element in the header
            headerInteractions.push(sortedInteractions.pop());
            footerInteractions.push(sortedInteractions.pop());
          } else {
            footerInteractions.push(sortedInteractions.pop());
            headerInteractions.push(sortedInteractions.pop());
          }
          break;
        }
        case 1: {
          // 1 el in the header or in the footer
          if (basePiecesHeight % 2 === 0) {
            headerInteractions.push(sortedInteractions.pop());
          } else {
            footerInteractions.push(sortedInteractions.pop());
          }
          break;
        }
      }
      //endregion

      //region -------------------- Fill up the base --------------------
      const centralColumn = sortedInteractions.slice(0, sortedInteractions.length / 3);

      const sortedCentralColumn = [centralColumn.shift()];

      let isAppend = true;

      for (let i = 0; i < centralColumn.length; i++) {
        if (isAppend) {
          sortedCentralColumn.push(centralColumn[i]);
          isAppend = false;
        } else {
          sortedCentralColumn.unshift(centralColumn[i]);
          isAppend = true;
        }
      }

      // в intArr сейчас только 2/3 элементов, как раз для крайних столбцов

      // так же разбить по 2 элемента, реверснуть, и циклом отсортировать

      const intArrWithoutCentralColumn = sortedInteractions.splice(sortedInteractions.length / 3);

      // sorted from longest to shortest pairs of 2 columns
      const leftAndRightColumns = [[]];

      const newArrSingleElementLength = 2;
      let currentElementLength = 0;

      for (let i = 0; i < intArrWithoutCentralColumn.length; i++) {
        if (currentElementLength === newArrSingleElementLength) {
          leftAndRightColumns.push([intArrWithoutCentralColumn[i]]);
          currentElementLength = 1;
        } else {
          leftAndRightColumns[leftAndRightColumns.length - 1].unshift(intArrWithoutCentralColumn[i]);
          currentElementLength++;
        }
      }

      isAppend = true;

      const res = [leftAndRightColumns[0]];

      for (let i = 1; i < leftAndRightColumns.length; i++) {
        if (isAppend) {
          res.push(leftAndRightColumns[i]);
          isAppend = false;
        } else {
          res.unshift(leftAndRightColumns[i]);
          isAppend = true;
        }
      }

      // теперь есть 2 массива одинаковой длины, массив с центральным
      for (let i = 0; i < sortedCentralColumn.length; i++) {
        res[i].splice(1, 0, sortedCentralColumn[i]);
      }

      for (let i = 0; i < res.length; i++) {
        baseInteractions.push(...res[i]);
      }
      //endregion

      return {
        footerInteractions,
        baseInteractions,
        headerInteractions,
      };
    };
    //endregion

    let headerInteractions, baseInteractions, footerInteractions, columnsCount;

    if (interactionsCount < 12) {
      const {
        headerInteractions: localHeaderInter,
        baseInteractions: localBaseInter,
        footerInteractions: localFooterInter,
      } = _getInteractionsFor2Columns();
      headerInteractions = localHeaderInter;
      baseInteractions = localBaseInter;
      footerInteractions = localFooterInter;
      columnsCount = 2;
    } else {
      const {
        headerInteractions: localHeaderInter,
        baseInteractions: localBaseInter,
        footerInteractions: localFooterInter,
      } = _getInteractionsFor3Columns();
      headerInteractions = localHeaderInter;
      baseInteractions = localBaseInter;
      footerInteractions = localFooterInter;
      columnsCount = 3;
    }

    const {
      crossContainerHeight,
      singleInteractionHeight,
      intContHeight: interactionsContainerHeight,
      intContMaxHeight: interactionsContainerMaxHeight,
      fullContainerWidth,
      fullContainerLeft,
      fullContainerTop,
      fullContainerHeight,
      fullContainerMaxHeight,
    } = _getDimensions(
      headerInteractions.length,
      Math.floor(baseInteractions.length / columnsCount),
      footerInteractions.length,
      columnsCount,
    );

    setDimensions({
      crossContainerHeight,
      singleInteractionHeight,
      interactionsContainerHeight,
      interactionsContainerMaxHeight,
      columnsCount,
      fullContainerWidth,
      fullContainerLeft,
      fullContainerTop,
      fullContainerHeight,
      fullContainerMaxHeight,
    });

    setSortedInteractions({
      headerInteractions,
      baseInteractions,
      footerInteractions,
    });
  }, [interactions]);
  //endregion

  //region -------------------- Click handlers --------------------
  const closeClickHandler = () => {
    try {
      mpTrigger_interactions_closeInteractions();
    } catch (e) {}
  };

  const pickInteractionHandler = (interactionName: string) => {
    mpTrigger_interactions_openInteraction(interactionName);
  };
  //endregion

  //region -------------------- props for interaction wrapper --------------------
  const dimensionsprops = dimensions && {
    crossContainerHeight: dimensions.crossContainerHeight,
    singleInteractionHeight: dimensions.singleInteractionHeight,
    interactionsContainerHeight: dimensions.interactionsContainerHeight,
    interactionsContainerMaxHeight: dimensions.interactionsContainerMaxHeight,
    columnsCount: dimensions.columnsCount,
    fullContainerWidth: dimensions.fullContainerWidth,
    fullContainerLeft: dimensions.fullContainerLeft,
    fullContainerTop: dimensions.fullContainerTop,
    fullContainerMaxHeight: dimensions.fullContainerMaxHeight,
    fullContainerHeight: dimensions.fullContainerHeight,
  };
  //endregion

  return (
    <InteractionsContainerStateless
      crossRef={crossRef}
      onPickInteraction={pickInteractionHandler}
      onClose={closeClickHandler}
      dimensions={dimensionsprops}
      interactionsArrays={sortedInteractions && sortedInteractions}
    />
  );
});

export default InteractionsContainer;
