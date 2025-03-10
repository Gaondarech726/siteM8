import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import '../components/App.scss';
import LogoM8 from '../img/logo.svg';
import { Load } from '../pages/feauters/loading/Load.jsx';
import { Footer } from './../pages/Footer/Footer.jsx';
import { Container, Link, NewContainer, SpecialLink } from './App.styled';
import BtnScrollUp from './BtnScrollUp/BtnScrollUp';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 8px -170px;
  border-bottom: 1px solid white;
`;
const Plink = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 24px;
  height: 100px;
  @media (max-width: 425px) {
    font-size: 18px;
  }
`;
const Alink = styled.a`
  text-decoration: none;
  color: #bd1e2c;
  padding-left: 10px;
`;

const Img = styled.img`
  width: 200px;
  height: 100%;
  @media (max-width: 440px) {
    width: 150px;
    margin-left: 50px;
  }
`;

const BurgerButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  display: none;
  position: relative;
  right: 80px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.nav`
  font-size: 20px;
  z-index: 1000;
  display: flex;
  gap: 12px;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    font-size: 18px;
    right: 0;
    flex-direction: column;
    position: fixed;
    top: 100px;
    width: 250px;
    background: black;
    padding: 16px;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(-40%)' : 'translateX(250%)'};
  }
`;

export const SharedLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <NewContainer>
        <HeaderContainer>
          <Link to="/" className="logo">
            <Img src={LogoM8} alt="logo" />
          </Link>
          <BurgerButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✖' : '☰'}
          </BurgerButton>
          <NavLinks isOpen={isOpen}>
            <Link to="/about">Про нас</Link>
            <Link to="/products">Музика</Link>
            <SpecialLink className="dropdown" to="/state">
              <button className="dropbtn">Статті</button>
              <div className="dropdown-content">
                <Link to="/state/runes">Про руни</Link>
                {/* <Link to="/state/manifest">Маніфест</Link> */}
                <Link to="/state/concert">Концерт M8L8TH</Link>
                <Link to="/state/sxe">Будь тверезим</Link>
              </div>
            </SpecialLink>
          </NavLinks>
        </HeaderContainer>
        <Suspense fallback={<Load />}>
          <Outlet />
        </Suspense>
        <BtnScrollUp />
      </NewContainer>
      <Footer />
      <Plink>
        Розробив
        <Alink href="https://www.linkedin.com/in/anton-honcharenko-88131mtk/">
          Anton Honcharenko
        </Alink>
      </Plink>
    </Container>
  );
};
