import React from 'react';
import ReactDOM from 'react-dom/client';
// import { RouterProvider, createBrowserRouter } from 'react-router';
// import AppRoutes from './AppRoutes';
import './index.css';

// const router = createBrowserRouter(AppRoutes);

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layouts/RootLayout';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Home from './pages/Home';
import ProductDetailsPage from './pages/ProductDetailsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
      {
        path: 'product/:id',
        element: <ProductDetailsPage />,
        // loader: productLoader,
      },
      {
        path: '*',
        element: <div className="text-center mt-10 text-xl">404 - Not Found</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
