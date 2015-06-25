'use strict';

import React from 'react';
import ExternalLink from './ExternalLink'
import defaultLinks from '../text/static-links';

var blogSectionStyle = {
  width: '100%',
  boxSizing: 'border-box'
};

var ExternalLinks = React.createClass({
  getInitialState: function() {
    var listOfLinks = this.loadListOfExternalLinks();
    return {
      listOfLinks: listOfLinks
    };
  },
  loadListOfExternalLinks: function() {
    // TODO implement this if necessary
    return defaultLinks;
  },
  render: function() {
    return (
      <div style={blogSectionStyle}>
         {this.state.listOfLinks.map(function(link) {
           return <ExternalLink destinationUrl={link.url} displayText={link.name} key={link.key}/>
         })}
      </div>
    );
  }
});

module.exports = ExternalLinks;