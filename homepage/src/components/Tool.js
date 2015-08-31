'use strict';

import React from 'react';
import commonStyles from '../styles/common-styles';
import prefixr from 'react-prefixr';

class Tool extends React.Component {
  constructor(props) {
    super(props);

    this.linkStyle = {
      boxSizing: 'border-box',
      display: 'flex',
      flex: '1 1 0%',
      flexDirection: 'row',
      padding: '5px',
      border: '5px',
      textDecoration: 'none',
      width: '100%',
      background: 'none repeat scroll 0% 0% transparent'
    };

    this.imageStyle = {
      boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.25)',
      width: '70px',
      minWidth: '70px',
      height: '70px',
      borderRadius: '35px',
      display: 'block',
      WebkitTransition: '0.5s ease 0s',
      transition: 'transform 0.5s ease 0s',
      border: '0px none',
      boxSizing: 'border-box'
    };

    this.toolDetailContainerStyle = {
      marginLeft: '10px',
      boxSizing: 'border-box'
    };

    this.toolDetailStyle = {
      boxSizing: 'border-box'
    };

    this.toolTitleStyle = {
      fontSize: '120%',
      fontWeight: '100',
      margin: '0px',
      padding: '0px',
      boxSizing: 'border-box',
      fontFamily: commonStyles.fontFamily
    };

    this.toolSubTitleStyle = {
      color: '#F5F5F5',
      fontSize: '110%',
      boxSizing: 'border-box',
      fontFamily: commonStyles.fontFamily
    };

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
      this.linkStyle.backgroundColor = 'rgba(255, 255, 255, 0.15)';
    }
    else {
      this.linkStyle.backgroundColor = 'transparent';
    }
  }

  render() {
    this.toolTitleStyle.color = this.props.color;
    return (
      <a href={this.props.url} style={this.linkStyle} target='_blank'
         onMouseEnter={this.hoverIn.bind(this)}
         onMouseLeave={this.hoverOut.bind(this)}
        >
        <img src={this.props.imageUrl} style={this.imageStyle}/>
        <div style={this.toolDetailContainerStyle}>
          <div style={this.toolDetailStyle}>
            <h4 style={this.toolTitleStyle}>{this.props.title}</h4>
            <p style={this.toolSubTitleStyle}>{this.props.subTitle}</p>
          </div>
        </div>
      </a>
    );
  }
}

module.exports = Tool;