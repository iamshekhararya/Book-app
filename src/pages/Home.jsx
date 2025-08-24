import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
import { searchBooks } from '../services/bookService';
import { useFavorites } from '../context/FavoritesContext';

const Home = () => {
  const [books, setBooks] = useState([]);
  const { favorites, toggleFavorite } = useFavorites();

  const handleSearch = async (query) => {
    const results = await searchBooks(query);
    setBooks(results);
  };

  // Optional: Load some default books on page load
  useEffect(() => {
    handleSearch('React programming');
  }, []);

  return (
    <div className="p-4">
      <SearchBar onSearch={handleSearch} />

      {books.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">
          No books found. Try searching!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              isFavorite={favorites.some((fav) => fav.id === book.id)}
              onFavoriteToggle={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
