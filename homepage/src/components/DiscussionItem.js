'use strict';

import React from 'react';
import commonStyles from '../styles/common-styles'
import dateConverter from './DateConversion';

/**
 * Properties
 * - topicTitle
 * - topicAuthor
 * - topicModule
 * - linkToTopic
 * - topicDate
 * - replies
 */
class DiscussionItem extends React.Component {
  constructor(props) {
    super(props);

    this.borderBoxStyle = {
      fontFamily: commonStyles.fontFamily,
      boxSizing: 'border-box'
    };

    this.cellOneStyle = {
      padding: '2px',
      textAlign: 'center',
      boxSizing: 'border-box'
    };

    this.otherCellsStyle = {
      padding: '2px',
      textAlign: 'center',
      border: '1px solid rgba(255, 255, 255, 0.25)',
      color: '#BBB',
      boxSizing: 'border-box'
    };

    this.topicLinkStyle = {
      color: '#F5F5F5',
      display: 'block',
      textDecoration: 'none',
      background: 'none repeat scroll 0% 0% transparent',
      boxSizing: 'border-box'
    };

    this.state = {hover: false, color: null};
  }

  getCorrespondingModuleColor() {
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
  }

  getModuleDisplayShortName() {
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
  }

  toggleHighlight() {
    if (!this.state.hover) {
      this.setState({hover: true});
    }
    else {
      this.setState({hover: false});
    }
  }

  componentWillMount() {
    this.setState({color: this.getCorrespondingModuleColor()});
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.hover) {
      this.topicLinkStyle.backgroundColor = 'rgba(255, 255, 255, 0.25)';
    }
    else {
      this.topicLinkStyle.backgroundColor = '';
    }
  }

  render() {
    var humanReadableDate = dateConverter(this.props.topicDate);
    this.cellOneStyle.color = this.state.color;
    this.cellOneStyle.border = '1px solid ' + this.state.color;
    return (
      <tr style={this.borderBoxStyle}>
        <td style={this.cellOneStyle}>{this.getModuleDisplayShortName()}</td>
        <td style={this.otherCellsStyle}>
          <time style = {this.borderBoxStyle}
                dateTime={this.props.topicDate}>{humanReadableDate}</time>
        </td>
        <td style={this.otherCellsStyle}
            onMouseOver={this.toggleHighlight.bind(this)}
            onMouseOut={this.toggleHighlight.bind(this)}
          >
          <a style={this.topicLinkStyle} href={this.props.linkToTopic}>{this.props.topicTitle}</a>
        </td>
        <td style={this.otherCellsStyle}>{this.props.topicAuthor}</td>
        <td style={this.otherCellsStyle}>{this.props.replies} rép.</td>
      </tr>
    );
  }
}

module.exports = DiscussionItem;