import { ChangeEvent } from 'react';

import { Container } from '../src/components/Container/Container';
import { Checkbox, RadioButton, TextInput } from '../src/components/inputs';
import { NavigationDrawer } from '../src/components/navigation/NavigationDrawer/NavigationDrawer';
import { OutsideClick } from '../src/components/OutsideClick/OutsideClick';

import type { NextPage } from 'next';
const Home: NextPage = () => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  return (
    <>
      <Container>
        <TextInput label='Label' textLimit={9} value='' onChange={onChange} />
        <Checkbox label='Label' checked={false} onChange={onChange} />
        <RadioButton label='Label' checked={false} onChange={onChange} />
      </Container>
      <OutsideClick isOpen={true} onClose={() => {}}>
        <NavigationDrawer title={'TItle'} items={[]} />
      </OutsideClick>
    </>
  );
};

export default Home;
