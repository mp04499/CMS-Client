import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import useInput from '../components/hooks/useInput';
import '../css/Signup.css';

const Signup = () => {
  const [email, updateEmail] = useInput('');
  const [password, updatePassword] = useInput('');
  const [confirmPassword, updateConfirmPassword] = useInput('');
  const [username, updateUsername] = useInput('');

  const createUser = async e => {
    e.preventDefault();
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={'SignUp container'}>
      <div
        className="field"
        style={{ paddingTop: '70px', width: '300px', margin: '0 auto' }}
      >
        <p className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope" />
          </span>
        </p>
      </div>
      <div
        className="field"
        style={{ paddingTop: '30px', width: '300px', margin: '0 auto' }}
      >
        <p className="control has-icons-left">
          <input
            className="input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={updateUsername}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user" />
          </span>
        </p>
      </div>
      <div
        className="field"
        style={{ paddingTop: '30px', width: '300px', margin: '0 auto' }}
      >
        <p className="control has-icons-left">
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-lock" />
          </span>
        </p>
      </div>
      <div
        className="field"
        style={{ paddingTop: '30px', width: '300px', margin: '0 auto' }}
      >
        <p className="control has-icons-left">
          <input
            className={
              confirmPassword === password
                ? 'input is-success'
                : 'input is-danger'
            }
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={updateConfirmPassword}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-lock" />
          </span>
        </p>
      </div>
      <div className="field">
        <p
          className="control"
          style={{ paddingTop: '30px', textAlign: 'center' }}
        >
          <button className="button is-primary" onClick={createUser}>
            Sign
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
