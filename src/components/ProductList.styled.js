import styled from "styled-components";

export const Container = styled.div`
  width: 928px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const CardWrapper = styled.div`
  border: 1px solid white;
  width: 928px;
  height: 64px;
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
    width: 928px;
    display: flex;
    align-items: center;
  }
`;

export const ProductName = styled.h3`
  color: white;
`;

export const ProductH1 = styled.h3`
  color: white;
`;

export const ProductDescription = styled.h3`
  margin-top: 30px;
  font-weight: 200;
  color: white;
`;
