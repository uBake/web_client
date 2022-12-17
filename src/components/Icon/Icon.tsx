import { FC, SVGProps } from 'react';

import Account from './AllIcons/Account';
import AccountPlus from './AllIcons/AccountPlus';
import Add from './AllIcons/Add';
import AddButton from './AllIcons/AddButton';
import ArrowBack from './AllIcons/ArrowBack';
import ArrowFilled from './AllIcons/ArrowFilled';
import ArrowNext from './AllIcons/ArrowNext';
import Back from './AllIcons/Back';
import Cake from './AllIcons/Cake';
import Calendar from './AllIcons/Calendar';
import Celebration from './AllIcons/Celebration';
import Close from './AllIcons/Close';
import Courses from './AllIcons/Courses';
import CurrencyExchange from './AllIcons/CurrencyExchange';
import Delete from './AllIcons/Delete';
import Delivery from './AllIcons/Delivery';
import Done from './AllIcons/Done';
import Drawer from './AllIcons/Drawer';
import Error from './AllIcons/Error';
import ExpandMore from './AllIcons/ExpandMore';
import Expense from './AllIcons/Expense';
import Filter from './AllIcons/Filter';
import Forward from './AllIcons/Forward';
import FramePerson from './AllIcons/FramePerson';
import Groups from './AllIcons/Groups';
import Home from './AllIcons/Home';
import Income from './AllIcons/Income';
import Kitchen from './AllIcons/Kitchen';
import Location from './AllIcons/Location';
import Menu from './AllIcons/Menu';
import MopedElectric from './AllIcons/MopedElectric';
import Navigation from './AllIcons/Navigation';
import Notifications from './AllIcons/Notifications';
import Partners from './AllIcons/Partners';
import Pencil from './AllIcons/Pencil';
import Percent from './AllIcons/Percent';
import PhoneEnabled from './AllIcons/PhoneEnabled';
import Placeholder from './AllIcons/Placeholder';
import Reset from './AllIcons/Reset';
import Rouble from './AllIcons/Rouble';
import Search from './AllIcons/Search';
import Settings from './AllIcons/Settings';
import Settings2 from './AllIcons/Settings2';
import Settings3 from './AllIcons/Settings3';
import Statistics from './AllIcons/Statistics';
import Tools from './AllIcons/Tools';
import Window from './AllIcons/Window';

export type IconVariant =
  | 'Account'
  | 'AccountPlus'
  | 'Add'
  | 'AddButton'
  | 'ArrowBack'
  | 'ArrowFilled'
  | 'ArrowNext'
  | 'Back'
  | 'Cake'
  | 'Calendar'
  | 'Celebration'
  | 'Close'
  | 'Courses'
  | 'CurrencyExchange'
  | 'Delete'
  | 'Delivery'
  | 'Done'
  | 'Drawer'
  | 'Error'
  | 'ExpandMore'
  | 'Expense'
  | 'Filter'
  | 'Forward'
  | 'FramePerson'
  | 'Groups'
  | 'Home'
  | 'Income'
  | 'Kitchen'
  | 'Location'
  | 'Menu'
  | 'MopedElectric'
  | 'Navigation'
  | 'Notifications'
  | 'Partners'
  | 'Pencil'
  | 'Percent'
  | 'PhoneEnabled'
  | 'Placeholder'
  | 'Reset'
  | 'Rouble'
  | 'Search'
  | 'Settings2'
  | 'Settings3'
  | 'Settings'
  | 'Statistics'
  | 'Tools'
  | 'Window';

export type IconType = FC<SVGProps<SVGSVGElement>>;

type Icons = Record<IconVariant, IconType>;

export const icons: Icons = {
  Account,
  AccountPlus,
  Add,
  AddButton,
  ArrowBack,
  ArrowFilled,
  ArrowNext,
  Back,
  Cake,
  Calendar,
  Celebration,
  Close,
  Courses,
  CurrencyExchange,
  Delete,
  Delivery,
  Done,
  Drawer,
  Error,
  ExpandMore,
  Expense,
  Filter,
  Forward,
  FramePerson,
  Groups,
  Home,
  Income,
  Kitchen,
  Location,
  Menu,
  MopedElectric,
  Navigation,
  Notifications,
  Partners,
  Pencil,
  Percent,
  PhoneEnabled,
  Placeholder,
  Reset,
  Rouble,
  Search,
  Settings2,
  Settings3,
  Settings,
  Statistics,
  Tools,
  Window
};

export interface IconProps extends SVGProps<SVGSVGElement> {
  icon: IconVariant;
  size?: number;
}

export const Icon: FC<IconProps> = ({ icon, size = 24, ...props }) => {
  const CurrEl = icons[icon];

  return <CurrEl fill='inherit' width={size} height={size} {...props} />;
};
