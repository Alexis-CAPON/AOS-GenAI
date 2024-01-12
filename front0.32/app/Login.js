"use client"
import { useLogin2 } from './Context2';
import React, { useState, useEffect } from 'react';


function Login() {
  const { loginId, setLoginId } = useLogin2();
  const [emailInput, setEmailInput] = useState(null);

  const handleLogin = (emailAdress, e) => {
    setLoginId(emailAdress);
  };

  return (

    <div class="h-screen flex">
      <div class="hidden lg:flex w-full lg:w-1/3 login_img_section justify-around items-center bg-red-800">
        <div class="w-full mx-auto px-20 flex-col items-center space-y-6">
          <h1 class="text-white font-bold text-4xl font-sans">ChatCBC</h1>
          <p class="text-white mt-1">v1.0</p>

        </div>
      </div>
      <div class="flex w-full lg:w-2/3 justify-center items-center bg-white space-y-8">
        <div class="w-full px-8 md:px-32 lg:px-24">
        <form class="bg-white rounded-md shadow-2xl p-5">
          <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
          <p class="text-sm font-normal text-gray-600 mb-8">Welcome Back</p>
          <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            <input  class=" pl-2 w-full outline-none border-none" name="email" placeholder="Email Address" value={emailInput} onChange={(e) => setEmailInput(e.target.value)}/>
          </div>

          <button onClick={()=>handleLogin(emailInput)} class="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Login</button>


        </form>
        </div>

      </div>
  </div>

)
}

export default Login;
