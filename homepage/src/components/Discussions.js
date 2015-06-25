'use strict';

import React from 'react';
import DiscussionsGroup from './DiscussionsGroup';
import commonStyles from '../styles/common-styles';

import defaultModuleNames from '../text/static-modules';

var sectionStyle = {
  boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.5)',
  marginTop: '20px',
  backgroundColor: 'rgba(0, 0, 0, 0.82)',
  color: '#F5F5F5',
  padding: '10px',
  display: 'block',
  boxSizing: 'border-box'
};

var headerStyle = {
  fontSize: '200%',
  marginBottom: '1em',
  display: 'block',
  textAlign: 'center',
  width: '100%',
  fontWeight: '100',
  margin: '0px',
  padding: '0px',
  boxSizing: 'border-box',
  fontFamily: commonStyles.fontFamily
};

var Discussions = React.createClass({
  getInitialState: function() {
    var moduleNames = this.getAvailableModules();
    return {
      moduleNames: moduleNames
    };
  },
  getAvailableModules: function() {
    // TODO implement a more dynamic module loader
    return defaultModuleNames;
  },
  render: function() {
    return (
      <section style={sectionStyle}>
        <h2 style={headerStyle}>Dernières discussions</h2>
                    {this.state.moduleNames.map(function(mod) {
                      return <DiscussionsGroup moduleName={mod.name} key={mod.name}/>
                    })}
      </section>
    );
  }
});

module.exports = Discussions;