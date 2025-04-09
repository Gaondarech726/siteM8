import styled from 'styled-components';

export const Container = styled.div`
  width: 380px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  gap: 25px;
`;

export const Pstrong = styled.p`
  width: 80vw;
  margin: 50px 0 50px 0;
  color: white;
  font-size: 20px;
  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;

  border: 1px solid white;
  width: 95vw;
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

export const P = styled.p`
  margin: 50px 0 50px 0;
  color: white;
  font-size: 20px;
  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

export const ProductDescription = styled.h3`
  font-size: 20px;
  margin-top: 30px;
  font-weight: 200;
  color: white;
`;

export const Iframe = styled.iframe`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 928px;
  @media (max-width: 425px) {
    max-width: 320px;
    width: calc(100vw - 20vw);
  }
`;

export const Div = styled.div`
  width: 320px;
  @media (max-width: 320px) {
    width: 256px;
  }
`;

export const Main = styled.main`
  width: 100vw;
`;
