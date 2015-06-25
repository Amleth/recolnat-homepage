import React from 'react';

import defaultAvatarUrl from '../images/defaultAvatar.png';
import commonStyles from '../styles/common-styles';
import prefixr from 'react-prefixr';

// Import :hover functionalities for user photo from actual stylesheets
//require('../styles/rotating-photo.css');

var userSectionStyle = prefixr({
  flex: '2 1 0%',
  order: '2',
  minHeight: '111px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  border: '2px solid rgba(255, 255, 255, 0.25)',
  display: 'flex',
  flexDirection: 'row',
  padding: '5px',
  borderTopLeftRadius: '50px',
  borderBottomLeftRadius: '50px',
  boxSizing: 'border-box'
});

var functionsStyle = prefixr({
  paddingRight: '10px',
  position: 'relative',
  flex: '1 1 0%',
  boxSizing: 'border-box'
});

var userNameStyle = prefixr({
  textAlign: 'right',
  fontWeight: '100',
  margin: '0px',
  padding: '5px',
  boxSizing: 'border-box',
  color: '#FFFFFF',
  fontFamily: commonStyles.fontFamily
});

var buttonRowStyle = prefixr({
  position: 'absolute',
  bottom: '0px',
  width: '100%',
  textAlign: 'right',
  paddingRight: '10px',
  boxSizing: 'border-box'
});

var buttonStyle = prefixr({
  border: '1px solid rgba(255, 255, 255, 0.25)',
  backgroundColor: 'rgba(255, 255, 255, 0)',
  cursor: 'pointer',
  textTransform: 'none',
  overflow: 'visible',
  color: '#FFFFFF',
  font: 'inherit',
  margin: '0px',
  boxSizing: 'border-box',
  fontFamily: commonStyles.fontFamily
});

var textInputStyle = prefixr({
  width: '80%',
  color: '#000000',
  float: 'right',
  fontFamily: commonStyles.fontFamily,
  boxSizing: 'border-box'
});

var userPhotoContainerStyle = prefixr({
  maxWidth: '70px',
  width: '70px',
  height: '102px',
  padding: '0px',
  cursor: 'pointer',
  flex: '1 1 0%',
  boxSizing: 'border-box'
});

var floatRightStyle = {
  float: 'right',
  padding: '5px'
};

var userPhotoRotatingPart = prefixr({
  //width: 'inherit',
  height: '100%',
  transformStyle: 'preserve-3d',
  transition: 'all 0.5s linear 0s',
  boxSizing: 'border-box'
});

var userAvatar = prefixr({
  position: 'absolute',
  width: '100%',
  height: '100%',
  boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.82)',
  border: '0px none',
  boxSizing: 'border-box'
});

var rotatingButton = prefixr({
  backgroundColor: 'rgba(0, 0, 0, 0.69)',
  backfaceVisibility: 'hidden',
  transform: 'rotateY(180deg)',
  position: 'absolute',
  width: '100%',
  height: '100%',
  border: 'medium none',
  textTransform: 'none',
  overflow: 'visible',
  color: '#FFFFFF',
  font: 'inherit',
  margin: '0px',
  boxSizing: 'border-box'
});

var UserLogin = React.createClass({
  getInitialState: function() {
    return {
      userLoggedIn: false,
      userName: null,
      userPassword: null,
      userAvatar: null,
      rotated: false
    };
  },

  // EVENT Handlers
  onUserIdInputChange: function(event) {
    this.setState({id: event.target.value});
  },
  onPasswordInputChange: function(event) {
    this.setState({userPassword: event.target.value});
  },
  // ACTION Handlers
  doLogin: function() {
    alert("La version actuelle ne propose qu'un utilisateur par défaut.");
    // TODO : Check user and password against login service
    // TODO : Load user avatar image and name
    this.setState({userLoggedIn: true, userName: this.state.id, userAvatar: defaultAvatarUrl});
  },
  doLogout: function() {
    this.setState({userLoggedIn: false});
  },
  goToUserSpace: function() {
    alert("Option non disponible dans la version actuelle");
  },
  createNewUser: function() {
    alert("Option non disponible dans la version actuelle.");
    // TODO : Implement this
  },
  rotate: function() {
    if (!this.state.rotated) {
      userPhotoRotatingPart.WebkitTransform = 'rotateY(180deg)';
      userPhotoRotatingPart.transform = 'rotateY(180deg)';
    }
    else {
      userPhotoRotatingPart.WebkitTransform = 'rotateY(0deg)';
      userPhotoRotatingPart.transform = 'rotateY(0deg)';
    }
    this.setState({rotated: !this.state.rotated});
  },
  render: function() {
    if (this.state.userLoggedIn == true) {
      return (
        <section style={userSectionStyle}>
          <div style={functionsStyle}>
            <h3 style={userNameStyle}>{this.state.userName}</h3>
            <div style={buttonRowStyle}>
              <button onClick={this.goToUserSpace} style={buttonStyle}>Mon espace</button>
              <button onClick={this.doLogout} style={buttonStyle}>Déconnexion</button>
            </div>
          </div>
          <div style={userPhotoContainerStyle}
            onMouseOver={this.rotate}
            onMouseOut={this.rotate}
            onClick={this.goToUserSpace}
          >
            <div style={userPhotoRotatingPart} >
              <img
                src={this.state.userAvatar}
                style={userAvatar}/>
              <button style={rotatingButton}>↬&nbsp;Profil</button>
            </div>
          </div>
        </section>
      );
    }
    else {
      return (
        <div style={userSectionStyle}>
          <div>
            <h3 style={userNameStyle}>Vous n'êtes pas connecté</h3>
            <input type='text' autoComplete='on'
              value={this.state.id}
              placeholder="Identifiant"
              onChange={this.onUserIdInputChange}
              style={textInputStyle}
            />
            <input type='password'
              placeholder="Mot de Passe"
              onChange={this.onPasswordInputChange}
              style={textInputStyle}
            />
            <div style={floatRightStyle}>
              <button style={buttonStyle} onClick={this.doLogin}>Me connecter</button>
              <button style={buttonStyle} onClick={this.createNewUser}>Créer nouveau compte</button>
            </div>
          </div>
        </div>
      );
    }
  }
});

module.exports = UserLogin;