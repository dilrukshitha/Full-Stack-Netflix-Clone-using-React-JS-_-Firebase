import React, { useState } from 'react';
import background_banner from '../assets/background_banner.jpg';
import logo from '../assets/logo.png';

export default function Login() {
  const [signState, setSignState] = useState('Sign In');

  return (
    <div 
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background_banner})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="absolute top-0 left-0 m-4">
        <img src={logo} alt="Netflix Logo" className="h-12 w-auto" />
      </div>
      <div className="relative z-10 bg-gray-800 bg-opacity-80 rounded-lg p-8 max-w-md mx-auto mt-14">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">{signState}</h2>
        <form className="space-y-4">
          {signState === 'Sign Up' && (
            <div>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          )}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-gray-400">
              <input type="checkbox" className="form-checkbox text-yellow-500 border-gray-600" />
              <span className="ml-2">Remember Me</span>
            </label>
            <a href="#" className="text-yellow-400 hover:underline">Need Help?</a>
          </div>
          <button className="w-full py-2 bg-yellow-500 text-gray-800 font-bold rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">
            {signState}
          </button>
        </form>
        <div className="mt-4 text-center text-gray-400">
          {signState === 'Sign In' ? (
            <>
              Don't have an account?{' '}
              <button
                onClick={() => setSignState('Sign Up')}
                className="text-yellow-400 hover:underline"
              >
                Sign Up Now
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={() => setSignState('Sign In')}
                className="text-yellow-400 hover:underline"
              >
                Sign In Now
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
