import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function Button({text, className, isModifier, onButtonClick}) {
  const buttonClass = cn('button', {
    [className]: className,
    'button--small': isModifier,
  });

  return (
    <button
      className={buttonClass}
      type="button"
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  isModifier: PropTypes.bool,
  onButtonClick: PropTypes.func,
};

export default Button;
