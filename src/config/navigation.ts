import { FiHome, FiCalendar } from 'react-icons/fi';

const NAVIGATION = [
  {
    key: 'home',
    path: '/',
    icon: FiHome,
    text: 'Home',
  },
  {
    key: 'calendar',
    path: '/calendar',
    icon: FiCalendar,
    text: 'Calendar',
  },
] as const;

export default NAVIGATION;
