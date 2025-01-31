import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Home from "../page/home";
import Error from "../utils/eror";

import Layout from '../layout/layout';
const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='' element={<Navigate to="/home" />} />
                <Route path='/home' element={<Home />} />

                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;