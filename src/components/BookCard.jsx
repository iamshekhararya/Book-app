import React from 'react';
import { useFavorites } from '../context/FavoritesContext';

const BookCard = ({ book }) => {
  const { favorites, toggleFavorite } = useFavorites();

  const { title, authors, imageLinks } = book.volumeInfo || {};
  const thumbnail = imageLinks?.thumbnail || 'https://via.placeholder.com/150';

  const isFavorite = favorites.some((fav) => fav.id === book.id);

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300
                 p-4 w-full max-w-xs flex flex-col items-center text-center mx-auto sm:mx-0
                 transform hover:-translate-y-1 hover:scale-[1.02] ease-in-out"
    >
      <img
        src={thumbnail}
        alt={title}
        className="w-36 h-52 object-cover rounded-md shadow-sm mb-4 border border-gray-200 dark:border-gray-700
                   transition-transform duration-500 hover:scale-105"
      />

      <h3
        className="text-lg font-bold text-gray-900 dark:text-white mb-1 line-clamp-2 animate-fade-in"
        title={title}
      >
        {title || 'No Title'}
      </h3>

      <p
        className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-1 animate-fade-in"
        title={authors ? authors.join(', ') : 'Unknown Author'}
      >
        {authors ? authors.join(', ') : 'Unknown Author'}
      </p>

      <button
        onClick={() => toggleFavorite(book)}
        className={`w-full py-2 rounded-md font-medium transition-colors duration-300
          ${isFavorite
            ? 'bg-red-500 hover:bg-red-600 text-white'
            : 'bg-blue-500 hover:bg-blue-600 text-white'}
          animate-fade-in`}
      >
        {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default BookCard;
