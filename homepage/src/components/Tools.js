'use strict'

import React from 'react';
import ToolsGroup from './ToolsGroup';

import defaultTools from '../text/static-tools';

var toolsStyle = {
  display: 'block',
  boxSizing: 'border-box'
};

var toolListStyle = {
  boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.5)',
  listStyle: 'none outside none',
  margin: '0px',
  padding: '0px',
  width: '100%',
  boxSizing: 'border-box'
};

var Tools = React.createClass({
  getInitialState: function() {
    var defaultTools = this.loadTools();
    return {
      tools: defaultTools
    };
  },
  loadTools: function() {
    //TODO implement this better for a more dynamic list of tools
    return defaultTools;
  },
  render: function() {
    return (
      <section style={toolsStyle}>
        <ul style={toolListStyle}>
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
});

module.exports = Tools;