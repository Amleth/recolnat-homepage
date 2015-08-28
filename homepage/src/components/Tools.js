'use strict'

import React from 'react';
import ToolsGroup from './ToolsGroup';

import defaultTools from '../text/static-tools';

class Tools extends React.Component {
  constructor(props) {
    super(props);

    this.toolsStyle = {
      display: 'block',
      boxSizing: 'border-box'
    };

    this.toolListStyle = {
      boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.5)',
      listStyle: 'none outside none',
      margin: '0px',
      padding: '0px',
      width: '100%',
      boxSizing: 'border-box'
    };

    this.state = {tools: []};
  }

  componentWillMount() {
    this.setState({tools: this.loadTools()});
  }

  loadTools() {
    //TODO implement this better for a more dynamic list of tools
    return defaultTools;
  }

  render() {
    return (
      <section style={this.toolsStyle}>
        <ul style={this.toolListStyle}>
          {this.state.tools.map(function(tg) {
            return <ToolsGroup
              image={tg.imageUrl}
              caption={tg.description}
              listOfTools={tg.tools}
              color={tg.color}
              key={tg.key}
              />
          })}
        </ul>
      </section>
    )
  }
}

module.exports = Tools;