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

{/* <Switch>
<Route path="/login" element={<Login onLogin={loginHandler} />} />

<Route element={<MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />}>
    <Route path="/home" element={<Home onLogout={logoutHandler} />} />
</Route>

<Route path="*" element={<Navigate replace to="/home" />} />
</Switch> */}

// import React from "react";
// import {
//     createBrowserRouter,
//     RouterProvider,
//     Router,
//     Routes,
//     Route,
// } from "react-router-dom";

// const router = () => {
//     createBrowserRouter([
//         {
//             path: "/login",
//             element: <Login />
//         },
//         {
//             path: "*",
//             element: <NotFound />
//         }

//     ]);

//     return (
//         <React.StrictMode>
//             <Router>
//                 <Routes>
//                     <Route path="login" element={<Login /> } />
//                     <Route path="posts" element={<Posts />} />
//                     <Route path="" element={<Login to="/login" />} />
//                 </Routes>
//             </Router>
//         </React.StrictMode>
//     );
// }
// export default router;