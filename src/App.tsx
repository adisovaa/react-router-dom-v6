import React from 'react';
import './App.css';
import {NavLink, Outlet, Route, Router, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <NavLink to={'/'}>Main</NavLink> ---
            <NavLink to={'/login'}>Login</NavLink> ---
            <NavLink to={'/profile'}>Profile</NavLink> ---
            <NavLink to={'/profile/settings'}>Settings</NavLink> ---


            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>Main</div>}/>
                <Route path={'/login'} element={<div>Login</div>}/>
                {/*<Route path={'/profile/*'} element={<div>Profile</div>}/>*/}
                <Route path={'/profile'} element={(
                    <div>
                        Profile
                        <Outlet/>
                    </div>
                )}/>
                {/*<Route path={'*'} element={<div>profile page not found</div>}/>*/}
                <Route index element={<div>check id</div>}/>
                <Route path={':id'} element={<div>id</div>}/>
                <Route path={'settings'} element={<div>Settings</div>}/>
            </Routes>
        </div>
    );
}

export default App;
