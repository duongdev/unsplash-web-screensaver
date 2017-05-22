import React from 'react';
import PropTypes from 'prop-types';

export default class Messages extends React.Component {
  static propTypes = {
    messages: PropTypes.instanceOf(Array).isRequired,
    updatedAt: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { messages } = this.props;

    return (
      <div className="Messages" style={{
        position: 'fixed',
        width: 300,
        right: (messages.length > 0) ? -2 : -302,
        bottom: 210,
        overflowY: 'auto',
        overflowX: 'visible',
        display: 'flex',
        transition: 'all 1s',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: 2,
        color: 'white',
        justifyContent: 'space-between'
      }}>
        <div style={{ padding: 15 }}><i className="fa fa-facebook" aria-hidden="true"></i></div>
        <div style={{ padding: 15, paddingLeft: 0 }}>{messages.length} new messages</div>
      </div>
    );
  }
}
