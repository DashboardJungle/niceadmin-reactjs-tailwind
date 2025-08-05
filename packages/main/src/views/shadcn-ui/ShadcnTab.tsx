
import BasicTab from 'src/components/shadcn-ui/Tab/BasicTab';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';

const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '/',
    text: "Tab",
  },
];
const page = () => {
  return (
    <>
      <BreadcrumbComp title="Tab" links={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Basic */}
        <div className="col-span-12">
          <BasicTab />
        </div>

      </div>
    </>
  )
}

export default page