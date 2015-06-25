'use strict';

import React from 'react';
import commonStyles from '../styles/common-styles';
import DateConverter from './DateConversion';


var borderBoxStyle = {
  boxSizing: 'border-box'
};

var displayBlockStyle = {
  display: 'block'
};

var bbDbStyle = [borderBoxStyle, displayBlockStyle];

var newsEntryStyle = {
  color: '#000',
  marginTop: '20px',
  display: 'block',
  boxSizing: 'border-box',
  height: '210px',
  overflow: 'hidden'
};

var headerTextStyle = {
  fontSize: '1.25em',
  margin: '0px',
  fontWeight: '100',
  padding: '0px',
  boxSizing: 'border-box',
  fontFamily: commonStyles.fontFamily
};

var newsParagraphStyle = {
  fontSize: '90%',
  margin: '0px',
  textAlign: 'justify',
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: commonStyles.fontFamily
};

var newsDateStyle = {
  color: '#666',
  boxSizing: 'border-box',
  display: 'block',
  fontFamily: commonStyles.fontFamily,
  fontSize: '90%',
  marginBottom: '5px',
  textAlign: 'right',
  width: '100%'
};

var imageStyle = {
  border: '0px none',
  boxShadow: '0px 0px 3px 1px rgba(0, 0, 0, 0.82)',
  boxSizing: 'border-box',
  float: 'right',
  marginLeft: '10px',
  marginTop: '5px',
  maxHeight: '100px'
};

var NewsItem = React.createClass({
  getInitialState: function() {
    if (this.props.align) {
      imageStyle.float = 'right';
      imageStyle.marginLeft = '10px';
      imageStyle.marginRight = '0px';
    }
    else {
      imageStyle.float = 'left';
      imageStyle.marginLeft = '0px';
      imageStyle.marginRight = '10px';
    }
    return null;
  },
  render: function() {
    // TODO Do something witty to convert machine date to human date
    var humanReadablePublicationDate = DateConverter(this.props.publicationDate);
    return (
      <li style={borderBoxStyle}>
        <article style={newsEntryStyle}>
          <header style={bbDbStyle}>
            <h3 style={headerTextStyle}><a href={this.props.source} target="_blank">{this.props.title}</a></h3>
            <p style={newsParagraphStyle}>
              <time style={newsDateStyle}
                dateTime={this.props.publicationDate}>{humanReadablePublicationDate}</time>
            </p>
          </header>
          <img style={imageStyle} src={this.props.imageUrl} />
          <span style={newsParagraphStyle} dangerouslySetInnerHTML={{__html: this.props.content}} />

        </article>
      </li>
    );
  }
});

module.exports = NewsItem;