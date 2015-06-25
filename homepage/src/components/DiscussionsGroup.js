'use strict';

import React from 'react';
import DiscussionItem from './DiscussionItem';
import commonStyles from '../styles/common-styles';

import staticDiscussions from '../text/static-discussions'

var blockBorderBoxStyle = {
  display: 'block',
  boxSizing: 'border-box'
};

var headerStyle = {
  fontSize: '150%',
  marginBottom: '0.5em',
  display: 'block',
  textAlign: 'center',
  width: '100%',
  color: '#FFD405',
  fontWeight: '100',
  margin: '0px',
  padding: '0px',
  boxSizing: 'border-box',
  fontFamily: commonStyles.fontFamily
};

var tableStyle = {
  marginBottom: '1em',
  width: '100%',
  borderCollapse: 'collapse',
  borderSpacing: '0px',
  boxSizing: 'border-box'
};

var DiscussionsGroup = React.createClass({
  getInitialState: function() {
    var recentDiscussions = this.loadRecentDiscussionItems();
    return ({
      recentDiscussions: recentDiscussions
    });
  },
  loadRecentDiscussionItems: function() {
    // TODO implement this when forum API becomes available
    return staticDiscussions;
  },
  render: function() {
    return (
      <section style={blockBorderBoxStyle}>
        <header style={blockBorderBoxStyle}>
          <h3 style={headerStyle}>{this.props.moduleName} en direct</h3>
        </header>
        <table style={tableStyle}>
          <tbody>
                    {this.state.recentDiscussions.map(function(disc) {
                      return <DiscussionItem
                        topicTitle={disc.title}
                        topicAuthor={disc.author}
                        topicDate={disc.date}
                        linkToTopic={disc.url}
                        module={disc.module}
                        replies={disc.replies}
                        key={disc.key} />
                    })}
          </tbody>
        </table>
      </section>
    );
  }
});

module.exports = DiscussionsGroup;