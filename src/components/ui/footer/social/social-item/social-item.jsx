import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../../../svg-icon/svg-icon';
import {IconType} from '../../../../../const';

function SocialItem({name, currentLink}) {
  const icon = IconType[name.toUpperCase()];

  return (
    <li className="social__item">
      <a
        className="social__link"
        href={currentLink}
        aria-label={name}
        target="_blank"
        rel="noreferrer"
      >
        <SvgIcon icon={icon} />
      </a>
    </li>
  );
}

SocialItem.propTypes = {
  name: PropTypes.string.isRequired,
  currentLink: PropTypes.string.isRequired,
};

export default SocialItem;
