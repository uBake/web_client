import { IconButtonProps } from '../components/buttons/Button/Button';
import { DropDownItemData } from '../components/DropDown/DropDownItem/DropDownItem';

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

export const genFakeDropDownItem = (id: string): DropDownItemData => ({
  arrow: false,
  divider: false,
  id,
  metadata: 'Metadata',
  startSlot: genFakeIconButton(id).icon,
  title: 'Title ' + id
});
