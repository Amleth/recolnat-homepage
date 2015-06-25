'use strict';

import React from 'react';

var fancySeparatorUrl = 'http://www.scriptatranslations.com/images/ornament.svg';

var separatorStyle = {
  boxSizing: 'border-box',
  marginBottom: '20px',
  marginTop: '20px',
  textAlign: 'center',
  width: '100%'
};

var imageStyle = {
  border: '0px none',
  boxSizing: 'border-box',
  width: '125px'
};

var FancySeparator = React.createClass({
  render: function() {
    return (
      <div style={separatorStyle}>
        <img src={fancySeparatorUrl} style={imageStyle}/>
      </div>
    );
  }
});

module.exports = FancySeparator;