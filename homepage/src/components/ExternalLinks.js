'use strict';

import React from 'react';
import ExternalLink from './ExternalLink'
import defaultLinks from '../text/static-links';

class ExternalLinks extends React.Component {
  constructor(props) {
    super(props);

    this.blogSectionStyle = {
      width: '100%',
      boxSizing: 'border-box'
    };

    this.state = {listOfLinks: []};
  }

  componentWillMount() {
    this.setState({listOfLinks: this.loadListOfExternalLinks()});
  }

  loadListOfExternalLinks() {
    // TODO implement this if necessary
    return defaultLinks;
  }

  render() {
    return (
      <div style={this.blogSectionStyle}>
        {this.state.listOfLinks.map(function(link) {
          return <ExternalLink destinationUrl={link.url} displayText={link.name} key={link.key}/>
        })}
      </div>
    );
  }
}

module.exports = ExternalLinks;