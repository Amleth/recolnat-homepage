import React from 'react';

import defaultAvatarUrl from '../images/defaultAvatar.png';
import commonStyles from '../styles/common-styles';
import prefixr from 'react-prefixr';

// Import :hover functionalities for user photo from actual stylesheets
//require('../styles/rotating-photo.css');

class UserLogin extends React.Component {
  constructor(props) {
    super(props);

    this.userSectionStyle = prefixr({
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

    this.functionsStyle = prefixr({
      paddingRight: '10px',
      position: 'relative',
      flex: '1 1 0%',
      boxSizing: 'border-box'
    });

    this.userNameStyle = prefixr({
      textAlign: 'right',
      fontWeight: '100',
      padding: '5px',
      boxSizing: 'border-box',
      color: '#FFFFFF',
      fontFamily: commonStyles.fontFamily
    });

    this.notConnectedTextStyle = prefixr({
      textAlign: 'right',
      fontWeight: '100',
      margin: '15px 40px 15px 0px',
      padding: '5px',
      boxSizing: 'border-box',
      color: '#FFFFFF',
      fontFamily: commonStyles.fontFamily
    });

    this.buttonRowStyle = prefixr({
      position: 'absolute',
      bottom: '0px',
      width: '100%',
      textAlign: 'right',
      paddingRight: '10px',
      boxSizing: 'border-box'
    });

    this.buttonStyle = prefixr({
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

    this.textInputStyle = prefixr({
      width: '80%',
      color: '#000000',
      float: 'right',
      fontFamily: commonStyles.fontFamily,
      boxSizing: 'border-box'
    });

    this.userPhotoContainerStyle = prefixr({
      maxWidth: '70px',
      width: '70px',
      height: '102px',
      padding: '0px',
      cursor: 'pointer',
      flex: '1 1 0%',
      boxSizing: 'border-box'
    });

    this.floatRightStyle = {
      float: 'right',
      padding: '5px'
    };

    this.userPhotoRotatingPart = prefixr({
      //width: 'inherit',
      height: '100%',
      transformStyle: 'preserve-3d',
      transition: 'all 0.5s linear 0s',
      boxSizing: 'border-box'
    });

    this.userAvatar = prefixr({
      position: 'absolute',
      width: '100%',
      height: '100%',
      boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.82)',
      border: '0px none',
      boxSizing: 'border-box'
    });

    this.rotatingButton = prefixr({
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

    this.state = {
      userLoggedIn: false,
      userName: null,
      userPassword: null,
      userAvatar: null,
      rotated: false
    };
  }

  // EVENT Handlers
  onUserIdInputChange(event) {
    this.setState({id: event.target.value});
  }

  onPasswordInputChange(event) {
    this.setState({userPassword: event.target.value});
  }

  // ACTION Handlers
  doLogin() {
    alert("La version actuelle ne propose qu'un utilisateur par défaut.");
    // TODO : Check user and password against login service
    // TODO : Load user avatar image and name
    this.setState({userLoggedIn: true, userName: this.state.id, userAvatar: defaultAvatarUrl});
  }

  doLogout() {
    this.setState({userLoggedIn: false});
  }

  goToUserSpace() {
    alert("Option non disponible dans la version actuelle");
  }

  createNewUser() {
    alert("Option non disponible dans la version actuelle.");
    // TODO : Implement this
  }

  rotate() {
    this.setState({rotated: !this.state.rotated});
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextState.rotated) {
      this.userPhotoRotatingPart.WebkitTransform = 'rotateY(180deg)';
      this.userPhotoRotatingPart.transform = 'rotateY(180deg)';
    }
    else {
      this.userPhotoRotatingPart.WebkitTransform = 'rotateY(0deg)';
      this.userPhotoRotatingPart.transform = 'rotateY(0deg)';
    }
  }
  render() {
    if (this.state.userLoggedIn == true) {
      return (
        <section style={this.userSectionStyle}>
          <div style={this.functionsStyle}>
            <h3 style={this.userNameStyle}>{this.state.userName}</h3>
            <div style={this.buttonRowStyle}>
              <button onClick={this.goToUserSpace.bind(this)} style={this.buttonStyle}>Mon espace</button>
              <button onClick={this.doLogout.bind(this)} style={this.buttonStyle}>Déconnexion</button>
            </div>
          </div>
          <div style={this.userPhotoContainerStyle}
               onMouseOver={this.rotate.bind(this)}
               onMouseOut={this.rotate.bind(this)}
               onClick={this.goToUserSpace.bind(this)}
            >
            <div style={this.userPhotoRotatingPart} >
              <img
                src={this.state.userAvatar}
                style={this.userAvatar}/>
              <button style={this.rotatingButton}>↬&nbsp;Profil</button>
            </div>
          </div>
        </section>
      );
    }
    else {
      return (
        <div style={this.userSectionStyle}>
          <div style={this.functionsStyle}>
            <div style={this.floatRightStyle}>
              <h3 style={this.notConnectedTextStyle}>Vous n'êtes pas connecté</h3>
              <button style={this.buttonStyle} onClick={this.doLogin.bind(this)}>Me connecter</button>
              <button style={this.buttonStyle} onClick={this.createNewUser.bind(this)}>Créer nouveau compte</button>
            </div>
          </div>
        </div>
      );

//      <input type='text' autoComplete='on'
//      value={this.state.id}
//    placeholder="Identifiant"
//    onChange={this.onUserIdInputChange.bind(this)}
//  style={this.textInputStyle}
///>
//<input type='password'
//       placeholder="Mot de Passe"
//       onChange={this.onPasswordInputChange.bind(this)}
//       style={this.textInputStyle}
//  />
    }
  }

}

module.exports = UserLogin;