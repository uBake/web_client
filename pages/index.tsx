import { ChangeEvent } from 'react';

import { Container } from '../src/components/Container/Container';
import { Input } from '../src/components/inputs/Input';
import { OutsideClick } from '../src/components/OutsideClick/OutsideClick';

import type { NextPage } from 'next';
const Home: NextPage = () => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  return (
    <>
      <Container>
        <Input
          label='Label'
          type='checkbox'
          checked={false}
          onChange={onChange}
        />
        <Input label='Label' type='radio' checked={false} onChange={onChange} />
      </Container>
      <OutsideClick isOpen={true} onClose={() => {}}>
        <Input label='Label' textLimit={9} value='' onChange={onChange} />
      </OutsideClick>
    </>
  );
};

export default Home;
