

import { Button } from "flowbite-react";
import CardBox from "src/components/shared/CardBox";

import AuthForgotPassword from "../authforms/AuthForgotPassword";
import { Link } from "react-router";
import DashboardFooter from "src/components/dashboards/analytics/DashboardFooter";
import FullLogo from "src/layouts/full/shared/logo/FullLogo";
import { BackgroundLines } from "src/components/aceternity-ui/background-lines";



const ForgotPassword = () => {
  return (
    <>
      <div className='relative min-h-screen'>
        <BackgroundLines>
          <div className='flex justify-center items-center px-4 min-h-screen'>
            <CardBox className='md:w-[450px] w-full border-none'>
              <div className='mx-auto mb-6'>
                <FullLogo />
              </div>
              <p className='text-sm text-center my-4 text-black/60 dark:text-white/60'>
                Please enter the email address associated with your account and
                We will email you a link to reset your password.
              </p>
              <AuthForgotPassword />
              <Button
                color={'lightsecondary'}
                as={Link}
                to='/auth/auth2/login'
                className='rounded-md w-full mt-3'>
                Back to Login
              </Button>
            </CardBox>
          </div>
          {/* footer */}
          <div className='max-w-7xl mx-auto px-5 pb-5 -mt-16'>
            <DashboardFooter />
          </div>
        </BackgroundLines>
      </div>
    </>
  );
};

export default ForgotPassword;
