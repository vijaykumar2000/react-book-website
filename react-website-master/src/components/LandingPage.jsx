import React from 'react';
import styled from 'styled-components';
import Fiction from '../assets/Fiction.svg'; 
import Adventure from '../assets/Adventure.svg'; 
import History from '../assets/History.svg'; // Update the path based on your project structure
import Philosophy from '../assets/Philosophy.svg'; 
import Politics from '../assets/Politics.svg';
import Humour from '../assets/Humour.svg';
import Drama from '../assets/Drama.svg';
import { useNavigate } from 'react-router-dom'; 

// const Container = styled.div`
//   text-align: center;
//   padding: 40px;
//   background-color: #f8f7ff;
// `;

// const Title = styled.h1`
//   color: #5e56e7;
//   font-size: 48px;
//   margin-bottom: 10px;
// `;

// const Subtitle = styled.p`
//   color: #333333;
//   font-size: 16px;
//   margin-bottom: 40px;
// `;

// const CategoriesContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;
//   justify-content: center;
// `;

// const CategoryButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 15px 20px;
//   width: 200px;
//   background-color: #ffffff;
//   border: 2px solid #eaeaea;
//   border-radius: 8px;
//   box-shadow: 0 2px 5px rgba(211, 209, 238, 0.5);
//   font-size: 16px;
//   font-weight: 600;
//   color: #5e56e7;
//   cursor: pointer;
//   transition: transform 0.2s;

//   &:hover {
//     transform: translateY(-3px);
//     box-shadow: 0 4px 8px rgba(211, 209, 238, 0.8);
//   }

//   img {
//     margin-right: 8px;
//     height: 20px;
//     width: 20px;
//   }
// `;

// const categories = [
//   { name: 'Fiction', query: 'fiction', icon: Fiction },
//   { name: 'Drama', query: 'drama', icon: Drama },
//   { name: 'Humour', query: 'humour', icon: Humour },
//   { name: 'Politics', query: 'politics', icon: Politics },
//   { name: 'Philosophy', query: 'philosophy', icon: Philosophy },
//   { name: 'History', query: 'history', icon: History },
//   { name: 'Adventure', query: 'adventure', icon: Adventure },
// ];


// export default function LandingPage({ onCategoryClick }) {
//   return (
//     <Container>
//       <Title>Gutenberg Project</Title>
//       <Subtitle>
//         A social cataloging website that allows you to freely search its database of books, annotations, and reviews.
//       </Subtitle>
//       <CategoriesContainer>
//         {categories.map((category) => (
//           <CategoryButton key={category.name} onClick={() => onCategoryClick(category.query)}>
//             <img src={category.icon} alt={`${category.name} Icon`} /> 
//             {category.name} 
//             <span>→</span>
//           </CategoryButton>
//         ))}
//       </CategoriesContainer>
//     </Container>
//   );
// }


// Define the main container and button styles
const Container = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #f8f7ff;
`;

const Title = styled.h1`
  color: #5e56e7;
  font-size: 48px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: #333333;
  font-size: 16px;
  margin-bottom: 40px;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const CategoryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  width: 200px;
  background-color: #ffffff;
  border: 2px solid #eaeaea;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(211, 209, 238, 0.5);
  font-size: 16px;
  font-weight: 600;
  color: #5e56e7;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(211, 209, 238, 0.8);
  }

  img {
    margin-right: 8px;
    height: 20px;
    width: 20px;
  }
`;

const categories = [
  { name: 'Fiction', query: 'fiction', icon: Fiction },
  { name: 'Drama', query: 'drama', icon: Drama },
  { name: 'Humour', query: 'humour', icon: Humour },
  { name: 'Politics', query: 'politics', icon: Politics },
  { name: 'Philosophy', query: 'philosophy', icon: Philosophy },
  { name: 'History', query: 'history', icon: History },
  { name: 'Adventure', query: 'adventure', icon: Adventure },
];

export default function LandingPage({ onCategoryClick }) {
  const navigate = useNavigate();  // useNavigate hook

  const handleClick = (categoryQuery) => {
    onCategoryClick(categoryQuery);
    navigate('/books');  // Navigate to the books page
  };

  return (
    <Container>
      <Title>Gutenberg Project</Title>
      <Subtitle>
        A social cataloging website that allows you to freely search its database of books, annotations, and reviews.
      </Subtitle>
      <CategoriesContainer>
        {categories.map((category) => (
          <CategoryButton 
            key={category.name} 
            onClick={() => handleClick(category.query)}
          >
            <img src={category.icon} alt={`${category.name} Icon`} /> 
            {category.name} 
            <span>→</span>
          </CategoryButton>
        ))}
      </CategoriesContainer>
    </Container>
  );
}
