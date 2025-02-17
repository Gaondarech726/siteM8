import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TourMap } from '../pages/feauters/Map';

export const Main = styled.main`
  margin-top: 50px;
`;

export const P = styled.p`
  color: white;
  padding-bottom: 50px;
`;

export const H1 = styled.h1`
  color: white;
  padding-bottom: 50px;
`;

export const H2 = styled.h2`
  padding-bottom: 20px;
  color: white;
`;

export const Ul = styled.ul`
  color: white;
  padding-bottom: 50px;
`;

export const Li = styled.li`
  padding-bottom: 25px;
  color: white;

  list-style: none;
  > a {
    text-decoration: none;
    transition: color 0.5s ease;
    color: #bd1e2c;
    &:hover {
      color: #ff0000;
    }
  }
`;

const Home = () => {
  return (
    <Main>
      <H1>Привіт! Ласкаво просимо на сторінку, присвячену гурту M8L8TH!</H1>

      <P>
        M8L8TH – російсько-український гурт, що виконує музику в жанрах NSBM,
        RAC, блек-метал та паган-метал.
        <br />
        Гурт був заснований у 2003 році в Твері, Росія, Олексієм Льовкіним.
        <br />
        M8L8TH торкається тем націонал-соціалізму, націоналізму, язичництва,
        війни та скандинавської міфології.
      </P>

      <H2>Олексій Льовкін:</H2>
      <P>
        фронтмен, вокаліст та засновник M8L8TH. Народився 6 жовтня 1984 року в
        Твері.овкін є ключовою фігурою в історії гурту, його ідеологічним
        натхненником та автором текстів. У 2015 році він переїхав до України, де
        продовжив музичну діяльність з оновленим складом. Відомо, що Льовкін
        брав участь у бойових діях на сході України в складі Російського
        добровольчого корпусу. Він також відомий як лідер руху WotanJugend. У
        2023 році брав участь у боях в Бєлгородській області.
      </P>

      <H2>Музика:</H2>
      <Ul>
        <Li>
          <Link to="products/a-4">Nekrokrator (2023):</Link> Повноформатний
          альбом з містичною історією про подорож полелого воїна до Вальгалли.
          Пісні альбому, такі як "Меча Осколки", "Асов Рок", "Моим Богам" та
          інші, передають атмосферу темряви, таємничості та могутності.
        </Li>
        <Li>
          <strong>AzovStahl (2022):</strong> Україномовний кавер на пісню "Шторм
          над Азовом", присвячений подвигу бійців полку "Азов".
        </Li>
        <Li>
          <strong>By the White Wolf's Hammer (2021):</strong> Сингл, що
          продовжує традиції паган-металу.
        </Li>
        <Li>
          <Link to="products/a-6">
            WHISPER OF RUNES - CRYSTAL KNIGHT (2021):
          </Link>{' '}
          Його історія починається у 2014 році, коли після виходу альбому
          "Templum Victoriae" творчий пошук гурту привів до нових горизонтів та
          орієнтирів. Після кількох років запису, альбом нарешті побачив світ,
          представляючи слухачам "Голос Зеленого Променя".
        </Li>
        <Li>
          <strong>Чорним крилом (2004):</strong> Дебютний альбом, на створення
          якого вплинули Burzum, Темнозорь та BlazeBirth.
        </Li>
        <Li>
          <strong>Штурм (2006):</strong> Концертний альбом.
        </Li>
        <Li>
          <Link to="products/a-3">Непохитна Віра (2008):</Link> У 2009 році,
          коли лідер гурту Олексій вже третій рік перебував у в’язниці, вийшов
          другий повноформатний альбом M8L8TH – “Непохитна віра”. Альбом
          створювався з 2005 року (тобто ще до арешту лідера і проблем групи в
          цілому в жовтні 2006-го), і багато в чому ніс в собі саме той настрій,
          яким жила група в ці роки, в далекі часи масштабного вуличного
          расового насильства, яке, природно, не оминуло і Тверь.
        </Li>
        <Li>
          <Link to="products/a-2">
            WHISPER OF RUNES - Templum Victoriae (2014):
          </Link>
          Альбом був випущений у 2014 році. Він поєднує автентичну слов'янську
          фолк-музику та акустичні балади з важкими гітарами та роковими
          ритмами, створюючи спокійне та гармонійне звучання з ідеологічно
          насиченою поезією.
        </Li>
        <Li>
          <Link to="products/a-7">WJ 2.0:</Link> Це спліт-альбом, випущений у
          грудні 2024 року спільно гуртами M8L8TH та Нежеголь. Альбом
          складається з трьох треків: Сингл.
        </Li>
        <Li>
          <Link to="products/a-8">Удар милосердя / Coup de grâce (2018):</Link>{' '}
          Міні-альбом, спільна робота з лідером французького гурту Peste Noire.
        </Li>
        <Li>
          <Link to="products/a-1">Reconquista (2018):</Link> Повноформатний
          альбом.
        </Li>
        <Li>
          <Link to="products/a-9">PRE-M8L8TH - 2001 DEMO ERA SONG:</Link> не є
          офіційним релізом. Це ранній демозапис або окремий трек, який був
          створений ще до офіційного формування гурту M8L8TH у 2002 році
        </Li>
      </Ul>

      <H2>Склад гурту:</H2>
      <P>
        Інформація про поточний склад гурту обмежена. Відомо, що після переїзду
        до України Льовкін зібрав новий склад.
      </P>

      <TourMap></TourMap>
    </Main>
  );
};
export default Home;
