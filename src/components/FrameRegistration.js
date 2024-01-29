

import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const FrameRegistration = () => {
  const navigate = useNavigate();

  const onButtonPrimaryClick = useCallback(() => {
    navigate("/uploaded");
  }, [navigate]);

  return (
    <form className=" form max-w-md m-auto p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-17xl font-bold font-montserrat">Sign In</h1>
        <p className='text-base font-lato'>Sign in to your account</p>
      </div>

      <div className="flex flex-row gap-2 text-xs font-montserrat">
        <button className="flex items-center justify-center gap-2  border-none py-2 px-4 rounded-3xs bg-light-gohan text-secondary-text">
          <img src="/googleicon-1@2x.png" alt="Google" className="h-4 w-4" />
          Sign in with Google
        </button>
        <button className="flex items-center justify-center gap-2 border-none py-2 px-4 rounded-3xs bg-light-gohan text-secondary-text">
          <img src="/apple-1@2x.png" alt="Apple" className="h-4 w-4" />
          Sign in with Apple
        </button>
      </div>

      <div className="form-div flex flex-col gap-4 bg-light-gohan h-[300px] w-[400px] p-8 border border-gray-300 rounded-xl">
      <div className="relative text-base font-lato text-black text-left z-[2]">
             Email address
           </div>
        <input className=" p-2 text-base bg-field-color-darker rounded-lg" placeholder="Email address" type="text" />
        <div className="relative text-base font-lato text-black text-left z-[2]">
             Password
           </div>
        <input className="border-none p-2 rounded-lg bg-field-color-darker text-base" placeholder="Password" type="password" />
        <a href="#" className="text-sm text-blue-500 self-start no-underline">Forgot password?</a>
        <button className="bg-blue-500 text-white py-2 my-5 rounded-lg h-[60px] text-2xl font-bold cursor-pointer" onClick={onButtonPrimaryClick}>
          Sign In
        </button>
      </div>

      <div className="text-center">
        <p className='text-secondary-text font-montserrat'>Don’t have an account? <a href="#" className="text-blue-500 no-underline">Register here</a></p>
      </div>
    </form>
  );
};

export default FrameRegistration;
