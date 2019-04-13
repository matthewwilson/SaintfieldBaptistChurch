import auth0 from 'auth0-js';

export default class Auth {

  accessToken;
  idToken;
  expiresAt;

  auth0 = new auth0.WebAuth({
    domain: 'saintfieldbaptist.eu.auth0.com',
    clientID: 'Z1kMtZGepUuW8J7R7e1joUyJR0GBFMdZ',
    redirectUri: process.env.REACT_APP_AUTH_CALLBACK_URL ? process.env.REACT_APP_AUTH_CALLBACK_URL : 'http://localhost:3000/callback',
    responseType: 'token id_token',
    audience: 'https://api.saintfieldbaptist.org.uk',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }

  handleAuthentication(props) {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        props.history.replace('/members');
      } else if (err) {
        props.history.replace('/');
        console.log(err);
      }
    });
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  setSession(authResult) {
    // Set isLoggedIn flag in localStorage
    debugger;
    localStorage.setItem('isLoggedIn', 'true');
    let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
       if (authResult && authResult.accessToken && authResult.idToken) {
         this.setSession(authResult);
       } else if (err) {
         this.logout();
         console.log(err);
       }
    });
  }

  logout() {
    // Remove tokens and expiry time
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('isLoggedIn');

    this.auth0.logout({
      return_to: window.location.origin
    });
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

}
