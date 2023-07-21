'use client'

import React, { useState, ChangeEvent } from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [showIcon, setShowIcon] = useState(true);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    if (inputValue.trim() === '') {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  };

  const handleInputFocus = () => {
    setShowIcon(false);
  };

  const handleInputBlur = () => {
    if (query.trim() === '') {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  };

  return (
    <div className="items-center px-4 flex justify-center">
      <div className="relative mr-3">
        <div className={`absolute top-3 left-3 items-center ${showIcon ? '' : 'hidden'}`}>
            <FaSearch className="w-5 h-5 text-gray-500" />
          </div>
        <input
          type="text"
          className="block p-2 pl-10 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:pl-3"
          placeholder="Search Here..."
          value={query}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </div>
    </div>
  );
}

export default SearchBar;
