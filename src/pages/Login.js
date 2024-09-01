import React from 'react';

const Login = () => {
  return (
    <div 
      className="flex items-center justify-center min-h-screen"
      style={{ 
        background: 'linear-gradient(to right, #FFFFFF, #D7E1EC)' 
      }}
    >
      <div className="bg-white p-12 rounded-lg shadow-lg w-96 max-w-md">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Login</h2>
        <form className="space-y-6">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Username" 
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          <div className="relative">
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-6">
          <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
