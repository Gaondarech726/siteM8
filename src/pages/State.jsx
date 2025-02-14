import { Link } from "react-router-dom";

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
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    display: block;
    padding: 20px;
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

const State = () => {
  return (
    <Container>
      <CardWrapper>
        <Link to="manifest">Маніфест</Link>
      </CardWrapper>
      <CardWrapper>
        <Link to="runes">Про руни</Link>
      </CardWrapper>
      <CardWrapper>
        <Link to="concert">Концерт M8L8TH</Link>
      </CardWrapper>
      <CardWrapper>
        <Link to="sxe">Будь тверезим</Link>
      </CardWrapper>
    </Container>
  );
};

export default State;
