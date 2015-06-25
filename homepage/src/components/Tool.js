'use strict';

import React from 'react';
import commonStyles from '../styles/common-styles';
import prefixr from 'react-prefixr';

var linkStyle = {
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

var imageStyle = {
  boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.25)',
  width: '70px',
  minWidth: '70px',
  height: '70px',
  borderRadius: '35px',
  position: 'relative',
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'block',
  WebkitTransition: '0.5s ease 0s',
  transition: 'transform 0.5s ease 0s',
  border: '0px none',
  boxSizing: 'border-box'
};

var toolDetailContainerStyle = {
  marginLeft: '10px',
  boxSizing: 'border-box'
};

var toolDetailStyle = {
  position: 'relative',
  top: '50%',
  transform: 'translateY(-50%)',
  boxSizing: 'border-box'
};

var toolTitleStyle = {
  fontSize: '120%',
  fontWeight: '100',
  margin: '0px',
  padding: '0px',
  boxSizing: 'border-box',
  fontFamily: commonStyles.fontFamily
};

var toolSubTitleStyle = {
  color: '#F5F5F5',
  fontSize: '110%',
  boxSizing: 'border-box',
  fontFamily: commonStyles.fontFamily
};

var Tool = React.createClass({
  getInitialState: function() {
    return {hover: false};
  },
  toggleHover: function(event) {
    if (!this.state.hover) {
      event.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
      this.setState({hover: true});
    }
    else {
      event.currentTarget.style.backgroundColor = 'transparent';
      this.setState({hover: false});
    }
  },
  render: function() {
    toolTitleStyle.color = this.props.color;
    return (
      <a href={this.props.url} style={linkStyle} target='_blank'
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <img src={this.props.imageUrl} style={imageStyle}/>
        <div style={toolDetailContainerStyle}>
          <div style={toolDetailStyle}>
            <h4 style={toolTitleStyle}>{this.props.title}</h4>
            <p style={toolSubTitleStyle}>{this.props.subTitle}</p>
          </div>
        </div>
      </a>
    );
  }
});

module.exports = Tool;