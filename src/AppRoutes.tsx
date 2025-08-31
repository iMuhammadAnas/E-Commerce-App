// AppRoutes.tsx
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import productLoader from './pages/ProductDetailsPage';

const AppRoutes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
      {
        path: 'product/:id',
        element: <ProductDetailsPage />,
        loader: productLoader,
      },
    ],
  },
];

export default AppRoutes;
