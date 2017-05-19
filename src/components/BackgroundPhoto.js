import React from 'react';
import PropTypes from 'prop-types';

import { BackgroundPhoto as zIndex } from 'zIndexes';

export default class BackgroundPhoto extends React.Component {
  static propTypes = {
    onChangePercent: PropTypes.func.isRequired,
    photo: PropTypes.instanceOf(Object).isRequired,
    percent: PropTypes.number.isRequired
  }

  state = {
    photoURL: this.props.photo.urls.small
  }

  componentWillMount() {
    this.photoPreload(this.props.photo);
  }

  componentWillReceiveProps(nextProps) {
    // handle when new photo data is fetched from Unsplash
    if (nextProps.photo.urls.raw !== this.props.photo.urls.raw) {
      this.photoPreload(nextProps.photo);
    }
  }

  photoPreload = (photo) => {
    this.photoLoader(photo, 'small', 10);
    this.photoLoader(photo, 'regular', 50);
    this.photoLoader(photo, 'full', 90);
    this.photoLoader(photo, 'raw', 100);
  }

  photoLoader = (photo, size = 'regular', percent = 50) => {
    console.info('Loading', size);
    const ms = Date.now();
    const urls = photo.urls;
    const image = new Image();
    image.src = urls[size];
    image.onload = () => {
      // if (percent < this.props.percent) return;
      console.info(`${size} photo loaded on ${Date.now() - ms}ms`);
      this.setState({
        photoURL: image.src
      });
      this.props.onChangePercent(percent);
    }
  }

  render() {
    const { photo, percent } = this.props;
    const { photoURL } = this.state;

    const _percent = (percent < 0 || percent >= 100) ? 100 : percent;
    const blur = (100 - _percent) * .2;

    return (
      <div className="BackgroundPhoto" style={{
        position: 'fixed',
        top: 0, right: 0, bottom: 0, left: 0,
        backgroundColor: photo.color,
        backgroundImage: `url(${photoURL})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        transition: 'all 1s',
        filter: `blur(${blur}px)`,
        zIndex
      }} />
    );
  }
}
