import React from 'react';
import PropTypes from 'prop-types';

const st = _s => {
  const s = _s.toString();
  if (s.length < 2) return `0${s}`;
  return s;
};
const time = _t => {
  const t = parseInt(_t);
  return `${st(parseInt(t / 60))}:${st(parseInt(t % 60))}`;
}

export default class PlayerStatus extends React.Component {
  static propTypes = {
    player: PropTypes.instanceOf(Object).isRequired
  }

  state = {
    currentTime: this.props.player.currentTime
  }
  itv = null;

  componentDidMount() {
    this.setState({
      currentTime: this.props.player.currentTime
    });
    this.itv = setInterval(() => {
      this.setState({
        currentTime: this.state.currentTime + 1
      });
    }, 1000);
  }

  componentWillReceiveProps(nextProps) {
    if (
      (nextProps.player.songId !== this.props.player.songId ||
        this.state.currentTime - nextProps.player.currentTime > 10) &&
      this.state.currentTime < nextProps.player.duration
    ) {
      this.setState({
        currentTime: nextProps.player.currentTime
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.itv);
  }

  render() {
    const { player } = this.props;
    const { currentTime } = this.state;

    return (
      <div style={{
        position: 'fixed',
        top: 50, right: ((Date.now() - player.updatedAt) < 30e3) ? -2 : -302,
        transition: 'all 1.5s',
        display: 'flex',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: 2, color: '#FFF',
        width: 300
      }}>
        <div style={{
          padding: 15,
          position: 'relative',
          flexShrink: 0
        }}>
          <div style={{
            backgroundImage: `url(${player.avatar})`,
            backgroundPosition: 'center', backgroundSize: 'cover',
            borderRadius: '50%', height: 40, width: 40
          }} className="rotating" />
          <div style={{
            position: 'absolute',
            top: 6, right: 10,
            padding: 2, fontSize: 10,
            background: 'yellow', color: '#333',
            borderRadius: 4
          }}>{player.kbit}</div>
        </div>
        <div style={{
          padding: 15, paddingLeft: 0,
          flexGrow: 1, overflow: 'hidden'
        }}>
          <div style={{
            overflow: 'hidden', textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>{player.title}</div>
          <div style={{
            opacity: 0.8, fontSize: '0.85em',
            display: 'flex', justifyContent: 'space-between'
          }}>
            <div style={{
              overflow: 'hidden', textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>{player.creator}</div>
            <div style={{
              width: 81, flexShrink: 0, marginLeft: 15, textAlign: 'right'
            }}>{`${time(currentTime)} / ${time(player.duration)}`}</div>
          </div>
        </div>
      </div>
    );
  }
}

