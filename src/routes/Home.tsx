import * as React from 'react';
import { HomeInterface } from 'interface';
import useInput from '../components/hooks/useInput';
import firebase from '../firebase';
import 'firebase/auth';
import '../css/Home.css';

const Home: React.FC<HomeInterface> = ({ history }) => {
  const [email, updateEmail] = useInput('');
  const [password, updatePassword] = useInput('');

  const login = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push('/me');
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="container is-fullhd">
      <div className="Home">
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
            <span className="icon is-small is-right">
              <i className="fas fa-check" />
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
        <div className="field">
          <p
            className="control"
            style={{ paddingTop: '30px', textAlign: 'center' }}
          >
            <button className="button is-primary" type="button" onClick={login}>
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
