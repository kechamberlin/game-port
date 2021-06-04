import React, { useState, useEffect, useRef } from 'react';
import { Content, Wrapper } from './SearchBar.styles';
import searchIcon from '../../images/search-icon.svg';

export default function SearchBar({ setSearchTerm }) {
  const [searchState, setSearchState] = useState('');
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchTerm(searchState);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, searchState]);

  return (
    <div>
      <Wrapper>
        <Content>
          <img src={searchIcon} alt="search-icon" />
          <input
            type="text"
            placeholder="Search for Games"
            onChange={(event) => setSearchState(event.currentTarget.value)}
            value={searchState}
          />
        </Content>
      </Wrapper>
    </div>
  );
}
