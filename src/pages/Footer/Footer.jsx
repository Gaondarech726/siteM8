import { FaTelegram } from 'react-icons/fa';
import '../Footer/Footer.scss';
const FooterBg = require('../../img/bg_soc.png');
const FaviconWJ = require('../../img/favicon.png');
const LogoMZ = require('../../img/logonewlongred.png');

export const Footer = () => {
  return (
    <footer className="footer">
      <img src={FooterBg} alt="Footer" className="backgroundFooter" />
      <div className="wrap">
        <div className="social list_f">
          <p>Наші соцмережі</p>
          <ul>
            <li>
              <a href="https://t.me/thulesignal" target="_blank" rel="noopener">
                <FaTelegram fill="#bd1e2c" stroke="white" className="icon" />
                <span className="tooltip">Thule Signal TG</span>
              </a>
            </li>
            <li>
              <a
                href="https://t.me/joinchat/O99g8cKv7xzY08Vv"
                target="_blank"
                rel="noopener"
              >
                <FaTelegram fill="#bd1e2c" stroke="white" className="icon" />
                <span className="tooltip">WotanJugend TG</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="resurs list_f">
          <p>Наші сайти</p>
          <ul>
            <li>
              <a
                href="https://wotanjugend.info/"
                target="_blank"
                rel="noopener"
              >
                <img src={FaviconWJ} alt="LogoWJ" className="iconS" />
                <span className="tooltip">WotanJugend.info</span>
              </a>
            </li>
            <li>
              <a href="https://militant.zone" target="_blank" rel="noopener">
                <img src={LogoMZ} alt="LogoMZ" className="iconS" />
                <span className="tooltip">Militant.zone</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
