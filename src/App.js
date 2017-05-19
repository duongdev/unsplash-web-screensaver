import React, { Component } from 'react';

import Spinner from 'components/Spinner';
import BackgroundPhoto from 'components/BackgroundPhoto';
import PhotoCredit from 'components/PhotoCredit';

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
    const { spinnerPercent } = this.state;
    const photo = getRandomPhoto();

    return (
      <div className="App">
        <Spinner percent={spinnerPercent} />
        <BackgroundPhoto
          photo={photo}
          percent={spinnerPercent}
          onChangePercent={this.setSpinnerPercent}
        />
        <PhotoCredit
          photo={photo}
          onRefreshPhoto={() => {}}
          loading={0 < spinnerPercent && spinnerPercent < 100}
        />
      </div>
    );
  }
}

export default App;
