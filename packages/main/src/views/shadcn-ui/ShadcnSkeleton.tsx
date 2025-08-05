
import BasicSkeleton from 'src/components/shadcn-ui/Skeleton/BasicSkeleton';
import CardSkeleton from 'src/components/shadcn-ui/Skeleton/CardSkeleton';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';


const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '/',
    text: "Skeleton",
  },
];
const page = () => {
  return (
    <>
      <BreadcrumbComp title="Skeleton" links={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Basic */}
        <div className="col-span-12">
          <BasicSkeleton />
        </div>
        <div className="col-span-12">
          <CardSkeleton />
        </div>

      </div>
    </>
  )
}

export default page