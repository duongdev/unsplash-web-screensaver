import React from 'react'
import PropTypes from 'prop-types';
import moment from 'moment';

import FA from 'react-fontawesome';

export default class ClockAndStatus extends React.Component {
  static propTypes = {
    style: PropTypes.instanceOf(Object),
    status: PropTypes.instanceOf(Object)
  }

  state = {
    time: moment()
  }

  componentDidMount() {
    const _r = () => {
      this.setState({
        time: moment()
      });
      setTimeout(_r, 10000);
    };
    _r();
  }

  render() {
    const { style, status } = this.props;
    const { time } = this.state;

    return (
      <div
        style={{
          position: 'fixed',
          bottom: 50, right: 50,
          color: '#FFF',
          textShadow: '#000 0 0 12px',
          // display: 'flex',
          // fontFamily: 'sans-serif',
          ...style
        }}
      >
        <div style={{
          display: 'flex',
          position: 'relative'
        }}>
          {status &&
            <div style={{
              display: 'flex', flexDirection: 'column', fontSize: 30,
              fontWeight: 300, margin: 'auto', marginRight: 10,
              paddingTop: 8,
              paddingRight: 24
            }}>
              <div style={{ marginBottom: 2 }}><FA className="fa-fw" name="thermometer-empty" /> {status.temp}</div>
              <div><FA className="fa-fw" name="snowflake-o" /> {status.hum}</div>
            </div>
          }
          <div style={{
            fontSize: 100,
            fontWeight: 300,
            letterSpacing: 2, marginRight: -2,
            fontFamily: 'Roboto',
            position: 'relative'
          }}>
            {time.format('H:mm')}
          </div>
        </div>
        <div style={{
          textAlign: 'right',
          fontSize: 30,
          paddingRight: 7,
          fontWeight: 300,
        }}>{time.format('dddd, MMMM Do YYYY')}</div>
      </div>
    );
  }
}

