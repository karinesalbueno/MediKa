import React, { useState, useCallback, } from 'react';
import UserContext from '../../hooks/UserContext'
import Register from '../Register'
import "./index.css";


const Login = (props) => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);
    const [userInfo, setUserInfo] = useState({ email: '', senha: '' })

    const { onLoginHandler } = UserContext()


    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);

        setFormIsValid(
            event.target.value.includes('@') && enteredPassword.trim().length > 6
        );
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);

        setFormIsValid(
            event.target.value.trim().length > 1 && enteredEmail.includes('@')
        );
    };

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes('@'));
    };

    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 3);
    };

    const submitHandler = (e) => {
        e.preventDefault()
        onLoginHandler(enteredEmail, enteredPassword)
    }

    return (
        <div  className={'login'}>
            <form onSubmit={submitHandler} className="form">
                <div className="logo_cont" />
                <div className="login_box">
                    <small>Login</small>
                    <span>
                        <span>
                            <label htmlFor="email" />
                            <input
                                type="email"
                                id="email"
                                placeholder="E-mail"
                                value={enteredEmail}
                                onChange={emailChangeHandler}
                                onBlur={validateEmailHandler}

                            />
                        </span>
                    </span>
                    <span>
                        <span>

                            <label htmlFor="password" />
                            <input
                                type="password"
                                id="password"
                                placeholder="Senha"
                                value={enteredPassword}
                                onChange={passwordChangeHandler}
                                onBlur={validatePasswordHandler}

                            />
                        </span>
                    </span>
                    <button
                        disabled={!formIsValid}
                        type="submit"
                        className="login_bt cli_btns_st1">login</button>
                </div>
            </form>
            <Register />
        </div>
    );
};

export default Login;
