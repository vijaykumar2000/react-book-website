
// import React, { useEffect, useState } from 'react';
// import GlobalStyles from './GlobalStyles';
// import { ThemeProvider } from 'styled-components';
// import { theme } from './theme';
// import AppHeader from './components/Header';
// import LandingPage from './components/LandingPage';
// import BookCard from './components/BookCard';
// import SearchBox from './components/SearchBox'; 
// import { fetchBooks } from './services/gutendexService';

// function App() {
//   const [books, setBooks] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');

//   useEffect(() => {
//     const loadBooks = async () => {
//       if (selectedCategory) {
//         const booksData = await fetchBooks(selectedCategory);
//         setBooks(booksData);
//       }
//     };
//     loadBooks();
//   }, [selectedCategory]);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };
//   const handleSearch = async (searchQuery) => {
//     try {
//       const booksData = await fetchBooks(searchQuery);
//       setBooks(booksData);
//     } catch (error) {
//       console.error('Error searching for books:', error);
//     }
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <GlobalStyles />
//       <AppHeader />
//       <LandingPage onCategoryClick={handleCategoryClick} />
//       <SearchBox onSearch={handleSearch} />
//       {selectedCategory && (
//         <div style={{ display: 'flex', gap: '10px', padding: '20px', flexWrap: 'wrap' }}>
//           {books.map((book) => (
//             <BookCard
//               key={book.id}
//               title={book.title}
//               author={book.author}
//               imageUrl={book.imageUrl} // Pass the image URL here
//               formats={book.formats}
//             />
//           ))}
//         </div>
//       )}
//     </ThemeProvider>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import AppHeader from './components/Header';
import LandingPage from './components/LandingPage';
import BookCard from './components/BookCard';
import SearchBox from './components/SearchBox'; 
import { fetchBooks } from './services/gutendexService';

function App() {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const loadBooks = async () => {
      if (selectedCategory) {
        const booksData = await fetchBooks(selectedCategory);
        console.log('Fetched Books:', booksData); // Debug: Check fetched books
        setBooks(booksData);
      }
    };
    console.log('Selected Category:', selectedCategory); // Debug: Check selected category
    loadBooks();
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    console.log('Category Clicked:', category); // Debug: Check clicked category
    setSelectedCategory(category);
  };

  const handleSearch = async (searchQuery) => {
    try {
      const booksData = await fetchBooks(searchQuery);
      console.log('Search Result Books:', booksData); // Debug: Check search results
      setBooks(booksData);
    } catch (error) {
      console.error('Error searching for books:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <AppHeader />
        <Routes>
          <Route path="/" element={<LandingPage onCategoryClick={handleCategoryClick} />} />
          <Route 
            path="/books" 
            element={
              <>
                <SearchBox onSearch={handleSearch} />
                {books.length > 0 ? (
                  <div style={{ display: 'flex', gap: '10px', padding: '20px', flexWrap: 'wrap' }}>
                    {books.map((book) => (
                      <BookCard
                        key={book.id}
                        title={book.title}
                        author={book.author}
                        imageUrl={book.imageUrl} // Pass the image URL here
                        formats={book.formats}
                      />
                    ))}
                  </div>
                ) : (
                  <p>No books available for this category.</p>
                )}
              </>
            } 
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
