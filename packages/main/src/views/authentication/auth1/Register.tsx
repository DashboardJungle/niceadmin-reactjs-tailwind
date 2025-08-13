

import { Link } from "react-router";
import AuthRegister from "../authforms/AuthRegister";
import SocialButtons from "../authforms/SocialButtons";
import Footer from "src/layouts/full/shared/footer/Footer";
import FullLogo from "src/layouts/full/shared/logo/FullLogo";
import RightSideCover from "./RightSideCover";

const Register = () => {
  return (
    <>
      <div>
        <div className='container mx-auto py-5 max-w-5xl min-h-[calc(100vh-120px)]'>
          <div className='grid lg:grid-cols-2 grid-cols-1 bg-white dark:bg-dark rounded-md'>
            <div className='sm:p-16 xs:p-8 p-4'>
              <div className='mb-14 flex justify-start'>
                <FullLogo />
              </div>
              <div className='flex flex-col gap-2'>
                <h6 className='text-2xl font-semibold'>Welcome to NiceAdmin</h6>
                <p className='text-base font-normal text-black/60 dark:text-white/60'>
                  Your admin dashboard
                </p>
              </div>
              <SocialButtons title='or sign up with' />
              <AuthRegister />
              <div className='flex gap-2 text-base text-ld font-medium mt-6 items-center'>
                <p>Already have an Account?</p>
                <Link
                  to={'/auth/auth1/login'}
                  className='text-primary text-sm font-medium'>
                  Sign In
                </Link>
              </div>
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

export default Register;
