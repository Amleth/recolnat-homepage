import React from 'react';
import UserLogin from './UserLogin';

import baselines from '../text/recolnat-baselines';
import recolnatAbout from '../text/static-about';
import recolnatLogo from '../../node_modules/recolnat-style-guide/images/recolnat_C_H50.png';
import commonStyles from '../styles/common-styles';
import leafImage from 'url-loader?http://dsiphoto.mnhn.fr/sonnerat/GBIF/Sol-Orc-JPEG-054/P00412199.jpg';
import recolnatPartnersLogo from 'url-loader?http://recolnat.org/img/part_log.png';

var barStyle = {
  paddingTop: '10px',
  paddingBottom: '10px',
  display: 'flex',
  flexDirection: 'column',
  margin: '0px auto',
  maxWidth: '900px',
  boxSizing: 'borderBox'
};

var miniBarStyle = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  boxSizing: 'borderBox'
};

var titleStyle = {
  flex: '3 1 0%',
  order: '1',
  minHeight: '111px',
  display: 'block',
  boxSizing: 'border-box'
};

var linkStyle = {
  textDecoration: 'none',
  background: 'none repeat scroll 0% 0% transparent',
  boxSizing: 'border-box'
};

var headerStyle = {
  color: '#F5F5F5',
  fontFamily: '"Gabriela",serif',
  fontSize: '200%',
  width: '100%',
  borderBottom: '2px solid rgba(255, 255, 255, 0.25)',
  fontWeight: '100 !important',
  margin: '0px',
  padding: '0px',
  boxSizing: 'border-box'
};

var logoStyle = {
  height: '50px',
  marginBottom: '5px',
  border: '0px none',
  boxSizing: 'borderBox'
};

var baselinesStyle = {
  height: '50px',
  boxSizing: 'border-box'
};

var baseLineParagraphStyle = {
  margin: '0px',
  padding: '0px',
  fontSize: '90%',
  color: '#FFFFFF',
  fontFamily: commonStyles.fontFamily
};

var baseLineItalicParagraphStyle = {
  margin: '0px',
  padding: '0px',
  fontSize: '90%',
  color: '#FFFFFF',
  fontFamily: commonStyles.fontFamily,
  fontStyle: 'italic'
};

var sectionStyle = {
  display: 'none',
  padding: '0px',
  textAlign: 'justify',
  boxSizing: 'border-box'
};

var divStyle = {
  paddingLeft: '100px',
  paddingRight: '100px',
  paddingTop: '50px',
  paddingBottom: '50px',
  boxSizing: 'border-box'
};

var closeActionStyle = {
  border: '2px solid rgba(255, 255, 255, 0.25)',
  color: '#F5F5F5',
  display: 'block',
  fontSize: '200%',
  lineHeight: '50px',
  margin: '0px auto 20px',
  textAlign: 'center',
  fontFamily: commonStyles.fontFamily,
  textDecoration: 'none',
  width: '100%',
  background: 'none repeat scroll 0% 0% transparent',
  boxSizing: 'border-box'
};

var h2Style = {
  fontSize: '200%',
  marginBottom: '1em',
  fontWeight: '100 !important',
  textAlign: 'justify',
  margin: '0px',
  padding: '0px',
  color: '#FFFFFF'
};

var imageFloatStyle = {
  float: 'right',
  maxWidth: '100px',
  marginLeft: '20px',
  marginBottom: '10px',
  border: '0px none',
  boxSizing: 'border-box'
};

var fullWidthStyle = {
  width: '100%',
  textAlign: 'justify',
  boxSizing: 'border-box',
  color: '#FFFFFF'
};

var linkToSiteParagraphStyle = {
  textAlign: 'center',
  width: '100%'
};

var linkToSiteStyle = {
  border: '2px solid rgba(255, 255, 255, 0.25)',
  color: '#F5F5F5',
  display: 'block',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  margin: '40px auto',
  padding: '10px',
  textDecoration: 'none',
  maxWidth: '200px',
  background: 'none repeat scroll 0% 0% transparent',
  boxSizing: 'border-box'
};

var partnerImageStyle = {
  border: '5px solid rgba(255, 255, 255, 0.1)',
  width: '100%'
};

var TitleBar = React.createClass({
  getInitialState: function() {
    return {nextBackgroundColor: 'rgba(255, 255, 255, 0.15)'};
  },
  showAboutSection: function(event) {
    if (sectionStyle.display == 'none') {
      sectionStyle.display = 'block';
    }
    else {
      sectionStyle.display = 'none';
    }
    this.setState({});
  },
  toggleBackgroundHighlight: function(event) {
    var color = event.currentTarget.style.backgroundColor;
    event.currentTarget.style.backgroundColor = this.state.nextBackgroundColor;
    this.setState({nextBackgroundColor: color});
  },
  render: function() {
    return (
      <div style={barStyle}>
        <div style={miniBarStyle}>
          <section style={titleStyle}>
            <a href='#about' style={linkStyle} onClick={this.showAboutSection}>
              <h1 style={headerStyle}
                onMouseOver={this.toggleBackgroundHighlight}
                onMouseOut={this.toggleBackgroundHighlight}>
                <img src={recolnatLogo} style={logoStyle} />
              </h1>
            </a>
            <div style={baselinesStyle}>
              <p style={baseLineParagraphStyle}>
                              {baselines[0].content}
              </p>
              <p style={baseLineItalicParagraphStyle}>
                              {baselines[1].content}
              </p>
            </div>
          </section>
          <UserLogin />
        </div>
        <section style={sectionStyle} id='about'>
          <div style={divStyle}>
            <a style={closeActionStyle}
              onClick={this.showAboutSection}
              onMouseOver={this.toggleBackgroundHighlight}
              onMouseOut={this.toggleBackgroundHighlight}
              href='#'>↥</a>
            <header>
              <h2 style={h2Style}>Le projet e-ReColNat</h2>
            </header>
            <img style={imageFloatStyle} src='http://dsiphoto.mnhn.fr/sonnerat/GBIF/Sol-Orc-JPEG-054/P00412199.jpg'/>
            <p style={fullWidthStyle}>{recolnatAbout}</p>
            <p style={linkToSiteParagraphStyle}>
              <a target='_blank'
                href='http://recolnat.org'
                onMouseOver={this.toggleBackgroundHighlight}
                onMouseOut={this.toggleBackgroundHighlight}
                style={linkToSiteStyle}>↬ Site du projet</a>
            </p>
            <img style={partnerImageStyle} src='http://recolnat.org/img/part_log.png' />
          </div>
        </section>
      </div>
    );
  }
});

module.exports = TitleBar;