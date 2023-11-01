import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Login from '../pages/auth/login/Login';
import Home from '../pages/home/Home';
const Routes = (): JSX.Element => {
    return (
        <>
            <ReactRoutes>
                <Route index element={<Login />} />
                <Route element={<Layout />}>
                    <Route path='/home' element={<Home />} />
                </Route>
            </ReactRoutes>
        </>
    )
}
export default Routes;