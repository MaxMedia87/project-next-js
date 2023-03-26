import { Htag } from '@/components';
import { Tag } from '@/components';
import { Button } from '@/components';
import { Ptag } from '@/components';
import { Rating } from '@/components';
import { useEffect, useState } from 'react';

export default function Home() {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>Первый Заголовок h1</Htag>
      <Button view='primary' className='MyCustom' arrow='right' onClick={() => setCounter(x => x + 1)}>Подробнее</Button>
      <Button view='ghost' arrow='down'>Подробнее</Button>
      <Ptag size='small'>Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании. Выбор мой пал на эту профессию еще и потому, что Java-разработчики получают самую большую зарплату. Хотя Python начинает догонять Java по многим моментам, но вот в крупном екоме разработке Джава все-таки остается главенствующей сейчас. Скажу так – полнота программы и интенсивность присуща обоим курсам GeekBrains. Хочу отметить, что с первого дня занятий вы приступаете к практике и получаете опыт коммерческой разработки уже в свое резюме. Скажу вам как прошедший это – реально помогло в трудоустройстве!</Ptag>
      <Ptag>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</Ptag>
      <Ptag size='large'>Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.</Ptag>
      <Tag size='small'>10000</Tag>
      <Tag size='medium' color='red' href='http://hh.ru'>hh.ru</Tag>
      <Tag color='green'>-10 000 Р</Tag>
      <Tag color='primary'>Работа в Photoshop</Tag>
      <Rating rating={rating} isEdiatable setRating={setRating}></Rating>
    </>
  );
}
