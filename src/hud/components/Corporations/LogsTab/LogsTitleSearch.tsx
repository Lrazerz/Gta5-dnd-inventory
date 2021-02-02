import React, {CSSProperties, useState} from 'react';
import classes from '../../../../styles/hud/components/Corporations/LogsTab/LogsTitleSearch.module.scss';
import CorporationsText from "../CorporationsText";
import CorporationsInput from "../CorporationsInput";
import HorizontalLine from "../HorizontalLine";
import {corporationsTheme} from "../consts/corporationsTheme";
import CorporationsDropdown from "../CorporationsDropdown";
import {
  LogsSearchByDict,
  LogsSearchByEnumEng,
  LogsSearchByRussian
} from "../../../models/corporations/tabs/logs/logsEnums";
import {mpTrigger_corporations_logs_setFilter} from "../../../../utils/mpTriggers/hud/corporations/tabs/logs/logsTriggers";

interface Props {
  isLoading: boolean;
}

const LogsTitleSearch: React.FC<Props> = React.memo((Props) => {

  const [searchText, setSearchText]: [string, (string) => void] = useState('');

  const [searchByFilter, setSearchByFilter] : [string, (string) => void] = useState(LogsSearchByDict[LogsSearchByEnumEng[0]]);

  // изменяется ток когда изменяется стейт
  const [potentialsSearchBy, setPotentialsSearchBy]: [string[], (any) => void]
    = useState(LogsSearchByRussian.filter(item => item !== searchByFilter));

  const searchByPickHandler = (value) => {
    setSearchByFilter(value);
    setPotentialsSearchBy(LogsSearchByRussian.filter(item => item !== value));
  }

  const sendSearchFilter = () => {
    let endSearchBy: LogsSearchByEnumEng;
    for(const dictKey in LogsSearchByDict) {
      if(LogsSearchByDict[dictKey] === searchByFilter) {
        for(const enumEngKey in LogsSearchByEnumEng) {
          if(LogsSearchByEnumEng[enumEngKey] === dictKey) {
            // @ts-ignore
            endSearchBy = LogsSearchByEnumEng[enumEngKey];
            break;
          }
        }
        break;
      }
    }
    mpTrigger_corporations_logs_setFilter(endSearchBy, searchText);
  }

  const searchKeyDownHandler = (e) => {
    if(e.key.toLowerCase() === 'enter') {
      sendSearchFilter();
    }
  }

  const searchBlurHandler = () => {
    sendSearchFilter();
  }

  const titleTextStyles: CSSProperties = {
    lineHeight: '1.79rem',
    fontSize: '1.47rem',
    fontWeight: 600,
    color: '#fff',
    marginRight: '2.41%',
  }

  const searchInputContainerStyles: CSSProperties = {
    padding: 0,
  }

  const searchTextInputStyles: CSSProperties = {
    lineHeight: '0.86rem',
    fontSize: '0.7rem',
    color: '#fff',
  }

  const searchByTitleStyles: CSSProperties = {
    lineHeight: '0.86rem',
    fontSize: '0.7rem',
    color: '#6F7070',
  }

  const searchByDropdownStyles: CSSProperties = {
    padding: '4% 8%',
    position: 'relative',
  }

  const horizontalLineStyles: CSSProperties = {
    backgroundColor: corporationsTheme.delimiter_darkGray
  }

  return (
    <div className={classes.LogsTitleSearch}>
      <CorporationsText styles={titleTextStyles}>
        Журнал действий
      </CorporationsText>
      <div className={classes.SearchWrapper}>
        <div className={classes.SearchInputWrapper} onKeyDown={searchKeyDownHandler} onBlur={searchBlurHandler}>
          <CorporationsInput value={searchText} onChange={setSearchText} styles={searchInputContainerStyles}
                             isDisabled={Props.isLoading} textInputStyles={searchTextInputStyles}/>
        </div>
        <HorizontalLine styles={horizontalLineStyles}/>
      </div>
      <div className={classes.SearchByWrapper}>
        <div className={classes.SearchByTitleAndDropdown}>
          <div className={classes.SearchByTitle}>
            <CorporationsText styles={searchByTitleStyles}>
              Поиск по
            </CorporationsText>
          </div>
          <div className={classes.SearchByDropdownContainer}>
            <CorporationsDropdown selectedItem={searchByFilter} list={potentialsSearchBy} onSelect={searchByPickHandler}
              styles={searchByDropdownStyles} isDisabled={Props.isLoading}/>
          </div>
         </div>
        <HorizontalLine styles={horizontalLineStyles}/>
      </div>
    </div>
  );
});

export default LogsTitleSearch;