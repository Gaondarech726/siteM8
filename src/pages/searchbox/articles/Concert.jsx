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

export const Iframe = styled.iframe`
  margin-top: 50px;
`;
const Concert = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/state';
  return (
    <main>
      <BackLink to={backLinkHref}>Повернутись назад</BackLink>

      <H1>Забутий концерт M8L8TH</H1>
      <P>
        C 2007 року, коли лідер гурту Олексій уже як рік перебував в ув'язненні,
        музиканти М8Л8ТХ приступили до запису другого альбому гурту. ув'язненні,
        музиканти М8Л8ТХ приступили до запису другого альбому гурту. Матеріал до
        нього створювався з 2005 року (такі речі як «Відьомський Туман», “Рідний
        Мій Край”, “Буковий Ліс” були створені до кінця 2006 року) і був
        повноцінно реалізований у 2008 році.
        <br /> У той час М8Л8ТХ був відомий хіба що у вузьких колах, хоча якість
        цих кіл була надзвичайно високою. Вихід такого важливого альбому, тим
        паче в тих умовах відчутної боротьби за існування проєкту і самих
        Ідеалів, що його ведуть, не міг минути без особливої події, якою і стала
        його презентація в Харкові - столиці Black Metal музики Східної Європи
        (якою вона стала завдяки зусиллям радикально налаштованого радикально
        налаштованого Варггота з Nokturnal Mortum)
        <br /> <br /> Отже, цей запис зберігався у нас довгі роки, і ось, майже
        в первозданному відео він публікується на сторінках WJ. Концерт цікавий
        тим, що місце вокаліста у складі гурту займає І. - барабанщик з перших
        двох альбомів, який записав вокал на «Непохитну Віру» і потім, вже 2009
        року, залишив проект. <br /> Запис видається трохи урізаним, але цього
        року &nbsp;<a href="http://militant.zone/">MILITANT ZONE</a> обіцяє
        видати цей матеріал у повному форматі на DVD.
        <br />
        &nbsp;
        <Iframe
          frameborder="0"
          width="260"
          height="270"
          src="https://www.dailymotion.com/embed/video/x7smisp?autoplay=1"
          allowfullscreen=""
          allow="autoplay"
        ></Iframe>
      </P>
    </main>
  );
};

export default Concert;
