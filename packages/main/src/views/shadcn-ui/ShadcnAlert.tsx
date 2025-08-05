

import BasicAlert from 'src/components/shadcn-ui/Alert/BasicAlert';
import LightAlert from 'src/components/shadcn-ui/Alert/LightAlert';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';

const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '/',
    text: "Alert",
  },
];
const page = () => {
  return (
    <>
      <BreadcrumbComp title="Alerts" links={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Basic */}
        <div className="col-span-12">
          <BasicAlert />
        </div>
        <div className="col-span-12">
          <LightAlert />
        </div>
      </div>
    </>
  )
}

export default page