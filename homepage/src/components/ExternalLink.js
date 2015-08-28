'use strict';

import React from 'react';
import prefixr from 'react-prefixr';

class ExternalLink extends React.Component {
  constructor(props) {
    super(props);

    this.linkStyle = prefixr({
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

    this.state = {hover: false};
  }

  hoverIn() {
    this.setState({hover: true});
  }

  hoverOut() {
    this.setState({hover: false});
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextState.hover) {
      this.linkStyle.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    }
    else {
      this.linkStyle.backgroundColor = 'transparent';
    }
  }

  render() {
    return (
      <a style={this.linkStyle} target='_blank'
         onMouseOver={this.hoverIn.bind(this)}
         onMouseOut={this.hoverOut.bind(this)}
         href={this.props.destinationUrl}>↬&nbsp;{this.props.displayText}</a>
    );
  }
}

module.exports = ExternalLink;