import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 sm:px-6">
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full
                   bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
                   rounded-full px-4 py-2 shadow-md focus-within:ring-2 focus-within:ring-blue-500
                   transition-all duration-300"
      >
        <FiSearch className="text-gray-500 dark:text-gray-300 mr-2 text-xl flex-shrink-0" />

        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow bg-transparent focus:outline-none
                     text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500
                     text-base sm:text-lg min-w-0"
          aria-label="Search books"
        />

        <button
          type="submit"
          className="ml-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-full
                     text-sm font-medium transition-all duration-300 flex-shrink-0 whitespace-nowrap"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
