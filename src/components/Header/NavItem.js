import React from 'react';
import PropTypes from 'prop-types';

export const NavItem = ({ href, text }) => {
  return (
    <li className="nav-list__item">
      <a href={href}>{text}</a>
    </li>
  );
};

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
