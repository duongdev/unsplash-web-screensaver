import React, { Component } from 'react';

import Spinner from 'components/Spinner';
import BackgroundPhoto from 'components/BackgroundPhoto';
import PhotoCredit from 'components/PhotoCredit';

import getRandomPhoto from 'helpers/Unsplash';

import './App.css';

class App extends Component {
  state = {
    spinnerPercent: 0
  }

  componentDidMount() {
    this.refreshPhoto();
  }

  refreshPhoto = () => {
    if (this.state.spinnerPercent > 0 || this.state.loadingSplash) return;
    this.setState({
      loadingSplash: true,
      spinnerPercent: 5
    });

    getRandomPhoto()
    .then((response) => {
      const { photo, limit, remaining } = response;
      this.setState({
        photo, limit, remaining,
        loadingSplash: false
      });
    });
  }

  setSpinnerPercent = spinnerPercent => this.setState({
    spinnerPercent: spinnerPercent === 100 ? -1 : spinnerPercent
  });

  render() {
    const { spinnerPercent, photo, limit, remaining } = this.state;

    if (!photo) {
      return (<div>Loading...</div>);
    }

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
          onRefreshPhoto={this.refreshPhoto}
          loading={0 < spinnerPercent && spinnerPercent < 100}
          limit={limit} remaining={remaining}
        />
      </div>
    );
  }
}

export default App;
