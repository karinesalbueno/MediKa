import React from 'react';
import PrivateRoute from './hooks/privateRouter'

import MainHeader from './components/Navigation/Navigation'
import useUser from './hooks/UserContext'

function Routers() {
    const { isLogged, onLogoutHandler} = useUser()

    return (
        <React.Fragment>
            <MainHeader isLogged={isLogged} onLogout={onLogoutHandler} />
            <PrivateRoute />
        </React.Fragment>
    );
}
export default Routers;