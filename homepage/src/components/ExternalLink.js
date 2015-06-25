'use strict';

import React from 'react';
import prefixr from 'react-prefixr';

var linkStyle = prefixr({
  border: '2px solid rgba(0, 0, 0, 0.2)',
  color: '#333',
  display: 'block',
  fontFamily: '"IM Fell English",serif',
  lineHeight: '30px',
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'uppercase',
  width: '100%',
  marginBottom: '10px',
  background: 'none repeat scroll 0% 0%',
  boxSizing: 'border-box'
});

var ExternalLink = React.createClass({
  getInitialState: function() {
    return {hover: false};
  },
  toggleHover: function(event) {
    if (!this.state.hover) {
      linkStyle.backgroundColor = 'rgba(0, 0, 0, 0.1)';
      this.setState({hover: true});
    }
    else {
      linkStyle.backgroundColor = 'transparent';
      this.setState({hover: false});
    }
  },
  render: function() {
    return (
      <a style={linkStyle} target='_blank'
        onMouseOver={this.toggleHover}
        onMouseOut={this.toggleHover}
        href={this.props.destinationUrl}>↬&nbsp;{this.props.displayText}</a>
    );
  }
});

module.exports = ExternalLink;