import FilteringTable from "src/components/react-tables/filtering/page";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'React Tables',
  },
]
function page() {
  return (
    <>
      <BreadcrumbComp title="Filter Table " links={BCrumb} />

      <FilteringTable />
    </>
  );
}

export default page;
