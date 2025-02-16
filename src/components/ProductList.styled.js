import styled from 'styled-components';

export const Container = styled.div`
  width: 380px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  gap: 25px;
`;

export const CardWrapper = styled.div`
  border: 1px solid white;
  width: 380px;
  height: 70px;
  border-radius: 4px;
  transition: background-color 0.5s ease, color 0.5s ease;
  color: white;

  &:hover {
    background-color: white;
    color: black;
  }

  > a {
    text-decoration: none;
    display: block;
    padding: 10px;
    color: inherit;
    transition: color 0.5s ease;
  }
  h3 {
    color: inherit;
    height: 32px;
    width: 380px;
    display: flex;
    align-items: center;
  }
`;

export const ProductName = styled.h3`
  color: white;
`;

export const ProductAuthor = styled.span`
  color: #bd1e2c;
  font-size: 12px;
  font-weight: 600;
`;

export const ProductH1 = styled.h3`
  color: white;
`;

export const ProductDescription = styled.h3`
  margin-top: 30px;
  font-weight: 200;
  color: white;
`;
