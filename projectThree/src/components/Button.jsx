import PropTypes from 'prop-types';

export const Button = ({ onButtonClick }) => {
  return <button onClick={onButtonClick}>Clique</button>;
};

Button.propTypes = {
  onButtonClick: PropTypes.func,
};
