import React, { Component } from 'react';

import Spinner from 'components/Spinner';
import BackgroundPhoto from 'components/BackgroundPhoto';
import PhotoCredit from 'components/PhotoCredit';
import ClockAndStatus from 'components/ClockAndStatus';
import PhotoList from 'components/PhotoList';

import getRandomPhoto from 'helpers/Unsplash';
import getHomeStatus from 'helpers/HomeStatus';

import './App.css';

const HOME_STATUS_INTERVAL = 30; // Get home temperature & humidity every 30 seconds

class App extends Component {
  state = {
    spinnerPercent: 0,
    photoIndex: 0
  }

  componentDidMount() {
    this.refreshPhoto();
    const _r = () => {
      getHomeStatus().then(status => this.setState({
        status
      }));
      this.handleSelectPhoto(this.state.photoIndex + 1, true)

      setTimeout(_r, HOME_STATUS_INTERVAL * 1000);
    }
    _r();
  }

  refreshPhoto = () => {
    if (this.state.spinnerPercent > 0 || this.state.loadingSplash) return;
    this.setState({
      loadingSplash: true,
      spinnerPercent: 5
    });

    getRandomPhoto()
    .then((response) => {
      const { photo, limit, remaining, photos } = response;
      this.setState({
        photo, limit, remaining, photos,
        loadingSplash: false,
        photoIndex: 0
      });
    });
  }

  setSpinnerPercent = spinnerPercent => this.setState({
    spinnerPercent: spinnerPercent === 100 ? -1 : spinnerPercent
  })

  handleSelectPhoto = (_photoIndex, photoListScroll) => {
    if (!this.state.photos) return;
    const photoIndex = _photoIndex % (this.state.photos.length);
    this.setState({
      photoIndex, photoListScroll,
      photo: this.state.photos[photoIndex],
      spinnerPercent: 5
    });
  }

  render() {
    const { spinnerPercent, photo, limit, remaining, status, photos, photoIndex } = this.state;

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
        <ClockAndStatus
          status={status}
        />
        <PhotoList
          photos={photos}
          idx={photoIndex}
          scroll={this.state.photoListScroll}
          onSelectPhoto={this.handleSelectPhoto}
          loading={0 < spinnerPercent && spinnerPercent < 100}
        />
      </div>
    );
  }
}

export default App;
