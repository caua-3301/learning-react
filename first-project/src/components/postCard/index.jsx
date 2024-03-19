import PropTypes from 'prop-types';
import React from 'react';

//todo: conhecido como props
import './style.css';

export const PostCard = (props = {}) => {
  return (
    <div className="card">
      <img src={props.photoUrl} alt="imagemLegal"></img>
      <h4>Titulo: {props.title} </h4>
      <p> {props.completed ? 'Conpletada' : 'Por fazer'} </p>
    </div>
  );
};

PostCard.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool,
};
