// react libraries
import React from 'react';

const Button = ({
  name,
  className,
  onClick,
  disabled
}) => (
    <button
      type="submit"
      className={className ? `btn btn-outline-warning ${className}` : 'btn btn-outline-warning'}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </button>
  );

export default Button;
