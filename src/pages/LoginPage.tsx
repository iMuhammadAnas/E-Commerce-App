import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <LoginForm />

      {/* Right Panel */}
      <div className="hidden items-center justify-center bg-indigo-100 lg:flex lg:w-1/2">
        <div className="p-8 text-center">
          <h3 className="mb-6 text-2xl font-bold text-gray-900">Welcome Back!</h3>
          <p className="mb-4 text-lg text-gray-700">
            Access your dashboard and explore our premium products.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Stay up to date with latest deals and offers.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Your shopping experience just got better.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
