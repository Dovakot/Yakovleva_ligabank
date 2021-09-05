import React from 'react';

import ContactsItem from './contacts-item/contacts-item';

const CONTACT_LIST = [
  {
    id: 'MOBILE_PHONE',
    phone: '*0904',
    text: 'Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2',
  },
  {
    id: 'PHONE',
    phone: '8 800 111 22 33',
    text: 'Бесплатный для всех городов России',
  },
];

const getContactsItem = ({id, phone, text}) => (
  <ContactsItem
    key={id}
    id={id}
    phone={phone}
    text={text}
  />
);

function Contacts() {
  return (
    <ul className="contacts page-footer__contacts">
      {CONTACT_LIST.map(getContactsItem)}
    </ul>
  );
}

export default Contacts;
