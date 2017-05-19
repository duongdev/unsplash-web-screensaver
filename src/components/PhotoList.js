import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';

export default class PhotoList extends React.Component {
  static propTypes = {
    photos: PropTypes.instanceOf(Array).isRequired,
    idx: PropTypes.number.isRequired,
    onSelectPhoto: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    scroll: PropTypes.bool
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.scroll) {
      const { idx } = nextProps;
      $(this.container).animate({
        scrollTop: 29 * (idx)
      })
    }
  }

  handleSelect = (idx) => {
    if (this.props.loading) return;
    this.props.onSelectPhoto(idx, false);
  }

  render() {
    const { photos, idx, loading } = this.props;
    console.log(this.props.scroll)

    return (
      <div
        ref={element => this.container = element}
        style={{
          position: 'fixed',
          top: 70, left: 0, bottom: 10, width: 40,
          padding: 10,
          overflowY: 'auto', overflowX: 'hidden',
          marginRight: -50,
          paddingRight: 50,
          filter: `blur(${loading ? 2 : 0}px)`
        }}
        onMouseEnter={() => this.setState({ containerOpacity: 1 })}
        onMouseLeave={() => this.setState({ containerOpacity: 0.8 })}
      >
        <div style={{
          display: 'flex', flexDirection: 'column',
          opacity: this.state.containerOpacity || 0.8,
          transition: 'all .5s',
        }}>
          {photos.map((photo, index) =>
            <div
              style={{
                width: 25, height: 25,
                borderRadius: '50%',
                backgroundImage: `url(${photo.urls.thumb}`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                marginBottom: 7,
                border: `solid 2px ${idx === index ? 'orange' : 'white'}`,
                transition: 'all 1s',
                flexShrink: 0,
                cursor: 'pointer',
                opacity: (this.state.hoverItem === index) ? 0.8 : (idx === index ? 1 : 0.6)
              }}
              onMouseEnter={() => this.setState({ hoverItem: index })}
              onMouseLeave={() => this.setState({ hoverItem: null })}
              onClick={() => this.handleSelect(index)} key={photo.id}
            />
          )}
        </div>
      </div>
    );
  }
}

