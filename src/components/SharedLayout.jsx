import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import '../components/App.scss';
import LogoM8 from '../img/logo.png';
import { Load } from '../pages/feauters/loading/Load.jsx';
import { Footer } from './../pages/Footer/Footer.jsx';
import { Container, Link, NewContainer } from './App.styled';
import BtnScrollUp from './BtnScrollUp/BtnScrollUp';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-bottom: 1px solid white;
`;

const BurgerButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.nav`
  z-index: 1000;
  display: flex;
  gap: 12px;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    right: 0;
    flex-direction: column;
    position: fixed;
    top: 100px;
    width: 250px;
    background: black;
    padding: 16px;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0%)' : 'translateX(250%)'};
  }
`;

export const SharedLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <NewContainer>
        <HeaderContainer>
          <Link to="/" className="logo">
            <img src={LogoM8} alt="logo" width={100} />
          </Link>
          <BurgerButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✖' : '☰'}
          </BurgerButton>
          <NavLinks isOpen={isOpen}>
            <Link to="/about">Про нас</Link>
            <Link to="/products">Альбоми</Link>
            <div className="dropdown" to="/state">
              <button className="dropbtn">Статті</button>
              <div className="dropdown-content">
                <Link to="/state/runes">Про руни</Link>
                <Link to="/state/manifest">Маніфест</Link>
                <Link to="/state/concert">Концерт M8L8TH</Link>
                <Link to="/state/sxe">Будь тверезим</Link>
              </div>
            </div>
          </NavLinks>
        </HeaderContainer>
        <Suspense fallback={<Load />}>
          <Outlet />
        </Suspense>
        <BtnScrollUp />
      </NewContainer>
      <Footer />
    </Container>
  );
};
