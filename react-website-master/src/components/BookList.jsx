import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';

const BookList = ({ query }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://gutendex.com/books?search=${encodeURIComponent(query)}`);
        const data = await response.json();
        setBooks(data.results);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [query]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <BookCard title={book.title} author={book.authors[0]?.name} imageUrl={book.formats['image/jpeg']} formats={book.formats} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;