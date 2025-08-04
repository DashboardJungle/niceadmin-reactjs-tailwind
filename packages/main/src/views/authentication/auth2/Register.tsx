import { Link } from "react-router";
import CardBox from "src/components/shared/CardBox";

import AuthRegister from "../authforms/AuthRegister";
import SocialButtons from "../authforms/SocialButtons";
import { BackgroundLines } from "src/components/aceternity-ui/background-lines";
import FullLogo from "src/layouts/full/shared/logo/FullLogo";
import DashboardFooter from "src/components/dashboards/analytics/DashboardFooter";


const Register = () => {
  return (
    <>
      <div className='relative min-h-screen'>
        <BackgroundLines>
          <div className='flex justify-center items-center px-4 min-h-screen'>
            <CardBox className='md:w-[450px] w-full border-none'>
              <div className='mx-auto mb-6'>
                <FullLogo />
              </div>
              <SocialButtons title='or sign up with' />
              <AuthRegister />
              <div className='flex gap-2 text-base text-ld font-medium mt-6 items-center justify-start'>
                <p className='text-base font-normal'>
                  Already have an Account?
                </p>
                <Link
                  to={'/auth/auth2/login'}
                  className='text-primary text-sm font-medium'>
                  Sign in
                </Link>
              </div>
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

export default Register;
