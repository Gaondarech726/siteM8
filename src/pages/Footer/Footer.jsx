import '../Footer/Footer.scss';
const FooterBg = require('../../img/bg_soc.png');

export const Footer = () => {
  return (
    <footer className="footer">
      <img src={FooterBg} alt="Footer" />
    </footer>
  );
};
