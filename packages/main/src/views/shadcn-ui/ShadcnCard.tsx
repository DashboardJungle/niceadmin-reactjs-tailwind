import BasicCard from 'src/components/shadcn-ui/Card/BasicCard';
import FormCard from 'src/components/shadcn-ui/Card/FormCard';
import NotificationCard from 'src/components/shadcn-ui/Card/NotificationCard';
import ChartCard from 'src/components/shadcn-ui/Card/ChartCard';
import Intro from 'src/components/component-page/shared/Intro';

const intro = {
  heading: 'Card',
  desc: 'A Card is a UI component that groups related information and actions within a bordered container.',
};

const ShadcnCard = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        <div className="col-span-12">
          <BasicCard />
        </div>
        <div className="col-span-12">
          <FormCard />
        </div>
        <div className="col-span-12">
          <NotificationCard />
        </div>
        <div className="col-span-12">
          <ChartCard />
        </div>
      </div>
    </>
  );
};

export default ShadcnCard;
