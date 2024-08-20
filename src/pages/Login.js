import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <input type="text" placeholder="Username" className="w-full p-2 mb-4 border rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 mb-6 border rounded" />
        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
