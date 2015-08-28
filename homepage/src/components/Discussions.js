'use strict';

import React from 'react';
import DiscussionsGroup from './DiscussionsGroup';
import commonStyles from '../styles/common-styles';

import defaultModuleNames from '../text/static-modules';

class Discussions extends React.Component {
  constructor(props) {
    super(props);

    this.sectionStyle = {
      boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.5)',
      marginTop: '20px',
      backgroundColor: 'rgba(0, 0, 0, 0.82)',
      color: '#F5F5F5',
      padding: '10px',
      display: 'block',
      boxSizing: 'border-box'
    };

    this.headerStyle = {
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

    this.state = {moduleName: []};
  }

  componentWillMount() {
    this.setState({
      moduleNames: this.getAvailableModules()
    });
  }

  getAvailableModules() {
    // TODO implement a more dynamic module loader
    return defaultModuleNames;
  }

  render() {
    return (
      <section style={this.sectionStyle}>
        <h2 style={this.headerStyle}>Dernières discussions</h2>
        {this.state.moduleNames.map(function(mod) {
          return <DiscussionsGroup moduleName={mod.name} key={mod.name}/>
        })}
      </section>
    );
  }
}

module.exports = Discussions;