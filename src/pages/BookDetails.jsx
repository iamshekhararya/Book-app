import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from '../services/bookService';
import { useFavorites } from '../context/FavoritesContext';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    const fetchBook = async () => {
      const data = await getBookById(id);
      setBook(data);
    };
    fetchBook();
  }, [id]);

  if (!book) return <div className="p-4">Loading...</div>;

  const { title, authors, description, imageLinks, publisher, publishedDate } =
    book.volumeInfo || {};
  const isFavorite = favorites.some((fav) => fav.id === book.id);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={imageLinks?.thumbnail || 'https://via.placeholder.com/150'}
          alt={title}
          className="w-48 h-auto rounded-md shadow-md"
        />

        <div>
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-gray-600 mb-1">
            <strong>Authors:</strong> {authors?.join(', ') || 'Unknown'}
          </p>
          <p className="text-gray-600 mb-1">
            <strong>Publisher:</strong> {publisher || 'N/A'}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Published:</strong> {publishedDate || 'N/A'}
          </p>

          <button
            onClick={() => toggleFavorite(book)}
            className={`px-4 py-2 rounded-md transition ${
              isFavorite
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700 dark:text-gray-300">
          {description ? description : 'No description available.'}
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
