'use strict';

import React from  'react';
import TitleBar from './components/TitleBar';
import Tools from './components/Tools';
import Discussions from './components/Discussions';
import ExternalLinks from './components/ExternalLinks';
import Newsfeed from './components/Newsfeed';
import FancySeparator from './components/FancySeparator'

import backgroundImageUrl from './images/backgrounds/h-blur.jpg'

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.bodyStyle = {
      position: 'relative',
      fontWeight: '300',
      boxSizing: 'border-box',
      minHeight: '100%',
      color: '#F5F5F5',
      margin: '0px',
      padding: '0px',
      height: '100%',
      width: '100%'
    };

    this.backgroundImageStyle = {
      background: 'url(' + backgroundImageUrl + ') no-repeat fixed center center / cover transparent',
      display: 'block',
      width: '100%',
      height: '100%',
      position: 'fixed',
      zIndex: '-1',
      boxSizing: 'border-box'
    };

    this.headerStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.69)',
      display: 'block',
      boxSizing: 'border-box'
    };

    this.mainStyle = {
      display: 'flex',
      flexDirection: 'row',
      margin: '20px auto 0px',
      minHeight: '100%',
      maxWidth: '900px',
      boxSizing: 'border-box'
    };

    this.leftStyle = {
      flex: '2 1 0%',
      marginRight: '20px',
      boxSizing: 'border-box'
    };

    this.newsStyle = {
      flex: '1 1 0%',
      backgroundColor: 'rgba(255,255,255,0.69)',
      boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      padding: '10px',
      boxSizing: 'border-box'
    };
  }

  render() {
    return (
      <nav>
        <div style={this.backgroundImageStyle}></div>
        <header style={this.headerStyle}>
          <TitleBar />
        </header>
        <main style={this.mainStyle}>
          <div style={this.leftStyle}>
            <Tools />
            <Discussions />
          </div>
          <section style={this.newsStyle}>
            <ExternalLinks />
            <FancySeparator />
            <Newsfeed />
          </section>
        </main>
      </nav>
    );
  }
}

module.exports = Homepage;