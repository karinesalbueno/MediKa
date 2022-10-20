import React from 'react'
import axios from 'axios'
import api from '../../services/api';

const Register = () => {
    const handleSubmit = values => {
        api.post('http://localhost:3000/user/auth', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                 
                }
            })
    }

    return (
        <>
            <h1>Register</h1>
            <p>Fill the fields to create a new user</p>

            <form onSubmit={submitHandler} className={'login'}>
                <div className="logo_cont" />
                <div className="login_box">
                    <h3> MediKa </h3>
                    <span>
                        <span>
                            <label htmlFor="email" />
                            <input
                                type="email"
                                id="email"
                                placeholder="E-mail"
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

                            />
                        </span>
                    </span>
                    <button
                        type="submit"
                        className="login_bt cli_btns_st1">login</button>
                </div>
            </form>


        </>
    )
}

export default Register
