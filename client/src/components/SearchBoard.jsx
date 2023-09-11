// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBox } from '../style/SearchBoard';
import axios from 'axios';

const SearchBoard = () => {
  const [isAutoSearch, setIsAutoSearch] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [searchResults, setSearchResults] = useState([]);
  const [autoSearchKeyword, setAutoSearchKeyword] = useState('');
  const [focusIndex, setFocusIndex] = useState(-1);
  const listRef = useRef(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const enteredValue =
      e.nativeEvent.inputType === 'deleteContentBackward'
        ? ''
        : e.nativeEvent.data;
    if (isAutoSearch) {
      focusIndex >= 0 && setSearchKeyword(autoSearchKeyword + enteredValue);
      setIsAutoSearch(false);
      setFocusIndex(-1);
      return;
    }

    setSearchKeyword(e.target.value);
  };

  const goToSearchPage = () => {
    // eslint-disable-next-line no-undef
    if (isNull()) return;
    navigate(
      `/search?query=${isAutoSearch ? autoSearchKeyword : searchKeyword}`
    );
  };

  const KeyEvent = {
    Enter: () => {
      goToSearchPage();
    },
    ArrowDown: () => {
      // eslint-disable-next-line no-undef
      if (currentQuestions.length === 0) {
        return;
      }
      if (listRef.current.childElementCount === focusIndex + 1) {
        setFocusIndex(() => 0);
        return;
      }
      if (focusIndex === -1) {
        setIsAutoSearch(true);
      }
      setFocusIndex((index) => index + 1);
      // eslint-disable-next-line no-undef
      setAutoSearchKeyword(currentQuestions.results[focusIndex + 1].title);
    },
    ArrowUp: () => {
      if (focusIndex === -1) {
        return;
      }
      if (focusIndex === 0) {
        setAutoSearchKeyword('');
        setFocusIndex((index) => index - 1);
        setIsAutoSearch(false);
        return;
      }

      setFocusIndex((index) => index - 1);
      // eslint-disable-next-line no-undef
      setAutoSearchKeyword(currentQuestions.results[focusIndex - 1].title);
    },
    Escape: () => {
      setAutoSearchKeyword('');
      setFocusIndex(-1);
      setIsAutoSearch(false);
    },
  };

  const handleKeyUp = (e) => {
    if (KeyEvent[e.key]) KeyEvent[e.key]();
  };

  useEffect(() => {
    if (isAutoSearch) return;

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `//localhost:8080/api/question/1/${searchKeyword}`
        );
        const data = await response.json();
        setSearchResults(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (searchKeyword) {
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchKeyword, isAutoSearch]);

  return (
    <SearchBox>
      <div className='search'>
        <img src='/images/magnify.png' alt='search' onClick={goToSearchPage} />
        <input
          type='text'
          placeholder='검색해보세요'
          title='검색'
          name='검색'
          value={isAutoSearch ? autoSearchKeyword : searchKeyword}
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
        ></input>
        <button onClick={goToSearchPage}>검색</button>
      </div>
    </SearchBox>
  );
};
export default SearchBoard;
