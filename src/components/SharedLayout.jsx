import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import '../components/App.scss';
import { Load } from '../pages/feauters/loading/Load.jsx';
import { Footer } from './../pages/Footer/Footer.jsx';
import {
  Container,
  Header,
  Link,
  LinkDrop,
  LinkHome,
  Logo,
} from './App.styled';
import BtnScrollUp from './BtnScrollUp/BtnScrollUp';

import LogoM8 from '../img/logo.png';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <LinkHome to="/" end>
          <Logo>
            <img src={LogoM8} alt="logo" />
          </Logo>
        </LinkHome>
        <nav>
          <Link to="/about">Про нас</Link>
          <Link to="/products">Альбоми</Link>
          <Link className="drop" to="/state">
            <div className="dropdown">
              <button className="dropbtn">Статті</button>
              <div className="dropdown-content">
                <LinkDrop to="/state/runes">Про руни</LinkDrop>
                <LinkDrop to="/state/manifest">Маніфест</LinkDrop>
                <LinkDrop to="/state/concert">Концерт M8L8TH</LinkDrop>
                <LinkDrop to="/state/sxe">Будь тверезим</LinkDrop>
              </div>
            </div>
          </Link>
        </nav>
      </Header>

      <Suspense fallback={<Load></Load>}>
        <Outlet />
      </Suspense>

      <BtnScrollUp />
      <Footer></Footer>
    </Container>
  );
};
