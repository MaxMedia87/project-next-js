import { Htag } from '@/components';
import { Button } from '@/components';

export default function Home() {
  return (
    <>
      <Htag tag='h1'>Первый Заголовок h1</Htag>
      <Button view='primary' className='MyCustom'>Подробнее</Button>
      <Button view='ghost'>Подробнее</Button>
    </>
  );
}
