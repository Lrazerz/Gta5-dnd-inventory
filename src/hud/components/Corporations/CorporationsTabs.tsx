import React, {CSSProperties} from 'react';
import {CorporationsTabsEnum} from "../../models/corporations/enums";

interface Props {
  dimensions: {
    width: number;
    height: number;
    topGap: number;
    leftGap: number;
  }
  openedTab: CorporationsTabsEnum;
}

const CorporationsTabs: React.FC<Props> = React.memo(() => {

  // в зависимости от openedTab возвращать разный хедэр (отдельный комп)
  // и разный контент скрина

  const containerStyles: CSSProperties = {
    // width
  }

  return (
    <div>

    </div>
  );
});

export default CorporationsTabs;