import React from 'react';
import './App.css';
import {NavLink, Outlet, Route, Router, Routes, useParams} from "react-router-dom";

const Profile = () => {
    const param = useParams<'*'>()
    const some = param['*']
    console.log(some)

    return <div>Profile</div>
}

function App() {
    return (
        <div className="App">
            <NavLink to={'/'}>Main</NavLink> ---
            <NavLink to={'/login'}>Login</NavLink> ---

            <NavLink to={'/profile'}
                     style={(params) => {
                         return {color: params.isActive ? 'lime' : 'black'}
                     }}>Profile</NavLink> ---

            <NavLink
                to={'/profile/settings'}
                className={({isActive}) => isActive ? 'act' : 'def'}
            >Settings</NavLink> ---


            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>Main</div>}/>
                <Route path={'/login'} element={<div>Login</div>}/>
                <Route path={'/profile/:x/:y'} element={<Profile/>}/>
            </Routes>

            <a
                href={'https://github.com/adisovaa/react-router-dom-v6/tree/main/src'}
                target={'_blank'}
                rel={'noreferrer nofollow noopener'}
            >target blank</a>


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
