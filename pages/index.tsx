import { Htag } from '@/components';
import { Button } from '@/components';

export default function Home() {
  return (
    <>
      <Htag tag='h1'>Первый Заголовок h1</Htag>
      <Button view='primary' className='MyCustom' arrow='right'>Подробнее</Button>
      <Button view='ghost' arrow='down'>Подробнее</Button>
    </>
  );
}
