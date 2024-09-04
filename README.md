Overview
This is a book search app built using React, styled-components, and the Gutendex API. The app allows users to search for books by category and displays the search results in a grid layout.

Features
Search for books by category
Display search results in a grid layout
Responsive design for optimal user experience
Cross-browser compatibility
Technologies Used
React
Styled-components
Gutendex API
JavaScript
Getting Started
Clone the repository: git clone https://github.com/your-username/book-search-app.git
Install dependencies: npm install
Start the app: npm start
Open the app in your browser: http://localhost:3000
Components
App.js: The main app component that renders the search box, category list, and book grid.
SearchBox.js: A reusable search box component that handles user input and triggers the search functionality.
BookCard.js: A reusable book card component that displays book information.
LandingPage.js: A component that renders the category list and handles category clicks.
Services
gutendexService.js: A service that fetches book data from the Gutendex API.
