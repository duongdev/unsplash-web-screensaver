import React from 'react';
import PropTypes from 'prop-types';

import FA from 'react-fontawesome';

const PhotoCredit = ({
  photo, style, onRefreshPhoto, loading
}) => (
  <div style={{
    color: '#FFF',
    fontSize: 12,
    textShadow: '#000 0 0 12px',
    position: 'fixed',
    top: 10, left: 10,
    opacity: 0.8,
    transition: 'all 1s',
    filter: `blur(${loading ? 3 : 0}px)`,
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
    >{photo.location.title}</a>
    <div style={{
      display: 'flex',
      opacity: 0.8,
      marginTop: 5
    }}>
      <div style={{
        width: 15, height: 15,
        backgroundImage: `url(${photo.user.profile_image.small})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        borderRadius: '50%',
        marginRight: 5,
        boxShadow: '#000 0 0 20px'
      }} />
      <a
        href={photo.user.portfolio_url}
        title="View profile"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: 5 }}
      >{photo.user.name}</a>
      <FA
        name="heart"
        style={{
          marginTop: 3, marginRight: 5
        }}
      />
      <div style={{ marginRight: 10 }}>{photo.likes}</div>
      <FA
        title="Load new photo"
        name="refresh"
        style={{
          marginTop: 2, cursor: 'pointer'
        }}
        onClick={onRefreshPhoto}
      />
    </div>
  </div>
);

PhotoCredit.propTypes = {
  photo: PropTypes.instanceOf(Object).isRequired,
  style: PropTypes.instanceOf(Object),
  onRefreshPhoto: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};
PhotoCredit.defaultProps = {
  style: {}
};

export default PhotoCredit;
