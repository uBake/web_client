import { Container } from '../src/components/Container/Container';
import { Icon } from '../src/components/Icon/Icon';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Container>
      <Icon icon='Account' size={200} />
    </Container>
  );
};

export default Home;
