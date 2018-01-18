import React, { Component } from 'react';
import style from './style.scss';
/**
 * Button
 */
export class Button extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={ style.button }>
        Button
      </div>
    );
  }
}

export default Button;
