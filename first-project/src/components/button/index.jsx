import { Component } from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

export class MyButton extends Component {
  render() {
    const { loadMore, disabled } = this.props;

    return (
      <button disabled={disabled} onClick={loadMore}>
        Load more
      </button>
    );
  }
}

MyButton.propTypes = {
  loadMore: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
