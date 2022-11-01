import type { NextPage } from 'next';

import { Container } from '../src/components/Container/Container';
import { Button } from '../src/components/Button/Button';
import { Badge } from '../src/components/Badge/Badge';

const Home: NextPage = () => {
  return (
    <Container>
			<Badge count={5}>
      <Button>Btn</Button>
			</Badge>
    </Container>
  );
};

export default Home;
