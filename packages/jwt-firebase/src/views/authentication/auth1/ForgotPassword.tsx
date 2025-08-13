

import { Button } from "flowbite-react";
import AuthForgotPassword from "../authforms/AuthForgotPassword";
import { Link } from "react-router";
import FullLogo from "src/layouts/full/shared/logo/FullLogo";
import Footer from "src/layouts/full/shared/footer/Footer";
import RightSideCover from "./RightSideCover";



const ForgotPassword = () => {
  return (
    <>
      <div>
        <div className='container mx-auto py-5 max-w-5xl min-h-[calc(100vh-120px)]'>
          <div className='grid lg:grid-cols-2 grid-cols-1 bg-white dark:bg-dark rounded-md items-center'>
            <div className='sm:p-16 xs:p-8 p-4'>
              <div className='mb-14 flex items-center justify-start'>
                <FullLogo />
              </div>
              <div className='flex flex-col gap-2'>
                <h6 className='text-2xl font-bold my-3'>
                  Forgot your Password?
                </h6>
                <p className='text-sm font-normal text-black/60 dark:text-white/60'>
                  Please enter the email address associated with your account
                  and We will email you a link to reset your password.
                </p>
              </div>
              <AuthForgotPassword />
              <Button
                color={'lightsecondary'}
                as={Link}
                to='/auth/auth1/login'
                className='w-full mt-4 rounded-md'>
                Back to Login
              </Button>
            </div>
            {/* right side cover image */}
            <div className='lg:block hidden'>
              <RightSideCover />
            </div>
          </div>
        </div>
        {/* footer */}
        <div className='max-w-7xl mx-auto p-5 w-full'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
