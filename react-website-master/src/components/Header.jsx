import styled from 'styled-components';

const Header = styled.header`
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.secondaryColor};
  padding: 20px;
  text-align: center;
`;

export default function AppHeader() {
  return <Header>Gutenberg Project</Header>;
}
