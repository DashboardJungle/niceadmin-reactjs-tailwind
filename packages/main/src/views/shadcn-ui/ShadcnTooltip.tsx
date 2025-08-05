
import BasicTooltip from 'src/components/shadcn-ui/Tooltip/BasicTooltip';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';


const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '/',
    text: "Tooltip",
  },
];
const page = () => {
  return (
    <>
      <BreadcrumbComp title="Tooltip" links={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Basic */}
        <div className="col-span-12">
          <BasicTooltip />
        </div>

      </div>
    </>
  )
}

export default page