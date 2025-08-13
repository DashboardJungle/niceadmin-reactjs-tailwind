
import React from "react";
import Google from "/src/assets/images/svgs/google-icon.svg";
import Github from "/src/assets/images/svgs/github-icon.svg";
import GithubWhite from "/src/assets/images/svgs/github-icon-white.svg";

import { useContext } from "react";
import { AuthContext } from 'src/guards/auth/AuthContext';

interface MyAppProps {
  title?: string;
}

const SocialButtons: React.FC<MyAppProps> = ({ title }) => {

  const { loginWithProvider }: any = useContext(AuthContext);

  const handleGoogle = async () => {
    try {
      await loginWithProvider("google");
    } catch (error) {
      console.error("Google login failed", error);
    }
  };

  const handleGithub = async () => {
    try {
      await loginWithProvider("github");
    } catch (error) {
      console.error("GitHub login failed", error);
    }
  };


  return (
    <>
      <div className='flex justify-between gap-8 my-6 '>
        <div
          onClick={handleGoogle}
          className='px-4 py-2.5 border border-ld flex gap-2 items-enter w-full rounded-md text-center justify-center text-ld text-primary-ld hover:bg-lightprimary dark:hover:bg-darkprimary cursor-pointer'>
          <img src={Google} alt="google" height={18} width={18} /> Google
        </div>
        <div
          onClick={handleGithub}
          className='px-4 py-2.5 border border-ld flex gap-2 items-enter w-full rounded-md text-center justify-center text-ld text-primary-ld hover:bg-lightprimary dark:hover:bg-darkprimary cursor-pointer'>
          <img
            src={Github}
            alt='github'
            height={20}
            width={20}
            className='dark:hidden block'
          />
          <img
            src={GithubWhite}
            alt='github'
            height={20}
            width={20}
            className='dark:block hidden'
          />
          GitHub
        </div>
      </div>
      {/* Divider */}
      <div className='flex items-center w-full'>
        <div className='flex-grow border-t border-ld'></div>
        <span className='mx-4 text-sm font-normal text-black/60 dark:text-white/60'>
          {title}
        </span>
        <div className='flex-grow border-t border-ld'></div>
      </div>
    </>
  );
};

export default SocialButtons;
