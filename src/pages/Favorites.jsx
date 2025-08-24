import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import BookCard from '../components/BookCard';

const Favorites = () => {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Favorite Books</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-600">You have no favorite books yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              isFavorite={true}
              onFavoriteToggle={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
