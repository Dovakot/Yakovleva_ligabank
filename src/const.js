const NAV_LIST = [
  {
    id: 'SERVICES',
    name: 'Услуги',
  },
  {
    id: 'CALCULATOR',
    name: 'Рассчитать кредит',
  },
  {
    id: 'ROOT',
    name: 'Конвертер валют',
  },
  {
    id: 'CONTACTS',
    name: 'Контакты',
  },
  {
    id: 'SUPPORT',
    name: 'Задать вопрос',
  },
];

const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  SERVICES: '/services',
  CALCULATOR: '/calculator',
  CONTACTS: '/contacts',
  SUPPORT: '/support',
  NOT_FOUND: '/404',
};

const IconType = {
  LOGIN: {
    id: 'icon-login',
    width: 20,
    height: 22,
  },
  PHONE: {
    id: 'icon-phone',
    width: 16,
    height: 16,
  },
  MOBILE_PHONE: {
    id: 'icon-mobile-phone',
    width: 10,
    height: 16,
  },
  FACEBOOK: {
    id: 'icon-facebook',
    width: 9,
    height: 16,
  },
  INSTAGRAM: {
    id: 'icon-instagram',
    width: 16,
    height: 16,
  },
  TWITTER: {
    id: 'icon-twitter',
    width: 16,
    height: 13,
  },
  YOUTUBE: {
    id: 'icon-youtube',
    width: 16,
    height: 13,
  },
  ARROW_RIGHT: {
    id: 'icon-arrow-right',
    width: 42,
    height: 18,
  },
  ARROW_DOWN: {
    id: 'icon-arrow-down',
    width: 18,
    height: 11,
  },
  ARROWS: {
    id: 'icon-arrows',
    width: 54,
    height: 36,
  },
  CALENDAR: {
    id: 'icon-calendar',
    width: 42,
    height: 45,
  },
};

export {
  NAV_LIST,
  AppRoute,
  IconType
};
