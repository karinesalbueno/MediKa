import React, { createContext, useCallback, useEffect, useContext, useRef, useState } from 'react'
import jwt_decode from 'jwt-decode';

import useQuery from './useQuery';
import api from '../services/api'

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
    const userToken = localStorage.getItem('token')
    const expTimeout = useRef()

    const [isLogged, setIsLogged] = useState(!!userToken)
    const [userInfo, setUserInfo] = useState({})

    const jwtToken = useQuery().get('token')

    const onLoginHandler = useCallback(async (enteredEmail, enteredPassword) => {
        try {
            const response = await api.post('/user/auth', {
                email: enteredEmail,
                senha: enteredPassword,
            });

            onSetLoginByTokenHandler(response.data.access_token)
        } catch (error) {
        }
    }, [onSetLoginByTokenHandler])

    const onSetLoginByTokenHandler = useCallback((token) => {
        const decode = jwt_decode(token);
        setUserInfo(decode)
        localStorage.setItem('token', token)
        setIsLogged(true)
    }, [])

    const onLogoutHandler = useCallback(() => {
        localStorage.removeItem('token')
        setIsLogged(false)
    }, [])

    const onValidateTokenHandler = useCallback(() => {
        let informationsToken = {
            isValid: false,
            expTime: 0
        }

        const millisecondsExpTime = userInfo.exp * 1000
        const currentMillisecondsTime = new Date().getTime()

        informationsToken = {
            isValid: currentMillisecondsTime < millisecondsExpTime,
            expTime: millisecondsExpTime - currentMillisecondsTime
        }

        return informationsToken
    }, [userInfo.exp])

    const onCheckExpTime = useCallback(() => {
        if (!isLogged || !userInfo.exp) return
        if (expTimeout.current) clearTimeout(expTimeout.current)

        const { isValid, expTime } = onValidateTokenHandler()

        if (isValid) {
            return expTimeout.current = setTimeout(onLogoutHandler, expTime)
        } else if (jwtToken) {
            onLoginHandler()
        } else {
            localStorage.removeItem('userToken')
        }
    }, [isLogged, userInfo.exp, onValidateTokenHandler, jwtToken, onLogoutHandler, onLoginHandler])

    useEffect(() => {
        onCheckExpTime()
    }, [onCheckExpTime])

    return (
        <UserContext.Provider value={{
            isLogged,
            onLoginHandler,
            onLogoutHandler,
            userInfo,
            userToken
        }}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => {
    const userContext = useContext(UserContext)
    return { ...userContext }
}

export default useUser

export { UserContextProvider }
