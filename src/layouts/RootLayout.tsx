import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout: React.FC = () => {
  const location = useLocation();

  // Routes where Navbar and Footer should be hidden
  const hideLayoutPaths = ['/login', '/signup'];

  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {!shouldHideLayout && <Navbar />}

      <main className="flex-grow">
        <Outlet />
      </main>

      {!shouldHideLayout && <Footer />}
    </div>
  );
};

export default RootLayout;
