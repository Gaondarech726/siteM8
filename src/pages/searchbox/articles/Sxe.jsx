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

export const Sxe = styled.img`
  height: auto;
  width: 740px;
  border-bottom: 5px solid #bd1e2c;
  margin-bottom: 50px;
`;

const SxeImg = require('../../../img/sxe/Sxe.jpg');

const Sxes = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/state';

  return (
    <main>
      <BackLink to={backLinkHref}>Повернутись назад</BackLink>

      <H1>Будь тверезим!</H1>

      <Sxe src={SxeImg} alt="Fehu" />
      <P>
        Зараз складно зрозуміти, чому і як у створенні мільйонів закріпився
        стереотип, що свято немислиме без алкоголю, але за допомогою чого він
        підтримується, видно неозброєним оком - на це працюють і знижки перед
        великими святами на алкогольну продукцію в магазинах, і святкові
        передачі, що транслюються по центральних телеканалах, із сотнями «зірок»
        естради, які об'їдаються, і образи у фільмах і піснях масової культури
        (не тільки сучасних, а й періоду СРСР), і багато чого інше...
        Середньостатистична людина, яка навіть вважає себе непитущою, дозволяє
        собі вживати алкоголь у свято, саме тому, що свято, наприклад Новий Рік,
        міцно закріплене в умах громадян як день вседозволеності і надмірностей,
        день, коли можна «розслабитися» і відпочити від обридлої рутини,
        вдосталь напившись і наївшись.
        <br />
        <br />
        У це сімейне свято рік за роком і діти формують і закріплюють огидну
        звичку, орієнтуючись на приклади дорослого оточення, тож до юності в
        кожного з них сформовано цілком чіткий образ будь-якого свята як
        застілля з великою кількістю алкоголю, п'яними розмовами, неодмінною
        обжерливістю і розбещеною поведінкою. На тлі усього цього слабкі та
        бездарні потуги пропаганди здорового способу життя від держави
        виглядають по-справжньому смішно.
        <br />
        <br />
        Природно, у тому разі, якщо влада не впевнена в підтримці своїх
        громадян, їй абсолютно не вигідна їхня абсолютна тверезість. громадян,
        їй абсолютно не вигідна їхня абсолютна тверезість, адже тверезість
        змушує думати, вона змушує діяти. Чи варто говорити, що чинна влада
        Російської Федерації, як і багатьох інших держав, повністю усвідомлює
        свої хиткі позиції, спричинені власною некомпетентністю, неспроможністю
        виконувати свої функції і захищати своїх громадян: останні події в нашій
        країні демонструють це найбільш яскраво.
        <br />
        <br />
        При цьому, державі для її існування потрібні відносно здорові працівники
        і платники податків. Саме тому в міру п'яний овоч, пару раз на місяць
        дозволяє собі «культурно» вилити невдоволення в компанії товаришів по
        чарці, але здатний підтримувати здоров'я у відносному порядку -
        ідеальний громадянин РФ. Він ідеальний виборець, ідеальний працівник,
        навіть ідеальний опозиціонер, у міру незадоволений, багато в чому
        незгодний, але мирний, що не дозволяє собі й натяку на радикалізм.
        <br />
        <br />
        На противагу цьому ми переосмислюємо і відкидаємо ті слабкості, що стали
        звичними багатьом з юних років. Повна відмова від шкідливих звичок
        насамперед допомагає за все допомагає критично мислити, об'єктивно
        оцінюючи свої можливості і прогнозуючи можливі ситуації. Можна
        заперечити, що алкоголь розкріпачує та спонукає до активної дії,
        згадавши веселі часи 90-х років, проте зараз, в умовах найжорстокіших
        репресій з боку держави за будь-який натяк на «політичну справу»,
        необдумана дія не набагато краща за її відсутність. Перебувати в
        тверезому розумі - ось обов'язок кожного з нас, якщо ми дійсно хочемо
        змінити навколишнє середовище. дійсність.
        <br />
        <br />
        Про безліч смертей, безпосередньо пов'язаних із вживанням алкоголю та
        інших наркотичних засобів, говорити, мабуть, зайве: статистика нещадно
        демонструє наслідки не тільки алкоголізму, а й епізодичного, навіть
        одноразового вживання алкоголю юними дівчатами и парнями.
        <br />
        <br />
        Виживанню нашої раси загрожує не тільки расове змішання або вбивства на
        міжнаціональному та міжрасовому ґрунті, вплив алкоголю на організми
        майбутніх батьків, особливо жінок, - найпотужніший чинник, що сприяє
        виродженню.
        <br />
        <br />
        Чи варто говорити про те, що будь-яка досить сильна звичка робить людину
        вразливою в умовах неможливості її задоволення? Наприклад, у разі, якщо
        людина потрапляє під прес системи, у неї з'являється зайвий важіль
        безпосереднього на неї впливу: ти робиш те, що потрібно, і отримуєш те,
        чого відчайдушно потребуєш. Природно, у критичній ситуації подвійно
        складно буде адаптуватися людині, яка звикла регулярно «розслаблятися»
        незрозуміло від чого, а значить, зламається вона з більшою ймовірністю.
        <br />
        <br />
        Найкращі сини Білої раси, люди, що ділом, а не словом, довели вірність
        нашим вічним ідеалам, однозначно висловлювалися щодо обговорюваного
        питання і на власному прикладі демонстрували правильне ставлення до
        цього пороку: Д. Боровиков, М. Базильов, А. Воєводін, М. Корольов, -
        список можна продовжувати й далі...
        <br />
        <br />
        «Ідея StraightEdge - це ідея самоконтролю. Мабуть, це найголовніша
        причина, через яку ми назавжди закреслюємо наркотики та алкоголь. Вони
        гублять, насамперед, навіть не тіло, а розум, душу, психіку людини,
        роблять їх м'якшими. [...] Влада над собою - найвища влада!» Дмитро
        Боровиков.
        <br />
        <br />
        Саме з усіх цих причин свідомі, радикально налаштовані, радикально
        налаштовані націонал-соціалісти зараз просто не можуть допустити для
        себе таких слабкостей, як алкоголь чи паління - у катастрофічних умовах
        сучасної цивілізації для нас це недозволена розкіш. сучасної цивілізації
        для нас це недозволена розкіш. Тому ми закликаємо Вас, тих, хто все ще
        допускає для себе компроміси в цьому питанні, повністю і назавжди
        відмовитися від вживання алкоголю, нікотину та інших шкідливих речовин,
        що викликають залежність.
        <br />
        <br />
        &nbsp;
      </P>
    </main>
  );
};

export default Sxes;
