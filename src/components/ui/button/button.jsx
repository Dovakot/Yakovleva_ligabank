import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function Button({text, className, isModifier}) {
  const buttonClass = cn('button', {
    [className]: className,
    'button--small': isModifier,
  });

  return (
    <button
      className={buttonClass}
      type="button"
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  isModifier: PropTypes.bool,
};

export default Button;
