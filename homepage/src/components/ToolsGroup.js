'use strict';

import React from 'react';
import Tool from './Tool';
import commonStyles from '../styles/common-styles';
import prefixr from 'react-prefixr';

var toolsGroupStyle = prefixr({
  boxSizing: 'border-box',
  height: '200px',
  listStyle: 'none outside none',
  position: 'relative',
  overflow: 'hidden',
  perspective: '1700px',
  perspectiveOrigin: '0px 50%'
});

var figureStyle = prefixr({
  transformStyle: 'preserve-3d',
  margin: '0px',
  display: 'block',
  boxSizing: 'border-box'
});

var imgStyle = prefixr({
  display: 'block',
  height: '200px',
  position: 'relative',
  width: '100%',
  WebkitTransition: '0.5s ease 0s',
  transition: 'transform 0.5s ease 0s',
  border: '0px none',
  boxSizing: 'border-box'
});

var captionStyle = prefixr({
  backgroundColor: 'rgba(0, 0, 0, 0.69)',
  bottom: '10px',
  position: 'absolute',
  right: '10px',
  WebkitTransition: '0.2s ease-in-out 0s',
  transform: 'translateY(0px)',
  transition: 'transform 0.2s ease-in-out 0s',
  display: 'block',
  boxSizing: 'border-box'
});

var captionHeaderStyle = {
  fontFamily: '"IM Fell English", serif',
  fontSize: '175%',
  padding: '5px',
  color: '#8CA01B',
  fontWeight: '100',
  margin: '0px',
  boxSizing: 'border-box'
};

var toolDetailStyle = prefixr({
  width: '50%',
  boxSizing: 'border-box',
  backgroundColor: 'rgba(0, 0, 0, 0.82)',
  fontSize: '90%',
  height: '100%',
  left: '0px',
  lineHeight: '100%',
  position: 'absolute',
  top: '0px',
  minWidth: '200px',
  WebkitTransition: '0.5s ease 0s',
  backfaceVisibility: 'hidden',
  transformOrigin: '0px 0px 0px',
  transform: 'rotateY(-90deg)',
  transition: 'transform 0.5s ease 0s',
  display: 'block'
});

var toolDetailSplitterStyle = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  margin: '0px',
  padding: '5px',
  width: '100%'
};

var ToolsGroup = React.createClass({
  onHoverIntoFigure: function() {
    captionStyle.WebkitTransform = 'translateY(60px)';
    captionStyle.transform = 'translateY(60px)';
    toolDetailStyle.WebkitTransform = 'rotateY(0deg)';
    toolDetailStyle.transform = 'rotateY(0deg)';
    this.setState({});
  },
  onHoverOutOfFigure: function() {
    captionStyle.WebkitTransform = 'translateY(0px)';
    captionStyle.transform = 'translateY(0px)';
    toolDetailStyle.WebkitTransform = 'rotateY(-90deg)';
    toolDetailStyle.transform = 'rotateY(-90deg)';
    this.setState({});
  },
  render: function() {
    captionHeaderStyle.color = this.props.color;
    return (
      <li style={toolsGroupStyle}>
        <figure
          onMouseOver={this.onHoverIntoFigure}
          onMouseOut={this.onHoverOutOfFigure}
          style={figureStyle}>
          <img style={imgStyle} src={this.props.image} />
          <figcaption style={captionStyle}>
            <h3 style={captionHeaderStyle}>{this.props.caption}</h3>
          </figcaption>
          <section style={toolDetailStyle}>
            <div style={toolDetailSplitterStyle}>
               {this.props.listOfTools.map(function(tool) {
                 return <Tool
                   url={tool.url}
                   imageUrl={tool.imageUrl}
                   title={tool.title}
                   subTitle={tool.subTitle}
                   color={captionHeaderStyle.color}
                   key={tool.key}
                 />;
               })}
            </div>
          </section>
        </figure>
      </li>
    );
  }
});

module.exports = ToolsGroup;