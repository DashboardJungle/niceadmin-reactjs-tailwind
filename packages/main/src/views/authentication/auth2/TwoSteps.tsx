import { Link } from "react-router";
import CardBox from "src/components/shared/CardBox";
import AuthTwoSteps from "../authforms/AuthTwoSteps";
import FullLogo from "src/layouts/full/shared/logo/FullLogo";
import { BackgroundLines } from "src/components/aceternity-ui/background-lines";
import DashboardFooter from "src/components/dashboards/analytics/DashboardFooter";

const TwoSteps = () => {
  return (
    <>
      <div className='relative min-h-screen'>
        <BackgroundLines>
          <div className='flex justify-center items-center px-4 min-h-screen'>
            <CardBox className='md:w-[450px] w-full border-none'>
              <div className='mx-auto mb-6'>
                <FullLogo />
              </div>
              <p className='text-sm font-medium text-center text-black/60 dark:text-white/60'>
                We sent a verification code to your mobile. Enter the code from
                the mobile in the field below.
              </p>
              <h6 className='text-sm font-bold my-4 text-center'>******1234</h6>
              <AuthTwoSteps />
              <div className='flex gap-2 mt-6 items-center justify-left'>
                <p className='text-base font-normal'>Didn't get the code?</p>
                <Link to={'/'} className='text-primary text-sm font-medium'>
                  Resend
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

export default TwoSteps;
