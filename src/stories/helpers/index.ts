import { IconButtonProps } from './../../components/buttons/Button/Button';

export const genFakeTab = (id: string) => ({
  id: id.toString(),
  title: 'Tab ' + id,
  onTabSelect: (id: string) => {
    console.log('Selected id is ', id);
  }
});

export const genFakeIconButton = (id: string): IconButtonProps => ({
  id,
  icon: 'Placeholder'
});
