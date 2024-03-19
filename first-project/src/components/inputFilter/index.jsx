import React from 'react';
import PropTypes from 'prop-types';

export const MyInput = ({ hadleChange, filterPage }) => {
  return <input onChange={hadleChange} value={filterPage} type="search" placeholder="Digite aqui" />;
};

MyInput.propTypes = {
  hadleChange: PropTypes.func,
  filterPage: PropTypes.func,
};
