'use strict';

import React from 'react';
import commonStyles from '../styles/common-styles'
import dateConverter from './DateConversion';

var borderBoxStyle = {
  fontFamily: commonStyles.fontFamily,
  boxSizing: 'border-box'
};

var cellOneStyle = {
  padding: '2px',
  textAlign: 'center',
  boxSizing: 'border-box'
};

var otherCellsStyle = {
  padding: '2px',
  textAlign: 'center',
  border: '1px solid rgba(255, 255, 255, 0.25)',
  color: '#BBB',
  boxSizing: 'border-box'
};

var topicLinkStyle = {
  color: '#F5F5F5',
  display: 'block',
  textDecoration: 'none',
  background: 'none repeat scroll 0% 0% transparent',
  boxSizing: 'border-box'
};

/**
 * Properties
 * - topicTitle
 * - topicAuthor
 * - topicModule
 * - linkToTopic
 * - topicDate
 * - replies
 */
var DiscussionItem = React.createClass({
  getInitialState: function() {
    var moduleColor = this.getCorrespondingModuleColor();
    return {hover: false, color: moduleColor};
  },
  getCorrespondingModuleColor: function() {
    if (this.props.module == 'vv') {
      return '#FFD405';
    }
    if (this.props.module == 'coll') {
      return '#FFD405';
    }
    if (this.props.module == 'cl') {
      return '#4CFFC1';
    }
    if (this.props.module == 'q') {
      return '#8CA01B';
    }
    if (this.props.module == 'h') {
      return '#8CA01B';
    }
    return '#808080';
  },
  getModuleDisplayShortName: function() {
    // TODO Might consider returning images or logos instead
    if (this.props.module == 'vv') {
      return 'VV';
    }
    if (this.props.module == 'coll') {
      return 'Col';
    }
    if (this.props.module == 'cl') {
      return 'Lab';
    }
    if (this.props.module == 'q') {
      return 'Qu';
    }
    if (this.props.module == 'h') {
      return 'He';
    }
    return '?';
  },
  toggleHighlight: function() {
    if (!this.state.hover) {
      topicLinkStyle.backgroundColor = 'rgba(255, 255, 255, 0.25)';
      this.setState({hover: true});
    }
    else {
      topicLinkStyle.backgroundColor = '';
      this.setState({hover: false});
    }

  },
  render: function() {
    var humanReadableDate = dateConverter(this.props.topicDate);
    cellOneStyle.color = this.state.color;
    cellOneStyle.border = '1px solid ' + this.state.color;
    return (
      <tr style={borderBoxStyle}>
        <td style={cellOneStyle}>{this.getModuleDisplayShortName()}</td>
        <td style={otherCellsStyle}>
          <time style = {borderBoxStyle}
            dateTime={this.props.topicDate}>{humanReadableDate}</time>
        </td>
        <td style={otherCellsStyle}
          onMouseOver={this.toggleHighlight}
          onMouseOut={this.toggleHighlight}
        >
          <a style={topicLinkStyle} href={this.props.linkToTopic}>{this.props.topicTitle}</a>
        </td>
        <td style={otherCellsStyle}>{this.props.topicAuthor}</td>
        <td style={otherCellsStyle}>{this.props.replies} rép.</td>
      </tr>
    );
  }
});

module.exports = DiscussionItem;