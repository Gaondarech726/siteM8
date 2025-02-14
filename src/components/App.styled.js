import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  body {
    background: black;
  }
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid white;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  width: 100px;
  height: auto;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;

  &.active {
    color: black;
    background-color: white;
  }

  &:hover {
    color: #bd1e2c;
  }
`;
export const LinkDrop = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;

  &:hover {
  }
`;

export const LinkHome = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
`;
