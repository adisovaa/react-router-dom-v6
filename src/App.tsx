import React from 'react';
import './App.css';
import {NavLink, Outlet, Route, Router, Routes, useParams} from "react-router-dom";

const Profile = () => {
    const param = useParams<'x' | 'y'>()
    const some = param.x
    console.log(some)

    return <div>Profile</div>
}

function App() {
    return (
        <div className="App">
            <NavLink to={'/'}>Main</NavLink> ---
            <NavLink to={'/login'}>Login</NavLink> ---
            <NavLink to={'/profile'}>Profile</NavLink> ---
            <NavLink to={'/profile/1'}>Profile</NavLink> ---


            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>Main</div>}/>
                <Route path={'/login'} element={<div>Login</div>}/>
                <Route path={'/profile/:x'} element={<Profile/>}/>
            </Routes>

            {/*<Routes>*/}
            {/*    <Route path={'/'} element={<div>Main</div>}/>*/}
            {/*    <Route path={'/login'} element={<div>Login</div>}/>*/}
            {/*    <Route path={'/profile/*'} element={<div>Profile</div>}/>*/}
            {/*    /!*<Route path={'/profile'} element={(*!/*/}
            {/*    /!*    <div>*!/*/}
            {/*    /!*        Profile*!/*/}
            {/*    /!*        <Outlet/>*!/*/}
            {/*    /!*    </div>*!/*/}
            {/*    /!*)}/>*!/*/}
            {/*    /!*<Route path={'*'} element={<div>profile page not found</div>}/>*!/*/}
            {/*    /!*<Route index element={<div>check id</div>}/>*!/*/}
            {/*    */}
            {/*    <Route path={':id'} element={<div>id</div>}/>*/}
            {/*    <Route path={'settings'} element={<Profile/>}/>*/}
            {/*</Routes>*/}
        </div>
    );
}

export default App;
