import React, { useMemo } from 'react'
import useUser from './UserContext'

import Home from '../pages/Home'
import Login from '../pages/Login'

const PrivateRoute = ({ element, shouldBeAuth }) => {

    const { isLogged } = useUser()

    const privateRouteComponent = useMemo(() => {
        if (shouldBeAuth) {
            if (isLogged) {
                return element
            } else {
                return element
            }
        } else {
            if (isLogged) {
                return <Home />
            } else {
                return  <Login />
            }
        }

    }, [isLogged, shouldBeAuth, element])

    return privateRouteComponent
}

export default PrivateRoute