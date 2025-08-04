import { Link } from "react-router";
import CardBox from "src/components/shared/CardBox";

import AuthLogin from "../authforms/AuthLogin";
import SocialButtons from "../authforms/SocialButtons";
import { BackgroundLines } from "src/components/aceternity-ui/background-lines";
import FullLogo from "src/layouts/full/shared/logo/FullLogo";
import DashboardFooter from "src/components/dashboards/analytics/DashboardFooter";

const Login = () => {
  return (
    <>
      <div className='relative min-h-screen'>
        <BackgroundLines>
          <div className='flex justify-center items-center px-4 min-h-screen'>
            <CardBox className='md:w-[450px] w-full border-none'>
              <div className='mx-auto mb-6'>
                <FullLogo />
              </div>
              <SocialButtons title='or sign in with' />
              <AuthLogin />
              <div className='flex gap-2 text-base text-ld font-medium mt-6 items-center justify-center'>
                <p className='text-base font-normal'>New to NiceAdmin?</p>
                <Link
                  to={'/auth/auth2/register'}
                  className='text-primary text-sm font-medium'>
                  Create an account
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

export default Login;
