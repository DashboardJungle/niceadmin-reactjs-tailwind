import Intro from 'src/components/component-page/shared/Intro';
import BasicDrawer from 'src/components/shadcn-ui/Drawer/BasicDrawer';

const intro = {
  heading: 'Drawer',
  desc: 'A Drawer is a UI component that slides in from the screen edge to show navigation or additional content.',
};

const page = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        {/* Basic */}
        <div className="col-span-12">
          <BasicDrawer />
        </div>
      </div>
    </>
  );
};

export default page;
