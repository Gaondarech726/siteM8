import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { BackLink } from './../../../components/BackLink';

export const P = styled.p`
  color: white;
`;

export const H1 = styled.h1`
  color: white;
  padding-bottom: 50px;
`;

export const ImgWJ = styled.img`
  margin-top: 30px;
  margin-bottom: 50px;
  width: 689px;
  border-bottom: 5px solid #bd1e2c;
`;

const WJimg = '../../../img/WJ.jpg';

const Manifest = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/state';
  return (
    <main>
      <BackLink to={backLinkHref}>Повернутись назад</BackLink>

      <H1>Маніфест</H1>
      <ImgWJ src={WJimg} alt="runes" />
      <P>
        WotanJugend - Молот, що ламає кайдани сучасного світу.
        <br />
        <br />
        Замість брехливої рівності ми стверджуємо расову і станову ієрархію,
        замість тваринного матеріалізму - царство духу і філософії, замість
        жалюгідного гуманізму - прагнення до Надлюдини, замість боягузливого
        пацифізму - героїчну жертовність у безперервній боротьбі, замість
        профанічного раціоналізму - верховенство сакрального Міфу, замість
        ілюзорного прогресу - абсолютну Традицію, замість егоїстичного
        індивідуалізму - єдність за Кров'ю, Вітчизною і Вірою.
        <br />
        <br />
        <strong>
          <em>Кров</em>
        </strong>{' '}
        - священний скарб нашої раси, що зберігається в кожному з нас, золотим
        ланцюгом пов'язуючи простір і час.
        <br />
        <br />
        <strong>
          <em>Вітчизна</em>
        </strong>{' '}
        - земля наших батьків, спадщина предків, дарована нам для примноження
        роду.
        <br />
        <br />
        <strong>
          <em>Віра</em>
        </strong>{' '}
        - непохитне переконання в торжестві безсмертного духу.
        <br />
        <br />
        Такі наші ідеали, ідеали, що осіняють прапор Молоді Вотана.
      </P>
    </main>
  );
};

export default Manifest;
