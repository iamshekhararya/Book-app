const API_BASE = 'https://www.googleapis.com/books/v1/volumes';

// 🔍 Search books by query
export const searchBooks = async (query) => {
  if (!query) return [];

  try {
    const response = await fetch(
      `${API_BASE}?q=${encodeURIComponent(query)}&maxResults=20`
    );
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};

// 📖 Get book details by ID
export const getBookById = async (id) => {
  if (!id) return null;

  try {
    const response = await fetch(`${API_BASE}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching book details:', error);
    return null;
  }
};
