
import BasicTable from "src/components/shadcn-table/Basic/BasicTable";
import TitleCard from "src/components/shared/TitleBorderCard";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'Table',
  },
]
function page() {
  return (
    <>
      <BreadcrumbComp title='Shadcn Basic Table' links={BCrumb} />
      <TitleCard title='Basic Table'>
        <div className='grid grid-cols-12 gap-7'>
          <div className='col-span-12'>
            <BasicTable />
          </div>
        </div>
      </TitleCard>
    </>
  )
}

export default page
