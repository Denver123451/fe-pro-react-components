import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ header, text }) => {
  return (
    <li className="list__item">
      <h2>{header}</h2>
      <p>{text} </p>
    </li>
  );
};

Article.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
