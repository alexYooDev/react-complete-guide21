import React, { useEffect, useState, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';

import Button from '../UI/Button/Button';

import Input from '../UI/Input/Input';

import AuthContext from '../../store/auth-context';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@')};
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@')};
  }
  return {value: '', isValid: false};
};

const pwReducer = (state, action) => {
  if (action.type === 'UESR_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6};
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6};
  }
  return {value: '', isValid: false};
}

const Login = (props) => {

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail ] = useReducer(emailReducer, {
    value: '',
    isValid: null
  });

  const [pwState, dispatchPw] = useReducer(pwReducer, {
    value: '',
    isValid: null
  });

  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const pwInputRef = useRef();

  const { isValid: emailIsValid} = emailState;
  const { isValid: pwIsValid} = pwState;

  useEffect(()=>{
    const identifier = setTimeout(()=>{
      console.log('Checking form validity');
      setFormIsValid(
        emailIsValid && pwIsValid
      );
    }, 500);
    
    return () => {
      console.log('CLEAN UP')
      clearTimeout(identifier);
    };
  }, [emailIsValid, pwIsValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatchPw({type: 'UESR_INPUT', val: event.target.value});

    // setFormIsValid(
    //   pwState.isValid && emailState.isValid
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPw({type: 'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, pwState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      pwInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          type="email"
          label='E-Mail'
          id="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          />
        <Input
          ref={pwInputRef}
          type="password"
          label='PASSWORD'
          id="password"
          isValid={pwIsValid}
          value={pwState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          />
          <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
