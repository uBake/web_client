import type { NextPage } from 'next';

import { Badge } from '../src/components/Badge/Badge';
import { Button } from '../src/components/Button/Button';
import { Container } from '../src/components/Container/Container';
import { Icon } from '../src/components/Icon/Icon';

const Home: NextPage = () => {
  return (
    <Container>
      <Icon icon="Account" size={200} />
    </Container>
  );
};

export default Home;
