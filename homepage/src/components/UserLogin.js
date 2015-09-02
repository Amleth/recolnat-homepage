import React from 'react';

import defaultAvatarUrl from '../images/defaultAvatar.png';
import commonStyles from '../styles/common-styles';
import prefixr from 'react-prefixr';
import request from "superagent";
import cookie from "cookie";
import parse from "xml-parser";

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
    window.location.replace("https://cas.recolnat.org/login?service=" + [location.protocol, '//', location.host, location.pathname].join(''));
  }

  doLogout() {
    //this.setState({userLoggedIn: false});
    window.location.replace("https://cas.recolnat.org/logout");
  }

  goToUserSpace() {
    alert("Option non disponible dans la version actuelle");
  }

  createNewUser() {
    window.location.replace("https://cas.recolnat.org/login?service=" + [location.protocol, '//', location.host, location.pathname].join(''));
  }

  rotate() {
    this.setState({rotated: !this.state.rotated});
  }

  componentDidMount() {
    // Check cookies for CAS TGT
    document.domain = "recolnat.org";
    var cookies = cookie.parse(document.cookie);
    if(!cookies.CASTGC) {
      this.setState({userLoggedIn: false});
      return;
    }
    var self = this;
    // Call CAS service to authenticate TGT and get ST
    request
      .post("https://cas.recolnat.org/v1/tickets/" + cookies.CASTGC)
      .set("Content-Type", "application/x-www-form-urlencoded")
      .send({service: "http://wp5.recolnat.org"})
      .end(function(err, res) {
        if(res.ok) {
          // Use ST with CAS service to get user id
          request.post("https://cas.recolnat.org/serviceValidate")
            .set("Content-Type", "application/json")
            .query({ ticket: res.xhr.response, service: "http://wp5.recolnat.org" })
            .end(function(err, res) {
              if(res.ok) {
                // Parse response xml to get user id
                var parsedCASResponse = parse(res.xhr.response);
                var userData = parsedCASResponse.root.children[0].children;
                var userName = null;
                for(var i = 0; i < userData.length; ++i) {
                  var data = userData[i];
                  if(data.name == "cas:user") {
                    userName = data.content;
                    break;
                  }
                }
                console.log("CAS returned user " + userName);
                // Get user data from api with user id
                request.get("https://api.recolnat.org/erecolnat/v1/users/login/" + userName)
                  .end((err,res) => {
                    if(res.ok) {
                      // Update component state
                      var user = JSON.parse(res.xhr.response);
                      var avatar = defaultAvatarUrl;
                      if(user.has_avatar) {
                        avatar = "data:" + user.avatar.mimetype + ";base64," + user.avatar.data;
                      }
                      var userDisplayName = userName;
                      if(user.firstname && user.lastname) {
                        userDisplayName = user.firstname[0].toUpperCase() + user.firstname.slice(1)
                        + " "
                        + user.lastname[0].toUpperCase() + user.lastname.slice(1);
                      }
                      self.setState({userName: userDisplayName,
                        userLoggedIn: true,
                        userAvatar: avatar
                      });
                    }
                    else {
                      console.log("Unable to access user data. " + err);
                    }
                  });
              }
              else {
                console.log(res.text);
                console.log("Error validating ST - " + err);
              }
            });
        }
        else {
          console.log(res.text);
          console.log("Error validating TGT - " + err);
        }
      });

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