import { ChangeEvent } from 'react';

import { Container } from '../src/components/Container/Container';
import { Input } from '../src/components/inputs/Input';

import type { NextPage } from 'next';
const Home: NextPage = () => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  return (
    <Container>
      <Input textLimit={9} value='' onChange={onChange} />
      <Input type='checkbox' checked={false} onChange={onChange} />
      <Input type='radio' checked={false} onChange={onChange} />
    </Container>
  );
};

export default Home;
