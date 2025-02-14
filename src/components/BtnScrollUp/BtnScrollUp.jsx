import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './BtnScrollUp.scss';

export const P = styled.p`
  color: white;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;
export const Img = styled.img`
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

import scrollUpImage from '../../img/favicon.png';

const BtnScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`btn-scroll-up-container ${isVisible ? 'visible' : 'hidden'}`}
      onClick={handleScrollUp}
    >
      <Img src={scrollUpImage} alt="Scroll to top" className="btn-scroll-up" />
      <P>Наверх</P>
    </div>
  );
};

export default BtnScrollUp;
