import React, { Component } from 'react';
import loading from './Loading.svg';

class Callback extends Component {
  render() {
    const style = {
      display: 'flex',
      justifyContent: 'center',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      height: '100vh'
    }

    return (
      <div style={style}>
        <img src={loading} alt="loading"/>
      </div>
    );
  }
}

export default Callback;
