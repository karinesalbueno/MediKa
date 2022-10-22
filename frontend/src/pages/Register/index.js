import React, { useState, useCallback } from 'react'
import api from '../../services/api';

const Register = () => {
    const [data, setData] = useState([])
    const [enteredname, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const response = await api.post('/user/sign-up', {
                nome: enteredname,
                email: enteredEmail,
                senha: enteredPassword
            })
            setData(response.data)

        } catch { error }

    }
    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };

    return (
        <form onSubmit={submitHandler} className={'registrar'}>
            <div className="logo_cont" />
            <div className="login_box">
                <small>Registrar</small>
                <span>
                    <span>
                        <label htmlFor="nome" />
                        <input
                            type="text"
                            placeholder="Nome"
                            value={enteredname}
                            onChange={nameChangeHandler}
                        />
                    </span>
                </span>
                <span>
                    <span>
                        <label htmlFor="email" />
                        <input
                            type="email"
                            placeholder="E-mail"
                            value={enteredEmail}
                            onChange={emailChangeHandler}
                        />
                    </span>
                </span>

                <span>
                    <span>
                        <label htmlFor="password" />
                        <input
                            type="password"
                            placeholder="Senha"
                            onChange={passwordChangeHandler}
                            value={enteredPassword}
                        />
                    </span>
                </span>
                <button
                    type="submit"
                    className="login_bt cli_btns_st1">registrar</button>
                <label>{data.message}</label>
            </div>
        </form>
    )
}

export default Register
