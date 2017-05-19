import React, { Component } from 'react';

import BackgroundPhoto from 'components/BackgroundPhoto';
import Spinner from 'components/Spinner';

import getRandomPhoto from 'helpers/Unsplash';

import './App.css';

class App extends Component {
  state = {
    spinnerPercent: 0
  };

  setSpinnerPercent = spinnerPercent => this.setState({
    spinnerPercent: spinnerPercent === 100 ? -1 : spinnerPercent
  });

  render() {
    const photo = getRandomPhoto();
    return (
      <div className="App">
        <Spinner percent={this.state.spinnerPercent} />
        <BackgroundPhoto
          photo={photo}
          percent={this.state.spinnerPercent}
          onChangePercent={this.setSpinnerPercent}
        />
      </div>
    );
  }
}

export default App;
