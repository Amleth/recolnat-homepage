'use strict';

import React from 'react';
import commonStyles from '../styles/common-styles';
import DateConverter from './DateConversion';

class NewsItem extends React.Component {
  constructor(props) {
    super(props);

    this.borderBoxStyle = {
      boxSizing: 'border-box'
    };

    this.displayBlockStyle = {
      display: 'block'
    };

    this.bbDbStyle = [this.borderBoxStyle, this.displayBlockStyle];

    this.newsEntryStyle = {
      color: '#000',
      marginTop: '20px',
      display: 'block',
      boxSizing: 'border-box',
      height: '210px',
      overflow: 'hidden'
    };

    this.headerTextStyle = {
      fontSize: '1.25em',
      margin: '0px',
      fontWeight: '100',
      padding: '0px',
      boxSizing: 'border-box',
      fontFamily: commonStyles.fontFamily
    };

    this.newsParagraphStyle = {
      fontSize: '90%',
      margin: '0px',
      textAlign: 'justify',
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: commonStyles.fontFamily
    };

    this.newsDateStyle = {
      color: '#666',
      boxSizing: 'border-box',
      display: 'block',
      fontFamily: commonStyles.fontFamily,
      fontSize: '90%',
      marginBottom: '5px',
      textAlign: 'right',
      width: '100%'
    };

    this.imageStyle = {
      border: '0px none',
      boxShadow: '0px 0px 3px 1px rgba(0, 0, 0, 0.82)',
      boxSizing: 'border-box',
      float: 'right',
      marginLeft: '10px',
      marginTop: '5px',
      maxHeight: '100px'
    };

    if (this.props.align) {
      this.imageStyle.float = 'right';
      this.imageStyle.marginLeft = '10px';
      this.imageStyle.marginRight = '0px';
    }
    else {
      this.imageStyle.float = 'left';
      this.imageStyle.marginLeft = '0px';
      this.imageStyle.marginRight = '10px';
    }
  }

  render() {
    // TODO Do something witty to convert machine date to human date
    var humanReadablePublicationDate = DateConverter(this.props.publicationDate);
    return (
      <li style={this.borderBoxStyle}>
        <article style={this.newsEntryStyle}>
          <header style={this.bbDbStyle}>
            <h3 style={this.headerTextStyle}><a href={this.props.source} target="_blank">{this.props.title}</a></h3>
            <p style={this.newsParagraphStyle}>
              <time style={this.newsDateStyle}
                    dateTime={this.props.publicationDate}>{humanReadablePublicationDate}</time>
            </p>
          </header>
          <img style={this.imageStyle} src={this.props.imageUrl} />
          <span style={this.newsParagraphStyle} dangerouslySetInnerHTML={{__html: this.props.content}} />
        </article>
      </li>
    );
  }
}

module.exports = NewsItem;