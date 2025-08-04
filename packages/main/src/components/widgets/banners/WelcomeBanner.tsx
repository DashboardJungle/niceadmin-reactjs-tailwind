
import { Button } from "flowbite-react";
// import chasing_good_grades_bg from 'src/assets/images/analytic/usergraph.webp'
import CardBox from "src/components/shared/CardBox";
import chasing_good_grades_bg from "src/assets/images/backgrounds/chasing-good-grades.png"

const WelcomeBanner = () => {
  return (
    <>
      <CardBox className="bg-primary dark:bg-primary relative p-30 px-6" >
        <div className="grid grid-cols-12">
          <div className="lg:col-span-7 col-span-12">
            <h2 className="text-2xl text-white mb-1">Good Morning, Cameron ✨</h2>
            <p className="text-sm text-lightgray">Stay updated with your store’s performance today. Get a quick snapshot of key statistics.</p>
            <Button color="secondary" className="text-dark mt-6" >View Full Report</Button>
          </div>
        </div>
        <img src={chasing_good_grades_bg} alt="chasing_grades_bg" className="absolute bottom-0 end-0 lg:block hidden" />
      </CardBox>
    </>
  );
};

export default WelcomeBanner;
