// src/components/BookCard.js
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${({ theme }) => theme.secondaryColor};
  box-shadow: 0 2px 5px rgba(211, 209, 238, 0.5);
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  width: 114px;
  height: 162px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: cover;
  background-position: center;
  color: ${({ theme }) => theme.primaryTextColor};
  cursor: pointer;
`;

const BookTitle = styled.h3`
  font-size: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryTextColor};
  padding: 2px 0;
  margin: 4px 0;
  background: none;  /* Removed the background */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);  /* Added text shadow for better visibility */
`;

const Author = styled.p`
  font-size: 10px;
  color: ${({ theme }) => theme.primaryTextColor};
  padding: 2px 0;
  background: none;  /* Removed the background */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);  /* Added text shadow for better visibility */
  margin-top: 4px;
`;

export default function BookCard({ title, author, imageUrl, formats }) {
  const handleClick = async () => {
    try {
      const hasDownloadableFile = formats && Object.keys(formats).some((format) => format.endsWith('txt'));

      if (hasDownloadableFile) {
        const downloadUrl = formats[Object.keys(formats).find((format) => format.endsWith('txt'))];
        window.open(downloadUrl, '_blank');
      } else {
        const hasWebsite = formats && formats['text/html'];

        if (hasWebsite) {
          window.open(formats['text/html'], '_blank');
        } else {
          alert(`No downloadable file or website available for "${title}"`);
        }
      }
    } catch (error) {
      console.error('Error handling book click:', error);
    }
  };

  return (
    <Card style={{ backgroundImage: `url(${imageUrl})` }} onClick={handleClick}>
      <BookTitle>{title}</BookTitle>
      <Author>{author || 'Unknown Author'}</Author>
    </Card>
  );
}
