import React from 'react';
import PropTypes from 'prop-types';

import sprite from '../../../img/sprite.svg';

function SvgIcon({
  icon: {id, width, height},
  className,
}) {
  const linkHref = `${sprite}#${id}`;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      aria-hidden="true"
      focusable="false"
    >
      <use xlinkHref={linkHref} />
    </svg>
  );
}

SvgIcon.propTypes = {
  icon: PropTypes.shape({
    id: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  className: PropTypes.string,
};

export default SvgIcon;
