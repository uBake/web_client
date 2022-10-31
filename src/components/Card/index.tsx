import { FC } from 'react';

import { useStyles } from './styles';

interface CardProps {
  head: string;
  title: string;
}

export const Card: FC<CardProps> = ({ head, title }) => {
  const styles = useStyles();

  return (
    <div className={styles.card}>
      <div style={{ background: head }} className={styles.cardHead}></div>
      <div className={styles.cardBody}>
        <p className={styles.cardTitle}>{title}</p>
      </div>
    </div>
  );
};
