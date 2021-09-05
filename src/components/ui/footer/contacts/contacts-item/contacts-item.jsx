import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import SvgIcon from '../../../svg-icon/svg-icon';
import {IconType} from '../../../../../const';

const ID_CONTACT_PHONE = 'PHONE';

function ContactsItem({id, phone, text}) {
  const itemClass = cn('contacts__item', {
    'contacts__item--phone': id === ID_CONTACT_PHONE,
  });
  const icon = IconType[id];
  const currentLink = `tel:${phone.replace(/\s/g, '')}`;

  return (
    <li className={itemClass}>
      <a
        className="link-icon contacts__link"
        href={currentLink}
      >
        <SvgIcon icon={icon} />
        {phone}
      </a>

      <p className="contacts__text">
        {text}
      </p>
    </li>
  );
}

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ContactsItem;
