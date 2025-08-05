import BasicDrawer from 'src/components/shadcn-ui/Drawer/BasicDrawer';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';

const BCrumb = [
  {
    href: '/',
    text: 'Home',
  },
  {
    href: '/',
    text: 'Drawer',
  },
];
const page = () => {
  return (
    <>
      <BreadcrumbComp title="Drawer" links={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Basic */}
        <div className="col-span-12">
          {/* <BasicDropdown /> */}
          <BasicDrawer />
        </div>
      </div>
    </>
  );
};

export default page;
