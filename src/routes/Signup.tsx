import * as React from 'react';
import { SignUpInterface } from 'interface';
import validator from 'validator';
import useInput from '../components/hooks/useInput';
import { completeSignup } from '../utils/User';
import '../css/Signup.css';

const Signup: React.FC<SignUpInterface> = ({ history }) => {
  const { useState } = React;
  const [email, updateEmail] = useInput('');
  const [password, updatePassword] = useInput('');
  const [confirmPassword, updateConfirmPassword] = useInput('');
  const [username, updateUsername] = useInput('');
  const [errors, updateErrors] = useState<string[]>([]);

  const verifyFields = (): boolean => {
    const currentErrors = [];

    if (!validator.isEmail(email)) currentErrors.push('Invalid Email');

    if (
      validator.isEmpty(password) ||
      validator.isEmpty(confirmPassword) ||
      validator.isEmpty(username)
    )
      currentErrors.push('Not all fields have been completed');

    if (password !== confirmPassword)
      currentErrors.push('Password and Confirm Password is not the same');

    updateErrors(currentErrors);

    return !(errors.length > 0);
  };

  const removeError = (i: number): void => {
    const newErrors = errors.filter((e: string, index: number) => index !== i);
    updateErrors(newErrors);
  };

  const createUser = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();

    if (verifyFields()) {
      try {
        const status = await completeSignup(email, password, username);
        if (status === 200) history.push('/');
      } catch (error) {
        throw new Error(error);
      }
    }
  };

  return (
    <>
      {errors.length > 0
        ? errors.map((e, index) => (
            <article
              className="message is-danger is-small"
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              style={{ width: '300px', margin: '0px 470px 10px' }}
            >
              <div className="message-header">
                <p>Error</p>
                <button
                  onClick={(): void => removeError(index)}
                  className="delete"
                  aria-label="delete"
                  type="button"
                />
              </div>
              <div className="message-body">{e}</div>
            </article>
          ))
        : null}
      <div className="SignUp container">
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
            <button
              className="button is-primary"
              onClick={createUser}
              type="button"
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
