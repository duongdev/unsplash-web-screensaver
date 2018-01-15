import React from 'react';
import PropTypes from 'prop-types';

import FA from 'react-fontawesome';

const PhotoCredit = ({
  photo, style, onRefreshPhoto, loading, limit, remaining
}) => (
  <div style={{
    color: '#FFF',
    fontSize: 12,
    textShadow: '#000 0 0 12px',
    position: 'fixed',
    top: 10, left: 10,
    opacity: 0.8,
    transition: 'all 1s',
    // filter: `blur(${loading ? 3 : 0}px)`,
    ...style
  }}>
    <a
      href={photo.links.html}
      title="Open photo"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontSize: 15
      }}
    >{photo.location && photo.location.title}</a>
    <div style={{
      display: 'flex',
      opacity: 0.8,
      marginTop: 5
    }}>
      <div style={{
        width: 15, height: 15, marginTop: 1,
        backgroundImage: `url(${photo.user.profile_image.small})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        borderRadius: '50%',
        marginRight: 5,
        boxShadow: '#000 0 0 20px'
      }} />
      <a
        href={`https://unsplash.com/@${photo.user.username}?utm_source=desktop-screensaver&utm_medium=referral&utm_campaign=api-credit`}
        title="View profile"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: 5 }}
      >{photo.user.name} / Unsplash</a>
      <FA
        name="heart"
        style={{
          marginTop: 2, marginRight: 5
        }}
      />
      <div style={{ marginRight: 10 }}>{photo.likes}</div>
      <div
        onClick={onRefreshPhoto}
        style={{ cursor: 'pointer', display: 'flex' }}
      >
        <FA
          title="Load new photo"
          name="refresh"
          style={{
            marginTop: 2, marginRight: 5
          }}
        />
        <div style={{
          opacity: 0.8,
          letterSpacing: 1
        }}>{remaining}/{limit}</div>
      </div>
    </div>
  </div>
);

PhotoCredit.propTypes = {
  photo: PropTypes.instanceOf(Object).isRequired,
  style: PropTypes.instanceOf(Object),
  onRefreshPhoto: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  limit: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired
};
PhotoCredit.defaultProps = {
  style: {}
};

export default PhotoCredit;
