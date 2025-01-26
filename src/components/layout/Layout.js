import React from 'react';
import Footer from './Footer';
import Header from './Header';
import FloatingStoreButtons from '../common/FloatingStoreButtons';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <Header />
      {/* <Navbar /> */}
      <main className="main-content">
        {children}
      </main>
      <Footer />
      <FloatingStoreButtons />
    </div>
  );
};

export default Layout; 