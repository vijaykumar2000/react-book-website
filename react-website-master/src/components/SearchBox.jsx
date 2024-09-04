import React, { useState } from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.greyLight};
  border-radius: 4px;
  font-size: 16px;
`;

export default function SearchBox({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // Trigger search when the user stops typing for 500ms
    if (onSearch) {
      const timer = setTimeout(() => onSearch(e.target.value), 500);
      return () => clearTimeout(timer);
    }
  };

  return (
    <SearchInput
      placeholder="Search for books..."
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}
