import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import MainApp from '../mainPage/mainApp.js';
import LogoutButton from './logoutButton.jsx';
import styles from './login.css';

const LoginApp = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div>
      {
        !isAuthenticated && (
          <button onClick={() => loginWithRedirect()}>Log In</button>
        )
      }
      {
        isAuthenticated && (
          <div>
            <LogoutButton />
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <MainApp />
          </div>
        )
      }
    </div>
  );
};

export default LoginApp;

/*
class LoginApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id={styles.loginContainer}>
        <div id={styles.loginBox}>
          <div id={styles.signIn}>
            Sign in
          </div>
          <div id={styles.emailInputDiv}>
            <div id={styles.emailLabel}>
              Email
            </div>
            <br />
            <div id={styles.emailInput}>
              <input type="email" placeholder="example: dog@woof.com" required />
            </div>
          </div>
          <div id={styles.passwordInputDiv}>
            <div id={styles.passwordLabel}>
              Password
            </div>
            <input type="password" required />
          </div>
          <div id={styles.loginButtonDiv}>
            <button type="button">
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}
*/
