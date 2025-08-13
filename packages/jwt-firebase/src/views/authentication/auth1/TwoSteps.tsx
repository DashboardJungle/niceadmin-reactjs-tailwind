

import { Link } from "react-router";

import AuthTwoSteps from "../authforms/AuthTwoSteps";
import Footer from "src/layouts/full/shared/footer/Footer";
import FullLogo from "src/layouts/full/shared/logo/FullLogo";
import RightSideCover from "./RightSideCover";


const twoSteps = () => {
  return (
    <>
      <div>
        <div className='container mx-auto py-5 max-w-5xl min-h-[calc(100vh-120px)]'>
          <div className='grid lg:grid-cols-2 grid-cols-1 bg-white dark:bg-dark rounded-md items-center'>
            <div className='sm:p-16 xs:p-8 p-4'>
              <div className='mb-14 flex items-center justify-start'>
                <FullLogo />
              </div>
              <div>
                <h6 className='text-2xl font-bold my-3'>
                  Two Steps Verification
                </h6>
                <p className='text-sm font-medium text-black/60 dark:text-white/60'>
                  We sent a verification code to your mobile. Enter the code
                  from the mobile in the field below.
                </p>
                <p className='text-sm font-bold my-4'>******1234</p>
              </div>
              <AuthTwoSteps />
              <div className='flex items-center gap-2 mt-6'>
                <p className='text-black/60 dark:text-white/60 text-base font-normal'>
                  Didn't get the code?
                </p>
                <Link to={'/'} className='text-primary text-sm font-medium'>
                  Resend
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

export default twoSteps;
