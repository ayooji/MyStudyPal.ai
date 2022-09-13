import React from 'react';

const Logo = ({ className = '', ...props }) => (
  <img
    width="32"
    height="32"
    viewBox="0 0 32 32"
    src="/logo.jpg"
    alt="Logo"
    className={className}
    {...props}
  />
);

export default Logo;