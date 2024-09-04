
export const fetchBooks = async (query = '') => {
  try {
    const response = await fetch(`https://gutendex.com/books?search=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results.map((book) => ({
      id: book.id,
      title: book.title,
      author: book.authors[0]?.name,
      imageUrl: book.formats['image/jpeg'], // Access image URL if available
      formats: book.formats,
    }));
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
