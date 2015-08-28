import React from 'react';
import UserLogin from './UserLogin';

import baselines from '../text/recolnat-baselines';
import recolnatAbout from '../text/static-about';
import recolnatLogo from '../../node_modules/recolnat-style-guide/images/recolnat_C_H50.png';
import commonStyles from '../styles/common-styles';
import leafImage from 'url-loader?http://dsiphoto.mnhn.fr/sonnerat/GBIF/Sol-Orc-JPEG-054/P00412199.jpg';
import recolnatPartnersLogo from 'url-loader?http://recolnat.org/img/part_log.png';

class TitleBar extends React.Component {
  constructor(props) {
    super(props);

    this.barStyle = {
      paddingTop: '10px',
      paddingBottom: '10px',
      display: 'flex',
      flexDirection: 'column',
      margin: '0px auto',
      maxWidth: '900px',
      boxSizing: 'borderBox'
    };

    this.miniBarStyle = {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      boxSizing: 'borderBox'
    };

    this.titleStyle = {
      flex: '3 1 0%',
      order: '1',
      minHeight: '111px',
      display: 'block',
      boxSizing: 'border-box'
    };

    this.linkStyle = {
      textDecoration: 'none',
      background: 'none repeat scroll 0% 0% transparent',
      boxSizing: 'border-box'
    };

    this.headerStyle = {
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

    this.logoStyle = {
      height: '50px',
      marginBottom: '5px',
      border: '0px none',
      boxSizing: 'borderBox'
    };

    this.baselinesStyle = {
      height: '50px',
      boxSizing: 'border-box'
    };

    this.baseLineParagraphStyle = {
      margin: '0px',
      padding: '0px',
      fontSize: '90%',
      color: '#FFFFFF',
      fontFamily: commonStyles.fontFamily
    };

    this.baseLineItalicParagraphStyle = {
      margin: '0px',
      padding: '0px',
      fontSize: '90%',
      color: '#FFFFFF',
      fontFamily: commonStyles.fontFamily,
      fontStyle: 'italic'
    };

    this.sectionStyle = {
      display: 'none',
      padding: '0px',
      textAlign: 'justify',
      boxSizing: 'border-box'
    };

    this.divStyle = {
      paddingLeft: '100px',
      paddingRight: '100px',
      paddingTop: '50px',
      paddingBottom: '50px',
      boxSizing: 'border-box'
    };

    this.closeActionStyle = {
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

    this.h2Style = {
      fontSize: '200%',
      marginBottom: '1em',
      fontWeight: '100 !important',
      textAlign: 'justify',
      margin: '0px',
      padding: '0px',
      color: '#FFFFFF'
    };

    this.imageFloatStyle = {
      float: 'right',
      maxWidth: '100px',
      marginLeft: '20px',
      marginBottom: '10px',
      border: '0px none',
      boxSizing: 'border-box'
    };

    this.fullWidthStyle = {
      width: '100%',
      textAlign: 'justify',
      boxSizing: 'border-box',
      color: '#FFFFFF'
    };

    this.linkToSiteParagraphStyle = {
      textAlign: 'center',
      width: '100%'
    };

    this.linkToSiteStyle = {
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

    this.partnerImageStyle = {
      border: '5px solid rgba(255, 255, 255, 0.1)',
      width: '100%'
    };

    this.state = {nextBackgroundColor: 'rgba(255, 255, 255, 0.15)', displayAbout: false};
  }

  showAboutSection(event) {
    if (this.state.displayAbout) {
      this.setState({displayAbout: false});
    }
    else {
      this.setState({displayAbout: true});
    }
  }

  toggleBackgroundHighlight(event) {
    var color = event.currentTarget.style.backgroundColor;
    event.currentTarget.style.backgroundColor = this.state.nextBackgroundColor;
    this.setState({nextBackgroundColor: color});
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextState.displayAbout) {
      this.sectionStyle.display = 'block';
    }
    else {
      this.sectionStyle.display = 'none';
    }
  }

  render() {
    return (
      <div style={this.barStyle}>
        <div style={this.miniBarStyle}>
          <section style={this.titleStyle}>
            <a href='#about' style={this.linkStyle} onClick={this.showAboutSection.bind(this)}>
              <h1 style={this.headerStyle}
                  onMouseOver={this.toggleBackgroundHighlight.bind(this)}
                  onMouseOut={this.toggleBackgroundHighlight.bind(this)}>
                <img src={recolnatLogo} style={this.logoStyle} />
              </h1>
            </a>
            <div style={this.baselinesStyle}>
              <p style={this.baseLineParagraphStyle}>
                {baselines[0].content}
              </p>
              <p style={this.baseLineItalicParagraphStyle}>
                {baselines[1].content}
              </p>
            </div>
          </section>
          <UserLogin />
        </div>
        <section style={this.sectionStyle} id='about'>
          <div style={this.divStyle}>
            <a style={this.closeActionStyle}
               onClick={this.showAboutSection.bind(this)}
               onMouseOver={this.toggleBackgroundHighlight.bind(this)}
               onMouseOut={this.toggleBackgroundHighlight.bind(this)}
               href='#'>↥</a>
            <header>
              <h2 style={this.h2Style}>Le projet e-ReColNat</h2>
            </header>
            <img style={this.imageFloatStyle} src='http://dsiphoto.mnhn.fr/sonnerat/GBIF/Sol-Orc-JPEG-054/P00412199.jpg'/>
            <p style={this.fullWidthStyle}>{recolnatAbout}</p>
            <p style={this.linkToSiteParagraphStyle}>
              <a target='_blank'
                 href='http://recolnat.org'
                 onMouseOver={this.toggleBackgroundHighlight.bind(this)}
                 onMouseOut={this.toggleBackgroundHighlight.bind(this)}
                 style={this.linkToSiteStyle}>↬ Site du projet</a>
            </p>
            <img style={this.partnerImageStyle} src='http://recolnat.org/img/part_log.png' />
          </div>
        </section>
      </div>
    );
  }
}

module.exports = TitleBar;