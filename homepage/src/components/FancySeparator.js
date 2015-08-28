'use strict';

import React from 'react';

var fancySeparatorUrl = 'http://www.scriptatranslations.com/images/ornament.svg';

class FancySeparator extends React.Component {
  constructor(props) {
    super(props);

    this.separatorStyle = {
      boxSizing: 'border-box',
      marginBottom: '20px',
      marginTop: '20px',
      textAlign: 'center',
      width: '100%'
    };

    this.imageStyle = {
      border: '0px none',
      boxSizing: 'border-box',
      width: '125px'
    };
  }

  render() {
    return (
      <div style={this.separatorStyle}>
        <img src={fancySeparatorUrl} style={this.imageStyle}/>
      </div>
    );
  }
}

module.exports = FancySeparator;