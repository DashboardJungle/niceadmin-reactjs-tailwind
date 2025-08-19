import Intro from 'src/components/component-page/shared/Intro';
import BasicDatepicker from 'src/components/shadcn-ui/Datepicker/BasicDatepicker';
import DateRangePicker from 'src/components/shadcn-ui/Datepicker/DateRangePicker';

const intro = {
  heading: 'Datepicker',
  desc: 'A Datepicker is a UI component that lets users select dates from a calendar interface.',
};

const page = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        <div className="col-span-12">
          <BasicDatepicker />
        </div>
        <div className="col-span-12">
          <DateRangePicker />
        </div>
      </div>
    </>
  );
};

export default page;
