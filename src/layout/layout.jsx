import React from 'react';
import Header from './header';
import Footer from './footer';
import '../assets/css/Layout.css'
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="layout-container">
            <Header />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;